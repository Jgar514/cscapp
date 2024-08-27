import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import bayModelPath from '../assets/bay7.glb';

const Bay = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(bayModelPath);

  // Create a light blue material using a hex code
  const lightBlueMaterial = new THREE.MeshStandardMaterial({ color: '#91DAEE' }); // Light blue color

  // Apply the material to all meshes in the scene
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = lightBlueMaterial;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(bayModelPath);

export default Bay;
