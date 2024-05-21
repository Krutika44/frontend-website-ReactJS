import "./index.css";
import { useRef, useEffect } from "react";
import Fluid from "webgl-fluid";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home4 from "./components/Home4";
import Home5 from "./components/Home5";
import Footer from "./components/Footer";

function App() {
  const canvas = useRef(null);

  useEffect(() => {
    let c = canvas.current;
    const config = {
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 1.0,
      VELOCITY_DISSIPATION: 0.1,
      PRESSURE: 1.0,
      CURL: 30,
      SPLAT_RADIUS: 0.25,
      SPLAT_FORCE: 5000,
    };
    Fluid(c, config);
  }, []);

  return (
    <div>
      <canvas
        ref={canvas}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: 50,
          zIndex: -1,
        }}
      ></canvas>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(13, 5, 31, 0.9)",
          pointerEvents: "none",
        }}
      >
        <Home />
        <Home2 />
        <Home3 />
        <Home4 />
        <Home5 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
