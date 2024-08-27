import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GuardTower from './quadrant4/GuardTower';
import Streets from './quadrantGlobal/Streets';
import Bay from './quadrant1/Bay';
import LakeClaire from './quadrant2/LakeClaire';
import LittleMagothy from './quadrant4/LittleMagothy';
import BroadneckPark from './quadrant3/BroadneckPark';
import Church from './quadrant3/Church';

import Broadneck from './quadrant3/Broadneck';
import Shops from './quadrant4/Shops';
import DetailPage from './components/Detail';
import { IoIosSearch } from "react-icons/io";
import WeatherCard from './components/WeatherCard';
import DeepCreek from './quadrant4/DeepCreek';
import LittleBeach from './quadrant2/LittleBeach';
import CapeField from './quadrant4/CapeField';
import CscElem from './quadrant4/CscElem';
import MainBeach from './quadrant1/MainBeach';
import BoatRamp from './quadrant2/BoatRamp';
import CapeClubhouse from './quadrant1/CapeClubhouse';
import GoshenFarm from './quadrant4/GoshenFarm';
import CapeFirehouse from './quadrant4/CapeFirehouse';
import LittleMagothyPark from './quadrant4/LittleMagothyPark';
import locationsData from './data/locationsData';
import LocationDisplay from './components/LocationDisplay';
import LocationInfo from './components/LocationInfo';
import { FaFighterJet } from "react-icons/fa";
import InfoCard from './InfoCard';
import data from './data';



