import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Components/button';
import '../Components/loginButton.css'

function Login() {

   return (
    <>
      <div className='loginButton'>Login
      <div className='loginButtonBox'>
        <div>
          <input placeholder='UserName...'/>
        </div>
          <div><input placeholder='Password...' /></div>
          <p>Forget Password?</p>
          <Button/>
         
        </div>
        </div>
     
    </>
  )
}

export default Login