import particlesConfig from "./particles-config";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import "./particles.scss";

import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      params={particlesConfig}
      init={particlesInit}
      loaded={particlesLoaded}
    ></Particles>
  );
};

export default ParticlesBackground;
