import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import broadneckParkModelPath from '/assets/intbroadneckpark.glb';

const BroadneckPark = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(broadneckParkModelPath);





  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(broadneckParkModelPath);

export default BroadneckPark;
