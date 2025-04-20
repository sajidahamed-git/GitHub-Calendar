// Imports
import { useEffect, useState } from "react";
import {
  startOfYear,
  endOfYear,
  eachDayOfInterval,
  getDay,
  format,
} from "date-fns";

// const weekdays = [1, 2, 3, 4, 5]; // Mon-Fri (1=Mon)
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

export default function CalendarUI() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [weeks, setWeeks] = useState([]);
  const [monthStarts, setMonthStarts] = useState([]);

  //   const yearOptions = Array.from({ length: 5 }, (_, i) => 2022 + i);

  useEffect(() => {
    const start = startOfYear(new Date(selectedYear, 0, 1));
    const end = endOfYear(start);

    const days = eachDayOfInterval({ start, end });

    // Group by weeks, filtering Mon-Fri
    const calendarWeeks = [];
    let currentWeek = [];

    days.forEach((date) => {
      const weekday = getDay(date); // 0 (Sun) to 6 (Sat)
      const isoWeekday = weekday === 0 ? 7 : weekday; // Shift Sun to 7

      if (isoWeekday >= 1 && isoWeekday <= 5) {
        currentWeek.push({ date, level: Math.floor(Math.random() * 5) });
      }

      if (isoWeekday === 5) {
        calendarWeeks.push(currentWeek);
        currentWeek = [];
      }
    });

    setWeeks(calendarWeeks.map((weekData, i) => ({ weekData, weekIndex: i })));

    // Month starts: track first week index of each month
    const seen = new Set();
    const starts = [];

    calendarWeeks.forEach((week, i) => {
      for (let day of week) {
        const month = day.date.getMonth();
        if (!seen.has(month)) {
          starts[month] = i;
          seen.add(month);
        }
      }
    });

    setMonthStarts(starts);
  }, [selectedYear]);

  //   const handleYearChange = (e) => {
  // setSelectedYear(Number(e.target.value));
  //   };

  return (
    <div className=" flex flex-col bg-gray-950 text-gray-300 p-6 rounded-lg shadow-xl w-4/5  border border-gray-700">
      {/* Year Selector, first row */}
      <div className=" yearColumn flex justify-end mb-5">
        <select
          value="2025"
          //   onChange={handleYearChange}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 placeholder-gray-400"
        >
          {/* {yearOptions.map((year) => ( */}
          <option key={0} value={2025}>
            2025
          </option>
          <option key={1} value={2024}>
            2024
          </option>
          {/* ))} */}
        </select>
      </div>

      {/* second row  */}
      <div className="flex flex-col">
        {/* Month Labels Row */}
        <div className="flex flex-col items-start">
          <div className="w-full mb-2 h-5 flex justify-evenly items-center">
            {monthNames.map((name, index) => {
              return (
                <div key={name} className="text-s text-gray-400">
                  {name}
                </div>
              );
            })}
          </div>


        </div>
        {/* Third row */}

        {/* Day Labels first column */}
        <div className="flex">
            <div className="flex flex-col justify-between text-s text-gray-500 pr-3 mr-1.5 mt-0.5 ">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
            </div>
            {/* cells second column */}
            <div className="flex gap-1.5 overflow-x-auto">
              {weeks.map(({ weekData, weekIndex }) => (
                <div key={`week-${weekIndex}`} className="flex flex-col gap-1">
                  {weekData.map((day, dayIndex) => {
                    const key = day
                      ? day.date.toISOString()
                      : `empty-${weekIndex}-${dayIndex}`;
                    const bgColor = day ? levelColors[day.level] : "bg-transparent";
                    const title = day
                      ? `${format(day.date, "PPP")} - Contributions: ${day.level}`
                      : "No data";
                    return (
                      <div
                        key={key}
                        className={`w-3 h-3 rounded-sm border border-gray-700/50 ${bgColor}`}
                        title={title}
                      ></div>
                    );
                  })}
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
