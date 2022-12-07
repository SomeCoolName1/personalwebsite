import { useEffect, useState } from "react";
import "./project.scss";
import { projectsList } from "./objects/projectslist";
import ProjectDisplay from "./displays/projectdisplay";
import Header from "./displays/headerdisplay";

const Projects = () => {
  const [distanceFromTop, setDistance] = useState(0);

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
      <Header section="projects_header" title="Projects Showcase" />
      <div className="projects_list">
        {projectsList.map((project, index) => {
          if (index % 2 === 0) {
            return (
              <ProjectDisplay
                distanceFromTop={distanceFromTop}
                project={project}
                side="project_left"
              />
            );
          } else {
            return (
              <ProjectDisplay
                distanceFromTop={distanceFromTop}
                project={project}
                side="project_right"
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Projects;
