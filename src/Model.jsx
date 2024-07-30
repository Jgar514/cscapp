// src/Model.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei'; // Import useGLTF and preload from @react-three/drei
import modelPath from './assets/model.glb'; // Correct import path for the model

const Model = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(modelPath); // Load the model

  return (
    <group ref={groupRef} {...props} position={[0, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={scene} /> {/* Add the loaded model to the scene */}
    </group>
  );
};

useGLTF.preload(modelPath); // Preload the model

export default Model;
