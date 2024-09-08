import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import churchModelPath from '../assets/intchurch.glb';

const Church = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(churchModelPath);

  // Create a yellow material



  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(churchModelPath);

export default Church;
