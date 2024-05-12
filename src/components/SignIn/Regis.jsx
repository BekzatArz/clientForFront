import React, { useState } from 'react'

import './SignIn.css'
import Input from './Input'
import { registration } from '../../actions/user'

const Regis = () => {
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        registration(email, password)
    }

  return (
    <div className='regis'>
        <form action="#">
            <label htmlFor="email"> Email</label>
            <Input setValue={setEmail} value={email} type='email' placeholder='Введите Email' id="email"/>
            <label htmlFor="password"> Password</label>
            <Input setValue={setPass} value={password} type="password" placeholder='Введите пароль' id="password"/>
            <button onClick={handleSubmit}>Registration</button>
        </form>
    </div>
  )
}

export default Regis