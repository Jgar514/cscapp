import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import streetsModelPath from '../assets/streets16.glb';

const Streets = ({ opacity, ...props }) => {  // Accept opacity as a prop
  const groupRef = useRef();
  const { scene } = useGLTF(streetsModelPath);

  // Apply the opacity to all meshes in the scene
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      child.material.opacity = opacity;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(streetsModelPath);

export default Streets;
