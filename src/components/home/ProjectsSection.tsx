import SectionHeader from "../ui/section-header";
import ProjectHighlight from "@/components/project-highlight";
import { projectData } from "@/project-data";

function ProjectsSection() {
  return (
    <section id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div className="flex flex-col flex-wrap lg:flex-row md:mx-16 my-8">
        {projectData.map((data) => (
          <ProjectHighlight key={data.title} project={data} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
