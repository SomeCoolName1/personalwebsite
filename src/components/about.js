import "./about.scss";
import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { skillsList } from "./objects/skillslist";
import Header from "./displays/headerdisplay";

const About = () => {
  let winHeight = (window.innerHeight * 2) / 3;
  const [distance, setDistance] = useState(0);
  const [reveal, setReveal] = useState(false);
  let aboutRef = useRef();

  const revealInfo = () => {
    setReveal(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      let rect = aboutRef.current.getBoundingClientRect();
      let divTop = rect.top;

      //Once top of div is 1/3 into window, start moving elements
      if (Math.abs(divTop) <= winHeight) {
        setDistance((winHeight - divTop) / 8.5);
      }
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [distance, winHeight]);

  return (
    <div className="about_container" ref={aboutRef}>
      <div className="about_header">
        <Header section="about_title" title="About Me" />
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
        From Structural Engineering to Software Development, I bring forth a
        unique outlook on developing solutions for the most complex of problems
        while being continually driven for personal growth.
        <br />
        <br />
        {reveal ? (
          <div className="hidden_text">
            {/* <div className="line_seperator" style={{ textAlign: `center` }}>
              - - - - - - - - - - - - - - - - - - - - - - - -
            </div>
            <br /> */}
            The first thing people ask is, why did I leave Structural
            Engineering? Why software/web development?
            <br />
            <br />
            On February 2022, I felt my needs of an environment that best
            utilises my creative mind and problem-solving capabilities were not
            met as a Structural Engineer.
            <br />
            <br />
            With this venture, I uncovered an interest, later developed into a
            passion, for programming with my first project being DigitalBot
            (recently refactored due to poor optimisation, being my first
            project).
            <br />
            <br />A product built from nothing but a unique combination of
            creativity, logic, and technology brings immense satisfaction to me
            and I look forward to further developing these skills in a
            professional environment.
          </div>
        ) : (
          ""
        )}
        {!reveal ? (
          <button className="text_button" onClick={() => revealInfo()}>
            Still Interested? Read More
            <div className="arrow-down" />
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="skills">
        {skillsList.map((array) => (
          <div className="skills_column">
            {array.map((skill) => (
              <Fade triggerOnce duration={500} delay={skill.fadeDelay}>
                <div className="skills_item shine">
                  <img src={skill.icon} alt="jsIcon" />
                  <p>{skill.name}</p>
                </div>
              </Fade>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
