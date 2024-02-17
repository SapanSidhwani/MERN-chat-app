import useConversation from "../../store/useConversation";

const Conversation = ({ conversation, emoji, lastIndex }) => {

  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-600 rounded my-2 me-1 p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-600" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {lastIndex ? <div className="mb-3" /> : <div className="divider my-0 py-0 h-1" />}
    </>
  )
}

export default Conversation


/*

// Starter code for this file:

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://i.pravatar.cc/300" alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl">😂</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  )
}

export default Conversation
*/