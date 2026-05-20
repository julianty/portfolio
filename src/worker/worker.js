export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const respond = (data, status = 200) =>
      new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });

    let body;
    try {
      body = await request.json();
    } catch {
      return respond({ error: "Could not process request body" }, 400);
    }

    // Build the messages array from history + current prompt
    const history = body.history ?? body.context ?? [];
    const messages = [
      ...history,
      { role: "user", content: body.prompt ?? "Hello" },
    ];
    const system = body.system ?? "";

    // --- Primary: Claude ---
    try {
      const claudeRes = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          system,
          messages,
          max_tokens: 300,
        }),
      });

      if (claudeRes.ok) {
        const data = await claudeRes.json();
        return respond({ reply: data.content[0].text });
      }
    } catch {
      // Fall through to HuggingFace
    }

    // --- Fallback: HuggingFace ---
    try {
      const hfMessages = system
        ? [{ role: "system", content: system }, ...messages]
        : messages;

      const hfRes = await fetch(
        "https://router.huggingface.co/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.HF_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: hfMessages,
            model: "openai/gpt-oss-120b:fastest",
            stream: false,
          }),
        },
      );

      const result = await hfRes.json();
      return respond({ reply: result.choices[0].message.content });
    } catch {
      return respond({ error: "All inference providers failed" }, 500);
    }
  },
};