const App = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 2.0, 4]);
  const [fov, setFov] = useState(50);

  const [showDetail, setShowDetail] = useState(false);
  const [spotlightsInitialized, setSpotlightsInitialized] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [orbitTarget, setOrbitTarget] = useState([0, -1, 0]);
  const [streetsOpacity, setStreetsOpacity] = useState(1);
  const [hovered, setHovered] = useState(false);
  const resetAppState = () => {
    setCameraPosition([0, 2.5, 5]);
    setFov(50);
    setShowDetail(false);
    setSelectedLocation(null);
    setBackgroundColor('');
    setOrbitTarget([0, 0, 0]);
    setStreetsOpacity(1);

  };

  // const fov = useResponsiveFov();

  const targetRef = useRef();
  const secondTargetRef = useRef();
  const thirdTargetRef = useRef();
  const fourthTargetRef = useRef();
  const fifthTargetRef = useRef();
  const sixthTargetRef = useRef();
  const seventhTargetRef = useRef();
  const eigthTargetRef = useRef();
  const ninthTargetRef = useRef();
  const tenthTargetRef = useRef();


  const spotLight1 = useRef();
  const spotLight2 = useRef();
  const spotLight3 = useRef();
  const spotLight4 = useRef();
  const spotLight5 = useRef();
  const spotLight6 = useRef();
  const spotLight7 = useRef();
  const spotLight8 = useRef();
  const spotLight9 = useRef();
  const spotLight10 = useRef();

  const orbitControlsRef = useRef(); // Ref for OrbitControls



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
      if (spotLight9.current && ninthTargetRef.current) {
        spotLight9.current.target = ninthTargetRef.current;
      }
      if (spotLight10.current && tenthTargetRef.current) {
        spotLight10.current.target = tenthTargetRef.current;
      }
      // Set state to trigger a re-render if necessary
      setSpotlightsInitialized(true);
    }, 500); // Adjust delay time as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleMeshClick = (locationName) => {
    const location = locationsData.find(loc => loc.name === locationName);
    if (location) {
      setOrbitTarget(location.orbitTarget);
      setCameraPosition(location.cameraPosition);
      setFov(location.fov);  // Update fov

      setSelectedLocation(locationName);
      setBackgroundColor(location.color);
      setStreetsOpacity(.9);
      if (orbitControlsRef.current) {
        orbitControlsRef.current.update(); // Update controls to apply the new settings
      }
    }
  };

  const handleMoreInfoClick = () => {
    const location = locationsData.find(loc => loc.name === selectedLocation);
    if (location) {
      setOrbitTarget(location.orbitTarget2);
      setCameraPosition(location.cameraPosition2);
      // Update fov for detail view



      if (orbitControlsRef.current) {
        orbitControlsRef.current.update(); // Update controls to apply the new settings
      }
    }
  };

  const handleLessInfoClick = () => {
    const location = locationsData.find(loc => loc.name === selectedLocation);
    if (location) {
      setOrbitTarget(location.orbitTarget);
      setCameraPosition(location.cameraPosition2);
      // Update fov for detail view



      if (orbitControlsRef.current) {
        orbitControlsRef.current.update(); // Update controls to apply the new settings
      }
    }
  };



  useEffect(() => {
    if (orbitControlsRef.current) {
      const camera = orbitControlsRef.current.object;

      // Update the camera position
      camera.position.set(...cameraPosition);

      // Update the fov and projection matrix
      camera.fov = fov;
      camera.updateProjectionMatrix(); // Ensure fov change is applied

      orbitControlsRef.current.update(); // Update controls to apply the new settings
    }
  }, [cameraPosition, fov]);





  const handleCubeClick = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };



  return (
    <div className="w-full h-screen relative flex flex-col">
      <div className='w-full h-1/6 md:h-[100px]  flex flex-col md:flex-row md:items-center justify-between   py-0 z-50 bg-white'>
        <div className='flex flex-row md:flex-row w-full md:w-1/2 md:gap-4 h-1/2 md:h-3/4 items-center md:items-center  justify-start md:justify-start px-2 md:px-0 md:pl-4 '>
          <div className=' text-2xl md:text-4xl font-playfair font-bold text-black flex md:items-center h-fit md:h-full w-full md:w-1/2  justify-center px-4'>
            Cape St. Claire
          </div>
          <div className=' text-xs md:text-4xl font-mono font-bold  h-fit text-black flex md:items-center justify-center w-full md:w-fit'>
            <WeatherCard />
          </div>

        </div>
        <div className='h-1/2 w-full md:w-1/2  md:h-full  flex flex-col items-center justify-center '>
          <LocationInfo
            selectedLocation={selectedLocation}
            backgroundColor={backgroundColor}
            setShowDetail={setShowDetail}
            setSelectedLocation={setSelectedLocation}
            resetAppState={resetAppState}
            handleMoreInfoClick={handleMoreInfoClick}
            handleLessInfoClick={handleLessInfoClick} // Pass the function to reset camera settings
          />


        </div>
        {/*  */}
      </div>

      <FaFighterJet size={40} className="fly-jet  z-50" color="#074384" />







      {/* Start Scene */}
      <div className='flex flex-grow bg-white'>
        <Canvas camera={{ position: cameraPosition, fov: fov }}>
          <ambientLight intensity={2.5} />

          {/* Start Broadneck */}
          <spotLight ref={spotLight1} position={[-.7, 2, 1]} angle={Math.PI / 12} penumbra={0.2} intensity={4} distance={50} decay={2} castShadow />
          <mesh ref={targetRef} position={[-.7, 0, .9]} onClick={() => handleMeshClick('Broadneck High School')}>
            <boxGeometry args={[.9, 0.08, .9]} />
            <meshStandardMaterial color="brown" transparent opacity={0.8} />
          </mesh>
          {/* End Broadneck */}

          {/* Start Shops and Cape Field */}
          <spotLight ref={spotLight2} position={[1, 1.5, 1]} angle={Math.PI / 16} penumbra={0.2} intensity={8} distance={50} decay={2} castShadow />
          <mesh ref={secondTargetRef} position={[1.0, -.008, 1]} onClick={() => handleMeshClick('Cape Shopping Center')}>
            <boxGeometry args={[.55, 0.06, .55]} />
            <meshStandardMaterial color="green" transparent opacity={1} />
          </mesh>
          {/* End Shops and Cape Field */}

          {/* Start CSC Elem */}
          <spotLight ref={spotLight3} position={[.35, 1, 1]} angle={Math.PI / 9} penumbra={0.2} intensity={1} distance={50} decay={2} castShadow />
          <mesh ref={thirdTargetRef} position={[.36, .025, 1]} onClick={() => handleMeshClick('Cape Elementary School')}>
            <boxGeometry args={[.6, 0.08, .425]} />
            <meshStandardMaterial color="#4682B4" transparent opacity={1} />
          </mesh>
          {/* End CSC Elem */}

          {/* Start Lake Claire and Latrobe */}
          <spotLight ref={spotLight4} position={[-.4, 1, -1]} angle={Math.PI / 8} penumbra={0.2} intensity={1} distance={50} decay={2} castShadow />
          <mesh ref={fourthTargetRef} position={[-.4, -.05, -1]} onClick={() => handleMeshClick('Latrobe')}>
            <boxGeometry args={[.6, 0.08, .6]} />
            <meshStandardMaterial color="#add8e6" transparent opacity={1} />
          </mesh>
          {/* End Lake Claire and Latrobe */}

          {/* Start Main Beach and Clubhouse */}
          <spotLight ref={spotLight5} position={[1.7, 1, -.35]} angle={Math.PI / 6} penumbra={0.2} intensity={1.0} distance={50} decay={2} castShadow />
          <mesh ref={fifthTargetRef} position={[1.7, -.055, -.35]} onClick={() => handleMeshClick('Main Beach')}>
            <boxGeometry args={[.8, 0.08, .8]} />
            <meshStandardMaterial color="#add8e6" transparent opacity={1} />
          </mesh>
          {/* End Main Beach and Clubhouse */}

          {/* Start Church */}
          <spotLight ref={spotLight6} position={[-.3, 1, 2.2]} angle={Math.PI / 16} penumbra={0.2} intensity={4} distance={50} decay={2} castShadow />
          <mesh ref={sixthTargetRef} position={[-.27, .02, 2.15]} rotation={[Math.PI / .99, -.3, .1]} onClick={() => handleMeshClick('St Andrews Church')}>
            <boxGeometry args={[.35, 0.06, .48]} />
            <meshStandardMaterial color="#ffd700" transparent opacity={0.8} />
          </mesh>
          {/* End Church */}

          {/* Start Goshen Farm */}
          <spotLight ref={spotLight7} position={[.37, 1, 1.3]} angle={Math.PI / 20} penumbra={0.2} intensity={3} distance={50} decay={2} castShadow />
          <mesh ref={seventhTargetRef} position={[.35, 0.054, 1.33]} onClick={() => handleMeshClick('Goshen Farm')}>
            <boxGeometry args={[.17, 0.020, .22]} />
            <meshStandardMaterial color="#654321" transparent opacity={1} />
          </mesh>
          {/* End Goshen Farm */}

          {/* Start Boat Ramp */}
          <spotLight ref={spotLight8} position={[-1.7, 1, -.45]} angle={Math.PI / 15} penumbra={0.2} intensity={2} distance={50} decay={2} castShadow />
          <mesh ref={eigthTargetRef} position={[-1.7, -.04, -.45]} onClick={() => handleMeshClick('Boat Ramp')}>
            <boxGeometry args={[.3, 0.08, .3]} />
            <meshStandardMaterial color="#add8e6" transparent opacity={0.9} />
          </mesh>
          {/* End Boat Ramp */}

          {/* Start Firehouse */}
          <spotLight ref={spotLight9} position={[.8, 1, 1]} angle={Math.PI / 45} penumbra={0.2} intensity={4} distance={50} decay={2} castShadow />
          <mesh ref={ninthTargetRef} position={[.8, 0.0225, 1.5]} onClick={() => handleMeshClick('Cape Firehouse')}>
            <boxGeometry args={[.2, 0.01, .2]} />
            <meshStandardMaterial color="#BC4A3C" opacity={.9} />
          </mesh>
          {/* End Firehouse */}

          {/* Start Guard Tower */}
          <spotLight ref={spotLight10} position={[0.9, 1, 1.3]} angle={Math.PI / 45} penumbra={0.2} intensity={4} distance={50} decay={2} castShadow />
          <mesh
            ref={tenthTargetRef}
            position={[0.9, 0.029, 1.3]}
            onClick={() => handleMeshClick('Guard Tower')}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <boxGeometry args={[0.09, 0.01, 0.09]} />
            <meshStandardMaterial color="white" opacity={hovered ? 0.9 : 0.2} transparent />
          </mesh>
          {/* End Guard Tower */}

          <Bay />
          <BoatRamp />
          <Broadneck />
          <BroadneckPark />
          <CapeClubhouse />
          <CapeField />
          <CapeFirehouse />
          <CscElem />
          <DeepCreek />
          <GoshenFarm />
          <GuardTower />
          {/* <LakeClaire /> */}
          <LittleBeach />
          <LittleMagothy />
          <LittleMagothyPark />
          <MainBeach />
          <Shops />
          <Streets opacity={streetsOpacity} />

          <Church />
          <OrbitControls
            ref={orbitControlsRef} // Attach ref to OrbitControls
            target={orbitTarget}
            autoRotateSpeed={-0.5} // Reverse rotation
            enableZoom={true} // Enable zoom
            zoomSpeed={0.8} // Control zoom speed, 1 is default, less than 1 is slower
          />
        </Canvas>

        <DetailPage
          showDetail={showDetail}
          onClose={handleCloseDetail}
          selectedLocation={locationsData.find(loc => loc.name === selectedLocation)}
        />

      </div>
    </div>
  );
};

export default App;
