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