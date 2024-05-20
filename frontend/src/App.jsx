// src/App.js
import React from 'react';
import './App.css';
import './index.css';
import Home from './components/Home';
import Footer from './components/Footer';
import ParticleEffect from './components/ParticleEffect';
import { ParticleProvider } from './ParticleContext';

function App() {
  return (
    <ParticleProvider>
      <div className="bg-[#0d051f] min-h-screen flex flex-col justify-between">
        <ParticleEffect />
        <Home />
        <Footer />
      </div>
    </ParticleProvider>
  );
}

export default App;
