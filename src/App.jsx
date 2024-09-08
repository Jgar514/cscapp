import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Cloud } from '@react-three/drei';
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
import DeepCreek from './quadrant2/DeepCreek';
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
import Floor from './quadrantGlobal/Floor';
import BhsLib from './quadrant3/BhsLib';
import BhsAthletics from './quadrant3/BhsAthletics';



const App = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 2, 4]);
  const [fov, setFov] = useState(45);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [orbitTarget, setOrbitTarget] = useState([0, .00, .4]);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [sceneLoaded, setSceneLoaded] = useState(false);

  const [spotlightsInitialized, setSpotlightsInitialized] = useState(false);
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
    const timer = setTimeout(() => {
      setSceneLoaded(true);  // Set scene loaded to true after a timeout (assuming assets have loaded)
    }, 2000);  // Adjust timeout duration as needed

    return () => clearTimeout(timer);  // Clean up timer on unmount
  }, []);

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
            <div className='bg-white rounded-lg h-full w-full shadow-black shadow-lg pt-10 overflow-hidden'>
              {renderDetailComponent()}
            </div>
          </div>
        </div>
      </div>

      {/* Jet Animation */}
      {sceneLoaded && (
        <FaFighterJet size={40} className="fly-jet z-50" color="#074384" />
      )}


      {/* Start Scene */}
      <div className='flex flex-grow bg-white'>
        <Canvas onCreated={() => setSceneLoaded(true)} camera={{
          position: cameraPosition,
          fov: fov,
          near: 0.001,
          far: 1300,
        }}>
          <ambientLight intensity={3} />
          <directionalLight
            position={[5, 10, 5]}      // Position of the "sun"
            intensity={.5}            // Brightness of the light
            castShadow                 // Enable shadows
            shadow-mapSize-width={1024} // Shadow resolution (higher for more detail)
            shadow-mapSize-height={1024}
            shadow-camera-far={50}      // Maximum distance for shadows
            shadow-camera-left={-10}    // Camera frustum for shadow
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          {/* <BhsLib onClick={() => handleSpecificMeshClick('Broadneck Library')} />
          <BhsAthletics onClick={() => handleSpecificMeshClick('Broadneck Athletics')} />
          <Broadneck onClick={() => handleSpecificMeshClick('Broadneck High School')} /> */}
          <BroadneckPark />
          <Floor />
          <Bay />
          <BoatRamp onClick={() => handleSpecificMeshClick('Boat Ramp')} />



          <CapeClubhouse onClick={() => handleSpecificMeshClick('Cape Club House')} />
          <CapeField onClick={() => handleSpecificMeshClick('Cape Field')} />
          <CapeFirehouse onClick={() => handleSpecificMeshClick('Cape Firehouse')} />
          <CscElem onClick={() => handleSpecificMeshClick('CSC Elementary')} />
          <DeepCreek />
          <GoshenFarm onClick={() => handleSpecificMeshClick('Goshen Farm')} />
          <GuardHouse onClick={() => handleSpecificMeshClick('Guard House')} />
          <LakeClaire onClick={() => handleSpecificMeshClick("Lake Claire Lake, Beach and Fishing Pier")} />
          <LittleMagothy />
          <LittleMagothyPark onClick={() => handleSpecificMeshClick('Little Magothy Park and Kayak Launch')} />
          <MainBeach onClick={() => handleSpecificMeshClick('Main Beach')} />
          <Shops onClick={() => handleSpecificMeshClick('Cape Shopping Center')} />
          <Streets />
          <Church onClick={() => handleSpecificMeshClick('St. Andrews By the Bay Church')} />
          <OrbitControls
            ref={orbitControlsRef} // Attach ref to OrbitControls
            target={orbitTarget}
            autoRotate={false}
            autoRotateSpeed={-.8}
            enableZoom={true}
            zoomSpeed={0.8}
          />



          {/* cape field and shops spotlight */}
          <spotLight ref={spotLight2} position={[1, 2, 1]} angle={Math.PI / 16} penumbra={0.2} intensity={5} distance={50} decay={2} castShadow />
          <mesh ref={secondTargetRef} position={[1.0, -.008, 1]}>
            <boxGeometry args={[.55, 0.06, .55]} />
            <meshStandardMaterial color="green" transparent opacity={0} />
          </mesh>
          <spotLight
            position={[1, 2, 1]}
            angle={Math.PI / 16}
            penumbra={0.2}
            intensity={5}
            distance={50}
            decay={2}
            castShadow
            target={secondTargetRef.current}
          />
          {/* Third target mesh and spotlight */}

          <spotLight
            position={[.35, 2, 1]}
            angle={Math.PI / 9}
            penumbra={0.2}
            intensity={5}
            distance={50}
            decay={2}
            castShadow
            target={thirdTargetRef.current}
          />
          {/* csc elementary spotlight */}
          <spotLight ref={spotLight3} position={[.35, 2, 1]} angle={Math.PI / 9} penumbra={0.2} intensity={2} distance={50} decay={2} castShadow />
          <mesh ref={thirdTargetRef} position={[.35, 0, 1]}>
            <boxGeometry args={[.6, 0.08, .6]} />
            <meshStandardMaterial color="#4682B4" transparent opacity={1} />
          </mesh>


          {/* lake claire spotlight */}
          <spotLight ref={spotLight4} position={[-.4, 2, -1]} angle={Math.PI / 10} penumbra={0.2} intensity={2.5} distance={50} decay={2} castShadow />
          <mesh ref={fourthTargetRef} position={[-.4, -.055, -1]}>
            <boxGeometry args={[.6, 0.08, .6]} />
            <meshStandardMaterial color="#add8e6" transparent opacity={0} />
          </mesh>
          <spotLight
            position={[-.4, 2, -1]}
            angle={Math.PI / 8}
            penumbra={0.2}
            intensity={2}
            distance={50}
            decay={2}
            castShadow
            target={fourthTargetRef.current}
          />
          {/* main beach and cape club house spotlight */}
          <spotLight ref={spotLight5} position={[1.7, 2, -.35]} angle={Math.PI / 6} penumbra={0.2} intensity={2} distance={50} decay={2} castShadow />
          <mesh ref={fifthTargetRef} position={[1.7, -.055, -.35]}>
            <boxGeometry args={[.8, 0.08, .8]} />
            <meshStandardMaterial color="#add8e6" transparent opacity={0} />
          </mesh>
          <spotLight
            position={[1.7, 2, -.35]}
            angle={Math.PI / 6}
            penumbra={0.2}
            intensity={2}
            distance={50}
            decay={2}
            castShadow
            target={fifthTargetRef.current}
          />
          {/* Church spotlight */}

          <spotLight ref={spotLight6} position={[-.3, 2, 2.2]} angle={Math.PI / 16} penumbra={0.2} intensity={2} distance={50} decay={2} castShadow />
          <mesh ref={sixthTargetRef} position={[-.25, .04, 2.1]} rotation={[Math.PI / 1, -.2, .1]}>
            <boxGeometry args={[.3, 0.08, .45]} />
            <meshStandardMaterial color="#ffd700" transparent opacity={0} />
          </mesh>

          <spotLight
            position={[-.3, 2, 2.2]}
            angle={Math.PI / 16}
            penumbra={0.2}
            intensity={2}
            distance={50}
            decay={2}
            castShadow
            target={sixthTargetRef.current}
          />

          {/* goshen farm */}
          <spotLight ref={spotLight7} position={[.37, 2, 1.3]} angle={Math.PI / 20} penumbra={0.2} intensity={2} distance={50} decay={2} castShadow />
          <mesh ref={seventhTargetRef} position={[.37, 0.06, 1.3]}>
            <boxGeometry args={[.16, 0.010, .20]} />
            <meshStandardMaterial color="#654321" transparent opacity={1} />
          </mesh>
          <spotLight
            position={[.37, 2, 1.3]}
            angle={Math.PI / 30}
            penumbra={0.2}
            intensity={4}
            distance={50}
            decay={2}
            castShadow
            target={seventhTargetRef.current}
          />
          {/* boat ramp spotlight */}
          <spotLight ref={spotLight8} position={[-1.7, 2, -.45]} angle={Math.PI / 15} penumbra={0.2} intensity={2} distance={50} decay={2} castShadow />
          <mesh ref={eigthTargetRef} position={[-1.7, -.04, -.45]}>
            <boxGeometry args={[.3, 0.08, .3]} />
            <meshStandardMaterial color="#add8e6" transparent opacity={0} />
          </mesh>
          <spotLight
            position={[-1.7, 2, -.45]}
            angle={Math.PI / 15}
            penumbra={0.2}
            intensity={2}
            distance={50}
            decay={2}
            castShadow
            target={eigthTargetRef.current}
          />
          {/* <Cloud
            position={[-.75, .1, 0]}  // Position above the scene
            opacity={1}         // Transparency of clouds
            speed={0.4}           // Speed at which clouds move
            width={1000}            // Original width of the cloud layer
            depth={1000}           // Original depth of the cloud layer
            segments={20}        // Original segments for cloud detail
            scale={[0.012, 0.01, 0.01]}  // Scale down the entire cloud layer
            color="skyblue"
          /> */}

        </Canvas>
      </div>
    </div>
  );
};

export default App
