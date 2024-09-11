import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import bayModelPath from '/assets/intbay.glb';

const Bay = ({ dark, ...props }) => {
  const groupRef = useRef();
  const { scene } = useGLTF(bayModelPath);

  // Define materials for light mode and dark mode
  const lightMaterial = new THREE.MeshStandardMaterial({ color: '#367588' }); // Light blue
  const darkMaterial = new THREE.MeshStandardMaterial({ color: '#2A4D59' });

  // Apply the correct material to all meshes in the scene based on dark mode
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = dark ? darkMaterial : lightMaterial;
      }
    });
  }, [dark, scene, darkMaterial, lightMaterial]);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(bayModelPath);

export default Bay;
