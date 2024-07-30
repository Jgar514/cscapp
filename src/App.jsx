import React, { useState, useEffect } from 'react';

    function App() {
      const [dateTime, setDateTime] = useState(new Date());

      useEffect(() => {
        const timer = setInterval(() => {
          setDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
      }, []);

      return (
        <div className='w-screen h-screen bg-blue-300 flex flex-col justify-center items-center'>
          <div className='text-yellow-200 text-4xl mb-4'>Hello World</div>
          <div className='text-yellow-200 text-2xl'>
            {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
          </div>
        </div>
      );
    }

    export default App;