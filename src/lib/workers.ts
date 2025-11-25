export default async function getChatResponse(message: string) {
  // Check inputs

  // Format input
  const body = JSON.stringify({
    prompt: message,
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
