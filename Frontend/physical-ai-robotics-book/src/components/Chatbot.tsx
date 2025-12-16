import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const API_URL = "https://speckit-plusapi.vercel.app/chat";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendPrompt = async () => {
    if (!prompt.trim() || loading) return;

    const userMsg = { role: "user" as const, text: prompt };
    setMessages((prev) => [...prev, userMsg]);
    setPrompt("");
    setLoading(true);
    setTyping(true);

    try {
      const res = await axios.post(API_URL, { prompt: userMsg.text }, { timeout: 120000 });
      const botResponse = res.data?.response || "⚠️ No response from server.";
      setTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    } catch (err) {
      console.error(err);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Server not reachable." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Robot Icon */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#4f46e5",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
          zIndex: 9999,
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)"
        }
        onMouseLeave={(e) =>
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"
        }
        aria-label="Open Agentic AI Chatbot"
      >
        {/* Robot SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
          <circle cx="8.5" cy="13.5" r="1.5" />
          <circle cx="15.5" cy="13.5" r="1.5" />
          <path d="M9 21v-2h6v2" />
        </svg>
      </button>

      {/* Chat Popup */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: "90vw",
            maxWidth: 380,
            height: 500,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 24px 48px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            zIndex: 9999,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              background: "linear-gradient(135deg,#4f46e5,#06b6d4)",
              color: "#fff",
              fontWeight: 700,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 16,
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            }}
          >
            Physical AI & Humanoid Robotics
            <button
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                color: "#fff",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: 14,
              overflowY: "auto",
              background: "#f7f9fc",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.role === "user" ? "right" : "left",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "10px 14px",
                    borderRadius: 12,
                    maxWidth: "80%",
                    background: m.role === "user" ? "linear-gradient(90deg,#4f46e5,#06b6d4)" : "#e5e7eb",
                    color: m.role === "user" ? "#fff" : "#111",
                    fontSize: 14,
                    lineHeight: 1.4,
                  }}
                >
                  {m.text}
                </span>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ textAlign: "left", marginBottom: 10 }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "10px 14px",
                    borderRadius: 12,
                    maxWidth: "80%",
                    background: "#e5e7eb",
                    color: "#111",
                    fontSize: 14,
                    lineHeight: 1.4,
                    fontStyle: "italic",
                  }}
                >
                  Typing...
                  <span className="dot-typing">💬</span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: 12,
              borderTop: "1px solid #e5e7eb",
              display: "flex",
              gap: 8,
            }}
          >
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendPrompt()}
              placeholder="Ask a question..."
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 8,
                border: "1px solid #d1d5db",
                fontSize: 14,
              }}
            />
            <button
              onClick={sendPrompt}
              disabled={loading}
              style={{
                padding: "0 14px",
                borderRadius: 8,
                border: "none",
                background: "#4f46e5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {/* Arrow send icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
