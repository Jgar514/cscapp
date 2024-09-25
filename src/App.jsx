import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Loader, Stars, Sky } from '@react-three/drei';
import { Helmet } from 'react-helmet';

// quadrant one imports
import quadrant1Data from './quadrant1/quadrant1Data';
import Bay from './quadrant1/Bay';
import MainBeach from './quadrant1/MainBeach';
import CapeClubhouse from './quadrant1/CapeClubhouse';
import CargoShip from './quadrant1/CargoShip';


// quadrant two imports
import quadrant2Data from './quadrant2/quadrant2Data';
import BoatRamp from './quadrant2/BoatRamp';
import DeepCreek from './quadrant2/DeepCreek';
import LakeClaire from './quadrant2/LakeClaire';

// quadrant three imports
import quadrant3Data from './quadrant3/quadrant3Data';
import Broadneck from './quadrant3/Broadneck';
import BroadneckPark from './quadrant3/BroadneckPark';
import Church from './quadrant3/Church';
import OwlBoat from './quadrant3/OwlBoat';
// import BhsLib from './quadrant3/BhsLib';
// import BhsAthletics from './quadrant3/BhsAthletics';

// quadrant four imports
import quadrant4Data from './quadrant4/quadrant4Data';
import CapeField from './quadrant4/CapeField';
import CscElem from './quadrant4/CscElem';
import Shops from './quadrant4/Shops';
import LittleMagothy from './quadrant4/LittleMagothy';
import LittleMagothyPark from './quadrant4/LittleMagothyPark';
import GoshenFarm from './quadrant4/GoshenFarm';
import CapeFirehouse from './quadrant4/CapeFirehouse';
import GuardHouse from './quadrant4/GuardHouse';
import ShopsDetail from './quadrant4/ShopsDetail';

// quadrant global imports
import allLocations from './quadrantGlobal/allLocations';
import Streets from './quadrantGlobal/Streets';
import Floor from './quadrantGlobal/Floor';
import Nav from "./quadrantGlobal/Nav"
import { FaFighterJet } from "react-icons/fa";
import Model from "./quadrantGlobal/Model";
import DetailOne from './quadrant1/DetailOne';
import Houses from './quadrantGlobal/Houses';
import CanvasLoader from './quadrantGlobal/LoadScreen';
import HelpBox from './quadrantGlobal/HelpBox';
import ImagePopup from './quadrantGlobal/ImagePopup';



