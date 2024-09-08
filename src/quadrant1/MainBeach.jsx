import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import mainBeachModelPath from '../assets/mainbeachbg.glb';

const MainBeach = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(mainBeachModelPath);

  // Log the scene to confirm the model is loaded
  console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(mainBeachModelPath);

export default MainBeach;
