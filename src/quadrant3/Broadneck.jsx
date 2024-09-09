import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { BoxHelper } from 'three';
import broadneckModelPath from '/assets/intbroadneck.glb';

const Broadneck = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(broadneckModelPath);


  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} renderOrder={0} />
    </group>
  );
};

useGLTF.preload(broadneckModelPath);

export default Broadneck;
