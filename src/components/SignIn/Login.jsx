import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
 
import './SignIn.css'
import Input from './Input'
import { login } from '../../actions/user'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
  return (
    <div className='login'>
        <form action="#">
            <label htmlFor="email"> Email</label>
            <Input setValue={setEmail} value={email} type='email' placeholder='Введите Email' id="email"/>
            <label htmlFor="password"> Password</label>
            <Input setValue={setPass} value={password} type="password" placeholder='Введите пароль' id="password"/>
            <button onClick={handleSubmit}>Log In</button>
        </form>
    </div>
  )
}

export default Login