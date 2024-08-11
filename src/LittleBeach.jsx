import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import littleBeachModelPath from './assets/littlebeach8.glb';

const LittleBeach = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(littleBeachModelPath);

  // Log the scene to confirm the model is loaded
  console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(littleBeachModelPath);

export default LittleBeach;
