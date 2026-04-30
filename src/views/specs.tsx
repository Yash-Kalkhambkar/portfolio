import { motion } from "motion/react";
import { HUDBox } from "../components/hud-box";
import { useAppContext } from "../lib/context";

const projects = [
  {
    id: "SYS-01-ESC",
    name: "Escalation Detector",
    status: "ACTIVE",
    statusColor: "text-[#00C27A]",
    statusDot: "bg-[#00C27A] shadow-[0_0_10px_rgba(0,194,122,0.6)] animate-pulse",
    desc: "Real-time monitoring infrastructure designed to identify critical support vectors. Utilizes natural language processing and keyword density telemetry to automatically trigger engineering team alerts during high-stress threshold breaches.",
    stack: ["FastAPI", "Python NLP", "React"]
  },
  {
    id: "EDU-02-RC",
    name: "Rookie's Coder",
    status: "ONLINE",
    statusColor: "text-[#00C27A]",
    statusDot: "bg-[#00C27A] shadow-[0_0_10px_rgba(0,194,122,0.6)] animate-pulse",
    desc: "High-performance interactive learning module for entry-level developers. Engineered with live code execution sandboxes and gamified algorithmic stress tests to accelerate logic acquisition and syntactical proficiency.",
    stack: ["Spring Boot", "React", "PostgreSQL"],
    demo: true
  },
  {
    id: "TEL-03-API",
    name: "Agent Monitor API",
    status: "STANDBY",
    statusColor: "text-[#888888]",
    statusDot: "border border-[#888888] bg-transparent",
    desc: "Low-latency telemetry pipeline engineered to aggregate and distribute performance metrics across highly distributed microservice clusters. Optimized for sub-millisecond data retrieval and robust failover handling.",
    stack: ["FastAPI", "Redis", "Docker"]
  },
  {
    id: "COM-04-SVT",
    name: "SAVRTI",
    status: "ONLINE",
    statusColor: "text-[#00C27A]",
    statusDot: "bg-[#00C27A] shadow-[0_0_10px_rgba(0,194,122,0.6)] animate-pulse",
    desc: "Synchronous Audio/Video Routing Interface. Built to maintain critical communication links in severely degraded bandwidth scenarios, ensuring uninterrupted data packet delivery for mission-critical operations.",
    stack: ["Node.js", "AWS", "WebSockets"]
  }
];

export function SpecsView() {
  const { setTerminalOpen } = useAppContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow pt-[120px] pb-[48px] px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-[48px] min-h-[calc(100vh-100px)]"
    >
      {/* Header Section */}
      <HUDBox containerClassName="w-full">
        <header className="relative w-full overflow-hidden rounded-sm bg-surface-container/50 backdrop-blur-md border border-white/5 p-8 md:p-12 shadow-[inset_0_1px_rgba(255,255,255,0.05),inset_0_-1px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 grid-bg-lines opacity-20" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[2px] w-12 bg-primary-container shadow-[0_0_10px_#ff4d00]" />
              <span className="font-mono text-[11px] tracking-[0.08em] opacity-60 text-on-surface uppercase font-bold">PERFORMANCE LOGS</span>
            </div>
            
            <h1 className="font-mono text-5xl md:text-6xl font-bold tracking-tighter text-on-surface mb-6 uppercase flex flex-col leading-[1.1]">
              <span className="text-primary-container drop-shadow-[0_0_15px_rgba(255,87,26,0.3)]">SYSTEM</span>
              ARCHITECTURE
            </h1>
            
            <p className="font-sans text-sm leading-[1.6] text-on-surface-variant opacity-80 max-w-xl">
              Detailed telemetry and specification sheets for active deployment modules. High-throughput systems engineered for precision execution and robust load management.
            </p>
          </div>
        </header>
      </HUDBox>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {projects.map((project, i) => (
          <HUDBox key={project.id} containerClassName="h-full group perspective-[1000px]">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative z-10 bg-surface-container-low/80 backdrop-blur-xl border border-white/10 p-8 h-full flex flex-col transition-colors duration-500 group-hover:border-primary-container/30 card-ao rounded-sm transform-gpu group-hover:[transform:rotateX(2deg)_rotateY(-2deg)]"
            >
              <div className="flex justify-between items-start mb-4 border-b border-white/5 pb-4">
                <div>
                  <h2 className="font-mono text-2xl font-bold text-on-surface uppercase tracking-tight mb-1">{project.name}</h2>
                  <span className="font-mono text-[11px] tracking-[0.08em] opacity-60 text-tertiary uppercase">ID: {project.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${project.statusDot}`} />
                  <span className={`font-mono text-[13px] tracking-[0.1em] font-bold ${project.statusColor} uppercase`}>{project.status}</span>
                </div>
              </div>
              
              <div className="mb-6 flex-grow">
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed opacity-90 line-clamp-3">
                  {project.desc}
                </p>
                <button className="text-primary-container text-[11px] font-mono tracking-widest font-bold mt-3 hover:opacity-80 transition-opacity uppercase">
                  + EXPAND
                </button>
              </div>

              <div className="flex flex-col gap-4 border-t border-white/5 pt-4">
                <span className="font-mono text-[13px] tracking-[0.1em] font-bold text-outline-variant uppercase">Core Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={tech} className={`font-mono text-[11px] tracking-[0.08em] uppercase ${i === 0 ? 'text-white' : 'text-white/55'} font-bold`}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => setTerminalOpen(true)}
                  className="font-mono tracking-widest uppercase text-[11px] font-bold border border-primary-container text-primary-container bg-primary-container/5 px-4 py-2 hover:bg-primary-container hover:text-on-primary-container transition-colors w-max mt-4 flex items-center gap-2 group/btn shadow-[inset_0_0_12px_rgba(255,77,0,0)] hover:shadow-[inset_0_0_12px_rgba(255,77,0,0.4)]"
                >
                   {project.demo ? "LIVE DEMO" : "VIEW SOURCE"} 
                   <span className="material-symbols-outlined text-[14px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </motion.article>
          </HUDBox>
        ))}
      </section>
    </motion.div>
  );
}
