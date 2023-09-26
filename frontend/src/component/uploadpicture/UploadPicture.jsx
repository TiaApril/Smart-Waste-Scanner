import React, { useState } from 'react';
import './uploadpicture.css';

function UploadPicture() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('images', file);
    });

    try {
      const response = await fetch('http://9fc4-34-90-228-36.ngrok.io/predict', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        console.log(result)
        setUploadMessage(result.result);
      } else {
        setUploadMessage('Upload failed');
      }
      console.log(result);
    } catch (error) {
      console.error('Error uploading:', error);
      setUploadMessage('Error uploading');
    }
  };

  return (
    <div className="file-upload-container">
      <h2>OR</h2>
      <div
        className="file-upload-dropzone"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <p>Drag &amp; drop files here or click to upload</p>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
        />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div className="file-preview">
        {selectedFiles.map((file, index) => (
          <img
            key={index}
            src={URL.createObjectURL(file)}
            alt={`Preview ${index}`}
          />
        ))}
      </div>
      <p>{uploadMessage}</p>
    </div>
  );
}

export default UploadPicture;
