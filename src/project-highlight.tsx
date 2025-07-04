import SkillBadge from "@/components/skill-badge";
import { Project } from "@/project-data";
import { Link } from "react-router";
import placeholderImage from "@/assets/projectShowcaseTemplate.png";
export default function ProjectHighlight({ project }: { project: Project }) {
  return (
    <div className="project-highlight flex-1">
      <Link to={`projects/${project.pageLink}`}>
        <div className="flex relative group justify-center items-center">
          <img
            className="rounded-lg group-hover:opacity-50"
            src={project.image ? project.image : placeholderImage}
            alt={project.title}
          />
          <div className="hidden absolute text-secondary-foreground group-hover:flex">
            Click me to learn more!
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-3 justify-between flex-wrap p-2">
        <Link to={`projects/${project.pageLink}`}>
          <h3 className="project-title">{project.title}</h3>
        </Link>
        <div className="flex gap-1 flex-wrap">
          {project.skills.map((skill) => (
            <SkillBadge skill={skill} key={skill} />
          ))}
        </div>
      </div>
      <p className="project-description">{project.description}</p>
    </div>
  );
}
