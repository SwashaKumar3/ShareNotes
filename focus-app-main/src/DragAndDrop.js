import React, { useRef, useState } from 'react';
import './App.css';

function DragAndDrop() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit the file to the server
    console.log(selectedFile);
  };

  return (
    <div
      className="file-uploader"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="file-uploader-title">Upload a File</h2>
        <p className="file-uploader-instructions">
          Drag and drop a file here or click to select a file.
        </p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        {selectedFile && (
          <p className="file-uploader-selected-file">
            Selected file: <strong>{selectedFile.name}</strong>
          </p>
        )}
        <button
          className="file-uploader-submit-button"
          type="submit"
          disabled={!selectedFile}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DragAndDrop;
