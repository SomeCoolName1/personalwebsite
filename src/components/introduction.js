import "./introduction.scss";
import selfImage from "../assets/selfie/selfie.png";
import selfImageBg from "../assets/selfie/selfie_bg.jpg";
import { useEffect, useRef, useState } from "react";

const Introduction = () => {
  const [distance, setDistance] = useState(0);
  const [windowSize, setWindowSize] = useState();
  let introRef = useRef();

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWindowSize(innerWidth, innerHeight);
  }, []);

  console.log(windowSize);

  useEffect(() => {
    const handleScroll = () => {
      let rect = introRef.current.getBoundingClientRect();
      let divBot = rect.bottom;
      let divHeight = rect.height;

      if (divBot >= 0) {
        setDistance((divBot - divHeight) * 2.5);
      }
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [distance]);

  return (
    <div className="main_container" ref={introRef}>
      <div className="main_pictures">
        <img src={selfImage} className="profile_front" alt="profile_picture" />
        <img src={selfImageBg} className="profile_back" alt="profile_picture" />
        <div
          className="main_introduction"
          style={{
            transform: `translate3d(0px, ${distance}px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          }}
        >
          <h1>Hello, I'm Tuan</h1>
          <h2>An aspiring web developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

//https://beautiful-grid.webflow.io/
