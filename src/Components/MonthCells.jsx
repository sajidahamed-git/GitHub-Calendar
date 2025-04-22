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

function MonthCells({ month, monthIndex, selectedYear, fileData, selectedUser }) {
  console.log(selectedUser);
  console.log(fileData);

  const firstDayOfMonth = startOfMonth(new Date(selectedYear, monthIndex));
  const lastDayOfMonth = endOfMonth(new Date(selectedYear, monthIndex));
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });
  const firstDayNumber = getDay(firstDayOfMonth);
  const paddingDays = firstDayNumber === 0 ? 6 : firstDayNumber - 1; // Adjust to have Monday as the first day of the week

  if (selectedUser === "You") {
    // Logic for "You"
    const uploadedDates = new Map();
    if (fileData) {
      const normalizedDate = fileData.date.split("T")[0]; // Normalize date to yyyy-MM-dd
      uploadedDates.set(normalizedDate, fileData);
    }

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
            const fileForDay = uploadedDates.get(formattedDate); // Get the file for the current day
            const isFileUploadedOnDay = !!fileForDay; // Check if a file exists for the current day

            return (
              <CustomTooltip
                key={formattedDate}
                day={formattedDate}
                fileData={fileForDay} // Pass the file for the current day
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
  } else {
    // Logic for other users
    const dummyData = [
      {
        name: "dummy-file-1.txt",
        type: "text/plain",
        size: 500,
        date: `${selectedYear}-01-15T00:00:00.000Z`,
      },
      {
        name: "dummy-file-2.txt",
        type: "text/plain",
        size: 300,
        date: `${selectedYear}-02-10T00:00:00.000Z`,
      },
      {
        name: "dummy-file-3.txt",
        type: "text/plain",
        size: 700,
        date: `${selectedYear}-03-20T00:00:00.000Z`,
      },
      {
        name: "dummy-file-4.txt",
        type: "text/plain",
        size: 450,
        date: `${selectedYear}-04-25T00:00:00.000Z`,
      },
    ];

    const normalizedDummyData = dummyData.map((file) => ({
      ...file,
      normalizedDate: file.date.split("T")[0], // Normalize date to yyyy-MM-dd
    }));

    const uploadedDates = new Map();
    normalizedDummyData.forEach((file) => {
      uploadedDates.set(file.normalizedDate, file);
    });

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
            const formattedDate = format(day, "yyyy-MM-dd"); // Match the format with dummyData.date
            const fileForDay = uploadedDates.get(formattedDate); // Get the file for the current day
            const isFileUploadedOnDay = !!fileForDay; // Check if a file exists for the current day

            return (
              <CustomTooltip
                key={formattedDate}
                day={formattedDate}
                fileData={fileForDay} // Pass the file for the current day
              >
                <div
                  key={formattedDate}
                  title={formattedDate}
                  className={`w-4 h-4.25 mb-1 rounded-sm transition duration-50 ease-in-out ${
                    isFileUploadedOnDay
                      ? "bg-blue-500 hover:bg-blue-600" // Highlight for dummy data
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
}

export default MonthCells;
