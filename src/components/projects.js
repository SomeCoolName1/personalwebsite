import { useEffect, useState, useRef, useCallback } from "react";
import "./project.scss";
import { projectsList } from "./projectslist/projectslist";
import ProjectDisplay from "./projectdisplay";
import { useNavigate } from "react-router-dom";
import digitalBotImage from "../assets/projects/digitalbotimage.png";
import discordIcon from "../assets/projects/discord_icon.webp";

const Projects = () => {
  const [distanceFromTop, setDistance] = useState(0);

  const navigate = useNavigate();

  const test = () => {
    navigate("/digitalbot");
  };

  const handleScroll = () => {
    setDistance(window.pageYOffset / 5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [distanceFromTop]);

  return (
    <div className="projects_container">
      <div className="projects_nav">
        <span>Where's Waldo</span>
        <span>Better DoIt</span>
        <span>Memory Game</span>
        <span>DigitalBot</span>
      </div>
      <div className="projects_list">
        {projectsList.map((project) => {
          return (
            <ProjectDisplay
              distanceFromTop={distanceFromTop}
              project={project}
            />
          );
        })}
        <div className="project_uma_container">
          <div className="project_title">
            <h2>DigitalBot</h2>
            <div className="project_underline" />
          </div>
          <div className="project_uma_icon_container">
            <img
              src={digitalBotImage}
              alt="digital bot icon"
              className="project_uma_icon"
            />
            <img
              src={discordIcon}
              alt="discord icon"
              className="project_discord_icon"
            />
          </div>
          <button
            class="uma_btn btn-shadow btn-shadow--blue"
            onClick={() => test()}
          >
            <span>
              I believe my first project was deserving of it's own page
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
