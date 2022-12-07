import "./introduction.scss";
import selfImage from "../assets/selfie/selfie.png";
import selfImageBg from "../assets/selfie/selfie_bg.jpg";
import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Introduction = () => {
  const [distance, setDistance] = useState(0);
  let introRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      let rect = introRef.current.getBoundingClientRect();
      let divBot = rect.bottom;
      let divHeight = rect.height;
      if (divBot >= 0) {
        setDistance((divBot - divHeight) * 0.6);
      }
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [distance]);

  const travelLeft = {
    transform: `translate3d(${distance}px, 0px, 0px)`,
  };
  const travelRight = {
    transform: `translate3d(${-distance}px, 0px, 0px)`,
  };
  const travelUp = {
    transform: `translate3d(0px, ${distance}px, 0px)`,
    opacity: `${1 + distance / 200}`,
  };

  return (
    <div className="intro_container" ref={introRef}>
      <div className="intro_pictures">
        <img src={selfImage} className="profile_front" alt="profile_picture" />
        <img src={selfImageBg} className="profile_back" alt="profile_picture" />
      </div>
      <div className="intro_text">
        <Fade cascade damping={0.2} triggerOnce>
          <h1 style={travelUp} className="window_header intro_header">
            Tuan Pham
          </h1>
          <h1 style={travelUp} className="window_header intro_header">
            Aspiring Web
          </h1>
          <h1 style={travelUp} className="window_header intro_header">
            Developer
          </h1>
        </Fade>
        <Fade cascade damping={0.15} triggerOnce>
          <h1 style={travelLeft} className="phone_header intro_header">
            Tuan
          </h1>
          <h1 style={travelRight} className="phone_header intro_header">
            Aspiring
          </h1>
          <h1 style={travelLeft} className="phone_header intro_header">
            Web
          </h1>
          <h1 style={travelRight} className="phone_header intro_header">
            Developer
          </h1>
        </Fade>
      </div>
    </div>
  );
};

export default Introduction;
