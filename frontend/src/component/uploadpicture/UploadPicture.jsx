import React, { useState } from 'react'
import './uploadpicture.css'

function UploadPicture() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (e) => {
      const files = Array.from(e.target.files);
      setSelectedFiles([...selectedFiles, ...files]);
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      setSelectedFiles([...selectedFiles, ...files]);
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
    </div>
  )
}

export default UploadPicture