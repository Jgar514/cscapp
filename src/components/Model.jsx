import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls } from '@react-three/drei';
import GLTFModel from '../Loader';

const Model = ({ modelPath }) => {
  return (
    <Canvas>
      <Stage
        adjustCamera={.8}
        intensity={1}
        environment="park"
        preset="rembrandt"
        shadows
        rotation={[0, Math.PI, 0]}
      >
        <GLTFModel modelPath={modelPath} rotation={[0, Math.PI, 0]}></GLTFModel>
      </Stage>
      <OrbitControls
        target={[0, 0, 0]} // Center the model
        position={[0, 5, 5]} // Camera above and slightly forward, looking down at an angle
        maxPolarAngle={Math.PI / 2} // Prevent the camera from going below the model
        minPolarAngle={0} // Allows the camera to only look from above
      />
    </Canvas>
  );
};

export default Model;
