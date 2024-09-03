import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import capeFirehouseModelPath from '../assets/capefirehouse6.glb';

const CapeFirehouse = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(capeFirehouseModelPath);

  // Log the scene to confirm the model is loaded
  console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(capeFirehouseModelPath);

export default CapeFirehouse;
