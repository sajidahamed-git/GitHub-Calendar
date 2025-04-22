import React, { useState } from 'react';
import ContributionCalendar from './components/ContributionCalendar';
import FileUpload from './components/FileUpload';
import './index.css'; // Ensure your Tailwind CSS is imported

function App() {
  const [fileData, setFileData] = useState(null); // State to store file metadata

  const handleFileUpload = (file) => {
    setFileData(file); // Update state with the uploaded file's metadata
    console.log('File uploaded:', file);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col gap-8 items-center justify-center p-4">
      <ContributionCalendar fileData={fileData} />
      <FileUpload onFileMetadata={handleFileUpload} /> {/* Pass the function here */}
    </div>
  );
}

export default App;