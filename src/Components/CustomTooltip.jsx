// CustomTooltip.js
import React, { useState } from "react";

const CustomTooltip = ({ day, fileData, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseOut = () => {
    setIsVisible(false);
  };

  // Check if the fileData date matches the current day
  const isFileUploadedOnDay =
    fileData && fileData.date.startsWith(day); // Compare the date prefix

  return (
    <div
      className="relative inline-block"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children} {/* This will render the element that triggers the tooltip */}
      {isVisible && (
        <div
          className="absolute z-10 bg-white text-black rounded-md shadow-lg p-4 border border-gray-800"
          style={{
            left: "50%", // Adjust as needed
            top: "120%", // Adjust as needed
            transform: "translate(-50%, 0)",
            width: "200px", // Adjust the width as needed
          }}
        >
          <div className="text-lg font-semibold mb-2">{day}</div>
          {isFileUploadedOnDay ? (
            <div>
              <p>File Name: {fileData.name}</p>
              <p>File Type: {fileData.type}</p>
              <p>File Size: {formatFileSize(fileData.size)}</p>
            </div>
          ) : (
            <p>No data for this day</p>
          )}
        </div>
      )}
    </div>
  );
};

// Helper function to format file size
function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export default CustomTooltip;