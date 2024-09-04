// Spotlights.jsx

import React, { useRef } from 'react';
import { SpotLight, Box, MeshStandardMaterial } from '@react-three/drei';

const Spotlight = ({ position, angle, intensity, targetRef }) => {
  return (
    <>
      <SpotLight
        position={position}
        angle={angle}
        penumbra={0.2}
        intensity={intensity}
        distance={50}
        decay={2}
        castShadow
        target={targetRef.current}
      />
      <mesh ref={targetRef} position={[position[0], position[1] - 1, position[2]]}>
        <Box args={[1, 0.1, 1]} />
        <MeshStandardMaterial color="brown" transparent opacity={0.8} />
      </mesh>
    </>
  );
};

const Spotlights = () => {
  const targetRef1 = useRef();
  const targetRef2 = useRef();
  const targetRef3 = useRef();
  const targetRef4 = useRef();
  const targetRef5 = useRef();
  const targetRef6 = useRef();
  const targetRef7 = useRef();
  const targetRef8 = useRef();

  return (
    <>
      {/* Spotlight 1 */}
      <Spotlight
        position={[-.7, 2, 1]}
        angle={Math.PI / 12}
        intensity={8}
        targetRef={targetRef1}
      />
      {/* Spotlight 2 */}
      <Spotlight
        position={[1, 1.5, 1]}
        angle={Math.PI / 16}
        intensity={8}
        targetRef={targetRef2}
      />
      {/* Spotlight 3 */}
      <Spotlight
        position={[.35, 1, 1]}
        angle={Math.PI / 9}
        intensity={1}
        targetRef={targetRef3}
      />
      {/* Spotlight 4 */}
      <Spotlight
        position={[-.4, 1, -1]}
        angle={Math.PI / 8}
        intensity={.8}
        targetRef={targetRef4}
      />
      {/* Spotlight 5 */}
      <Spotlight
        position={[1.7, 1, -.35]}
        angle={Math.PI / 6}
        intensity={1.5}
        targetRef={targetRef5}
      />
      {/* Spotlight 6 */}
      <Spotlight
        position={[-.3, 1, 2.2]}
        angle={Math.PI / 16}
        intensity={4}
        targetRef={targetRef6}
      />
      {/* Spotlight 7 */}
      <Spotlight
        position={[.37, 1, 1.3]}
        angle={Math.PI / 20}
        intensity={3}
        targetRef={targetRef7}
      />
      {/* Spotlight 8 */}
      <Spotlight
        position={[-1.7, 1, -.45]}
        angle={Math.PI / 15}
        intensity={2}
        targetRef={targetRef8}
      />
    </>
  );
};

export default Spotlights;
