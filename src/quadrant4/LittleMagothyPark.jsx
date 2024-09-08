import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import littleMagothyParkModelPath from '../assets/intlittlemagothypark.glb';

const LittleMagothyPark = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(littleMagothyParkModelPath);

  // Log the scene to confirm the model is loaded
  console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(littleMagothyParkModelPath);

export default LittleMagothyPark;
