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
import quadrant1Data from './quadrant1/quadrant1Data';
import quadrant2Data from './quadrant2/quadrant2Data';
import quadrant3Data from './quadrant3/quadrant3Data';
import quadrant4Data from './quadrant4/quadrant4Data';
import Model from "./components/Model";
import DetailOne from './quadrant1/DetailOne';
import ShopsDetail from './quadrant4/ShopsDetail';
import allLocations from './quadrantGlobal/allLocations';

const App = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 2, 4]);
  const [fov, setFov] = useState(45);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [orbitTarget, setOrbitTarget] = useState([0, .00, .4]);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false); // New state for interaction

  // Combine all location data
  const allLocations = [...quadrant1Data, ...quadrant2Data, ...quadrant3Data, ...quadrant4Data];

  // Find the data for the selected location
  const selectedLocationData = allLocations.find(loc => loc.name === selectedLocation);

  const renderDetailComponent = () => {
    if (!selectedLocationData) {
      return <div>Select a location to see more details</div>;
    }

    // Render the appropriate component based on the selected location
    if (selectedLocation === 'Cape Shopping Center') {
      return <ShopsDetail location={selectedLocationData} />;
    }

    return <DetailOne location={selectedLocationData} />;
  };

  const selectedLocationModelPath = selectedLocation
    ? allLocations.find(loc => loc.name === selectedLocation)?.modelPath
    : null;

  const resetAppState = () => {
    setCameraPosition([0, 2, 4]);
    setFov(45);
    setShowMoreInfo(false);
    setSelectedLocation(null);
    setBackgroundColor('');
    setOrbitTarget([0, .00, .4]);
  };

  const handleMoreInfoClick = () => {
    setShowMoreInfo(prevState => !prevState); // Toggle dropdown visibility
  };

  const orbitControlsRef = useRef(); // Ref for OrbitControls

  const handleSpecificMeshClick = (locationName) => {
    if (!isInteracting) { // Only handle click if not interacting
      setSelectedLocation(locationName);
    }
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
      const controls = orbitControlsRef.current;
      controls.addEventListener('start', () => setIsInteracting(true));
      controls.addEventListener('end', () => setIsInteracting(false));

      return () => {
        controls.removeEventListener('start', () => setIsInteracting(true));
        controls.removeEventListener('end', () => setIsInteracting(false));
      };
    }
  }, []);

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
        handleMoreInfoClick={handleMoreInfoClick}
        showMoreInfo={showMoreInfo}
      />
      <div
        className={`z-40 fixed inset-0 border-t-2 pt-8 transform transition-transform duration-300 ease-in-out ${showMoreInfo ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className='flex flex-row h-full w-full'>
          <div className='w-1/2 h-full bg-black'>
            {selectedLocationModelPath ? (
              <Model modelPath={selectedLocationModelPath} />
            ) : (
              <div>No model available</div>
            )}
          </div>
          <div className='w-1/2 h-full bg-black bg-opacity-400 flex flex-col justify-center items-center pt-8'>
            <div className='bg-white rounded-lg h-full w-full shadow-black shadow-lg pt-10'>
              {renderDetailComponent()}
            </div>
          </div>
        </div>
      </div>

      <FaFighterJet size={40} className="fly-jet z-50" color="#074384" />

      {/* Start Scene */}
      <div className='flex flex-grow bg-white'>
        <Canvas camera={{
          position: cameraPosition,
          fov: fov,
          near: 0.001,
          far: 800,
        }}>
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
          <LittleMagothy />
          <LittleMagothyPark />
          <MainBeach onClick={() => handleSpecificMeshClick('Main Beach')} />
          <Shops onClick={() => handleSpecificMeshClick('Cape Shopping Center')} />
          <Streets />
          <Church onClick={() => handleSpecificMeshClick('St. Andrews By the Bay Church')} />
          <OrbitControls
            ref={orbitControlsRef} // Attach ref to OrbitControls
            target={orbitTarget}
            autoRotateSpeed={-0.5}
            enableZoom={true}
            zoomSpeed={0.8}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default App
