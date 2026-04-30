import { motion } from "motion/react";
import { HUDBox } from "../components/hud-box";

const projects = [
  {
    id: "COM-04-SVT",
    name: "SAVRTI",
    status: "DEPLOYED",
    statusColor: "text-[#00C27A]",
    statusDot: "bg-[#00C27A] shadow-[0_0_10px_rgba(0,194,122,0.6)] animate-pulse",
    desc: "Secure plant exchange backend with JWT-based authentication and role-based access control. Implements complex trade workflow logic — ownership enforcement, request validation (no self/duplicate requests), and transactional consistency (accept → auto-reject others). Layered Controller–Service–Repository architecture with DTO abstraction.",
    stack: ["Spring Boot", "PostgreSQL", "Supabase", "JWT", "Render"],
    demoLabel: "LIVE API",
    demoLink: "https://savrti-plant-exchange-api.onrender.com/swagger-ui/index.html",
    sourceLink: "https://github.com/Yash-Kalkhambkar/Savrti.git",
  },
  {
    id: "EDU-02-RC",
    name: "Rookie's Coder",
    status: "ONLINE",
    statusColor: "text-[#00C27A]",
    statusDot: "bg-[#00C27A] shadow-[0_0_10px_rgba(0,194,122,0.6)] animate-pulse",
    desc: "Full-stack coding platform with React frontend deployed on Vercel. JWT authentication, role-based access control, normalized Supabase schema, and REST APIs for user progress tracking and learning workflows. Gamified algorithmic challenges to accelerate developer skill acquisition.",
    stack: ["React", "Node.js", "TypeScript", "Supabase", "Vercel"],
    demoLabel: "LIVE DEMO",
    demoLink: "https://rookies-coder-2-0.vercel.app/",
    sourceLink: "https://github.com/Yash-Kalkhambkar/Rookies-Coder-2.0.git",
  },
  {
    id: "SYS-01-ESC",
    name: "Escalation Detector",
    status: "ACTIVE",
    statusColor: "text-[#00C27A]",
    statusDot: "bg-[#00C27A] shadow-[0_0_10px_rgba(0,194,122,0.6)] animate-pulse",
    desc: "AI-powered backend to classify support tickets and predict escalation risk. Integrates Groq LLM for real-time inference with structured context tracking. Data pipelines engineered to improve prediction accuracy across high-volume support vectors.",
    stack: ["FastAPI", "PostgreSQL", "Groq LLM", "Python"],
    demoLabel: null,
    demoLink: null,
    sourceLink: "https://github.com/Yash-Kalkhambkar/escalation-detector.git",
  },
  {
    id: "TEL-03-API",
    name: "Agent Monitor API",
    status: "STANDBY",
    statusColor: "text-[#888888]",
    statusDot: "border border-[#888888] bg-transparent",
    desc: "Containerized monitoring API with stateless JWT authentication. Integrates LLM insights for intelligent agent tracking. Deployed using Docker for consistent, scalable environments with sub-millisecond data retrieval and robust failover handling.",
    stack: ["FastAPI", "PostgreSQL", "Docker", "JWT"],
    demoLabel: null,
    demoLink: null,
    sourceLink: "https://github.com/Yash-Kalkhambkar/agent-monitor-api.git",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  }),
};

export function SpecsView() {
  return (
    <div className="flex-grow pt-20 md:pt-24 pb-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-10 md:gap-12 min-h-screen">

      {/* Header */}
      <HUDBox containerClassName="w-full">
        <header className="relative w-full overflow-hidden rounded-sm bg-surface-container/50 backdrop-blur-md border border-white/5 p-6 sm:p-8 md:p-12 shadow-[inset_0_1px_rgba(255,255,255,0.05),inset_0_-1px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 grid-bg-lines opacity-20" />
          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="h-[2px] w-8 sm:w-12 bg-primary-container shadow-[0_0_10px_#ff4d00]" />
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.08em] opacity-60 text-on-surface uppercase font-bold">
                PERFORMANCE LOGS
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-on-surface mb-4 uppercase flex flex-col leading-[1.1]"
            >
              <span className="text-primary-container drop-shadow-[0_0_15px_rgba(255,87,26,0.3)]">SYSTEM</span>
              ARCHITECTURE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-sans text-sm leading-[1.6] text-on-surface-variant opacity-80 max-w-xl"
            >
              Detailed telemetry and specification sheets for active deployment modules.
              High-throughput systems engineered for precision execution and robust load management.
            </motion.p>
          </div>
        </header>
      </HUDBox>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 relative z-10">
        {projects.map((project, i) => (
          <HUDBox key={project.id} containerClassName="h-full group">
            <motion.article
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative z-10 bg-surface-container-low/80 backdrop-blur-xl border border-white/10 p-5 sm:p-6 md:p-8 h-full flex flex-col transition-colors duration-500 group-hover:border-primary-container/30 card-ao rounded-sm"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm bg-[radial-gradient(ellipse_at_top_left,rgba(255,87,26,0.06),transparent_60%)]" />

              {/* Header row */}
              <div className="flex justify-between items-start mb-4 border-b border-white/5 pb-4 relative z-10 gap-2">
                <div className="min-w-0">
                  <h2 className="font-mono text-lg sm:text-xl md:text-2xl font-bold text-on-surface uppercase tracking-tight mb-1 truncate">
                    {project.name}
                  </h2>
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.08em] opacity-60 text-tertiary uppercase">
                    ID: {project.id}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${project.statusDot}`} />
                  <span className={`font-mono text-[11px] sm:text-[12px] tracking-[0.1em] font-bold ${project.statusColor} uppercase`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-5 flex-grow relative z-10">
                <p className="font-sans text-[13px] sm:text-sm text-on-surface-variant leading-relaxed opacity-90">
                  {project.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-3 border-t border-white/5 pt-4 relative z-10">
                <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.1em] font-bold text-outline-variant uppercase">
                  Core Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className={`font-mono text-[10px] sm:text-[11px] tracking-[0.08em] uppercase px-2 py-0.5 border border-white/5 bg-surface-container-highest font-bold ${
                        idx === 0 ? "text-white border-white/20" : "text-white/55"
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono tracking-widest uppercase text-[10px] sm:text-[11px] font-bold border border-primary-container text-primary-container bg-primary-container/5 px-3 sm:px-4 py-2 hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center gap-2 group/btn"
                    >
                      {project.demoLabel}
                      <span className="material-symbols-outlined text-[13px] group-hover/btn:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  )}
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono tracking-widest uppercase text-[10px] sm:text-[11px] font-bold border border-white/20 text-white/60 bg-transparent px-3 sm:px-4 py-2 hover:border-white/50 hover:text-white transition-colors flex items-center gap-2 group/src"
                  >
                    SOURCE
                    <span className="material-symbols-outlined text-[13px]">code</span>
                  </a>
                </div>
              </div>
            </motion.article>
          </HUDBox>
        ))}
      </section>
    </div>
  );
}
