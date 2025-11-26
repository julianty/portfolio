import React, { useState } from "react";
import MessageHistory from "./MessageHistory";
import getChatResponse from "@/lib/workers"; // adjust import as needed

type Message = {
  role: "user" | "assistant";
  content: string;
};

function Chatbox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

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
    <div className="bg-background p-4 border rounded-xl max-w-lg mx-auto flex flex-col gap-4">
      <MessageHistory messages={messages} />
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
          // onClick={handleSend}
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
