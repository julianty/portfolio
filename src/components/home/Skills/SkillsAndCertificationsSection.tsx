import SectionHeader from "@/components/ui/section-header";
import SkillGroup from "./SkillGroup";
import {
  IconBracketsAngle,
  IconDevices,
  IconStack2,
} from "@tabler/icons-react";

function SkillsAndCertificationsSection() {
  return (
    <section id="skills">
      <SectionHeader>Skills</SectionHeader>
      <div
        id="skills"
        className="flex flex-col gap-2 md:gap-8 w-5/6 md:w-3/4 mx-auto"
      >
        <SkillGroup
          title="Programming Languages"
          skills={["HTML", "CSS", "JavaScript", "TypeScript", "Python"]}
          icon={<IconBracketsAngle />}
        />
        <SkillGroup
          title="Front End Technologies"
          skills={["React", "Tailwind", "Bootstrap", "Vite"]}
          icon={<IconDevices />}
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
          icon={<IconStack2 />}
        />
      </div>
    </section>
  );
}

export default SkillsAndCertificationsSection;
