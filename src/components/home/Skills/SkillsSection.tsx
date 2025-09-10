import SectionHeader from "@/components/ui/section-header";
import SkillGroup from "./SkillGroup";

function SkillsSection() {
  return (
    <section id="skills">
      <SectionHeader>Skills</SectionHeader>
      <div
        id="skills"
        className="flex flex-col gap-2 md:gap-8 w-5/6 md:w-3/4 md:flex-row mx-auto"
      >
        <SkillGroup
          title="Programming Languages"
          skills={["HTML", "CSS", "JavaScript", "TypeScript", "Python"]}
        />
        <SkillGroup
          title="Front End Technologies"
          skills={["React", "Tailwind", "Bootstrap", "Vite"]}
        />
        <SkillGroup
          title="Back End Technologies"
          skills={[
            "Express",
            "Node.js",
            "MongoDB",
            "PostgreSQL",
            "Firebase",
            "Supabase",
          ]}
        />
      </div>
    </section>
  );
}

export default SkillsSection;
