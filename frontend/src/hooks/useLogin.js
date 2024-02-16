import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async ({ userName, password }) => {

        if (!userName || !password) {
            toast.error("All fields are required");
            return;
        }
        
        setLoading(true);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName, password })
            })
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            } else {
                localStorage.setItem('authUser', JSON.stringify(data));
                setAuthUser(data);
                toast.success("Login successful!");
            }
        } catch (error) {
            toast.error(error.message);
            console.error('Error during login:', error);
        } finally {
            setLoading(false);
        }
    }
    return { login, loading };
}

export default useLogin