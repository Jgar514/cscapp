import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import islandModelPath from './assets/island7.glb';

const Island = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(islandModelPath);

  // Log the scene to confirm the model is loaded
  console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(islandModelPath);

export default Island;
