import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import floorModelPath from '/assets/floorbg.glb';

const Floor = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(floorModelPath);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false; // Ensure shadows are disabled
        child.receiveShadow = false;
        child.material = new MeshStandardMaterial({
          color: 'white',
          emissive: 'white',         // Make the material emit some light
          emissiveIntensity: 1,    // Increase the intensity of the emissive light
          roughness: 0,
          metalness: 0,
          vertexColors: false,
          transparent: false,  // Disable transparency
          opacity: 1,   // Disable any vertex colors from Blender
        });
      }
    });
  }, [scene]);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(floorModelPath);

export default Floor;
