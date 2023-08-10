import React from 'react'
import logo from '../../pictures/logo.png'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={logo}/>
            <a>Smart Waste Scanner</a>
        </div>
        {/* <ul>
            <li>About Us</li>
        </ul> */}
    </div>
  )
}

export default Navbar