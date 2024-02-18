import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../store/useConversation";
// import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {

    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const ME = message.senderId === authUser._id;
    const profilePic = ME ? authUser.profilePic : selectedConversation?.profilePic;

    return (

        <div className={`chat ${ME ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white pb-2 mb-[2px] ${message.shouldShake ? 'shake' : ''} ${ME ? 'bg-blue-500' : ''}`} >{message.message}</div>
            <div className="chat-footer opacity-80 text-xs flex gap-1 items-center">
                {/* { extractTime(message.createdAt) } */}
                {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
        </div>
    )
}

export default Message

/*

// Starter code for this file:

const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-bubble text-white bg-blue-500">I hate you!</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                12:46
            </div>
        </div>
    )
}

export default Message

*/