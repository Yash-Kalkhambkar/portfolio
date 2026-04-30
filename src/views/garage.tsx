import { motion } from "motion/react";
import { HUDBox } from "../components/hud-box";

function ProgressRing({ value, colorClass, label, id }: { value: number, colorClass: string, label: string, id: string }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle 
            className="text-surface-container-highest stroke-current" 
            cx="50" cy="50" fill="transparent" r={radius} strokeWidth="8" 
          />
          <motion.circle 
            className={`${colorClass} stroke-current progress-ring`}
            cx="50" cy="50" fill="transparent" r={radius} 
            strokeWidth="8" strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-[13px] font-bold tracking-widest text-on-surface">{label}</span>
          <span className={`font-mono text-[10px] tracking-widest ${colorClass.split(" ")[0]} opacity-80`}>{value}%</span>
        </div>
      </div>
      <span className="font-mono text-[10px] text-on-surface-variant tracking-widest opacity-60">ID: {id}</span>
    </div>
  );
}

export function GarageView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow pt-[120px] pb-[48px] px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col min-h-[calc(100vh-100px)]"
    >
      {/* Header */}
      <div className="mb-12 border-b border-surface-container-high pb-6 relative z-10 w-full text-left">
        <div className="flex items-center gap-3 mb-2 opacity-70">
          <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>build_circle</span>
          <span className="font-mono text-[13px] text-primary-container font-bold tracking-[0.2em] uppercase">SYSTEM_UPGRADES // INVENTORY</span>
        </div>
        <h1 className="font-mono text-5xl md:text-6xl font-bold uppercase tracking-tighter text-on-surface">
          THE <span className="text-primary-container drop-shadow-[0_0_15px_rgba(255,87,26,0.2)]">GARAGE</span>
        </h1>
        <p className="font-sans text-sm text-on-surface-variant mt-4 max-w-2xl font-['Space_Grotesk'] tracking-wide">
          Diagnostic overview of core technical competencies and specialized performance upgrades deployed in recent operational cycles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Core Powertrain */}
        <HUDBox containerClassName="lg:col-span-8">
          <div className="h-full bg-surface-container/50 backdrop-blur-xl border border-white/5 p-8 relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),inset_0_-1px_1px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay pointer-events-none" />
            <div className="relative z-10">
              <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-8">
                <h2 className="font-mono text-2xl font-bold text-on-surface uppercase tracking-tight">Core Powertrain</h2>
                <span className="font-mono text-[11px] tracking-widest text-[#00eefc]">SYS.LANG.01</span>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <ProgressRing value={95} colorClass="text-primary-container shadow-[0_0_15px_#ff571a]" label="JAVA" id="SKL-01-JAVA" />
                <ProgressRing value={90} colorClass="text-[#00eefc] shadow-[0_0_15px_#00eefc]" label="PYTHON" id="SKL-02-PY" />
                <ProgressRing value={80} colorClass="text-tertiary" label="C++" id="SKL-03-CPP" />
                <ProgressRing value={85} colorClass="text-[#00eefc] shadow-[0_0_15px_#00eefc]" label="SQL" id="SKL-04-SQL" />
              </div>
            </div>
          </div>
        </HUDBox>

        {/* Forced Induction */}
        <HUDBox containerClassName="lg:col-span-4 h-full">
           <div className="h-full bg-surface-container/50 backdrop-blur-xl border border-white/5 p-8 flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),inset_0_-1px_1px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-6">
              <h2 className="font-mono text-2xl font-bold text-on-surface uppercase tracking-tight">Forced Induction</h2>
              <span className="material-symbols-outlined text-primary-container">speed</span>
            </div>
            <div className="flex-grow flex flex-wrap gap-3 content-start">
               {["REACT.JS", "NEXT.JS", "TAILWIND"].map(tech => (
                 <motion.span 
                  key={tech}
                  whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.4)" }}
                  className="cursor-default px-4 py-2 bg-surface-container-highest border border-white/10 rounded-full font-mono text-[12px] font-bold tracking-widest text-on-surface transition-colors"
                 >
                   {tech}
                 </motion.span>
               ))}
            </div>
           </div>
        </HUDBox>

        {/* Telemetry & Infra */}
        <HUDBox className="lg:col-span-12 mt-4" containerClassName="col-span-1 md:col-span-12">
            <div className="bg-surface-container/30 backdrop-blur-md border border-white/5 p-6 flex flex-wrap gap-4 items-center rounded-sm">
               <span className="font-mono text-[13px] tracking-widest font-bold text-on-surface-variant uppercase mr-4">Telemetry & Control //</span>
               {[
                 { name: "DOCKER", icon: "dns" },
                 { name: "AWS", icon: "cloud" },
                 { name: "CI/CD PIPELINES", icon: "merge_type" },
                 { name: "KUBERNETES", icon: "data_object" }
               ].map(tool => (
                  <motion.div 
                    key={tool.name}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-1.5 border border-white/10 bg-surface-container-highest font-mono text-[11px] font-bold tracking-widest text-on-surface backdrop-blur-sm flex items-center gap-2 cursor-pointer hover:border-white/40 hover:bg-surface-container transition-colors"
                  >
                     <span className="material-symbols-outlined text-[16px] text-tertiary">{tool.icon}</span> {tool.name}
                  </motion.div>
               ))}
            </div>
        </HUDBox>
      </div>
      
      {/* Podium Finishes */}
      <div className="mt-20 border-t border-white/10 pt-12 relative z-10">
        <HUDBox>
          <div className="p-4">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xl font-bold text-[#00eefc] drop-shadow-[0_0_8px_#00eefc]">ACHV_</span>
              <h2 className="font-mono text-3xl font-bold text-on-surface uppercase tracking-tight">Podium Finishes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { id: "ACH-01-AI", title: "AI Grand Challenge Winner", desc: "Engineered the winning predictive algorithm, outperforming 200+ teams by optimizing deep learning models for real-time telemetry processing." },
                { id: "ACH-02-LEAF", title: "LEAF 2026 Finalist", desc: "Developed a microservices architecture that reduced latency by 40% under extreme simulated load conditions." },
                { id: "ACH-03-ACAD", title: "Academic Excellence", desc: "Graduated top 5% of cohort, specializing in high-performance distributed networks and robust system design." }
              ].map((achievement, i) => (
                <motion.div 
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-surface-container-low border-l-4 border-l-primary-container p-6 relative group transform-gpu shadow-[inset_0_1px_rgba(255,255,255,0.05)] hover:shadow-[-4px_0_25px_0_rgba(255,87,26,0.3)] transition-all duration-300 rounded-sm"
                >
                  <span className="absolute top-4 right-4 font-mono text-[10px] text-on-surface-variant tracking-widest opacity-60">ID: {achievement.id}</span>
                  <h3 className="font-mono font-bold text-[18px] text-white leading-tight mb-2 mt-4 uppercase">{achievement.title}</h3>
                  <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed opacity-90">{achievement.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </HUDBox>
      </div>

    </motion.div>
  );
}
