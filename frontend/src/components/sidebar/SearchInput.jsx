import { useState } from "react";
import toast from "react-hot-toast";
import { IoSearch } from "react-icons/io5";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";

const SearchInput = () => {

  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search === '') {
      toast.error('Search cannot be empty');
      return;
    }

    const searchValue = search.replace(/\s/g, '').toLowerCase();

    const searchedPerson = conversations.find((conversation) =>
      conversation.fullName.replace(/\s/g, '').toLowerCase().includes(searchValue)
    );
    if (searchedPerson) {
      setSelectedConversation(searchedPerson);
      setSearch('');
    } else {
      toast.error('Person not found');
    }

  }

  return (
    <form className="flex items-center gap-2" onSubmit={handleSearch}>
      <input type="text" name="" id="" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} className="input input-bordered rounded-full" />
      <button className="btn btn-circle bg-sky-500 text-white" type="submit">
        <IoSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  )
}

export default SearchInput

/*

// Starter code for this file:

import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2">
      <input type="text" name="" id="" placeholder="Search..." className="input input-bordered rounded-full"/>
      <button className="btn btn-circle bg-sky-500 text-white" type="submit"><IoSearch className="w-6 h-6 outline-none" /></button>
    </div>
  )
}

export default SearchInput
*/