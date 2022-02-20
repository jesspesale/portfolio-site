import "./project_section.css";
import { projects } from "../../data/projects";
import ProjectItem from "../project_item/project_item";

const ProjectSection = () => {

  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <ProjectItem project={project}/>
        )
      })}
      <ul>
          <li>

          </li>
      </ul>
    </div>
  )
};

export default ProjectSection;
