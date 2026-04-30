import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { TABS, useAppContext } from "../lib/context";

export function Nav() {
  const { activeTab, setActiveTab, setTerminalOpen, setSettingsOpen } = useAppContext();

  return (
    <nav className="bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(255,77,0,0.05)] fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-12 max-w-screen-2xl mx-auto">
      <div className="flex items-center gap-12">
        <div 
          className="text-xl font-black italic tracking-tighter text-primary-container font-mono cursor-pointer"
          onClick={() => setActiveTab("DRIVE")}
        >
          SHIFT_ENGINEER
        </div>
        
        <ul className="hidden md:flex space-x-8 font-mono tracking-widest uppercase text-xs font-bold">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <li key={tab} className="relative">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "transition-all cursor-pointer relative pb-1",
                    isActive ? "text-primary-container" : "text-neutral-400 hover:text-primary-container hover:drop-shadow-[0_0_8px_rgba(255,77,0,0.8)]"
                  )}
                >
                  {tab}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-container"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden md:flex space-x-4">
          <button 
            onClick={() => setTerminalOpen(true)}
            className="material-symbols-outlined text-neutral-400 hover:text-primary-container transition-all cursor-pointer text-lg"
          >
            terminal
          </button>
          <button 
            onClick={() => setSettingsOpen(true)}
            className="material-symbols-outlined text-neutral-400 hover:text-primary-container transition-all cursor-pointer text-lg"
          >
            settings
          </button>
        </div>
        <button 
          onClick={() => setActiveTab("COMMS")}
          className="font-mono tracking-[0.1em] uppercase text-[13px] font-bold border-[1px] border-primary-container/60 text-primary-container bg-transparent px-4 py-2 hover:bg-primary-container/10 transition-colors"
        >
          HIRE_ME
        </button>
      </div>
    </nav>
  );
}
