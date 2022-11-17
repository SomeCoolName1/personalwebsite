import ParticlesBackground from "./particles";
import { digitalBot } from "./projectslist/projectslist";
import "./digitalBot.scss";
import digitalBotImage from "../assets/projects/digitalbotimage.png";
import { useEffect, useRef, useState } from "react";

const DigitalBot = () => {
  const { title, help, condition, CM, uma, skill, skills } = digitalBot;

  const [distance, setDistance] = useState(0);
  const [pageHeight, setHeight] = useState(false);
  let digitalRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      let rect = digitalRef.current.getBoundingClientRect();
      setHeight(rect.height);
      let divTop = rect.top;

      setDistance(divTop / 4.5);
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [distance]);

  const imageStyle = {
    transform: `translate3d(0px,  ${50 + distance * 0.9}px, 0px)`,
  };

  const textStyle = {
    transform: `translate3d(0px, ${50 + distance * 1.05}px, 0px) `,
  };

  return (
    <div className="project_uma" ref={digitalRef}>
      <div className="project_title">
        <h2>{title}</h2>
        <div className="project_underline" />
      </div>
      <div className="uma_skills">
        <img src={skills} alt="reactIcon" />
      </div>
      <div className="project_uma_description">
        <div className="project_uma_text">
          The passion project that uncovered my interest in web development.
          <br />
          <br />
          This discord bot allows users to input commands to obtain up-to-date
          game information from Cygames' popular Japanese mobile game, ウマ娘.
          <br />
          <br />
          The project fetches data from the game's constantly updating
          <a href="https://www.tracenacademy.com/index.html">
            {" "}
            game files.
          </a>{" "}
          The bot extracts key information from the JSON files and outputs it in
          an easy to read embedded format for users, enabling both Japanese and
          English search functions. <br />
          <br /> Ultimately, my goal was to allow ease of access of key
          information for users while playing the game, with more functions to
          be added.
        </div>
      </div>
      <div className="showcase_container">
        <div className="showcase showcase_left">
          <img src={help} style={imageStyle} />

          <p style={textStyle}>
            Displays the list of all DigitalBot commands, with more to come.
          </p>
        </div>
        <div className="showcase showcase_right">
          <img src={CM} style={imageStyle} />
          <p style={textStyle}>
            Displays relevant information for the monthly Champions Meeting (an
            important PvP event)
          </p>
        </div>
        <div className="showcase showcase_left">
          <img src={uma} style={imageStyle} />
          <p style={textStyle}>
            Display all relevant UMA information, including innate stat bonuses,
            track aptitudes and skills
          </p>
        </div>
        <div className="showcase showcase_right">
          <img src={skill} style={imageStyle} />
          <p style={textStyle}>
            Search all matching skills to display their description and trigger
            conditions
          </p>
        </div>
        <div className="showcase showcase_left">
          <img src={condition} style={imageStyle} />
          <p style={textStyle}>
            Search for skill trigger conditions to display more specific
            information to understand how it works
          </p>
        </div>
      </div>
      <div
        className="uma_button_container"
        style={{
          transform: `translate3d(0px, ${distance / 2}px, 0px)`,
        }}
      >
        <button class="uma_btn btn-shadow btn-shadow--blue">
          <span>Return to main</span>
        </button>
        <button class="uma_btn btn-shadow btn-shadow--blue">
          <span>To Top</span>
        </button>
      </div>
      <img
        src={digitalBotImage}
        className="float_icon_right float_icon"
        alt="float_icon"
        style={{
          transform: `translate3d(0px, ${
            pageHeight / 1.5 + distance * 2
          }px, 0px)`,
        }}
      />

      <img
        src={digitalBotImage}
        className="float_icon_left float_icon"
        alt="float_icon"
        style={{
          transform: `translate3d(0px, ${
            pageHeight / 4 + distance * 2
          }px, 0px)`,
        }}
      />
      <ParticlesBackground />
    </div>
  );
};

export default DigitalBot;
