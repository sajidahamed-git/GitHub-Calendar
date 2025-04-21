// Imports
import { startOfYear, addDays, getMonth, format } from "date-fns";
import { useEffect, useState } from "react";
// import {
//   startOfYear,
//   endOfYear,
//   getDay,
//   format,
//   getDaysInMonth,
//   startOfMonth,
// } from "date-fns";
import {
  

  getDay,
  getYear,
  isSameYear
  
} from "date-fns";


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
const levelColors = [
  "bg-gray-800",
  "bg-green-700",
  "bg-green-600",
  "bg-green-500",
  "bg-green-400",
];
const years = [2021, 2022, 2023, 2024, 2025];

export default function CalendarUI() {
  const [selectedYear, setSelectedYear] = useState("2025");
  // const [weeks, setWeeks] = useState([]);

  return (
    <div className="flex flex-col bg-gray-950 text-gray-300 p-6 rounded-lg shadow-xl w-full border border-gray-700">
      {/* Year Selector, first row */}
      <div className="yearColumn flex justify-end mb-5">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 placeholder-gray-400"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-x-auto">
        {/* Month Labels Row */}
        <div className="flex justify-between ml-10 mb-1 text-sm text-gray-400">
          {monthNames.map((month, i) => (
            <div key={month} className="w-12 text-center">
              {month}
            </div>
          ))}
        </div>

        <div className="flex">
          {/* Day Labels Column */}
          <div className="flex flex-col mr-2 text-xs text-gray-500">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="h-6">
                {day}
              </div>
            ))}
          </div>

          {/* Weeks Columns */}
          {/* Weeks Columns */}
<div className="flex">
  {(() => {
    const yearStart = startOfYear(new Date(selectedYear, 0, 1));
    const dayOfWeek = getDay(yearStart); // 0 = Sun, ..., 6 = Sat
    const totalDays = (getYear(new Date(selectedYear, 11, 31)) % 4 === 0) ? 366 : 365;
    const daysArray = [];

    // Add blank cells for days before Jan 1
    for (let i = 0; i < dayOfWeek; i++) {
      daysArray.push(null); // null means empty placeholder
    }

    // Fill in actual date objects
    for (let i = 0; i < totalDays; i++) {
      daysArray.push(addDays(yearStart, i));
    }

    // Group into weeks (columns)
    const weeks = [];
    for (let i = 0; i < daysArray.length; i += 7) {
      weeks.push(daysArray.slice(i, i + 7));
    }

    return weeks.map((week, weekIndex) => {
      // Check if this week contains the first of any month
      const hasMonthStart = week.some(
        (day) => day && day.getDate() === 1
      );
    
      return (
        <div
          key={weekIndex}
          className={`flex flex-col ${hasMonthStart ? "mr-3" : "mr-1"}`}
        >
          {week.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`w-4 h-5 rounded mb-1 ${
                day ? "bg-gray-800 hover:bg-emerald-500" : "bg-transparent"
              }`}
              title={day ? format(day, "EEE, MMM d") : ""}
            ></div>
          ))}
        </div>
      );
    });
    
  })()}
</div>


        </div>
      </div>
    </div>
  );
}
