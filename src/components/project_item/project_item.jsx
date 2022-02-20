import React from 'react';
import "./project_item.css"

const ProjectItem = ({project}) => {
    {console.log(project)}
    return (
      <div>
        <a href={project.url} target="_blank">
          <h1>{project.name}</h1>
        </a>
      </div>
    );
}

export default ProjectItem;
