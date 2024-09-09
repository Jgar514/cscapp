import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import bhsLibModelPath from '/assets/bhslibbg.glb';
import { BoxHelper } from 'three';

const BhsLib = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(bhsLibModelPath);

  // Add BoxHelper when the component mounts
  useEffect(() => {
    if (groupRef.current) {
      const boxHelper = new BoxHelper(scene, 'red'); // 'red' is the color of the bounding box outline
      groupRef.current.add(boxHelper); // Add BoxHelper to the same group as the mesh
    }
  }, [scene]);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} renderOrder={2} />
    </group>
  );
};

useGLTF.preload(bhsLibModelPath);

export default BhsLib;
