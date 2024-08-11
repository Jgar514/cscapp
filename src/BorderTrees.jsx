import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import borderTreesModelPath from './assets/bordertrees10.glb';

const BorderTrees = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(borderTreesModelPath);

  // Log the scene to confirm the model is loaded
  console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(borderTreesModelPath);

export default BorderTrees;
