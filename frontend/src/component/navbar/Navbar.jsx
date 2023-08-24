import React from 'react'
import logo from '../../pictures/logo.png'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
          <Link to='/'>
            <img src={logo}/>
            <a>Smart Waste Scanner</a>
          </Link>
            
        </div>
    </div>
  )
}

export default Navbar