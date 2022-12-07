const particlesConfig = {
  fullScreen: {
    enable: false,
  },
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 250,
      },
    },
    color: {
      value: ["#ffffff", "#2e72fc", "#55aaff"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 100,
      color: "#0b0b0d",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      // onclick: {
      //   enable: true,
      //   mode: "repulse",
      // },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 200,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
    },
  },
  retina_detect: true,
  background: {
    color: "#0b0b0d",
  },
};
export default particlesConfig;
