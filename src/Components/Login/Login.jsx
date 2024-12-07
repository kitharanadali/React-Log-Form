import React from 'react'
import './Login.css'

import user_icon from '../Assets/Username.jpg'
import password_icon from '../Assets/Password.jpg'

export const Login = () => {
  return (
    <div className='container'>
    <div className='header'> 
    <div className='text'>Login</div>
    <div className='underline'></div>
    </div>
    <div className='inputs'>
    <div className='input'>
      <img src={user_icon} alt="" />
      <input type="text" />
    </div>
      <div className='input'>
      <img src={password_icon} alt="" />
      <input type="password" />
    </div>
    </div>
    <div className="submit-container">
      <div className="submit">Login</div>
    </div>
    </div>
  )
}

export default Login
