import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ userName, password, confirmPassword, fullName, gender }) => {

        const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender });

        if (!success) { return; }
        setLoading(true);

        try {

            let res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName, password, confirmPassword, fullName, gender })
            });


            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            } else {
                localStorage.setItem('authUser', JSON.stringify(data));
                setAuthUser(data);

                // Handle successful signup here
                toast.success("Signup successful!");
            }

        } catch (error) {
            console.error('Error during signup:', error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return { signup, loading };
}

export default useSignup

function handleInputErrors({ userName, password, confirmPassword, fullName, gender }) {
    if (!userName || !password || !confirmPassword || !fullName || !gender) {
        toast.error("All fields are required");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords don't match");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }
    return true;
}