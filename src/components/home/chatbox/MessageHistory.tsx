import React from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function MessageHistory({ messages }: { messages: Message[] }) {
  return (
    <div className="bg-background p-4 rounded-lg max-h-[400px] overflow-y-auto flex flex-col gap-4">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`p-3 rounded-md ${
            msg.role === "user"
              ? "bg-white text-black self-end"
              : "bg-gray-100 text-gray-800 self-start"
          } max-w-[80%]`}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
}

export default MessageHistory;
