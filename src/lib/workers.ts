import { systemPrompt } from "@/components/home/chatbox/messageContext";
import type { Message } from "@/components/home/chatbox/types";

export default async function getChatResponse(
  message: string,
  history: Message[] = []
) {
  const body = JSON.stringify({
    prompt: message,
    history,
    system: systemPrompt,
  });

  const response = await fetch(
    "https://curly-rain-484c.alexanderjulianty.workers.dev/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }
  );

  const responseBody = await response.json();
  return responseBody;
}
