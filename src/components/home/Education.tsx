import { IconBook, IconBookFilled, IconChevronDown } from "@tabler/icons-react";
import React from "react";
function Education({
  credential,
  institution,
  bulletpoints,
  year,
  children,
}: {
  credential: string;
  institution: string;
  bulletpoints?: string[];
  year?: string;
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full md:w-3/4 px-4 flex flex-col gap-4"
    >
      <div className="flex justify-between w-full ">
        <div className="flex flex-2 gap-3">
          {isHovered ? (
            <IconBookFilled
              className="text-foreground hidden md:block"
              size={"40px"}
            />
          ) : (
            <IconBook className="text-muted md:block hidden" size="40px" />
          )}
          <div className="flex flex-col ">
            <h3>{credential}</h3>
            <p className="text-muted">{institution}</p>
          </div>
        </div>
        <div className="flex-1">
          {year && <p className="text-end text-md min-w-24">{year}</p>}
          {bulletpoints && (
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
            </div>
          )}
        </div>
      </div>
      {isOpen && bulletpoints && (
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

export default Education;
