import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import deepCreekModelPath from '/assets/deepcreek.glb';

const DeepCreek = ({ dark, ...props }) => {
  const groupRef = useRef();
  const { scene } = useGLTF(deepCreekModelPath);

  const lightMaterial = new THREE.MeshStandardMaterial({ color: '#367588' }); // Light blue
  const darkMaterial = new THREE.MeshStandardMaterial({ color: '#2A4D59' });

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

useGLTF.preload(deepCreekModelPath);

export default DeepCreek;
