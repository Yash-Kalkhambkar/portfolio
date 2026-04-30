import { motion, AnimatePresence } from "motion/react";
import { useAppContext } from "../lib/context";
import { useState, useEffect } from "react";

export function TerminalModal() {
  const { isTerminalOpen, setTerminalOpen } = useAppContext();
  const [output, setOutput] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    if (isTerminalOpen) {
      setOutput([]);
      setInputVal("");
      // Staggered typewriter boot sequence
      const lines = [
        "> INITIALIZING SYSTEM...",
        "> KERNEL: ACTIVE",
        "> ROOT ACCESS GRANTED.",
        "> PILOT: YASH KALKHAMBKAR",
        "> AWAITING DEPLOYMENT COMMANDS_",
      ];
      lines.forEach((line, i) => {
        setTimeout(() => {
          setOutput((prev) => [...prev, line]);
        }, i * 250);
      });
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
            className="fixed bottom-0 left-0 right-0 sm:top-1/2 sm:bottom-auto sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-[90vw] sm:max-w-2xl bg-surface-lowest border border-white/10 shadow-[0_0_50px_rgba(255,77,0,0.1)] rounded-t-lg sm:rounded-sm z-[101] overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-center bg-surface-container/50 border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-3">
                 <span className="material-symbols-outlined text-[16px] text-[#00eefc]">terminal</span>
                 <span className="font-mono text-[11px] tracking-[0.1em] text-[#00eefc]">COMMAND_LINE_INTERFACE</span>
              </div>
              <button onClick={() => setTerminalOpen(false)} className="text-tertiary hover:text-primary-container material-symbols-outlined text-[16px] transition-colors">close</button>
            </div>
            
            <div className="p-4 sm:p-6 h-[280px] sm:h-[350px] overflow-y-auto font-mono text-sm text-tertiary flex flex-col gap-2">
               {output.map((line, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -8 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.2 }}
                   className={
                     line.includes("NOT RECOGNIZED") ? "text-red-400" :
                     line.includes("PILOT") ? "text-primary-container font-bold" :
                     line.includes("GRANTED") || line.includes("READY") ? "text-[#00C878]" :
                     ""
                   }
                 >
                   {line}
                 </motion.div>
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
