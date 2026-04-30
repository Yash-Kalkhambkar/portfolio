import { motion } from "motion/react";
import { HUDBox } from "../components/hud-box";

function ProgressRing({
  value,
  colorClass,
  label,
  id,
}: {
  value: number;
  colorClass: string;
  label: string;
  id: string;
}) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            className="text-surface-container-highest stroke-current"
            cx="50" cy="50" fill="transparent" r={radius} strokeWidth="8"
          />
          <motion.circle
            className={`${colorClass} stroke-current`}
            cx="50" cy="50" fill="transparent" r={radius}
            strokeWidth="8" strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-[12px] sm:text-[13px] font-bold tracking-widest text-on-surface">{label}</span>
          <span className={`font-mono text-[9px] sm:text-[10px] tracking-widest ${colorClass.split(" ")[0]} opacity-80`}>
            {value}%
          </span>
        </div>
      </div>
      <span className="font-mono text-[9px] sm:text-[10px] text-on-surface-variant tracking-widest opacity-60 text-center">
        {id}
      </span>
    </motion.div>
  );
}

const frontendTech = ["REACT.JS", "NEXT.JS", "TAILWIND", "TYPESCRIPT", "HTML5", "CSS3"];
const backendTech = ["SPRING BOOT", "FASTAPI", "NODE.JS", "REST APIs", "JWT", "SPRING SECURITY"];
const infraTools = [
  { name: "DOCKER", icon: "dns" },
  { name: "KUBERNETES", icon: "data_object" },
  { name: "AWS", icon: "cloud" },
  { name: "AZURE", icon: "cloud_queue" },
  { name: "GCP", icon: "cloud_done" },
  { name: "CI/CD", icon: "merge_type" },
  { name: "GITHUB ACTIONS", icon: "play_circle" },
];

const achievements = [
  {
    id: "ACH-01-AI",
    title: "AI Grand Challenge 2026",
    badge: "🥇 1ST PLACE",
    badgeColor: "text-yellow-400 border-yellow-400/30 bg-yellow-400/5",
    desc: "National hackathon winner out of 800+ teams. ₹1L prize from a ₹9L pool. Engineered the winning predictive algorithm with real-time LLM inference.",
  },
  {
    id: "ACH-02-LEAF",
    title: "LEAF 2026 — Forengers",
    badge: "🌟 SPECIAL APPRECIATION",
    badgeColor: "text-[#00eefc] border-[#00eefc]/30 bg-[#00eefc]/5",
    desc: "Special Appreciation Award from Forengers Foundation at LEAF 2026, recognising contributions across SEO optimisation, multilingual i18n, workflow automation, and the Awards & Recognition module.",
  },
  {
    id: "ACH-03-SPORT",
    title: "National Baseball",
    badge: "⚾ STATE MEDALS",
    badgeColor: "text-primary-container border-primary-container/30 bg-primary-container/5",
    desc: "National-level baseball player with state-level medals. Demonstrates discipline, teamwork, and high-performance execution under pressure.",
  },
];

