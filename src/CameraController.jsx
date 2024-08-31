// CameraController.jsx
import React, { useRef, useState, useEffect } from 'react';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function CameraController({ targetPosition, targetOrbit, fov, isTransitioning, onTransitionEnd }) {
  const cameraRef = useRef();
  const controlsRef = useRef();
  const [currentPosition, setCurrentPosition] = useState(new THREE.Vector3(...targetPosition));
  const [currentOrbit, setCurrentOrbit] = useState(new THREE.Vector3(...targetOrbit));

  useEffect(() => {
    if (isTransitioning) {
      setCurrentPosition(new THREE.Vector3(...targetPosition));
      setCurrentOrbit(new THREE.Vector3(...targetOrbit));
    }
  }, [targetPosition, targetOrbit, isTransitioning]);

  useFrame(() => {
    if (cameraRef.current && isTransitioning) {
      // Smoothly interpolate camera position
      cameraRef.current.position.lerp(currentPosition, 0.1);
      cameraRef.current.lookAt(...currentOrbit.toArray());

      // Smoothly interpolate OrbitControls target
      if (controlsRef.current) {
        controlsRef.current.target.lerp(currentOrbit, 0.1);
        controlsRef.current.update();
      }

      // Check if transition is complete
      const positionDistance = cameraRef.current.position.distanceTo(currentPosition);
      const targetDistance = controlsRef.current.target.distanceTo(currentOrbit);

      if (positionDistance < 0.01 && targetDistance < 0.01) {
        onTransitionEnd(); // Notify parent component that transition is complete
      }
    }
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        position={currentPosition}
        fov={fov}
        makeDefault
      />
      <OrbitControls
        ref={controlsRef}
        autoRotateSpeed={-0.5}
        enableZoom={true}
        zoomSpeed={0.8}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.2}
      />
    </>
  );
}

export default CameraController;
