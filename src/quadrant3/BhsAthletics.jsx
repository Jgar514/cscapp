import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import bhsAthleticsModelPath from '../assets/bhsathleticsbg.glb';

const BhsAthletics = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(bhsAthleticsModelPath);

  // Gray color

  // Apply the gradient material to all meshes in the scene




  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(bhsAthleticsModelPath);

export default BhsAthletics;
