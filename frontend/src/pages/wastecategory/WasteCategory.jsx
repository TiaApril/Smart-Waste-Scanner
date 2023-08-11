import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import FootNavBar from '../../component/footbar/FootNavBar'
import './wastecategory.css'

function WasteCategory() {
  return (
    <div className='wastecategory-page'>
        <Navbar/>
        <div className='wastecategory'>Waste Category</div>
        <FootNavBar/>
    </div>
  )
}

export default WasteCategory