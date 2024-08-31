import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GuardHouse from './quadrant4/GuardHouse';
import Streets from './quadrantGlobal/Streets';
import Bay from './quadrant1/Bay';
import LakeClaire from './quadrant2/LakeClaire';
import LittleMagothy from './quadrant4/LittleMagothy';
import BroadneckPark from './quadrant3/BroadneckPark';
import Church from './quadrant3/Church';
import DropDown from './components/DropDown';
import Broadneck from './quadrant3/Broadneck';
import Shops from './quadrant4/Shops';
import DetailPage from './components/not';
import { IoIosSearch } from "react-icons/io";
import DeepCreek from './quadrant4/DeepCreek';
// import LittleBeach from './quadrant2/LittleBeach';
import CapeField from './quadrant4/CapeField';
import CscElem from './quadrant4/CscElem';
import MainBeach from './quadrant1/MainBeach';
import BoatRamp from './quadrant2/BoatRamp';
import CapeClubhouse from './quadrant1/CapeClubhouse';
import GoshenFarm from './quadrant4/GoshenFarm';
import CapeFirehouse from './quadrant4/CapeFirehouse';
import LittleMagothyPark from './quadrant4/LittleMagothyPark';
import { FaFighterJet } from "react-icons/fa";
import Nav from "./components/Nav"
import quadrant1 from './quadrant1/quadrant1Data';
import quadrant2 from './quadrant2/quadrant2Data';
import quadrant3 from './quadrant3/quadrant3Data';
import quadrant4 from './quadrant4/quadrant4Data';
import Model from "./components/Model";


const App = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 2, 4]);
  const [fov, setFov] = useState(45);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [orbitTarget, setOrbitTarget] = useState([0, .00, .4]);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const allLocations = [...quadrant1, ...quadrant2, ...quadrant3, ...quadrant4];

  const selectedLocationModelPath = selectedLocation
    ? allLocations.find(loc => loc.name === selectedLocation)?.modelPath
    : null;

  const resetAppState = () => {
    setCameraPosition([0, 2.5, 5]);
    setFov(50);
    setShowMoreInfo(false);
    setSelectedLocation(null);
    setBackgroundColor('');
    setOrbitTarget([0, 0, 0]);
  };


  const handleMoreInfoClick = () => {
    setShowMoreInfo(prevState => !prevState); // Toggle dropdown visibility
  };

  const orbitControlsRef = useRef(); // Ref for OrbitControls

  const handleSpecificMeshClick = (locationName) => {
    setSelectedLocation(locationName);
  };

  useEffect(() => {
    if (selectedLocation) {
      updateCameraAndTarget(selectedLocation);
    }
  }, [selectedLocation]);

  const updateCameraAndTarget = (locationName) => {
    const location = allLocations.find(loc => loc.name === locationName);
    if (location) {
      // Check if the values are correctly set
      console.log('Updating to location:', location);

      // Log and set values, or provide default messages
      if (location.orbitTarget) {
        setOrbitTarget(location.orbitTarget);
      } else {
        console.log('Orbit Target is not specified for this location.');
      }

      if (location.cameraPosition) {
        setCameraPosition(location.cameraPosition);
      } else {
        console.log('Camera Position is not specified for this location.');
      }

      if (location.fov) {
        setFov(location.fov);
      } else {
        console.log('FOV is not specified for this location.');
      }
      // setSelectedLocation(locationName);
      setBackgroundColor(location.color);

      if (orbitControlsRef.current) {
        orbitControlsRef.current.update(); // Update controls to apply the new settings
      }
    } else {
      console.error('Location not found:', locationName);
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


  return (
    <div className="w-full h-screen relative flex flex-col">
      <Nav
        backgroundColor={backgroundColor}
        locationName={selectedLocation}
        resetAppState={resetAppState}
        handleMoreInfoClick={handleMoreInfoClick} // Make sure this is passed
        showMoreInfo={showMoreInfo} // Pass state to Nav if needed
      />
      <div
        className={` z-40 fixed inset-0  border-t-2  pt-8 transform transition-transform duration-300 ease-in-out ${showMoreInfo ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className='flex flex-row h-full w-full'>
          <div className='w-1/2 h-full bg-black'>
            {selectedLocationModelPath ? (
              <Model modelPath={selectedLocationModelPath} />
            ) : (
              <div>No model available</div>
            )}
          </div>
          <div className='w-1/2 h-full bg-black bg-opacity-400 flex flex-col justify-center items-center pt-8 ' >
            <div className='bg-white rounded-lg h-full w-full shadow-black shadow-lg p-4 '>
              {/* detail components  */}
            </div>
          </div>
        </div>
      </div>

      <FaFighterJet size={40} className="fly-jet  z-50" color="#074384" />

      {/* Start Scene */}
      <div className='flex flex-grow bg-white'>
        <Canvas camera={{ position: cameraPosition, fov: fov }}>
          <ambientLight intensity={3.5} />
          <Bay />
          <BoatRamp onClick={() => handleSpecificMeshClick('Boat Ramp')} />
          <Broadneck onClick={() => handleSpecificMeshClick('Broadneck High School')} />
          <BroadneckPark />
          <CapeClubhouse onClick={() => handleSpecificMeshClick('Cape Club House')} />
          <CapeField onClick={() => handleSpecificMeshClick('Cape Field')} />
          <CapeFirehouse onClick={() => handleSpecificMeshClick('Cape Firehouse')} />
          <CscElem onClick={() => handleSpecificMeshClick('CSC Elementary')} />
          <DeepCreek />
          <GoshenFarm onClick={() => handleSpecificMeshClick('Goshen Farm')} />
          <GuardHouse onClick={() => handleSpecificMeshClick('Guard House')} />
          <LakeClaire onClick={() => handleSpecificMeshClick("Lake Claire Lake, Beach and Fishing Pier")} />
          {/* <LittleBeach onClick={() => handleSpecificMeshClick("Lake Claire Lake, Beach and Fishing Pier")} /> */}
          <LittleMagothy />
          <LittleMagothyPark />
          <MainBeach onClick={() => handleSpecificMeshClick('Main Beach')} />
          <Shops onClick={() => handleSpecificMeshClick('Cape Shopping Center')} />
          <Streets />

          <Church onClick={() => handleSpecificMeshClick('St. Andrews By the Bay Church')} />
          <OrbitControls
            ref={orbitControlsRef} // Attach ref to OrbitControls
            target={orbitTarget}
            autoRotateSpeed={-0.5} // Reverse rotation
            enableZoom={true} // Enable zoom
            zoomSpeed={0.8} // Control zoom speed, 1 is default, less than 1 is slower
          // minPolarAngle={0}
          // maxPolarAngle={Math.PI / 2.2}
          />
        </Canvas>



      </div>
    </div>
  );
};

export default App;
