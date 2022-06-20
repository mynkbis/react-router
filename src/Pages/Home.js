
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      Welcome Guest! in Home Page.
     <div>
        <Link to='/Login'>Login</Link>
        <div>
        <Link to='/About'>About Us</Link>
</div>
      </div>
      <div>
        <Link to='Features'>Features</Link>
        </div>
      <Link to='Widget'>Widget</Link>
      <Outlet/>
    </div>
  )
}

export default Home