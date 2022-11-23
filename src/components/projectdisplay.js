import { Fade } from "react-awesome-reveal";

const ProjectDisplay = ({ distanceFromTop, project, side }) => {
  let title = project.title;
  let description = project.description;
  let skills = project.skills;
  let gif = project.gif;
  let image = project.image;
  let github = project.github;

  return (
    <Fade direction="up" triggerOnce duration={2000}>
      <div className={`project ${side}`}>
        <div className="project_image_container">
          <img src={image} alt="project" className="image" />
        </div>
        <div className="project_content">
          <div className="project_title">
            <p>Feature Project</p>
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
            <a
              href={github}
              className="contacts_info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span>
            </a>
            <a
              href="https://github.com/SomeCoolName1/PhotoTagging/tree/main/phototaggingmain"
              className="contacts_info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Live Demo</span>
            </a>
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
