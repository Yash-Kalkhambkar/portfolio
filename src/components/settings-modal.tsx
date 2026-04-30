import { motion, AnimatePresence } from "motion/react";
import { useAppContext } from "../lib/context";
import { useState } from "react";

export function SettingsModal() {
  const { isSettingsOpen, setSettingsOpen } = useAppContext();
  const [settings, setSettings] = useState({
    telemetry: true,
    safeMode: false,
    audio: false
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings((s) => ({ ...s, [key]: !s[key] }));
  };

  return (
    <AnimatePresence>
      {isSettingsOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setSettingsOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-0 left-0 right-0 sm:top-1/2 sm:bottom-auto sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-[90vw] sm:max-w-sm bg-surface-lowest border border-white/10 shadow-[0_0_50px_rgba(255,77,0,0.1)] rounded-t-lg sm:rounded-sm z-[101] overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-center bg-surface-container/50 border-b border-white/10 px-6 py-4">
              <span className="font-mono text-[12px] font-bold tracking-[0.1em] text-primary-container uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">settings</span>
                System Prefs
              </span>
              <button 
                onClick={() => setSettingsOpen(false)} 
                className="text-tertiary hover:text-primary-container material-symbols-outlined text-[16px] transition-colors"
              >
                close
               </button>
            </div>
            
            <div className="p-6 font-mono text-sm flex flex-col gap-6">
               
               <div className="flex justify-between items-center border-b border-white/5 pb-4">
                 <span className="text-on-surface tracking-widest uppercase text-xs">Telemetry Tracking</span>
                 <div 
                   onClick={() => toggle('telemetry')}
                   className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${settings.telemetry ? 'bg-primary-container' : 'bg-surface-container'}`}
                  >
                    <div className={`absolute top-1 w-3 h-3 rounded-full transition-all ${settings.telemetry ? 'right-1 bg-white' : 'left-1 bg-tertiary'}`}></div>
                  </div>
               </div>
               
               <div className="flex justify-between items-center border-b border-white/5 pb-4">
                 <span className="text-on-surface tracking-widest uppercase text-xs">Safe Mode / CLI</span>
                 <div 
                   onClick={() => toggle('safeMode')}
                   className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${settings.safeMode ? 'bg-primary-container' : 'bg-surface-container'}`}
                  >
                    <div className={`absolute top-1 w-3 h-3 rounded-full transition-all ${settings.safeMode ? 'right-1 bg-white' : 'left-1 bg-tertiary'}`}></div>
                  </div>
               </div>
               
               <div className="flex justify-between items-center text-on-surface tracking-widest uppercase text-xs">
                 <span>Audio Feedback</span>
                 <div 
                   onClick={() => toggle('audio')}
                   className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${settings.audio ? 'bg-primary-container' : 'bg-surface-container'}`}
                  >
                    <div className={`absolute top-1 w-3 h-3 rounded-full transition-all ${settings.audio ? 'right-1 bg-white' : 'left-1 bg-tertiary'}`}></div>
                  </div>
               </div>

            </div>
            
            <div className="bg-surface-container/30 px-6 py-4 flex justify-between items-center border-t border-white/5">
               <span className="text-[10px] text-tertiary font-mono">v1.2.0-stable</span>
               <button 
                 onClick={() => setSettingsOpen(false)} 
                 className="border border-white/20 text-on-surface px-6 py-2 text-xs tracking-widest uppercase hover:bg-white/10 font-mono font-bold transition-colors"
               >
                 Apply State
               </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
