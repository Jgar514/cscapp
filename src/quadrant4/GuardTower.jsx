import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import guardTowerModelPath from '../assets/guardtower2.glb';

const GuardTower = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(guardTowerModelPath);

  // Gray color

  // Apply the gradient material to all meshes in the scene




  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(guardTowerModelPath);

export default GuardTower;
