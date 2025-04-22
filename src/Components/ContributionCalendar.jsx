import React, { useState } from 'react'; // Make sure useState is imported
// import {
//   eachDayOfInterval,
//   endOfMonth,
//   startOfMonth,
//   format,
//   getDay,
// } from "date-fns";
import YearSelector from './YearSelector'; // Import the new component
import DayLabels from './DayLabels';     // Import the new component
import MonthCells from './MonthCells'; // Import the new component
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

export default function CalendarUI() {

  const [selectedYear, setSelectedYear] = useState(2025); // Initialize the selected year

  const handleYearChange = (newYear) => {
    setSelectedYear(newYear);
    console.log('Selected year:', newYear);
  };
  return (
    <div className=" flex flex-col bg-gray-950 text-gray-300 p-6 w-full rounded-lg shadow-xl  border border-gray-700">
    
      <YearSelector selectedYear={selectedYear} onYearChange={handleYearChange}/>
      
        <div className="flex justify-around">
          <DayLabels/>

        {monthNames.map((month, monthIndex) => (
          <MonthCells
            key={monthIndex}
            month={month}
            monthIndex={monthIndex}
            selectedYear={selectedYear}
          />
        ))}
        </div>
      </div>
  );
}
