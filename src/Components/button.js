import React from 'react'
import './loginButton.css'
import { useNavigate } from 'react-router-dom';
export default function Button() {
     const navigate = useNavigate();
    const routeChange = () =>{ 
      let path = '/welcome'; 
           navigate(path);
    }
  return (
      <div className='loginButtonBox'>
          <button onClick={()=>routeChange()} >Login</button>
    </div>
  )
}
