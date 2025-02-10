import SkillBadge from "./components/skill-badge";
import { Project } from "./project-data";
import { Link } from "react-router";
export default function ProjectHighlight({ project }: { project: Project }) {
  return (
    <div className="project-highlight">
      <div className="flex justify-between">
        <h3 className="project-title">{project.title}</h3>
        <div className="flex gap-1">
          {project.skills.map((skill) => (
            <SkillBadge skill={skill} key={skill} />
          ))}
        </div>
      </div>
      <p className="project-description">{project.description}</p>
      <Link to={`projects/${project.pageLink}`}>
        <div className="flex relative group justify-center items-center">
          <img
            className="rounded-lg group-hover:opacity-50"
            src={project.image}
            alt={project.title}
          />
          <div className="hidden absolute text-secondary-foreground group-hover:flex">
            Click me to learn more!
          </div>
        </div>
      </Link>
    </div>
  );
}
