import SkillBadge from "@/components/skill-badge";
import { Project } from "@/project-data";
import { Link } from "react-router";
import placeholderImage from "@/assets/projectShowcaseTemplate.png";
export default function ProjectHighlight({ project }: { project: Project }) {
  return (
    <article className="project-highlight group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        to={`projects/${project.pageLink}`}
        className="relative block overflow-hidden rounded-xl border border-border/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="absolute left-3 top-3 z-20 rounded-full border border-border/50 bg-card/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur-sm">
          Project
        </span>
        <div className="absolute inset-0 z-10 bg-linear-to-t from-background/70 via-background/10 to-transparent" />
        <img
          className="h-full w-full aspect-16/10 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          src={project.image ? project.image : placeholderImage}
          alt={project.title}
        />
      </Link>

      <div className="flex grow flex-col gap-3 p-1">
        <Link
          to={`projects/${project.pageLink}`}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          <h3 className="project-title group-hover:text-primary">
            {project.title}
          </h3>
        </Link>

        <p className="project-description min-h-19">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <SkillBadge skill={skill} key={skill} />
          ))}
        </div>

        <Link
          to={`projects/${project.pageLink}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          View Project
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
