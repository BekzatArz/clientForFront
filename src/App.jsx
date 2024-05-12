import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header/Header'

import Regis from './components/SignIn/Regis'
import Login from './components/SignIn/Login'
import { useSelector, useDispatch } from 'react-redux'

import "./App.css"
import { auth } from './actions/user'
import Disk from './components/Disk/Disk'

const App = () => {
  const isAuth = useSelector(state => state.user.isAuth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])
  return (
    <div className='app'>
      <div className="container">
        <Router>
        <Header />
        <div className="continer-app">
          {!isAuth ?
          <Routes>
            <Route path='/registration' element={<Regis />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='*' element={<Navigate to='/registration' />} />
          </Routes>
          :
          <Routes>
            <Route path='/' element={<Disk />}/>
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          }
        </div>
        </Router>
      </div>
    </div>
  )
}

export default App