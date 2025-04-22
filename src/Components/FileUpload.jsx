import React from 'react';

function FileUpload({ onFileMetadata }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileData = {
        name: file.name,
        type: file.type,
        size: file.size,
        date: new Date().toISOString(), // Add the upload date
      };
      onFileMetadata(fileData); // Pass file data to the parent
    } else {
      onFileMetadata(null); // Clear metadata in parent if no file is selected
    }
  };

  return (
    <div>
      <label
        htmlFor="file-upload"
        className="py-2 px-4 bg-emerald-500 text-white font-semibold rounded-md cursor-pointer hover:bg-emerald-600"
      >
        Upload File
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default FileUpload;