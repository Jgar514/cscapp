// src/App.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import Cube from './Cube';
import DetailPage from './Detail';
import { IoIosSearch } from "react-icons/io";
import WeatherCard from './WeatherCard';


const App = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleCubeClick = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className="w-full h-screen relative flex flex-col">
      <div className='w-full h-1/6 bg-gray-100 flex items-center justify-between px-2 md:px-24'>
        <div className='flex flex-row w-1/2 bg-black gap-2'>
          <div className='text-4xl font-playfair font-bold bg-white  text-black flex items-center'>
            Cape St. Claire
          </div>
          <div>
            <WeatherCard />
          </div>
        </div>
        <div className='w-2/5 h-3/4  border-black items-center flex'>
          <div className='h-2/4 w-3/4 border-2 border-black rounded-l-md'>

          </div>
          <div className='border-2 border-black h-2/4 flex items-center p-2 bg-black rounded-r-md'><IoIosSearch className='text-3xl text-white' /></div>
        </div>

      </div>
      <div className='flex flex-grow bg-gray-200'>
        <Canvas camera={{ position: [0, 5, 5], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />

          <Model position={[0, 0, 0]} />
          <Cube position={[-1, .1, .5]} onClick={handleCubeClick} /> {/* Pass the click handler */}

          <OrbitControls />
        </Canvas>
        {showDetail && <DetailPage onClose={handleCloseDetail} />}
      </div>

    </div>
  );
};

export default App;
