import React from 'react';
import "./project_item.css"

const ProjectItem = ({project}) => {
    {console.log(project)}
    return (
      <div className='item'>
        <h1 className='project-title'>{project.title}</h1>
        <a href={project.url} target="_blank">
            <img src={project.image} className="project-image"/>
        </a>
        <p className='project-desc'>{project.desc}</p>
      </div>
    );
}

export default ProjectItem;
