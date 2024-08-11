import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import treesModelPath from './assets/trees6.glb';

const Trees = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(treesModelPath);

  // Log the scene to confirm the model is loaded
  console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(treesModelPath);

export default Trees;
