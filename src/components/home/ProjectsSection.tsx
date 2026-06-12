import { useState } from "react";
import SectionHeader from "../ui/section-header";
import ProjectHighlight from "@/components/project-highlight";
import { projectData } from "@/project-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const pinned = projectData.filter((p) => p.pinned);
  const rest = projectData.filter((p) => !p.pinned);

  return (
    <section id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div className="my-8 grid grid-cols-1 gap-6 md:mx-8 md:grid-cols-2 xl:mx-12 xl:grid-cols-3">
        {pinned.map((data) => (
          <ProjectHighlight key={data.title} project={data} />
        ))}
        {rest.map((data, i) => (
          <div
            key={data.title}
            className={cn(
              "overflow-hidden transition-all duration-500 ease-out",
              expanded ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-4 pointer-events-none"
            )}
            style={{ transitionDelay: expanded ? `${i * 60}ms` : "0ms" }}
          >
            <ProjectHighlight project={data} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <Button variant="outline" onClick={() => setExpanded((v) => !v)}>
          {expanded ? "Show less ↑" : `Show all projects ↓`}
        </Button>
      </div>
    </section>
  );
}

export default ProjectsSection;
