import SkillBadge from "@/components/skill-badge";
import React from "react";

function SkillGroup({
  title,
  icon,
  skills,
}: {
  title: string;
  icon?: React.ReactNode;
  skills: string[];
}) {
  return (
    <div className="grid w-full grid-cols-[50px_1fr] grid-rows-[auto_auto] gap-x-10 p-4 ">
      {icon ? (
        <div className="border bg-neutral-900 p-2 w-[50px] h-[50px] text-foreground-muted flex items-center justify-center rounded-xl d">
          {icon}
        </div>
      ) : (
        <p className="w-10 text-center">{"<li>"}</p>
      )}
      <h4 className="text-xl w-full">{title}</h4>
      <div className="col-start-2 flex flex-wrap gap-2 md:ml-8">
        {skills.map((skillName) => (
          <SkillBadge key={skillName} skill={skillName} />
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;
