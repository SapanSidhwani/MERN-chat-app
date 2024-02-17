import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../store/useConversation";

const useGetMessages = () => {

    const { messages, setMessages, selectedConversation } = useConversation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getMessages = async () => {

            setLoading(true);
            try {
                const response = await fetch(`/api/messages/${selectedConversation?._id}`);
                const data = await response.json();
                if (data.error) {
                    throw new Error(data.error);
                } else {
                    setMessages(data);
                }
            } catch (error) {
                toast.error('Error while fetching messages');
                console.error('Error fetching messages:', error);
            } finally {
                setLoading(false);
            }
        }
        if (selectedConversation?._id) {
            getMessages();
        }
    }, [selectedConversation?._id, setMessages]);

    return { loading, messages }
}

export default useGetMessages