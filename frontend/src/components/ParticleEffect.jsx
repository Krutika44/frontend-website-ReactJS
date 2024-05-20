// src/components/ParticleEffect.js
import React, { useContext } from 'react';
import { ParticleContext } from '../ParticleContext';
import Particle from './Particle';

const ParticleEffect = () => {
  const { particles } = useContext(ParticleContext);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map((particle) => (
        <Particle key={particle.id} x={particle.x} y={particle.y} color={particle.color} />
      ))}
    </div>
  );
};

export default ParticleEffect;
