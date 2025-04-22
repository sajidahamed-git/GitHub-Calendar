// src/components/YearSelector.jsx
import React from 'react';
const years = [2021, 2022, 2023, 2024, 2025];

function YearSelector({ selectedYear, onYearChange }) {
  return (
    <div className="mb-5">
      <select
        value={selectedYear}
        onChange={(event) => onYearChange(event.target.value)}
        className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 placeholder-gray-400"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default YearSelector;