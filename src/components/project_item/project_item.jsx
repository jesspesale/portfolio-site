import React from 'react';
import "./project_item.css"


const ProjectItem = ({project}) => {
    {console.log(project)}
    return (
      <div className="container">
        <div className="item">
          <a target="_blank">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-desc">{project.desc}</p>
            <div className="buttons">
              <a className="button" type="submit" href={project.url}>
                View Project
              </a>
              <a className="button" type="submit" href={project.git}>
                Github Repo
              </a>
            </div>
          </a>
        </div>
      </div>
    );
}

export default ProjectItem;
