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
    <div className="grid w-full grid-cols-[44px_1fr] gap-x-4 gap-y-3 rounded-xl border border-border/50 bg-card/50 p-4 md:grid-cols-[52px_1fr] md:gap-x-6 md:p-5">
      {icon ? (
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/60 bg-background/70 text-muted-foreground shadow-sm md:h-12 md:w-12">
          {icon}
        </div>
      ) : (
        <p className="w-10 text-center">{"<li>"}</p>
      )}
      <h4 className="w-full self-center text-base font-semibold tracking-tight text-foreground md:text-lg">
        {title}
      </h4>
      <div className="col-start-2 flex flex-wrap gap-2 md:ml-2">
        {skills.map((skillName) => (
          <SkillBadge key={skillName} skill={skillName} />
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;
