import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/slices/userSlice'

const NavBar = () => {
  const {isAuth} = useSelector((state)=>state.user)
  const dispatch= useDispatch()
  return (
    <>
    <div> 
{ 
  isAuth ?  ( <div>
     <Link to={"/"}>Home</Link>
    <button onClick={()=> dispatch(logout())}>logout</button>
    </div>
  ) :   
  <div>
    <Link to={"/"}>Home</Link>
    <Link to={"/register"}>Register</Link>
    <Link to={"/login"}>Login</Link>
  </div>

} 
    </div>
    </>
  )
}

export default NavBar
