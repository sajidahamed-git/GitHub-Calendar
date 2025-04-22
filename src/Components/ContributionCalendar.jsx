import React, { useState } from 'react'; // Make sure useState is imported

import YearSelector from './YearSelector'; // Import the new component
import DayLabels from './DayLabels';     // Import the new component
import MonthCells from './MonthCells'; // Import the new component
import UserSelector from './UserSelector';
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// const levelColors = [
//   "bg-gray-800",
//   "bg-green-700",
//   "bg-green-600",
//   "bg-green-500",
//   "bg-green-400",
// ];

export default function CalendarUI({fileData}) {

  const [selectedYear, setSelectedYear] = useState(2025); // Initialize the selected year
  const [selectedUser, setSelectedUser] = useState('You')

  const handleYearChange = (newYear) => {
    setSelectedYear(newYear);
    console.log('Selected year:', newYear);
  };

  const handleUserChange = (newUser)=> {
    setSelectedUser(newUser)
    console.log('selected User:', newUser)
  }
  return (
    <div className=" flex flex-col bg-gray-950 text-gray-300 p-6 w-full rounded-lg shadow-xl  border border-gray-700">
      <div className='flex justify-between'>
        <UserSelector selectedUser={selectedUser} onUserChange={handleUserChange}></UserSelector>
        <YearSelector selectedYear={selectedYear} onYearChange={handleYearChange}/>
      </div>
        <div className="flex justify-around">
          <DayLabels/>
        {monthNames.map((month, monthIndex) => (
          <MonthCells
            key={monthIndex}
            month={month}
            monthIndex={monthIndex}
            selectedYear={selectedYear}
            // fileData = {fileData}
            fileData={selectedUser === 'You' ? fileData : null} // Pass fileData only if user is "You"
            selectedUser={selectedUser}

          />
        ))}
        </div>
        
      </div>
  );
}
