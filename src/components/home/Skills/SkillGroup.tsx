import SkillBadge from "@/components/skill-badge";
import React from "react";

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="flex-1 flex flex-col gap-6 border-2 border-muted p-4 rounded-xl">
      <h4 className="mx-auto text-xl">{title}</h4>

      <div className="flex flex-wrap gap-2 md:ml-8">
        {skills.map((skillName) => {
          return <SkillBadge key={skillName} skill={skillName} />;
        })}
      </div>
    </div>
  );
}

export default SkillGroup;
