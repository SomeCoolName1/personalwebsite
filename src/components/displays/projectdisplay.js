import { Fade } from "react-awesome-reveal";

const ProjectDisplay = ({ project, side }) => {
  let { title, image, description, skills, github, demo } = project;

  return (
    <Fade direction="up" triggerOnce duration={1000}>
      <div className={`project ${side} ${title}`}>
        <div className="project_image_container">
          <img src={image} alt="project" className="image" />
        </div>
        <div className="project_content">
          <div className="project_title">
            <p>Featured Project</p>
            <h2>{title}</h2>
            <div className="project_underline" />
          </div>
          <div className="project_description">{description}</div>
          <div className="project_skills">
            {skills.map((skill) => {
              return <p className="project_skills_item">{skill}</p>;
            })}
          </div>
          <div className="project_links">
            {github === "/digitalbot" ? (
              <a href={github}>Showcase</a>
            ) : (
              <a href={github} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            )}
            {demo === undefined ? (
              <></>
            ) : (
              <a href={demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectDisplay;

//https://brittanychiang.com/
//https://dribbble.com/shots/11480391-Project-Showcase-19-Creative-studio
//https://umamusume.jp/
