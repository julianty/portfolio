import SectionHeader from "../ui/section-header";
import SkillBadge from "../skill-badge";

function SkillsSection() {
  return (
    <section id="skills">
      <SectionHeader>Skills</SectionHeader>
      <div id="skills" className="flex flex-col gap-8 w-5/6 md:w-3/4 mx-auto">
        Languages
        <div className="flex flex-wrap gap-2 md:ml-8">
          <SkillBadge skill="HTML" />
          <SkillBadge skill="CSS" />
          <SkillBadge skill="JavaScript" />
          <SkillBadge skill="TypeScript" />
          <SkillBadge skill="Python" />
        </div>
        Front End Technologies
        <div className="flex flex-wrap gap-2 md:ml-8">
          <SkillBadge skill="React" />
          <SkillBadge skill="Tailwind" />
          <SkillBadge skill="Bootstrap" />
          <SkillBadge skill="Vite" />
        </div>
        Back End Technologies
        <div className="flex flex-wrap gap-2 md:ml-8">
          <SkillBadge skill="Express" />
          <SkillBadge skill="Node.js" />
          <SkillBadge skill="MongoDB" />
          <SkillBadge skill="PostgreSQL" />
          <SkillBadge skill="Firebase" />
          <SkillBadge skill="Supabase" />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
