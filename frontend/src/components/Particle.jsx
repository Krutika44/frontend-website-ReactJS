// src/components/Particle.js
import React, { useEffect } from 'react';

const Particle = ({ x, y, color }) => {
  useEffect(() => {
    const particle = document.getElementById(`particle-${x}-${y}-${color}`);
    if (particle) {
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.backgroundColor = color;
      particle.classList.add('animate-fade');
    }
  }, [x, y, color]);

  return <div id={`particle-${x}-${y}-${color}`} className="particle w-4 h-4 rounded-full absolute pointer-events-none"></div>;
};

export default Particle;
