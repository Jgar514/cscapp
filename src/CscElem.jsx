import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import cscElemModelPath from './assets/cscelem17.glb';

const CscElem = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(cscElemModelPath);

  // // Log the scene to confirm the model is loaded
  // console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(cscElemModelPath);

export default CscElem;
