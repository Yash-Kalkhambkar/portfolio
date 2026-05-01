import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { HUDBox } from "../components/hud-box";
import { useAppContext } from "../lib/context";

// Staggered letter animation
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.3 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

function AnimatedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={className}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function DriveView() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { setActiveTab } = useAppContext();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex-grow pt-14 md:pt-16 flex items-center relative overflow-hidden min-h-screen">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,rgba(13,43,43,0.3),transparent)] pointer-events-none z-0" />
      <div className="scan-line" />

      {/* Parallax dot grid */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none w-[110%] h-[110%] -left-[5%] -top-[5%] grid-bg-dots opacity-20"
        style={{ x: mousePosition.x, y: mousePosition.y }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 relative z-10 py-8 md:py-12">

        {/* ── Left Column ── */}
        <HUDBox containerClassName="col-span-1 md:col-span-6 flex flex-col justify-center py-8 md:py-12">

          {/* Identity badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6 w-max"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C878] shadow-[0_0_6px_2px_rgba(0,200,120,0.6)] animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.15em] text-white/40 uppercase">
              YASH
            </span>
            <span className="font-mono text-[11px] text-white/20">//</span>
            <span className="font-mono text-[11px] tracking-[0.15em] text-primary-container/70 uppercase">
              SHIFT_ENGINEER
            </span>
          </motion.div>

          {/* Main headline */}
          <h1 className="font-mono text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-[800] leading-[0.95] text-on-surface mb-3 tracking-tighter">
            <AnimatedText text="YASH" />
            <br />
            <AnimatedText text="KALKHAMBKAR:" />
          </h1>

          <div className="font-mono text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-[700] mb-8 drop-shadow-[0_0_12px_rgba(255,87,26,0.35)] text-primary-container leading-[1.05] tracking-tighter">
            <AnimatedText text="FULL-STACK" />
            <br />
            <AnimatedText text="ARCHITECT" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="font-sans text-[13px] md:text-[14px] leading-[1.7] text-on-surface-variant mb-10 max-w-sm md:max-w-md border-l-2 border-outline/30 pl-4 opacity-70"
          >
            Full-stack engineer specializing in Spring Boot, FastAPI, and
            cloud-native systems. Building secure, scalable backends and
            precision-crafted frontends.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => setActiveTab("GARAGE")}
              className="bg-primary-container text-on-primary-container font-mono text-[13px] h-[44px] px-5 uppercase tracking-[0.1em] hover:bg-inverse-primary transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(232,93,36,0.35)] hover:shadow-[0_0_30px_rgba(232,93,36,0.6)]"
            >
              EXPLORE GARAGE
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
            <button
              onClick={() => setActiveTab("COMMS")}
              className="border border-white/40 text-white font-mono text-[13px] h-[44px] px-5 uppercase tracking-[0.1em] hover:bg-white/10 hover:border-white/60 transition-all"
            >
              INITIATE COMMS
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-6"
          >
            {[
              { label: "Mood", value: "⚡ LOCKED IN" },
              { label: "Vibe", value: "🎧 DEEP WORK", highlight: true },
              { label: "Coffee", value: "☕ CRITICAL" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-[10px] tracking-[0.12em] mb-1 uppercase text-primary-container/60">
                  {stat.label}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.4 }}
                  className={`font-mono text-[13px] md:text-[14px] font-bold leading-tight ${
                    stat.highlight ? "text-white" : "text-on-surface"
                  }`}
                >
                  {stat.value}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </HUDBox>

        {/* ── Right Column — Portrait ── */}
        <HUDBox containerClassName="col-span-1 md:col-span-6 flex items-end justify-center relative w-full min-h-[320px] sm:min-h-[420px] md:min-h-[600px]">

          {/* Social links — top */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute top-4 left-0 right-0 flex justify-center md:justify-start md:left-4 z-20 gap-4 font-mono text-[10px] tracking-[0.12em] text-white/30 uppercase"
          >
            <a
              href="https://linkedin.com/in/yash-kalkhambkar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-container hover:text-white/80 transition-colors"
            >
              LINKEDIN
            </a>
            <span className="opacity-30">|</span>
            <a
              href="https://github.com/yashkalkhambkar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-container hover:text-white/80 transition-colors"
            >
              GITHUB
            </a>
          </motion.div>

          {/* Accent bar — bottom right */}
          <div className="absolute bottom-0 right-0 flex gap-1.5 z-20">
            <span className="block w-10 h-[3px] bg-primary-container shadow-[0_0_8px_#FF571A]" />
            <span className="block w-2.5 h-[3px] bg-surface-bright" />
            <span className="block w-2.5 h-[3px] bg-surface-bright" />
          </div>

          {/* Clean ambient glow behind portrait — no 3D clutter */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            {/* Soft radial glow */}
            <div className="w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(255,87,26,0.07)_0%,transparent_70%)]" />
          </div>

          {/* Subtle vertical line accent */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="absolute left-0 top-[15%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-primary-container/20 to-transparent origin-top hidden md:block"
          />

          {/* Portrait */}
          <motion.div
            className="w-full h-full flex flex-col justify-end items-center relative mx-auto max-w-[520px] pt-12 z-10"
            style={{
              rotateY: mousePosition.x * -0.3,
              rotateX: mousePosition.y * 0.3,
            }}
          >
            <motion.img
              src="/yk_pic_6.png"
              alt="Yash Kalkhambkar"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
              className="w-full h-auto object-contain relative z-10 pointer-events-none
                drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]
                [mask-image:linear-gradient(to_right,transparent_0%,black_15%)]
                [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%)]"
            />
          </motion.div>
        </HUDBox>
      </div>
    </div>
  );
}
