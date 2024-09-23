import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import floorModelPath from '/assets/intfloor.glb';

const Floor = ({ dark, ...props }) => {
  const groupRef = useRef();
  const { scene } = useGLTF(floorModelPath);

  // Create materials based on dark mode
  const lightMaterial = new MeshStandardMaterial({
    color: 'white',
    emissive: 'white',
    emissiveIntensity: 1,
    roughness: 0,
    metalness: 0,
    vertexColors: false,
    transparent: false,
    opacity: 1,
  });

  const darkMaterial = new MeshStandardMaterial({
    color: '#333333',
    emissive: '#333333',
    emissiveIntensity: 1,
    roughness: 0.8, // Increased roughness for a less shiny appearance
    metalness: 0,   // Keep it non-metallic
    vertexColors: false,
    transparent: false,
    opacity: 1,
  });


  useEffect(() => {
    const material = dark ? darkMaterial : lightMaterial;

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false; // Ensure shadows are disabled
        child.receiveShadow = false;
        child.material = material; // Apply the chosen material
      }
    });
  }, [dark, scene, darkMaterial, lightMaterial]);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(floorModelPath);

export default Floor;
