const ProjectDisplay = ({ distanceFromTop, project }) => {
  let title = project.title;
  let image = project.image;
  let description = project.description;
  let skills = project.skills;
  let gif = project.gif;
  let github = project.github;

  return (
    <div className="project">
      <div className="project_image_container">
        <img
          src={gif}
          alt="project gif"
          className="image_gif"
          // style={{ transform: `translateY(${-distanceFromTop / 10}px)` }}
        />
      </div>

      <div className="project_detail">
        <div className="project_title">
          <h2>{title}</h2>
          <div className="project_underline" />
        </div>
        <div className="project_description">{description} LiveDemo</div>
        <div className="project_bottom">
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
          <div className="project_skills">
            {skills.map((skill) => {
              return (
                <div className="project_skills_item">
                  <img src={skill} alt="reactIcon" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
