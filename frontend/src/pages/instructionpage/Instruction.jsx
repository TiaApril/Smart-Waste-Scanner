import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import FootNavBar from '../../component/footbar/FootNavBar';
import './instruction.css';

function Instruction() {
  return (
    <div className="instruction-container">
      <Navbar />
      <div className="instruction-page">
        <h1>How to Use the Smart Waste Scanner App</h1>
        <p>
          Welcome to the Smart Waste Scanner App! This app allows you to scan
          waste items using your device's camera and receive information about
          the waste type.
        </p>
        <h2>Instructions:</h2>
        <ol>
          <li>Open the app and go to the scanning page.</li>
          <li>Position the waste item in front of your camera.</li>
          <li>Click the "Scan" button to capture an image of the waste item.</li>
          <li>
            Wait for the app to analyze the image and provide information about
            the waste type.
          </li>
          <li>Review the results and continue scanning more items as needed.</li>
        </ol>
        <p>
          Please note that the accuracy of waste classification may vary based
          on the image quality and the machine learning model used.
        </p>
      </div>
      <FootNavBar />
    </div>
  );
}

export default Instruction;
