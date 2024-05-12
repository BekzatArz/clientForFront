import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../features/user/userSlice'


import './SignIn.css'

const SignIn = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  return (
    <div className='sign-in'>
        {!isAuth && <NavLink to="/registration">Registration</NavLink>}
        {!isAuth && <NavLink to="/login">Login</NavLink>}
        {isAuth && <button onClick={() => dispatch(logoutUser())}>Log out</button>}
    </div>
  )
}

export default SignIn