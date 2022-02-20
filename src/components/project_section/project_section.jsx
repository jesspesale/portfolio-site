import "./project_section.css";
import { projects } from "../../data/projects";
import ProjectItem from "../project_item/project_item";

const ProjectSection = () => {

  return (
    <div id="projects">
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <ProjectItem
            project={project}
            key={project.id}
          />
        );
      })}
    </div>
  )
};

export default ProjectSection;
