import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";


const MessageInput = () => {

    const { loading, sendMessage } = useSendMessage();
    const [message, setMessage] = useState("");

    const handleMessage = async (e) => {
        e.preventDefault();
        if (message === "") {
            toast.error("Message cannot be empty");
        } else {
            await sendMessage(message);
            setMessage("");
        }
    }

    return (
        <form className="px-4 my-3" onSubmit={handleMessage}>
            <div className="w-full relative">
                
                <input type="text" placeholder="Type something..."
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                    value={message} autoComplete="off"
                    onChange={(e) => setMessage(e.target.value)} />

                <button className="inset-y-0 absolute end-0 flex items-center pe-3" type="submit">
                    {
                        loading ? <span className="loading loading-spinner"></span> : <BsSend />
                    }
                </button>
                
            </div>
        </form>
    )
}

export default MessageInput

/*

// Starter code for this file:

import { BsSend } from "react-icons/bs"

const MessageInput = () => {
    return (
        <form className="px-4 my-3">
            <div className="w-full relative">
                <input type="text" placeholder="Type something..."
                    className="border text-sm rounded-lg block w-full 
                    p-2.5 bg-gray-700 border-gray-600 text-white" />
                <button className="inset-y-0 absolute end-0 flex items-center pe-3" type="submit">
                    <BsSend />
                </button>
            </div>
        </form>
    )
}

export default MessageInput


*/