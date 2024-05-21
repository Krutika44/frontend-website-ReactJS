import "./index.css";
import { useRef, useEffect } from 'react'
import Fluid from 'webgl-fluid'
import Home from './components/Home'
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home4 from "./components/Home4";
import Home5 from "./components/Home5";


function App() {
  const canvas = useRef(null);

  useEffect(() => {
    let c = canvas.current;
    const config = {
      SIM_RESOLUTION: 128,        // Resolution of the simulation grid
      DYE_RESOLUTION: 512,        // Resolution of the dye grid
      DENSITY_DISSIPATION: 2.0,   // Speed at which dye dissipates
      VELOCITY_DISSIPATION: 0.1,  // Speed at which velocity dissipates
      PRESSURE: 1.0,              // Pressure level in the simulation
      CURL: 20,                   // Curl force applied to the fluid
      SPLAT_RADIUS: 0.25,         // Radius of interaction splats
      SPLAT_FORCE: 10000,         // Force applied during interactions
    };
    Fluid(c, config);
  }, []);
   
  return (
    <div>
      <canvas ref={canvas} style={{ 
        position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 0.8,
          zIndex: -1
        }}></canvas>
      <div style={{ position: 'absolute', backgroundColor:'rgba(13, 5, 31, 0.9)', pointerEvents: 'none' }}>
        <Home />
        <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      </div>
    </div>
  );
}

export default App;
