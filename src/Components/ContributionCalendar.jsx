import { useState } from 'react'; 

import UserSelector from './UserSelector';
import YearSelector from './YearSelector';
import DayLabels from './DayLabels';    
import MonthCells from './MonthCells'; 
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


export default function CalendarUI({fileData}) {

  const [selectedYear, setSelectedYear] = useState(2025); 
  const [selectedUser, setSelectedUser] = useState('You')

  const handleYearChange = (newYear) => {
    setSelectedYear(newYear);
    console.log('Selected year:', newYear);
  };

  const handleUserChange = (newUser)=> {
    setSelectedUser(newUser)
    console.log('selected User:', newUser)
  }
  return (
    <div className=" flex flex-col bg-gray-950 text-gray-300 p-6 w-full rounded-lg shadow-xl  border border-gray-700">
      <div className='flex justify-between'>
        <UserSelector selectedUser={selectedUser} onUserChange={handleUserChange}></UserSelector>
        <YearSelector selectedYear={selectedYear} onYearChange={handleYearChange}/>
      </div>
        <div className="flex justify-around">
          <DayLabels/>
        {monthNames.map((month, monthIndex) => (
          <MonthCells
            key={monthIndex}
            month={month}
            monthIndex={monthIndex}
            selectedYear={selectedYear}
           
            fileData={selectedUser === 'You' ? fileData : null} // Pass fileData only if user is "You"
            selectedUser={selectedUser}

          />
        ))}
        </div>
        
      </div>
  );
}
