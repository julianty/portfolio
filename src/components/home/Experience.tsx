import React from "react";
import { IconBriefcase2, IconBriefcase2Filled } from "@tabler/icons-react";
function Experience({
  title,
  company,
  bulletpoints,
  year,
  children,
}: {
  title: string;
  company: string;
  bulletpoints: string[];
  year?: string;
  children?: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full md:w-3/4 rounded-xl border border-border/50 bg-card/50 p-5 flex flex-col gap-4"
    >
      <div className="flex justify-between w-full ">
        <div className="flex flex-2 gap-3">
          {isHovered ? (
            <IconBriefcase2Filled
              className="text-foreground hidden md:block"
              size={"40px"}
            />
          ) : (
            <IconBriefcase2
              className="text-muted hidden md:block"
              size={"40px"}
            />
          )}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold leading-snug text-foreground">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
        <div className="flex-1">
          {year && (
            <p className="text-xs tabular-nums text-muted-foreground text-end min-w-24">
              {year}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3 pl-8">
        <ul className="list-disc pl-6 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
          {bulletpoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {children && (
          <div className="pl-6 text-sm text-muted-foreground">{children}</div>
        )}
      </div>
    </div>
  );
}

export default Experience;
