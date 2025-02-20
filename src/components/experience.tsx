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
    <div className="w-full md:w-3/4 px-4 flex flex-col gap-4">
      <div className="flex justify-between w-full ">
        <div className="flex flex-2 gap-3">
          <IconBriefcase2
            className="text-muted hidden md:block"
            size={"40px"}
          />
          <div className="flex flex-col ">
            <h3>{title}</h3>
            <p className="text-muted">{company}</p>
          </div>
        </div>
        <div className="flex-1">
          {year && <p className="text-end text-md min-w-24">{year}</p>}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex gap-2 justify-end"
          >
            {isOpen ? (
              <p className="text-muted-foreground text-sm">Hide</p>
            ) : (
              <p className="text-muted-foreground text-sm">Details</p>
            )}
            <IconChevronDown
              className={`transform transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
            {/* <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex-1">
          <CollapsibleTrigger asChild>
            <div className="flex gap-2 justify-end">
              {isOpen ? (
                <p className="text-muted-foreground text-sm">Hide</p>
              ) : (
                <p className="text-muted-foreground text-sm">Details</p>
              )}
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
        </Collapsible> */}
          </div>
        </div>
      </div>
      {isOpen && (
        <div>
          <ul className="flex flex-col gap-2">
            {bulletpoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {children}
        </div>
      )}
    </div>
  );
}

export default Experience;
