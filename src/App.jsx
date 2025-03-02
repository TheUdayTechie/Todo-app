import React, { useState } from 'react';
import Todo from './components/Todo';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-stone-100 text-black'} min-h-screen flex flex-col items-center p-4`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-4 px-4 py-2 rounded-lg bg-orange-600 text-white shadow-md"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Todo darkMode={darkMode} />
    </div>
  );
};

export default App;
