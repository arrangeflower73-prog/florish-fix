import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are a professional and elegant customer assistant for Flower Arrange — a premium flower arrangement and event decoration business owned by Avik Raha (contact: rahaavik@gmail.com). The business has been operating since 2014 with 12 years of experience.

CONTACT DETAILS (share when asked):
- Phone / WhatsApp: +91 82939 82827
- Email: rahaavik@gmail.com
- Owner: Avik Raha

SERVICES: Wedding decor, birthday setups, proposal staging, anniversary decoration, flower arrangements, corporate events, and all special occasions.

LANGUAGE RULE: Detect the customer's language — Bengali, Hindi, or English — and always reply in that SAME language fluently. Never mix languages unless the customer does.

TONE: Warm, elegant, highly professional — like a luxury event brand representative.

RULES:
- If asked for contact, email, or owner name — always provide the details above
- Never guess pricing — say "Please contact us at +91 82939 82827 for a personalised quote"
- Always end with a helpful next step
- Keep responses concise and clear`;

const QUICK_REPLIES = [
  { label: "💒 Wedding", text: "Tell me about wedding decoration" },
  { label: "🎂 Birthday", text: "Tell me about birthday flower arrangements" },
  { label: "💰 Price", text: "What are your prices?" },
  { label: "📅 Book Now", text: "I want to book now" },
];

const C = {
  window: "#0d0d0d",
  header: "#1a1200",
  botBg: "#1e1600",
  border: "#A07830",
  gold: "#C9A84C",
  text: "#F5F0E8",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! 🌸 How can I help you with your flower arrangements or surprise planning today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function sendMessage(text) {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    const nextMessages = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: SYSTEM_PROMPT,
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      const reply = data?.reply || "Sorry, I couldn't respond right now. 🌸";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please reach us on WhatsApp or call. 🌸",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ position: "fixed", bottom: 160, right: 24, zIndex: 9999 }}>
      {open && (
        <div
          style={{
            width: 340,
            maxWidth: "calc(100vw - 32px)",
            height: 480,
            maxHeight: "calc(100vh - 140px)",
            background: C.window,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            marginBottom: 12,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: C.header,
              borderBottom: `1px solid ${C.border}`,
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>🤖</span>
              <div>
                <div style={{ color: C.gold, fontWeight: 700, fontSize: 15 }}>AI Assistant</div>
                <div style={{ color: C.text, opacity: 0.7, fontSize: 11 }}>
                  Flowers &amp; surprise planning
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{
                background: "transparent",
                border: "none",
                color: C.gold,
                fontSize: 20,
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            style={{ flex: 1, overflowY: "auto", padding: 12, display: "flex", flexDirection: "column", gap: 8 }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                  background: m.role === "user" ? C.border : C.botBg,
                  color: C.text,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "8px 12px",
                  fontSize: 14,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  background: C.botBg,
                  color: C.gold,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "8px 12px",
                  fontSize: 14,
                }}
              >
                typing…
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "0 12px 8px" }}>
            {QUICK_REPLIES.map((q) => (
              <button
                key={q.label}
                onClick={() => sendMessage(q.text)}
                disabled={loading}
                style={{
                  background: "transparent",
                  border: `1px solid ${C.border}`,
                  color: C.gold,
                  borderRadius: 999,
                  padding: "5px 10px",
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              gap: 8,
              padding: 10,
              borderTop: `1px solid ${C.border}`,
              background: C.header,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Type a message…"
              style={{
                flex: 1,
                background: C.window,
                border: `1px solid ${C.border}`,
                color: C.text,
                borderRadius: 10,
                padding: "8px 10px",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading}
              style={{
                background: `linear-gradient(135deg, #A07830, #C9A84C)`,
                border: "none",
                color: C.window,
                fontWeight: 700,
                borderRadius: 10,
                padding: "0 14px",
                cursor: "pointer",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI chat"
        style={{
          background: "linear-gradient(135deg, #A07830, #C9A84C)",
          width: 52,
          height: 52,
          borderRadius: "50%",
          border: "none",
          fontSize: 24,
          cursor: "pointer",
          boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        🤖
      </button>
    </div>
  );
}
