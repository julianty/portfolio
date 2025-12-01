import { useEffect, useRef } from "react";
import Markdown from "./Markdown";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function MessageHistory({ messages }: { messages: Message[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="bg-background p-4 rounded-lg max-h-[500px] overflow-y-auto flex flex-col gap-4"
    >
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`p-3 rounded-lg ${
            msg.role === "user"
              ? "bg-muted text-foreground self-end"
              : "text-foreground self-start"
          } max-w-[80%]`}
        >
          {msg.role === "user" ? msg.content : <Markdown raw={msg.content} />}
        </div>
      ))}
    </div>
  );
}

export default MessageHistory;
