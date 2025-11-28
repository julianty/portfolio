import React, { SetStateAction } from "react";
import prewrittenPrompts from "./prewrittenPrompts";
import type { prompt } from "./prewrittenPrompts";
import { IconSparkles } from "@tabler/icons-react";

function SuggestedPrompts({
  setInput,
}: {
  setInput: React.Dispatch<SetStateAction<string>>;
}) {
  const [prompts, setPrompts] = React.useState<prompt[]>([]);
  // Pick prompts
  React.useEffect(() => {
    setPrompts(prewrittenPrompts);
  }, []);
  return (
    <div className="flex justify-end">
      {prompts.map((p) => (
        <div
          className="p-2 rounded-xl bg-muted text-foreground flex gap-1 text-sm items-center"
          key={p.text}
          onMouseDown={(e) => {
            e.preventDefault();
            setInput(p.text);
          }}
        >
          <IconSparkles />
          {p.text}
        </div>
      ))}
    </div>
  );
}

export default SuggestedPrompts;
