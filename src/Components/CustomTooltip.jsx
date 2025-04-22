// CustomTooltip.js
import React, { useState } from 'react';

const CustomTooltip = ({ day, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    console.log('testing')
    setIsVisible(true);
  };

  const handleMouseOut = () => {
    setIsVisible(false);
  };

//   const handleMouseMove = (event) => {
    // Optional: Make the tooltip follow the mouse
    // setPosition({ x: event.clientX, y: event.clientY });
//   };

  return (
    <div className="relative inline-block" // Needed for absolute positioning of tooltip
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
    //   onMouseMove={handleMouseMove}
    >
      {children} {/* This will render the element that triggers the tooltip */}
      {isVisible && (
        <div
          className="absolute z-10 bg-white text-black rounded-md shadow-lg p-4 border border-red-800"
          style={{
            left:'50%', // Adjust as needed
            top:'120%', // Adjust as needed
            transform: 'translate(-100%, -120%)',
            width: '200px', // Adjust the width as needed
          }}
        >
          <div className="text-lg font-semibold mb-2">{day}</div>
          <p className="text-sm text-gray-700">
            More detailed information about this day can go here.
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomTooltip;