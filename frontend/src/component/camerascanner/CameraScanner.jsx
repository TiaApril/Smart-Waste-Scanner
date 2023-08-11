import React, { useRef, useEffect } from 'react';
import './camerascanner.css'

const CameraScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const constraints = { video: true };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(error => {
        console.error('Error accessing camera:', error);
      });
  }, []);

  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match video feed
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    // Draw current video frame onto the canvas
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    // Capture image data (URL)
    const imageDataUrl = canvas.toDataURL('image/jpeg');
    onScan(imageDataUrl);
  };

  return (
    <div className='camera-scanner'>
      <video className='camera-preview' ref={videoRef} autoPlay playsInline />
      <button className='capture-button' onClick={captureImage}>Scan</button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default CameraScanner;
