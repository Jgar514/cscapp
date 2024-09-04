import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import lakeClaireModelPath from '../assets/lakeclaire.glb';

const LakeClaire = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(lakeClaireModelPath);

  // Log the scene to confirm the model is loaded
  console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(lakeClaireModelPath);

export default LakeClaire;
