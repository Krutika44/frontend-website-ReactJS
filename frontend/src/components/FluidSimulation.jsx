// FluidSimulation.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

const FluidSimulation = () => {
  const meshRef = useRef();

  useFrame(() => {
    const mesh = meshRef.current;
    if (mesh) {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default FluidSimulation;
