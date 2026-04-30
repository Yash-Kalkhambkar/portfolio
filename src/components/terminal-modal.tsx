import { motion, AnimatePresence } from "motion/react";
import { useAppContext } from "../lib/context";
import { useState, useEffect } from "react";

export function TerminalModal() {
  const { isTerminalOpen, setTerminalOpen } = useAppContext();
  const [output, setOutput] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    if (isTerminalOpen) {
      setOutput([
        "> INITIALIZING SYSTEM...", 
        "> KERNEL: ACTIVE",
        "> ROOT ACCESS GRANTED.", 
        "> AWAITING DEPLOYMENT COMMANDS_"
      ]);
      setInputVal("");
    }
  }, [isTerminalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    
    let response = `> COMMAND '${inputVal}' NOT RECOGNIZED.`;
    const lowerCmd = inputVal.toLowerCase().trim();
    if (lowerCmd === "help") {
      response = "> AVAILABLE COMMANDS: ping, status, clear, exit";
    } else if (lowerCmd === "ping") {
      response = "> PONG: LATENCY 12ms";
    } else if (lowerCmd === "status") {
      response = "> SYSTEM STATUS: NOMINAL (99.99%)";
    } else if (lowerCmd === "clear") {
      setOutput([]);
      setInputVal("");
      return;
    } else if (lowerCmd === "exit") {
      setTerminalOpen(false);
      return;
    }

    setOutput((prev) => [...prev, `> ${inputVal}`, response]);
    setInputVal("");
  };

  return (
    <AnimatePresence>
      {isTerminalOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setTerminalOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl bg-surface-lowest border border-white/10 shadow-[0_0_50px_rgba(255,77,0,0.1)] rounded-sm z-[101] overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-center bg-surface-container/50 border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-3">
                 <span className="material-symbols-outlined text-[16px] text-[#00eefc]">terminal</span>
                 <span className="font-mono text-[11px] tracking-[0.1em] text-[#00eefc]">COMMAND_LINE_INTERFACE</span>
              </div>
              <button onClick={() => setTerminalOpen(false)} className="text-tertiary hover:text-primary-container material-symbols-outlined text-[16px] transition-colors">close</button>
            </div>
            
            <div className="p-6 h-[350px] overflow-y-auto font-mono text-sm text-tertiary flex flex-col gap-2">
               {output.map((line, i) => (
                 <div key={i} className={line.includes("NOT RECOGNIZED") ? "text-red-400" : ""}>{line}</div>
               ))}
               
               <form onSubmit={handleSubmit} className="flex gap-2 text-primary-container mt-2">
                  <span>&gt;</span>
                  <input 
                    type="text" 
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    autoFocus
                    className="bg-transparent border-none outline-none flex-grow text-primary-container font-mono shadow-none w-full"
                    placeholder="Enter command..."
                  />
               </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
