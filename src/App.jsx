import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import Streets from './Streets';
import Bay from './Bay';
import LakeClaire from './LakeClaire';
import LittleMagothy from './LittleMagothy';
import BroadneckPark from './BroadneckPark';
import Church from './Church';
import Cube from './Cube';
import Trees from './Trees';
import Broadneck from './Broadneck';
import Shops from './Shops';
import DetailPage from './Detail';
import { IoIosSearch } from "react-icons/io";
import WeatherCard from './WeatherCard';
import useResponsiveFov from './useResponsiveFov';
import DeepCreek from './DeepCreek';
import LittleBeach from './LittleBeach';
import CapeField from './CapeField';
import CscElem from './CscElem';
import MainBeach from './MainBeach';
import BoatRamp from './BoatRamp';
import CapeClubhouse from './CapeClubhouse';
import GoshenFarm from './GoshenFarm';
import CapeFirehouse from './CapeFirehouse';

const App = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [spotlightsInitialized, setSpotlightsInitialized] = useState(false);
  const fov = useResponsiveFov();

  const lampRef = useRef();
  const targetRef = useRef();
  const secondTargetRef = useRef();
  const thirdTargetRef = useRef();
  const fourthTargetRef = useRef();
  const fifthTargetRef = useRef();
  const sixthTargetRef = useRef();
  const seventhTargetRef = useRef();
  const eigthTargetRef = useRef();

  const spotLight1 = useRef();
  const spotLight2 = useRef();
  const spotLight3 = useRef();
  const spotLight4 = useRef();
  const spotLight5 = useRef();
  const spotLight6 = useRef();
  const spotLight7 = useRef();
  const spotLight8 = useRef();

  useEffect(() => {
    // Use a delay to ensure targets are assigned after everything has been initialized
    const timer = setTimeout(() => {
      if (spotLight1.current && targetRef.current) {
        spotLight1.current.target = targetRef.current;
      }
      if (spotLight2.current && secondTargetRef.current) {
        spotLight2.current.target = secondTargetRef.current;
      }
      if (spotLight3.current && thirdTargetRef.current) {
        spotLight3.current.target = thirdTargetRef.current;
      }
      if (spotLight4.current && fourthTargetRef.current) {
        spotLight4.current.target = fourthTargetRef.current;
      }
      if (spotLight5.current && fifthTargetRef.current) {
        spotLight5.current.target = fifthTargetRef.current;
      }
      if (spotLight6.current && sixthTargetRef.current) {
        spotLight6.current.target = sixthTargetRef.current;
      }
      if (spotLight7.current && seventhTargetRef.current) {
        spotLight7.current.target = seventhTargetRef.current;
      }
      if (spotLight8.current && eigthTargetRef.current) {
        spotLight8.current.target = eigthTargetRef.current;
      }
      // Set state to trigger a re-render if necessary
      setSpotlightsInitialized(true);
    }, 500); // Adjust delay time as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleCubeClick = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className="w-full h-screen relative flex flex-col">
      <div className='w-full h-1/6 bg-white flex flex-col md:flex-row items-center justify-between px-2 md:px-24 py-2'>
        <div className='flex flex-col md:flex-row w-1/2 md:gap-4 h-full items-start  md:items-center  justify-center md:justify-start px-2 md:px-0'>
          <div className=' text-2xl md:text-4xl font-playfair font-bold text-black flex md:items-center h-fit md:h-full w-full md:w-fit'>
            Cape St. Claire
          </div>
          <div className=' text-xs md:text-4xl font-mono font-bold  h-fit text-black flex md:items-center justify-center w-full md:w-fit'>
            <WeatherCard />
          </div>
        </div>
        <div className='w-full md:w-2/5 h-3/4 border-black justify-center items-center flex'>
          <div className='h-2/4 w-3/4 border-2 border-black rounded-l-md' />
          <div className='border-2 border-black h-2/4 flex items-center p-2 bg-black rounded-r-md'>
            <IoIosSearch className='text-3xl text-white' />
          </div>
        </div>
      </div>
      <div className='flex flex-grow bg-gray-200'>
        <Canvas camera={{ position: [0, 5, 5], fov: fov }} >
          <ambientLight intensity={2.5} />
          <mesh ref={lampRef} position={[0, .5, -2]}>
            <cylinderGeometry args={[0.1, 0.1, 0.5, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>

          <spotLight ref={spotLight1} position={[-.7, 2, 1]} angle={Math.PI / 12} penumbra={0.2} intensity={8} distance={50} decay={2} castShadow />
          <mesh ref={targetRef} position={[-.7, 0, .9]}>
            <boxGeometry args={[.9, 0.08, .9]} />
            <meshStandardMaterial color="brown" transparent opacity={0.8} />
          </mesh>

          <spotLight ref={spotLight2} position={[1, 1.5, 1]} angle={Math.PI / 16} penumbra={0.2} intensity={8} distance={50} decay={2} castShadow />
          <mesh ref={secondTargetRef} position={[1.0, -.008, 1]}>
            <boxGeometry args={[.55, 0.06, .55]} />
            <meshStandardMaterial color="green" transparent opacity={1} />
          </mesh>

          <spotLight ref={spotLight3} position={[.35, 1, 1]} angle={Math.PI / 9} penumbra={0.2} intensity={1} distance={50} decay={2} castShadow />
          <mesh ref={thirdTargetRef} position={[.35, 0, 1]}>
            <boxGeometry args={[.6, 0.08, .6]} />
            <meshStandardMaterial color="#4682B4" transparent opacity={1} />
          </mesh>

          <spotLight ref={spotLight4} position={[-.4, 1, -1]} angle={Math.PI / 8} penumbra={0.2} intensity={.8} distance={50} decay={2} castShadow />
          <mesh ref={fourthTargetRef} position={[-.4, -.055, -1]}>
            <boxGeometry args={[.6, 0.08, .6]} />
            <meshStandardMaterial color="#add8e6" transparent opacity={0.9} />
          </mesh>

          <spotLight ref={spotLight5} position={[1.7, 1, -.35]} angle={Math.PI / 6} penumbra={0.2} intensity={1.5} distance={50} decay={2} castShadow />
          <mesh ref={fifthTargetRef} position={[1.7, -.055, -.35]}>
            <boxGeometry args={[.8, 0.08, .8]} />
            <meshStandardMaterial color="#add8e6" transparent opacity={0.8} />
          </mesh>

          <spotLight ref={spotLight6} position={[-.3, 1, 2.2]} angle={Math.PI / 16} penumbra={0.2} intensity={4} distance={50} decay={2} castShadow />
          <mesh ref={sixthTargetRef} position={[-.25, .04, 2.1]} rotation={[Math.PI / 1, -.2, .1]}>
            <boxGeometry args={[.3, 0.08, .45]} />
            <meshStandardMaterial color="#ffd700" transparent opacity={0.8} />
          </mesh>

          <spotLight ref={spotLight7} position={[.37, 1, 1.3]} angle={Math.PI / 20} penumbra={0.2} intensity={3} distance={50} decay={2} castShadow />
          <mesh ref={seventhTargetRef} position={[.37, 0.06, 1.3]}>
            <boxGeometry args={[.16, 0.010, .20]} />
            <meshStandardMaterial color="#654321" transparent opacity={1} />
          </mesh>

          <spotLight ref={spotLight8} position={[-1.7, 1, -.45]} angle={Math.PI / 15} penumbra={0.2} intensity={2} distance={50} decay={2} castShadow />
          <mesh ref={eigthTargetRef} position={[-1.7, -.04, -.45]}>
            <boxGeometry args={[.3, 0.08, .3]} />
            <meshStandardMaterial color="#add8e6" transparent opacity={0.9} />
          </mesh>

          <Bay position={[0, 0, 0]} />
          <BoatRamp position={[0, 0, 0]} />
          <Broadneck position={[0, 0, 0]} />
          <BroadneckPark position={[0, 0, 0]} />
          <CapeClubhouse position={[0, 0, 0]} />
          <CapeField position={[0, 0, 0]} />
          <CapeFirehouse position={[0, 0, 0]} />
          <CscElem position={[0, 0, 0]} />
          <DeepCreek position={[0, 0, 0]} />
          <GoshenFarm position={[0, 0, 0]} />
          <LakeClaire position={[0, 0, 0]} />
          <LittleBeach position={[0, 0, 0]} />
          <LittleMagothy position={[0, 0, 0]} />
          <MainBeach position={[0, 0, 0]} />
          <Shops position={[0, 0, 0]} />
          <Streets position={[0, 0.0, 0]} />
          <Trees position={[0, 0.0, 0]} />
          <Church position={[0, .03, 0]} />
          <OrbitControls target={[0, 0, 0]} />
        </Canvas>
        {showDetail && <DetailPage onClose={handleCloseDetail} />}
      </div>
    </div>
  );
};

export default App;
