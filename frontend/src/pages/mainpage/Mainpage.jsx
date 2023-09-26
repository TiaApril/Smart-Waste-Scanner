import React, { useState } from 'react';
import CameraScanner from '../../component/camerascanner/CameraScanner';
import './mainpage.css';
import Navbar from '../../component/navbar/Navbar';
import FootNavBar from '../../component/footbar/FootNavBar';
import UploadPicture from '../../component/uploadpicture/UploadPicture';

function Mainpage() {
  const [scannedImage, setScannedImage] = useState(null);

  const handleScan = (imageDataUrl) => {
    setScannedImage(imageDataUrl);
  };

  return (
    <div className='mainpage-container'>
      <Navbar />
      <div className='mainpage-content'>
        <CameraScanner onScan={handleScan} />
        <UploadPicture />
      </div>
      <FootNavBar />
    </div>
  );
}

export default Mainpage;

