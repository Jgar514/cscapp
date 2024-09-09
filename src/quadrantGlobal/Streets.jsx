import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import streetsModelPath from '/assets/intstreets.glb';

const Streets = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(streetsModelPath);

  // Traverse the scene to ensure all materials are set up correctly
  scene.traverse((child) => {
    if (child.isMesh) {
      // Remove the opacity logic since it's no longer needed
      child.material.transparent = false; // Ensure transparency is disabled if not needed
      child.material.opacity = 1; // Set opacity to 1 (fully opaque)
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
