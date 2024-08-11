import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import littleMagothyModelPath from './assets/littlemagothy3.glb';

const LittleMagothy = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(littleMagothyModelPath);

  // Create a material using a hex code
  const material = new THREE.MeshStandardMaterial({ color: '#91DAEE' }); // Light blue color

  // Apply the material to all meshes in the scene
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(littleMagothyModelPath);

export default LittleMagothy;
