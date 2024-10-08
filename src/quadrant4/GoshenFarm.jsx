import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import goshenFarmModelPath from '/assets/intgoshenfarm.glb';

const GoshenFarm = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(goshenFarmModelPath);

  // Log the scene to confirm the model is loaded
  console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(goshenFarmModelPath);

export default GoshenFarm;
