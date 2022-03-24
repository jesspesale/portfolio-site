import React from 'react';
import "./project_item.css"


const ProjectItem = ({project}) => {

    function checkUrl(){
        if(project.url){
            return (
              <a
                className="button"
                type="submit"
                target="_blank"
                href={project.url}
              >
                View Project
              </a>
            );
        }
    }

    {console.log(project)}
    return (
      <div className="container">
        <div className="item">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-desc">{project.desc}</p>
          <div className="buttons">
            {checkUrl()}
            <a
              className="button"
              type="submit"
              target="_blank"
              href={project.git}
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    );
}

export default ProjectItem;
