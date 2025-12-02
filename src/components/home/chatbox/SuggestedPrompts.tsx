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

  // On mouseDown handler
  const handleMouseDown = (p: prompt) => {
    // Mark prompt as inactive
    p.active = false;
    // Set input text
    setInput(p.text);
  };

  return (
    <div className="flex justify-end">
      {prompts.map((p) => {
        if (!p.active) return;
        return (
          <div
            className="p-2 rounded-xl bg-muted text-foreground flex gap-1 text-sm items-center"
            key={p.text}
            onMouseDown={() => handleMouseDown(p)}
          >
            <IconSparkles />
            {p.text}
          </div>
        );
      })}
    </div>
  );
}

export default SuggestedPrompts;
