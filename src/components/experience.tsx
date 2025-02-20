import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import React from "react";
import { IconBriefcase2, IconChevronDown } from "@tabler/icons-react";
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
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex justify-between w-3/4">
      <div className="flex flex-1 gap-3">
        <IconBriefcase2 className="text-muted" />
        <div className="flex flex-col">
          <h3>{title}</h3>
          <p className="text-muted">{company}</p>
        </div>
      </div>
      <div>
        {year && <p className="text-end">{year}</p>}
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex-1">
          <CollapsibleTrigger asChild>
            <div className="flex gap-2 justify-end">
              {isOpen ? <p>Hide</p> : <p>Details</p>}
              <IconChevronDown
                className={`transform transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul>
              {bulletpoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {children}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}

export default Experience;
