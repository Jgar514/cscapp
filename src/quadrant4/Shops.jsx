import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import shopsModelPath from '/assets/shops27.glb';

const Shops = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(shopsModelPath);

  // Create a dark grey material
  // Dark grey color

  // Apply the material to all meshes in the scene


  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(shopsModelPath);

export default Shops;
