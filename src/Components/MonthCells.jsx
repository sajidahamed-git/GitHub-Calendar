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

function MonthCells({ month, monthIndex, selectedYear, fileData }) {
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
          const formattedDate = format(day, "yyyy-MM-dd"); // Match the format with fileData.date
          const isFileUploadedOnDay =
            fileData && fileData.date.startsWith(formattedDate); // Check if fileData matches the current day

          return (
            <CustomTooltip
              key={formattedDate}
              day={formattedDate}
              fileData={fileData}
            >
              <div
                key={formattedDate}
                title={formattedDate}
                className={`w-4 h-4.25 mb-1 rounded-sm transition duration-50 ease-in-out ${
                  isFileUploadedOnDay
                    ? "bg-emerald-500 hover:bg-emerald-600" // Highlight if file is uploaded
                    : "bg-gray-800 hover:bg-gray-700" // Default style
                }`}
              ></div>
            </CustomTooltip>
          );
        })}
      </div>
    </div>
  );
}

export default MonthCells;
