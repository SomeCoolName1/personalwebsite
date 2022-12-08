import ParticlesBackground from "./displays/particles";
import { digitalBot } from "./objects/projectslist";
import "./digitalBot.scss";
import digitalBotIcon from "../assets/projects/digitalboticon.png";
import discordIcon from "../assets/projects/discord_icon.webp";
import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Header from "./displays/headerdisplay";
import { useNavigate } from "react-router-dom";

const DigitalBot = () => {
  const navigate = useNavigate();

  const { title, help, condition, CM, uma, umaError, umaCMError, skill } =
    digitalBot;
  const [distance, setDistance] = useState(0);
  const [pageHeight, setHeight] = useState(false);
  let digitalRef = useRef();

  const navigateBack = () => {
    navigate("/");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      let rect = digitalRef.current.getBoundingClientRect();
      setHeight(rect.height);
      let divTop = rect.top;

      setDistance(divTop / 5);
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [distance]);

  const tranformStyle = (multiplier) => {
    return {
      transform: `translateY(${50 + distance * multiplier}px)`,
    };
  };

  return (
    <div className="uma_container" ref={digitalRef}>
      <button class="uma_btn_top" onClick={() => navigateBack()}>
        Back
      </button>
      <Header section="uma_header" title={title} />
      <Fade triggerOnce duration={1500}>
        <p className="uma_content">
          The passion project that uncovered my interest in web development.
          <br />
          <br />
          This discord bot allows users to input commands to obtain up-to-date
          game information from Cygames' popular Japanese mobile game, ウマ娘.
          <br />
          <br />
          The project fetches data from the game's constantly updating game
          files, obtained through a{" "}
          <a
            href="https://www.tracenacademy.com/index.html"
            style={{ color: "#55aaff" }}
          >
            community API
          </a>
          . The bot extracts key information from JSON files and outputs it in
          an easy-to-read embedded format for users, enabling both Japanese and
          English search functions. <br />
          <br /> Ultimately, my goal was to allow ease of access of key
          information for users while playing the game, with more functions to
          be added.
        </p>
      </Fade>
      <div className="showcase_container">
        <div className="showcase showcase_left">
          <img src={help} style={tranformStyle(1)} className="showcase_image" />
          <p style={tranformStyle(1.05)}>
            Displays the list of all available DigitalBot commands, with more to
            come.
          </p>
        </div>
        <div className="showcase showcase_right">
          <img src={CM} style={tranformStyle(1)} className="showcase_image" />
          <p style={tranformStyle(1.05)}>
            Displays relevant information for the monthly PVP Champions Meeting
          </p>
        </div>
        <div className="showcase showcase_left">
          <img src={uma} style={tranformStyle(1)} className="showcase_image" />
          <p style={tranformStyle(1.05)}>
            Display all relevant UMA information, including innate stat bonuses,
            track aptitudes and skills
          </p>
        </div>
        <div className="showcase showcase_right">
          <img
            src={skill}
            style={tranformStyle(1)}
            className="showcase_image"
          />
          <p style={tranformStyle(1.05)}>
            Search all matching skills to display their description and trigger
            conditions
          </p>
        </div>
        <div className="showcase showcase_left">
          <img
            src={condition}
            style={tranformStyle(1)}
            className="showcase_image"
          />
          <p style={tranformStyle(1.05)}>
            Search for skill trigger conditions to display specific information
            to understand how it works
          </p>
        </div>
        {/* <img
          src={digitalBotIcon}
          className="float_right float_icon"
          alt="float_icon"
          style={{
            transform: `translateY(${pageHeight / 2.1}px)`,
          }}
        />
        <img
          src={digitalBotIcon}
          className="float_right float_icon"
          alt="float_icon"
          style={{
            transform: `translateY(${pageHeight / 2.1}px)`,
          }}
        />
        <img
          src={digitalBotIcon}
          className="float_left float_icon"
          alt="float_icon"
          style={{
            transform: `translateY( ${pageHeight / 3.5}px)`,
          }}
        /> */}
        <div className="showcase_error" style={tranformStyle(1.1)}>
          <p className="showcase_error_text">Error Messages Included</p>
          <img src={umaCMError} className="showcase_image cm_error" />
          <img src={umaError} className="showcase_image uma_error" />
        </div>
      </div>

      <div style={tranformStyle(0.5)}>
        <div className="icon_container">
          <div className="digital_name">DigitalBot</div>
          <img src={digitalBotIcon} className="digital_icon" />
          <img src={discordIcon} className="discord_icon" />
        </div>
        <div className="uma_button_container">
          <button class="uma_btn" onClick={() => navigateBack()}>
            Return to main
          </button>
          <button class="uma_btn" onClick={() => scrollToTop()}>
            To Top
          </button>
        </div>
      </div>
      <div className="float_icon">Searchable in 日本語</div>
      <ParticlesBackground />
    </div>
  );
};

export default DigitalBot;
