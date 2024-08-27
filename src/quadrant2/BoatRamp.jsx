import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import boatRampModelPath from '../assets/boatramp6.glb';

const BoatRamp = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(boatRampModelPath);

  // Log the scene to confirm the model is loaded
  console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(boatRampModelPath);

export default BoatRamp;
