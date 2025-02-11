import React from "react";

function experience({
  title,
  company,
  bulletpoints,
}: {
  title: string;
  company: string;
  bulletpoints: string[];
}) {
  return (
    <div className="flex justify-between w-3/4">
      <div className="flex flex-col flex-1">
        <h3>{title}</h3>
        {company}
      </div>
      <p className="flex-1">{bulletpoints}</p>
    </div>
  );
}

export default experience;
