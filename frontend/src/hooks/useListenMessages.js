import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../store/useConversation";

import notificationSound from "../assets/sounds/notificationSound.mp3";

const useListenMessages = () => {
    const { messages, setMessages } = useConversation();
    const { socket } = useSocketContext();
    useEffect(() => {

        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        })

        return () => {
            socket?.off("newMessage");
            // setMessages([]);
        }
    }, [socket, messages, setMessages])
}

export default useListenMessages
