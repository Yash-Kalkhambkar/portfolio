import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const BOOT_LINES = [
  { text: "> INITIALIZING SHIFT_ENGINEER v2.0...", delay: 0 },
  { text: "> KERNEL: ACTIVE", delay: 300 },
  { text: "> LOADING TELEMETRY MODULES...", delay: 600 },
  { text: "> MOUNTING DRIVE SYSTEMS...", delay: 900 },
  { text: "> CALIBRATING HUD OVERLAY...", delay: 1200 },
  { text: "> PILOT: YASH KALKHAMBKAR", delay: 1500 },
  { text: "> ALL SYSTEMS NOMINAL — SYSTEM READY.", delay: 1800 },
];

interface BootScreenProps {
  onComplete: () => void;
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
    });

    // Start exit after last line
    setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 600);
    }, 2600);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-[#080808] flex flex-col items-center justify-center"
        >
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="scan-line" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
              }}
            />
          </div>

          <div className="w-full max-w-xl px-8 font-mono">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-black italic tracking-tighter text-primary-container mb-8"
            >
              SHIFT_ENGINEER
            </motion.div>

            {/* Boot lines */}
            <div className="flex flex-col gap-2">
              {BOOT_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    visibleLines.includes(i)
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.2 }}
                  className={`text-[13px] tracking-wide ${
                    line.text.includes("READY")
                      ? "text-[#00C878] font-bold"
                      : line.text.includes("PILOT")
                      ? "text-primary-container font-bold"
                      : "text-tertiary"
                  }`}
                >
                  {line.text}
                  {i === BOOT_LINES.length - 1 &&
                    visibleLines.includes(i) && (
                      <span className="inline-block w-2 h-3 bg-[#00C878] ml-1 animate-pulse" />
                    )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-[2px] bg-surface-container-high overflow-hidden">
              <motion.div
                className="h-full bg-primary-container shadow-[0_0_8px_rgba(255,87,26,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
