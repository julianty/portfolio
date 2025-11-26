import messageContext from "@/components/home/chatbox/messageContext";
import type { Message } from "@/components/home/chatbox/types";

export default async function getChatResponse(
  message: string,
  context: Message[] = messageContext
) {
  // Check inputs

  // Build Body
  const body = JSON.stringify({
    prompt: message,
    context,
  });

  // Fetch call to worker
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

  // Check response
  const responseBody = await response.json();
  // Return response
  return responseBody;
}
