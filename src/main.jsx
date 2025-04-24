import React, { useState } from "react";
import { Mic, Send } from "react-feather";

export default function App() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      console.log("Reply:", data.reply);
    } catch (err) {
      console.error("Error talking to Presence:", err);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="flex items-center space-x-2">
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="flex items-center space-x-2 w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Speak or type here..."
            className="flex-1 bg-[#0F131A] text-white placeholder-[#6C7A89] border border-[#1C232B] rounded px-3 py-2"
          />
          <button type="submit" disabled={loading} className="text-cyan-500 hover:text-cyan-300">
            <Mic className="w-5 h-5 pointer-events-none opacity-50" />
          </button>
          <button type="submit" disabled={loading} className="text-cyan-500 hover:text-cyan-300">
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}