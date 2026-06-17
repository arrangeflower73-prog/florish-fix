import { createFileRoute } from "@tanstack/react-router";

type ChatMessage = { role: "user" | "assistant"; content: string };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as {
          messages?: ChatMessage[];
          system?: string;
        };
        const messages = Array.isArray(body.messages) ? body.messages : [];
        const system = typeof body.system === "string" ? body.system : "";

        const key = process.env.LOVABLE_API_KEY;
        if (!key) {
          return new Response(JSON.stringify({ error: "Missing API key" }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }

        try {
          const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "Lovable-API-Key": key,
            },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              messages: [
                ...(system ? [{ role: "system", content: system }] : []),
                ...messages.map((m) => ({ role: m.role, content: m.content })),
              ],
            }),
          });

          if (!res.ok) {
            const status = res.status;
            return new Response(JSON.stringify({ error: `Gateway error ${status}` }), {
              status,
              headers: { "content-type": "application/json" },
            });
          }

          const data = await res.json();
          const reply = data?.choices?.[0]?.message?.content ?? "";
          return new Response(JSON.stringify({ reply }), {
            status: 200,
            headers: { "content-type": "application/json" },
          });
        } catch {
          return new Response(JSON.stringify({ error: "Request failed" }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }
      },
    },
  },
});
