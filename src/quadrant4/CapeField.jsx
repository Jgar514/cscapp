import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import capeFieldModelPath from '../assets/intcapefield.glb';

const CapeField = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(capeFieldModelPath);



  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(capeFieldModelPath);

export default CapeField;
