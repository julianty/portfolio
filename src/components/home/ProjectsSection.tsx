import SectionHeader from "../ui/section-header";
import ProjectHighlight from "@/components/project-highlight";
import { projectData } from "@/project-data";

function ProjectsSection() {
  return (
    <section id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div className="my-8 grid grid-cols-1 gap-6 md:mx-8 md:grid-cols-2 xl:mx-12 xl:grid-cols-3">
        {projectData.map((data) => (
          <ProjectHighlight key={data.title} project={data} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
