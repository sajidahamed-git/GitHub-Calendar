import React, { useState, useCallback } from 'react';

function FileUpload({ onFileMetadata }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileMetadata, setFileMetadata] = useState(null);

  const handleFileChange = useCallback((event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      setFileMetadata({
        name: file.name,
        type: file.type,
        size: file.size,
      });

      // Optionally, pass the metadata to a parent component
      if (onFileMetadata) {
        onFileMetadata({
          name: file.name,
          type: file.type,
          size: file.size,
        });
      }
    } else {
      setSelectedFile(null);
      setFileMetadata(null);
      if (onFileMetadata) {
        onFileMetadata(null); // Clear metadata in parent if file is deselected
      }
    }
  }, [onFileMetadata]);

  return (
<div>
      <div className="relative overflow-hidden rounded-md shadow-sm">
        <label
          htmlFor="file-upload"
          className="py-2 px-4 bg-emerald-500 text-white font-semibold rounded-md cursor-pointer hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Upload File 
        </label>
        <input
          id="file-upload"
          type="file"
          className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </div>
      {fileMetadata && (
        <div className="mt-2">
          <p>File Name: {fileMetadata.name}</p>
          <p>File Type: {fileMetadata.type}</p>
          <p>File Size: {formatFileSize(fileMetadata.size)}</p>
        </div>
      )}
    </div>
  );
}

// Helper function to format file size (optional)
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export default FileUpload;