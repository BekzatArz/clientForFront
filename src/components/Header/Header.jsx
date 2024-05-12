import React from 'react'

import SignIn from '../SignIn/SignIn'
import Logo from '../Logo/Logo'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <Logo />
        <SignIn />
    </div>
  )
}

export default Header