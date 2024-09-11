import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import cargoShipModelPath from '/assets/intcargoship.glb';

const CargoShip = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF(cargoShipModelPath);

  // Log the scene to confirm the model is loaded
  console.log(scene);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(cargoShipModelPath);

export default CargoShip;
