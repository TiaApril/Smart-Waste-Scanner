import React, { useState } from 'react'
import CameraScanner from '../../component/camerascanner/CameraScanner'
import './mainpage.css'
import Navbar from '../../component/navbar/Navbar';
import FootNavBar from '../../component/footbar/FootNavBar';

function Mainpage() {
    const [scannedImage, setScannedImage] = useState(null);

  const handleScan = (imageDataUrl) => {
    setScannedImage(imageDataUrl);
  }
  return (
    <div>
        <Navbar/>
        <CameraScanner onScan={handleScan}/>
        <FootNavBar/>
    </div>
  )
}

export default Mainpage