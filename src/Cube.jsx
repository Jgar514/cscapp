// src/Cube.jsx
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Cube = ({ position, onClick }) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Optional: rotate the cube
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position} // Apply the position prop
      scale={active ? .3 : .3} // Toggles the scale based on the active state
      onClick={() => {
        setActive(!active); // Toggles the active state when the cube is clicked
        onClick();
      }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[.7, .7, .7]} />
      <meshStandardMaterial color={hovered ? 'gray' : 'maroon'} />
    </mesh>
  );
};

export default Cube;
