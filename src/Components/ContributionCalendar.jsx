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
  const selectedYear = 2025;
  return (
    <div className=" flex flex-col bg-gray-950 text-gray-300 p-6 w-full rounded-lg shadow-xl  border border-gray-700">
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
            console.log(daysInMonth);
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
    </div>
  );
}
