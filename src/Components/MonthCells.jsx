// src/components/MonthGrid.jsx
import React from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, getDay, format } from 'date-fns';

function MonthCells({ month, monthIndex, selectedYear }) {

    // const monthNames = [
    //     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    //     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    //   ];
    //   const month = monthNames[monthIndex]
  const firstDayOfMonth = startOfMonth(new Date(selectedYear, monthIndex));
  const lastDayOfMonth = endOfMonth(new Date(selectedYear, monthIndex));
  const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });
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
}

export default MonthCells;