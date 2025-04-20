import React from 'react';
import ContributionCalendar from './components/ContributionCalendar';
import './index.css'; // Ensure your Tailwind CSS is imported

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      {/* You can place the calendar directly or within other layout elements */}
      <ContributionCalendar />
    </div>
  );
}

export default App;