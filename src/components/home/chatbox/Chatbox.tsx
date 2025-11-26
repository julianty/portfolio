import { useState } from "react";
import MessageHistory from "./MessageHistory";
import getChatResponse from "@/lib/workers";
import type { Message } from "./types";

const startingMessage = {
  role: "assistant" as "user" | "assistant",
  content: `Hi, welcome to Julian's portfolio website. He's a full-stack developer, and happy to have you here! 
    You can chat with me to find out more about Julian.`,
};

interface ChatboxProps {
  active: boolean;
}

function Chatbox({ active }: ChatboxProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([startingMessage]);

  async function handleSend() {
    if (!input.trim()) return;
    const userMsg: Message = {
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    const res = await getChatResponse(input);
    const assistantMsg: Message = {
      role: "assistant",
      content: res.reply || JSON.stringify(res),
    };
    setMessages((prev) => [...prev, assistantMsg]);
  }

  return (
    <div
      className={`bg-background border rounded-xl mx-auto flex flex-col gap-4 transition-all duration-700 overflow-hidden ${
        active
          ? "max-w-lg w-[400px] max-h-[500px] p-4"
          : "max-w-md w-[300px] max-h-[60px] p-2"
      }`}
    >
      {active && <MessageHistory messages={messages} />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-1 rounded-lg"
          placeholder="Ask something..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbox;
