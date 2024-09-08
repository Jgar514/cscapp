import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { BoxHelper } from 'three';
import broadneckModelPath from '../assets/broadneckbg.glb';

const Broadneck = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(broadneckModelPath);

  // Add BoxHelper when the component mounts
  useEffect(() => {
    if (groupRef.current && scene) {
      // Create and add BoxHelper to the group
      const boxHelper = new BoxHelper(scene, 'gray'); // 'gray' is the color of the bounding box outline
      groupRef.current.add(boxHelper); // Add BoxHelper to the same group as the mesh
    }
  }, [scene]);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} renderOrder={0} />
    </group>
  );
};

useGLTF.preload(broadneckModelPath);

export default Broadneck;
