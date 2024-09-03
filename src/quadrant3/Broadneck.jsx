import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import broadneckModelPath from '../assets/broadneck32.glb';

const Broadneck = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(broadneckModelPath);

  // Gray color

  // Apply the gradient material to all meshes in the scene




  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(broadneckModelPath);

export default Broadneck;
