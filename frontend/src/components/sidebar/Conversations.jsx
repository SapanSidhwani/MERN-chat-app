import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import getRandomEmoji from 'get-random-emoji';

const Conversations = () => {

    const { loading, conversations } = useGetConversations();

    return (
        <div className="flex flex-col pb-2 overflow-auto" >
            {loading && (<span className="loading loading-spinner"></span>)}
            {conversations.map((conversation, idx) => (
                <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()}
                    lastIndex={idx === conversations.length - 1} />
            ))}
        </div>
    )
}

export default Conversations

/*

// Starter code for this file:

import Conversation from "./Conversation"

const Conversations = () => {
    return (
        <div className="flex flex-col py-2 overflow-auto">
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
    )
}

export default Conversations

*/