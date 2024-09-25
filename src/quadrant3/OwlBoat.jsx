import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import owlBoatModelPath from '/assets/intowlboat.glb';

const OwlBoat = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(owlBoatModelPath);





  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(owlBoatModelPath);

export default OwlBoat;