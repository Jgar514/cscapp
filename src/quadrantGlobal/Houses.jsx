import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import housesModelPath from '/assets/inthouses.glb';
import * as THREE from 'three';

const Houses = ({ homes, toggleHomes, dark, ...props }) => {
  const groupRef = useRef();
  const { scene } = useGLTF(housesModelPath);

  // Define materials for light mode and dark mode
  const lightMaterial = new THREE.MeshStandardMaterial({ color: '#000000' }); // Light blue
  const darkMaterial = new THREE.MeshStandardMaterial({ color: '#000000' });

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

useGLTF.preload(housesModelPath);

export default Houses;
