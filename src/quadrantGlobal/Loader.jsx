import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const GLTFModel = ({ modelPath, ...props }) => {
  const groupRef = useRef();
  const { scene } = useGLTF(modelPath);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

// Preload the model to optimize loading performance
export const preloadModel = (modelPath) => {
  useGLTF.preload(modelPath);
};

export default GLTFModel;
