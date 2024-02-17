import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {

    const { fullName, userName, password, confirmPassword, gender } = req.body;

    const user = await User.findOne({ userName });
    if (user) {
        res.status(400).json({ error: "Username alredy exists" });
        return
    }

    try {
        if (password !== confirmPassword) {
            res.status(400).json({ error: "Passwords don't match" });
        }
        if (password.length < 5) {
            res.status(400).json({ error: "Password must be 6 characters long" });
        }

        // Hash Password
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);

        // https://avatar.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = await User.create({
            fullName,
            userName,
            password: hash,
            gender,
            profilePic: gender === 'Male' ? boyProfilePic : girlProfilePic
        });

        if (newUser) {

            // Gennerate JWT token here
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();

            res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                gender: newUser.gender,
                profilePic: newUser.profilePic
            });
        }
        else {
            res.status(400).json({ error: "Invalid user data" })
        }
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const login = async (req, res) => {

    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    // user? : If user is undefined 
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    if (!user || !isPasswordCorrect) {
        res.status(400).json({ error: "Invalid username or password" });
        return;
    }

    try {

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            gender: user.gender,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}
