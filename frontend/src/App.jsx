import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {

  const { authUser } = useAuthContext();

  return (
    <div className='flex justify-center p-4 h-screen items-center'>
      <Toaster position='top-center' reverseOrder={false} />
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
    </div>
  )
}

export default App


/*

// Starter code for this file:

import './App.css'
import Home from './pages/home/Home'

function App() {

  return (
    <div className='flex justify-center p-4 h-screen items-center'>
      <Home />
    </div>
  )
}

export default App

*/