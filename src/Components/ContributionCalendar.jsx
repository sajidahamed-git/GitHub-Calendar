import React, { useState } from 'react'; // Make sure useState is imported
import {
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
  format,
  getDay,
} from "date-fns";
import YearSelector from './YearSelector'; // Import the new component
import DayLabels from './DayLabels';     // Import the new component
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
      
      {/* second row  */}
        <div className="flex justify-around">
          <DayLabels/>

          {monthNames.map((month, monthIndex) => {
            const firstDayOfMonth = startOfMonth(
              new Date(selectedYear, monthIndex)
            );
            // console.log(firstDayOfMonth)
            const lastDayOfMonth = endOfMonth(
              new Date(selectedYear, monthIndex)
            );
            const daysInMonth = eachDayOfInterval({
              start: firstDayOfMonth,
              end: lastDayOfMonth,
            });
            // console.log(daysInMonth);
            const firstDayNumber = getDay(firstDayOfMonth);
            const paddingDays = firstDayNumber === 0 ? 6 : firstDayNumber - 1; // Adjust to have Monday as the first day of the week

            return (
              <div key={monthIndex} className="Month">
                <div className="text-center mb-2">{month}</div>
                <div className="grid grid-rows-7 grid-flow-col gap-0.5">
                  {/* Render padding days (empty cells) */}
                  {Array.from({ length: paddingDays }, (_, i) => (
                    <div
                      key={`padding-${monthIndex}-${i}`}
                      className="w-4 h-4 mb-1 rounded-sm"
                    ></div>
                  ))}
                  {daysInMonth.map((day) => (
                    <div
                      key={format(day, "yyyy-MM-dd")}
                      title={format(day, "EEE, MMM d")}
                      className="w-4 h-4.25 mb-1 rounded-sm bg-gray-800 hover:bg-emerald-500 transition duration-50 ease-in-out"
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
}
