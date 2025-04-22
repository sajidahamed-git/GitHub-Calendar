import {
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
  format,
  getDay,
} from "date-fns";
const years = [2021, 2022, 2023, 2024, 2025];
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
  const selectedYear = 2025
  return (
    <div className=" flex flex-col bg-gray-950 text-gray-300 p-6 rounded-lg shadow-xl w-4/5  border border-gray-700">
      {/* Year Selector, first row */}
      <div className=" yearColumn flex justify-end mb-5">
        <select
          value="2025"
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 placeholder-gray-400"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* second row  */}
      <div className="FullRow  ">
        <div className="flex justify-around">
          <div className=" Days text-s text-gray-500  ">
            <div>Day</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
          </div>

          {monthNames.map((month, monthIndex) => {
            const firstDayOfMonth = startOfMonth(new Date(selectedYear, monthIndex));
            // console.log(firstDayOfMonth)
            const lastDayOfMonth = endOfMonth(new Date(selectedYear, monthIndex));
            const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });
            console.log(daysInMonth)

            return (
              <div key={monthIndex} className="Month">
                <div>{month}</div>
                <div className="grid grid-rows-7 grid-flow-col gap-0">
                  {daysInMonth.map((day) => (
                    <div
                      key={format(day, 'd')}
                      className="border-2 w-3 h-3 rounded-sm flex items-center justify-center text-xs"
                    >
                      
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
