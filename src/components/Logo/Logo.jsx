import React from 'react'

import './Logo.css'
import logo from './logo.png'

const Logo = () => {
  return (
    <div className='logo'>
        <img src={logo} width={80} alt="" />
        <h2>CUROFF</h2>
    </div>
  )
}

export default Logo