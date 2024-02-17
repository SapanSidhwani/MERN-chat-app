import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message"

const Messages = () => {

  const lastMessageRef = useRef(null);
  const { loading, messages } = useGetMessages();

  useEffect(() => {
    // Scroll to bottom
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {
        !loading && messages.length > 0 && messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))
      }
      {
        loading && ([...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />))
      }
      {
        !loading && messages.length === 0 && (
          <p className="text-center text-slate-500">Send a message to start the conversation</p>
        )
      }
    </div>
  )
}

export default Messages


/*

// Starter code for this file:
import Message from "./Message"

const Messages = () => {
  return (
    <div className="px-4 flex-1 overflow-auto">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages
*/