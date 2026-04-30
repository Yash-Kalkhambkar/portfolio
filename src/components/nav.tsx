import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { TABS, useAppContext } from "../lib/context";

export function Nav() {
  const { activeTab, setActiveTab, setTerminalOpen, setSettingsOpen } = useAppContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTabClick = (tab: typeof TABS[number]) => {
    setActiveTab(tab);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="bg-neutral-950/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(255,77,0,0.05)] fixed top-0 left-0 right-0 w-full z-50">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 h-14 md:h-16 max-w-[1440px] mx-auto w-full">

          {/* Left: Logo + Tabs */}
          <div className="flex items-center gap-6 lg:gap-10 min-w-0">
            <button
              className="text-base md:text-lg font-black italic tracking-tighter text-primary-container font-mono glitch-text select-none shrink-0"
              data-text="SHIFT_ENGINEER"
              onClick={() => handleTabClick("DRIVE")}
            >
              SHIFT_ENGINEER
            </button>

            {/* Desktop tabs */}
            <ul className="hidden md:flex items-center gap-5 lg:gap-8 font-mono tracking-widest uppercase text-[11px] font-bold">
              {TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <li key={tab} className="relative">
                    <button
                      onClick={() => handleTabClick(tab)}
                      className={cn(
                        "transition-all cursor-pointer relative pb-1 whitespace-nowrap",
                        isActive
                          ? "text-primary-container"
                          : "text-neutral-400 hover:text-primary-container hover:drop-shadow-[0_0_8px_rgba(255,77,0,0.8)]"
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

          {/* Right: Actions */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            {/* Icon buttons — desktop only */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setTerminalOpen(true)}
                className="material-symbols-outlined text-neutral-400 hover:text-primary-container transition-all cursor-pointer text-[20px]"
                title="Terminal"
              >
                terminal
              </button>
              <button
                onClick={() => setSettingsOpen(true)}
                className="material-symbols-outlined text-neutral-400 hover:text-primary-container transition-all cursor-pointer text-[20px]"
                title="Settings"
              >
                settings
              </button>
            </div>

            {/* Hire me — always visible */}
            <button
              onClick={() => handleTabClick("COMMS")}
              className="font-mono tracking-[0.08em] uppercase text-[11px] md:text-[12px] font-bold border border-primary-container/60 text-primary-container bg-transparent px-3 md:px-4 py-1.5 md:py-2 hover:bg-primary-container/10 transition-colors whitespace-nowrap"
            >
              HIRE_ME
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] bg-neutral-400 origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-[1.5px] bg-neutral-400"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] bg-neutral-400 origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-neutral-950 border-l border-white/5 z-50 md:hidden flex flex-col pt-16 px-6 gap-2"
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 material-symbols-outlined text-neutral-400 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                close
              </button>

              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={cn(
                    "font-mono text-sm font-bold tracking-widest uppercase text-left py-3 border-b border-white/5 transition-colors",
                    activeTab === tab
                      ? "text-primary-container"
                      : "text-neutral-400 hover:text-primary-container"
                  )}
                >
                  {tab}
                </button>
              ))}

              <div className="flex gap-4 mt-6 pt-4 border-t border-white/5">
                <button
                  onClick={() => { setTerminalOpen(true); setMobileOpen(false); }}
                  className="material-symbols-outlined text-neutral-400 hover:text-primary-container transition-all text-[20px]"
                >
                  terminal
                </button>
                <button
                  onClick={() => { setSettingsOpen(true); setMobileOpen(false); }}
                  className="material-symbols-outlined text-neutral-400 hover:text-primary-container transition-all text-[20px]"
                >
                  settings
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
