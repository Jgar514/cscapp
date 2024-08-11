import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE for materials
import streetsModelPath from './assets/streets9.glb';

const Streets = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(streetsModelPath);

  // // Create a black material
  // const blackMaterial = new THREE.MeshStandardMaterial({ color: 'black' });

  // // Apply the material to all meshes in the scene
  // scene.traverse((child) => {
  //   if (child.isMesh) {
  //     child.material = blackMaterial;
  //   }
  // });

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(streetsModelPath);

export default Streets;
