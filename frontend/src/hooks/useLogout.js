import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

const useLogout = () => {
    const { setAuthUser } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            } else {
                localStorage.removeItem('authUser');
                setAuthUser(null);
                toast.success("Logout successful!");
            }
        } catch (error) {
            toast.error(error.message);
            console.error('Error during logout:', error);
        } finally {
            setLoading(false);
        }
    }
    return { logout, loading };
}
export default useLogout