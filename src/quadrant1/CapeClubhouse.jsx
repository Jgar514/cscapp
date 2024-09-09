import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import capeClubhouseModelPath from '/assets/intcapeclubhouse.glb';

const CapeClubhouse = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(capeClubhouseModelPath);

  // Log the scene to confirm the model is loaded
  console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(capeClubhouseModelPath);

export default CapeClubhouse;
