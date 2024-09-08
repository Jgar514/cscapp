import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { PointLight, SpotLight } from 'three'; // Import PointLight and SpotLight from Three.js
import GLTFModel from '../Loader';

const Model = ({ modelPath }) => {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        position={[0, .25, 1]} // Move the camera closer to the model
        fov={50} // Field of view
        near={0.1} // Near clipping plane
        far={1000} // Far clipping plane
      />
      <OrbitControls
        target={[0, 0, 0]} // Center the model at the origin
        enableZoom={true} // Enable zooming
        enablePan={false}  // Disable panning
      />
      {/* Lighting */}
      <ambientLight intensity={0.5} /> {/* Moderate ambient light */}

      {/* Point Lights positioned very close to the model */}
      <pointLight
        position={[0.5, 0.5, 0.5]} // Close to the model
        intensity={2} // Increased intensity
        decay={2}
      />
      <pointLight
        position={[-0.5, -0.5, -0.5]} // Opposite side for better coverage
        intensity={2} // Increased intensity
        decay={2}
      />

      {/* Spotlight positioned close to the model */}
      <spotLight
        position={[1, 1, 1]} // Close to the model
        angle={0.5} // Wider angle
        penumbra={1}
        intensity={3} // Increased intensity
        distance={3} // Shorter distance
        castShadow
      />

      <GLTFModel modelPath={modelPath} />
    </Canvas>
  );
};

export default Model;