export function GarageView() {
  return (
    <div className="flex-grow pt-20 md:pt-24 pb-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col min-h-screen">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 md:mb-12 border-b border-surface-container-high pb-6 relative z-10 w-full"
      >
        <div className="flex items-center gap-3 mb-2 opacity-70">
          <span className="material-symbols-outlined text-primary-container text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            build_circle
          </span>
          <span className="font-mono text-[11px] sm:text-[13px] text-primary-container font-bold tracking-[0.2em] uppercase">
            SYSTEM_UPGRADES // INVENTORY
          </span>
        </div>
        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-on-surface">
          THE <span className="text-primary-container drop-shadow-[0_0_15px_rgba(255,87,26,0.2)]">GARAGE</span>
        </h1>
        <p className="font-sans text-sm text-on-surface-variant mt-3 max-w-2xl tracking-wide opacity-80">
          Diagnostic overview of core technical competencies and specialised performance upgrades
          deployed in recent operational cycles.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 relative z-10">

        {/* Core Powertrain — Languages */}
        <HUDBox containerClassName="lg:col-span-8">
          <div className="h-full bg-surface-container/50 backdrop-blur-xl border border-white/5 p-5 sm:p-6 md:p-8 relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),inset_0_-1px_1px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 grid-bg-dots opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-6 md:mb-8">
                <h2 className="font-mono text-lg sm:text-xl md:text-2xl font-bold text-on-surface uppercase tracking-tight">
                  Core Powertrain
                </h2>
                <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-[#00eefc]">SYS.LANG.01</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                <ProgressRing value={90} colorClass="text-primary-container" label="JAVA" id="SKL-01" />
                <ProgressRing value={85} colorClass="text-[#00eefc]" label="PYTHON" id="SKL-02" />
                <ProgressRing value={80} colorClass="text-tertiary" label="TS" id="SKL-03" />
                <ProgressRing value={82} colorClass="text-[#00eefc]" label="SQL" id="SKL-04" />
              </div>
            </div>
          </div>
        </HUDBox>

        {/* AI Modules */}
        <HUDBox containerClassName="lg:col-span-4">
          <div className="h-full bg-surface-container/50 backdrop-blur-xl border border-white/5 p-5 sm:p-6 md:p-8 flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-5">
              <h2 className="font-mono text-lg sm:text-xl font-bold text-on-surface uppercase tracking-tight">AI Modules</h2>
              <span className="material-symbols-outlined text-primary-container text-[20px]">psychology</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 content-start">
              {["GROQ LLM", "AWS BEDROCK", "PROMPT ENG.", "LANGCHAIN"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                  className="cursor-default px-3 py-1.5 bg-surface-container-highest border border-white/10 font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-on-surface transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </HUDBox>

        {/* Frontend Stack */}
        <HUDBox containerClassName="lg:col-span-6">
          <div className="h-full bg-surface-container/50 backdrop-blur-xl border border-white/5 p-5 sm:p-6 md:p-8 flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-5">
              <h2 className="font-mono text-lg sm:text-xl font-bold text-on-surface uppercase tracking-tight">Frontend Stack</h2>
              <span className="material-symbols-outlined text-[#00eefc] text-[20px]">web</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {frontendTech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(0,238,252,0.4)" }}
                  className="cursor-default px-3 sm:px-4 py-1.5 sm:py-2 bg-surface-container-highest border border-white/10 font-mono text-[10px] sm:text-[12px] font-bold tracking-widest text-on-surface transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </HUDBox>

        {/* Backend Stack */}
        <HUDBox containerClassName="lg:col-span-6">
          <div className="h-full bg-surface-container/50 backdrop-blur-xl border border-white/5 p-5 sm:p-6 md:p-8 flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-5">
              <h2 className="font-mono text-lg sm:text-xl font-bold text-on-surface uppercase tracking-tight">Backend Stack</h2>
              <span className="material-symbols-outlined text-primary-container text-[20px]">storage</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {backendTech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,87,26,0.4)" }}
                  className="cursor-default px-3 sm:px-4 py-1.5 sm:py-2 bg-surface-container-highest border border-white/10 font-mono text-[10px] sm:text-[12px] font-bold tracking-widest text-on-surface transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </HUDBox>

        {/* Telemetry & Infra */}
        <HUDBox containerClassName="col-span-1 lg:col-span-12">
          <div className="bg-surface-container/30 backdrop-blur-md border border-white/5 p-4 sm:p-6 flex flex-wrap gap-2 sm:gap-4 items-center">
            <span className="font-mono text-[11px] sm:text-[13px] tracking-widest font-bold text-on-surface-variant uppercase w-full sm:w-auto mb-1 sm:mb-0">
              Telemetry & Control //
            </span>
            {infraTools.map((tool) => (
              <motion.div
                key={tool.name}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 sm:px-4 py-1.5 border border-white/10 bg-surface-container-highest font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-on-surface backdrop-blur-sm flex items-center gap-2 cursor-pointer hover:border-white/40 hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-[14px] sm:text-[16px] text-tertiary">{tool.icon}</span>
                {tool.name}
              </motion.div>
            ))}
          </div>
        </HUDBox>
      </div>

      {/* Podium Finishes */}
      <div className="mt-16 md:mt-20 border-t border-white/10 pt-10 md:pt-12 relative z-10">
        <HUDBox>
          <div className="p-2 sm:p-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 md:mb-8"
            >
              <span className="font-mono text-lg sm:text-xl font-bold text-[#00eefc] drop-shadow-[0_0_8px_#00eefc]">ACHV_</span>
              <h2 className="font-mono text-2xl sm:text-3xl font-bold text-on-surface uppercase tracking-tight">Podium Finishes</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-surface-container-low border-l-4 border-l-primary-container p-5 sm:p-6 relative group shadow-[inset_0_1px_rgba(255,255,255,0.05)] hover:shadow-[-4px_0_25px_0_rgba(255,87,26,0.3)] transition-all duration-300 rounded-sm"
                >
                  <span className="absolute top-3 right-3 font-mono text-[9px] text-on-surface-variant tracking-widest opacity-50">
                    {a.id}
                  </span>
                  <span className={`inline-block font-mono text-[10px] font-bold tracking-widest border px-2 py-0.5 mb-3 ${a.badgeColor}`}>
                    {a.badge}
                  </span>
                  <h3 className="font-mono font-bold text-[15px] sm:text-[17px] text-white leading-tight mb-2 uppercase">{a.title}</h3>
                  <p className="font-sans text-[12px] sm:text-[13px] text-on-surface-variant leading-relaxed opacity-90">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </HUDBox>
      </div>
    </div>
  );
}
