import "./index.css";
import { useRef, useEffect } from 'react'
import Fluid from 'webgl-fluid'
import Home from './components/Home'
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home4 from "./components/Home4";
import Home5 from "./components/Home5";


function App() {
  const canvas = useRef(null)

  useEffect(() => {
    let c = canvas.current;
    Fluid(c, { speed: 20.0 }); // Increase speed for faster animation
  }, []);

  return (
    <div>
      <canvas ref={canvas} style={{ 
        position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 0.7,
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
