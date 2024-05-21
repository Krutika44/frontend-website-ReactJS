import React, { createContext, useState, useEffect } from 'react';

const ParticleContext = createContext();

const ParticleProvider = ({ children }) => {
  const [particles, setParticles] = useState([]);
  const colors = ['#FF0080', '#FF8C00', '#FFD700', '#7FFF00', '#00FFFF', '#1E90FF', '#BA55D3'];

  const handleMouseMove = (e) => {
    const newParticle = {
      x: e.clientX,
      y: e.clientY,
      color: colors[Math.floor(Math.random() * colors.length)],
      id: new Date().getTime()
    };

    setParticles((prevParticles) => [...prevParticles, newParticle]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prevParticles) => prevParticles.slice(1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ParticleContext.Provider value={{ particles }}>
      {children}
    </ParticleContext.Provider>
  );
};

export { ParticleContext, ParticleProvider };
