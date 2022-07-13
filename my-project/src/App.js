import { useState } from 'react';

const App = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen 
      p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`bg-white text-dark-purple p-1 h-7 w-7
       rounded-full absolute -right-3 top-9 border
       border-dark-purple cursor-pointer ${!open && 'rotate-180'}`}
          onClick={() => {
            setOpen(!open);
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <div className="flex gap-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`bg-amber-300 rounded cursor-pointer block h-10 w-10`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
          <h1
            className={`text-white font-medium text-2xl duration-300 ${
              !open && 'scale-0'
            }`}
          >
            Music APP
          </h1>
        </div>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Homw page</h1>
      </div>
    </div>
  );
};

export default App;
