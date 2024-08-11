import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import floorModelPath from './assets/floor1.glb';

const Floor = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(floorModelPath);

  // Create a white material
  const whiteMaterial = new THREE.MeshStandardMaterial({ color: '#FFFFFF', emissive: '#FFFFFF', emissiveIntensity: 1 });

  // Apply the material to all meshes in the scene
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = whiteMaterial;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(floorModelPath);

export default Floor;