const App = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // initial state and settings
  const [cameraPosition, setCameraPosition] = useState(isMobile ? [0, 1.8, 4.0] : [0, 1.5, 4.0]);
  const [fov, setFov] = useState(isMobile ? 75 : 45);
  const [orbitTarget, setOrbitTarget] = useState([0, 0, .4]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [dark, setDark] = useState(false);
  const [homes, setHomes] = useState(false);
  const [jetVisible, setJetVisible] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);

  // Function to toggle the image popup
  const handleShowImagePopup = () => {
    setShowImagePopup(true);
  };

  const handleClosePopup = () => {
    setShowImagePopup(false);
  };

  const toggleDark = () => {
    setDark(prevDark => !prevDark);
  };

  const toggleHomes = () => {
    setHomes(prevHomes => !prevHomes);
  };

  const resetAppState = () => {
    setCameraPosition(isMobile ? [0, 1.5, 4.0] : [0, 1.5, 4.0])
    setFov(isMobile ? 75 : 45);
    setShowMoreInfo(false);
    setSelectedLocation(null);
    setBackgroundColor('');
    setOrbitTarget(isMobile ? [0, 0, 0] : [0, .00, .4]);
  };

  // label these
  const [backgroundColor, setBackgroundColor] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [spotlightsInitialized, setSpotlightsInitialized] = useState(false);

  const [showHelp, setShowHelp] = useState(false);

  const handleHelpClose = () => {
    setShowHelp(false);
  };

  const triggerHelp = () => {
    setShowHelp(true);
  };

  // targets for spotlight
  const targetRef = useRef();
  const secondTargetRef = useRef();
  const thirdTargetRef = useRef();
  const fourthTargetRef = useRef();
  const fifthTargetRef = useRef();
  const sixthTargetRef = useRef();
  const seventhTargetRef = useRef();
  const eigthTargetRef = useRef();
  // spotlights
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

  const handleSpecificMeshClick = (locationName) => {
    if (!isInteracting) { // Only handle click if not interacting
      setSelectedLocation(locationName);
    }
  };

  const handleMoreInfoClick = () => {
    setShowMoreInfo(prevState => !prevState); // Toggle dropdown visibility
  };

  const orbitControlsRef = useRef();


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSceneLoaded(true);  // Set scene loaded to true after a timeout (assuming assets have loaded)
  //   }, 3000);  // Adjust timeout duration as needed

  //   return () => clearTimeout(timer);  // Clean up timer on unmount
  // }, []);

  useEffect(() => {
    if (sceneLoaded) {
      // Start the jet animation with a slight delay
      const timer = setTimeout(() => {
        setJetVisible(true);
      }, 1000); // Adjust the delay as needed (1000 ms = 1 second)

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [sceneLoaded]);

  useEffect(() => {
    if (selectedLocation) {
      updateCameraAndTarget(selectedLocation, isMobile);
    }
  }, [selectedLocation]);

  const updateCameraAndTarget = (locationName, isMobile) => {
    const location = allLocations.find(loc => loc.name === locationName);
    if (location) {
      const target = isMobile ? location.mobileOrbitTarget : location.orbitTarget;
      const position = isMobile ? location.mobileCameraPosition : location.cameraPosition;
      const fovValue = isMobile ? location.mobileFov : location.fov;

      if (target) setOrbitTarget(target);
      if (position) setCameraPosition(position);
      if (fovValue) setFov(fovValue);

      setBackgroundColor(location.color);

      if (orbitControlsRef.current) {
        orbitControlsRef.current.update();
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
    <>
      <Helmet>
        <title>Cape St. Claire 3D: Explore Your Community in Stunning Detail</title>
        <meta name="description" content="Originally designed to be a community of summer cottages, Cape St. Claire is now home to approximately 7,800 year-round residents living in more than 2,300 single-family homes." />
      </Helmet>
      <div className="w-full h-screen relative flex flex-col md:pb-0 pb-24">

        <Nav
          isMobile={isMobile}
          dark={dark}
          toggleDark={toggleDark}
          homes={homes}
          toggleHomes={toggleHomes}
          backgroundColor={backgroundColor}
          locationName={selectedLocation}
          resetAppState={resetAppState}
          handleMoreInfoClick={handleMoreInfoClick}
          showMoreInfo={showMoreInfo}
          allLocations={allLocations} // Pass all locations data
          setSelectedLocation={setSelectedLocation}
          triggerHelp={triggerHelp}
        />
        {showHelp && (
          <HelpBox message="This is an Help message!" onClose={handleHelpClose} />
        )}
        {/* Jet Animation */}
        {jetVisible && (

          <FaFighterJet size={40} className="fly-jet" color="#074384" />

        )}


        <div
          className={`z-40 bg-white fixed inset-0 border-t-2 pt-[100px] md:pt-8 transform transition-transform duration-300 ease-in-out ${showMoreInfo ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className='flex flex-col md:flex-row h-full w-full'>
            <div className='w-full h-1/3 md:w-1/2 md:h-full bg-black'>
              {selectedLocationModelPath ? (
                <Model modelPath={selectedLocationModelPath} />
              ) : (
                <div>No model available</div>
              )}
            </div>
            <div className='w-full h-2/3 md:w-1/2 md:h-full bg-black bg-opacity-400 flex flex-col justify-center items-center md:pt-8'>
              <div className='bg-white rounded-lg h-full w-full shadow-black shadow-lg md:pt-10 overflow-hidden p-2'>
                {renderDetailComponent()}
              </div>
            </div>
          </div>
        </div>

        <ImagePopup
          show={showImagePopup}
          onClose={handleClosePopup}
          imageUrl="/assets/owlboat.png"
          altText="Sample Image"
        />

        {/* Start Scene */}
        <div className={`flex flex-grow  md:pb-0 ${dark ? 'bg-black' : 'bg-white'} `}>


          <Canvas onCreated={() => setSceneLoaded(true)} camera={{
            position: cameraPosition,
            fov: fov,
            near: 0.001,
            far: 1300,
          }}

            gl={{ logarithmicDepthBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                ref={orbitControlsRef} // Attach ref to OrbitControls
                target={orbitTarget}
                autoRotate={true}
                autoRotateSpeed={-.7}
                enableZoom={true}
                zoomSpeed={0.8}
                minPolarAngle={Math.PI / 8}
                maxPolarAngle={Math.PI - Math.PI / 2}
              />
              <ambientLight intensity={dark ? 3 : 3} />
              <directionalLight
                position={[5, 10, 5]}      // Position of the "sun"
                intensity={.75}            // Brightness of the light
                castShadow                 // Enable shadows
                shadow-mapSize-width={1024} // Shadow resolution (higher for more detail)
                shadow-mapSize-height={1024}
                shadow-camera-far={50}      // Maximum distance for shadows
                shadow-camera-left={-10}    // Camera frustum for shadow
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />
              {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade /> */}
              {/* <Sky distance={450000} sunPosition={[0, 5, -2]} inclination={0} azimuth={0.25} /> */}
              {/* quadrant one components */}
              <Bay dark={dark} />
              <MainBeach onClick={() => handleSpecificMeshClick('Main Beach')} />
              <CapeClubhouse onClick={() => handleSpecificMeshClick('Cape Club House')} />
              <CargoShip />

              {/* quadrant two components */}
              <DeepCreek dark={dark} />
              <BoatRamp onClick={() => handleSpecificMeshClick('Boat Ramp')} />
              <LakeClaire onClick={() => handleSpecificMeshClick("Lake Claire Lake, Beach and Fishing Pier")} />

              {/* quadrant three components */}
              <Church onClick={() => handleSpecificMeshClick('St. Andrews By the Bay Church')} />
              <Broadneck onClick={() => handleSpecificMeshClick('Broadneck High School')} />
              <OwlBoat onClick={handleShowImagePopup} />


              <BroadneckPark />
              {homes && (
                <Houses homes={homes} toggleHomes={toggleHomes} dark={dark} />
              )}

              {/* quadrant four components */}
              <Shops onClick={() => handleSpecificMeshClick('Cape Shopping Center')} />
              <CapeField onClick={() => handleSpecificMeshClick('Cape Field')} />
              <CapeFirehouse onClick={() => handleSpecificMeshClick('Cape Firehouse')} />
              <CscElem onClick={() => handleSpecificMeshClick('CSC Elementary')} />
              <GoshenFarm onClick={() => handleSpecificMeshClick('Goshen Farm')} />
              <GuardHouse onClick={() => handleSpecificMeshClick('Guard House')} />
              <LittleMagothy dark={dark} />
              <LittleMagothyPark onClick={() => handleSpecificMeshClick('Little Magothy Park and Kayak Launch')} />

              {/* quadrant global components */}
              <Streets />
              <Floor dark={dark} />

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
              <spotLight ref={spotLight4} position={[-.4, 2, -1]} angle={Math.PI / 10} penumbra={0.2} intensity={.5} distance={50} decay={2} castShadow />
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
                <meshStandardMaterial color="#654321" transparent opacity={0} />
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
            </Suspense >
          </Canvas>

        </div>
      </div>
    </>
  );
};

export default App
