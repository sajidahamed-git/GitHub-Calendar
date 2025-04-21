// Imports

const years = [2021, 2022, 2023, 2024, 2025];
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
       
            {monthNames.map((month) => (
              <div className="">{month}
              {/*here i need a grid of cells*/}
              </div>
            ))}
          </div>
     
      </div>
    </div>
  );
}
