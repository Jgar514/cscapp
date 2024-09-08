import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import guardHouseModelPath from '../assets/intguardhouse.glb';

const GuardHouse = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(guardHouseModelPath);

  // Gray color

  // Apply the gradient material to all meshes in the scene




  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(guardHouseModelPath);

export default GuardHouse;
