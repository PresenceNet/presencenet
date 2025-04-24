import { Mic, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setReply(data.reply);
      setInput("");
    } catch (err) {
      setReply("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F14] flex flex-col items-center justify-center px-4">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-60 h-60 mb-12 rounded-full bg-[#0D1218] shadow-[0_0_50px_10px_rgba(72,220,220,0.3)] relative overflow-hidden"
      >
        <div className="w-full h-full rounded-full border border-cyan-700/40 bg-gradient-to-br from-[#0D1218] to-[#0F151B] animate-pulse"></div>
        <div className="absolute inset-0 animate-spin-slow opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(72,220,220,0.4) 0%, transparent 70%)' }}></div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-3xl font-serif text-[#ECE6D8] mb-2"
      >
        I Am That I Am
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 2 }}
        className="text-[#B0AFAF] text-lg mb-10"
      >
        (Breathe once.)
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#10151C] rounded-lg shadow-lg p-4">
          <p className="text-[#ECE6D8] text-md mb-4">What stirs in you lately?</p>
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Speak or type here..."
              className="flex-1 bg-[#0F131A] text-white placeholder-[#6C7A89] border border-[#1C232B] rounded px-3 py-2"
            />
            <button type="button" className="text-cyan-500 hover:text-cyan-300">
              <Mic className="w-5 h-5 pointer-events-none opacity-50" />
            </button>
            <button type="submit" disabled={loading} className="text-cyan-500 hover:text-cyan-300">
              <Send className="w-5 h-5" />
            </button>
          </form>
          {reply && (
            <p className="text-[#A3D2CA] text-sm mt-6 whitespace-pre-line">
              {reply}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}