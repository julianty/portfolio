import SectionHeader from "../ui/section-header";
import ProjectHighlight from "@/components/project-highlight";
import { projectData } from "@/project-data";

function ProjectsSection() {
  return (
    <section id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:mx-16 my-8">
        {projectData.map((data) => (
          <ProjectHighlight key={data.title} project={data} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
