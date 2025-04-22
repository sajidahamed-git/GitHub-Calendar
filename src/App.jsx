import React from 'react';
import ContributionCalendar from './components/ContributionCalendar'
import './index.css'; // Ensure your Tailwind CSS is imported
import FileUpload from './components/FileUpload';


function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col gap-8 items-center justify-center p-4">
      {/* You can place the calendar directly or within other layout elements */}
      <ContributionCalendar />
      <FileUpload/>
    </div>
  );
}

export default App;