// src/components/MonthGrid.jsx
import React from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  format,
} from "date-fns";
import CustomTooltip from "./CustomTooltip";
function MonthCells({ month, monthIndex, selectedYear,fileData }) {

  const firstDayOfMonth = startOfMonth(new Date(selectedYear, monthIndex));
  const lastDayOfMonth = endOfMonth(new Date(selectedYear, monthIndex));
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });
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

        {daysInMonth.map((day) => {
          const formattedDate = format(day, "EEE-d");

          return (
            <CustomTooltip key={formattedDate} day={formattedDate} fileData = {fileData}>
            <div
              key={format(day, "yyyy-MM-dd")}
              title={formattedDate}
              className="w-4 h-4.25 mb-1 rounded-sm bg-gray-800 hover:bg-emerald-500 transition duration-50 ease-in-out"
            ></div>
            </CustomTooltip>
          );
        })}
      </div>
    </div>
  );
}

export default MonthCells;
