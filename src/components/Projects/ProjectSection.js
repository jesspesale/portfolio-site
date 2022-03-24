import "./project_section.css";
import { projects } from "../../data/projects";
import ProjectItem from "./ProjectItem";

const ProjectSection = () => {

  return (
    <div id="projects" className="projects">
      <h2 className="proj-sec-title">Projects:</h2>
      <div className="project-items">
      {projects.map((project) => {
        return (
            <ProjectItem
              project={project}
              key={project.id}
            />
            );
          })}
      </div>
    </div>
  )
};

export default ProjectSection;
