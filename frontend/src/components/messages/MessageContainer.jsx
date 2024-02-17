import { useEffect } from 'react'
import useConversation from '../../store/useConversation'
import MessageInput from './MessageInput'
import Messages from './Messages'
import { TiMessages } from 'react-icons/ti'
import { useAuthContext } from '../../context/AuthContext'

const MessageContainer = () => {

  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col md:min-w-[450px]">
      {!selectedConversation ? (<NoChatSelected />)
        : (
          <>
            {/* Header */}
            <div className="bg-slate-500 py-2 mb-2 px-4">
              <span className="label-text">To: </span><span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👏 {authUser.fullName} </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl  md:text-6xl text-center' />
      </div>
    </div>
  )
}


/*

// Starter code for this file:

import MessageInput from './MessageInput'
import Messages from './Messages'
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="flex flex-col md:min-w-[450px]">
      {noChatSelected ? (
        <NoChatSelected />) : (
        <>
          <div className="bg-slate-500 py-2 mb-2 px-4">
            <span className="label-text">To: </span><span className="text-gray-900 font-bold">John Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div >
  )
}

export default MessageContainer


const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👏 John Doe</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl  md:text-6xl text-center' />
      </div>
    </div>
  )
}


*/