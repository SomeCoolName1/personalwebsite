import "./about.scss";
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/javascript.png";
import expressIcon from "../assets/icons/express.png";
import nodeIcon from "../assets/icons/nodejs.webp";
import firebaseIcon from "../assets/icons/firebase.png";
import mongodbIcon from "../assets/icons/mongodb.webp";
import reactIcon from "../assets/icons/react.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import sassIcon from "../assets/icons/sass.png";
import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

const About = () => {
  let winHeight = (window.innerHeight * 2) / 3;
  const [distance, setDistance] = useState(0);
  let aboutRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      let rect = aboutRef.current.getBoundingClientRect();
      let divTop = rect.top;

      //Once top of div is 1/3 into window, start moving elements
      if (Math.abs(divTop) <= winHeight) {
        setDistance((winHeight - divTop) / 10);
      }
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [distance, winHeight]);

  return (
    <div className="about_section" ref={aboutRef}>
      <div className="about_content">
        <div className="about_title">
          <h1>About Me</h1>

          <div className="about_floating_container">
            <div
              className="about_floating_text"
              style={{
                transform: `translate3d(${-50 - distance * 1.5}px, ${
                  50 - distance / 2
                }px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(${0 - distance / 3}deg) skew(0deg, 0deg)`,
              }}
            >
              Strong Problem-Solver
            </div>
            <div
              className="about_floating_text"
              style={{
                transform: `translate3d(${60 + distance * 2}px, ${
                  10 - distance / 2
                }px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(${0 + distance / 5}deg) skew(0deg, 0deg)`,
              }}
            >
              Drive for self-development
            </div>
            <div
              className="about_floating_text"
              style={{
                transform: `translate3d(${-50 - distance * 2}px, ${
                  -3 + distance / 1.5
                }px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(${1 + distance / 6}deg) skew(0deg, 0deg)`,
              }}
            >
              Clear Communication Skills
            </div>
            <div
              className="about_floating_text"
              style={{
                transform: `translate3d(${80 + distance * 1.5}px, ${
                  -55 + distance / 1.5
                }px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(${-distance / 5}deg) skew(0deg, 0deg)`,
              }}
            >
              Active Lifestyle
            </div>
          </div>
        </div>
        <div className="about_text">
          The first thing people ask is, why did I leave Structural Engineering?
          Why software/web development?
          <br />
          <br />
          At February 2022, I decided to expand my skills as I felt my needs of
          an environment that best utilises my creative mind and problem-solving
          capabilities were not met, despite a lovely work culture as a
          Structural Engineer.
          <br />
          <br />
          With this venture, I uncovered an interest, later developed into a
          passion, for programming with my first project being DigitalBot (which
          I recently refactored after going through The Odin Project as it was
          poorly optimised being my first project).
          <br />
          <br />A product built from nothing but a unique combination of
          creativity, logic, and technology brings immense satisfaction and
          excitement to me and I look forward to further developing these skills
          in a professional environment and under proper guidance.
        </div>
      </div>

      <div className="skills">
        <Fade direction="up" triggerOnce duration={1000}>
          <div className="skills_column">
            <div className="skills_item shine">
              <img src={htmlIcon} alt="htmlIcon" />
              <p>HTML</p>
            </div>
            <div className="skills_item shine">
              <img src={cssIcon} alt="cssIcon" />
              <p>CSS</p>
            </div>
            <div className="skills_item shine">
              <img src={jsIcon} alt="jsIcon" />
              <p>JS</p>
            </div>
          </div>
          <div className="skills_column ">
            <div className="skills_item shine">
              <img src={expressIcon} alt="expressIcon" />
              <p>HTML</p>
            </div>
            <div className="skills_item shine">
              <img src={nodeIcon} alt="nodeIcon" />
              <p>NODE.JS</p>
            </div>
            <div className="skills_item shine">
              <img src={firebaseIcon} alt="firebaseIcon" />
              <p>FIREBASE</p>
            </div>
            <div className="skills_item shine">
              <img src={mongodbIcon} alt="mongoDbIcon" />
              <p>MONGODB</p>
            </div>
          </div>
          <div className="skills_column">
            <div className="skills_item shine">
              <img src={reactIcon} alt="reactIcon" />
              <p>REACT</p>
            </div>
            <div className="skills_item shine">
              <img src={tailwindIcon} alt="tailwindIcon" />
              <p>TAILWIND</p>
            </div>
            <div className="skills_item shine">
              <img src={sassIcon} alt="sassIcon" />
              <p>SASS</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;

// https://codemyui.com/hero-section-splash-page-animation/

// https://stratisbakas.com/
// https://thomasbosc.com/en.html
// https://benscott.dev/#about
//Curve animation
//https://youtu.be/lZ-OO7x75Rc
//https://codepen.io/argyleink/pen/poEjvpd
//https://codepen.io/douglasmofet/pen/gOPaory
