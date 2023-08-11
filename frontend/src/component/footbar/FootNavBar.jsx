import React from 'react'
import './footernavbar.css'
import { Link, useLocation } from 'react-router-dom'

function FootNavBar() {
  const location = useLocation();

  return (
    <div className='footnavbar'>
      <Link to='/instruction'><a className={`${location.pathname === '/instruction' ? 'active' : ''}`}>Instruction</a></Link>
      <Link to='/'><a className={`${location.pathname === '/' ? 'active' : ''}`}>Scanner</a></Link>
      <Link to='/wastecategory'><a className={`${location.pathname === '/wastecategory' ? 'active' : ''}`}>Waste Category</a></Link>
    </div>
  )
}

export default FootNavBar