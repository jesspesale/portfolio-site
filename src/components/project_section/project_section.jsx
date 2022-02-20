import "./project_section.css";
import { projects } from "../../data/projects";
import ProjectItem from "../project_item/project_item";

const ProjectSection = () => {

  return (
    <div id="projects" className="projects">
      <h2 className="proj-sec-title">Here are some of my projects:</h2>
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
