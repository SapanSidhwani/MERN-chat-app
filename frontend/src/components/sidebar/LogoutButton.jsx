import { BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {loading ? <span className="loading loading-spinner"></span> : <BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={logout} />}
    </div>
  )
}

export default LogoutButton


/*

// Starter code for this file:

import { BiLogOut } from "react-icons/bi"

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <BiLogOut className="w-6 h-6 text-white cursor-pointer"/>
    </div>
  )
}

export default LogoutButton

*/