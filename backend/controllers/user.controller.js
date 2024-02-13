import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        // This will return all users except logged in user from database without password
        const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select('-password');
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log('Error in getUsersForSidebar Controller', error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
