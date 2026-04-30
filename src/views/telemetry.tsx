import { motion } from "motion/react";
import { HUDBox } from "../components/hud-box";

const articleVariants = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export function TelemetryView() {
  return (
    <div className="flex-grow pt-20 md:pt-24 pb-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col min-h-screen">

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 md:mb-12 border-l-4 border-primary-container pl-4 sm:pl-6 flex flex-col gap-2 relative z-10 w-full max-w-4xl"
      >
        <p className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.08em] text-primary-container uppercase">
          PILOT: YASH KALKHAMBKAR
        </p>
        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-on-surface uppercase tracking-tight drop-shadow-[0_0_15px_rgba(255,87,26,0.3)]">
          <span className="text-primary-container">CAREER</span> TELEMETRY
        </h1>
        <p className="font-sans text-sm text-on-surface-variant max-w-2xl mt-1 opacity-80">
          Tracking historical performance data, active deployment metrics, and baseline homologation records.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 relative z-10">

        {/* Left — Professional Laps */}
        <div className="lg:col-span-8 flex flex-col gap-5 md:gap-6">
          <div className="font-mono text-[12px] sm:text-[14px] tracking-[0.1em] text-on-surface font-bold uppercase flex items-center gap-2">
            PROFESSIONAL LAPS
          </div>
          <div className="h-[1px] w-full bg-white/10" />

          {/* Forengers Foundation */}
          <HUDBox>
            <motion.article
              variants={articleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-surface-container/60 backdrop-blur-lg border border-surface-variant border-l-[5px] sm:border-l-[6px] border-l-primary-container p-5 sm:p-6 md:p-8 relative flex flex-col gap-4 overflow-hidden rounded-sm card-ao"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,87,26,0.1),transparent)] pointer-events-none" />

              <div className="relative z-10">
                {/* Badges row */}
                <div className="flex flex-wrap justify-between items-start mb-5 gap-3">
                  <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                    <div className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.08em] text-[#00eefc] uppercase bg-[#00eefc]/10 px-2 py-1 rounded-sm">
                      ID: EXP-02-FOR
                    </div>
                    <div className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.08em] text-primary-container uppercase bg-primary-container/10 border border-primary-container/50 px-2 py-1 flex items-center gap-1.5 rounded-sm">
                      <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse" />
                      HIGH PRIORITY
                    </div>
                  </div>
                  <div className="border border-[#00C27A]/40 px-2 sm:px-3 py-1 rounded-sm">
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.08em] text-[#00C27A] uppercase font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C27A] animate-pulse" />
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-1.5 mb-4">
                  <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface uppercase leading-tight">
                    Forengers Foundation
                  </h2>
                  <p className="font-mono text-[13px] sm:text-[15px] font-bold tracking-[0.1em] text-primary uppercase">
                    Technical Team Member
                  </p>
                  <div className="font-mono text-[10px] sm:text-[12px] tracking-[0.08em] text-tertiary uppercase opacity-60">
                    [SYS.TIME]: Aug 2025 – Present | Pune
                  </div>
                </div>

                {/* Points */}
                <ul className="flex flex-col gap-2 mt-3">
                  {[
                    "Developed multilingual i18n system supporting English, Hindi, and Marathi",
                    "Built Awards & Recognition module with optimised routing and custom error handling",
                    "Improved SEO using meta tags, structured data (JSON-LD), sitemap, and robots.txt",
                    "Automated workflows using Google Apps Script, reducing manual effort",
                  ].map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="font-sans text-[13px] sm:text-[14px] text-on-surface-variant leading-relaxed opacity-90 flex items-start gap-3"
                    >
                      <span className="text-primary-container mt-1 shrink-0 text-[10px]">▸</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </HUDBox>

          {/* Kreo */}
          <HUDBox>
            <motion.article
              variants={articleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-surface-container/40 backdrop-blur-md border border-surface-variant/50 p-5 sm:p-6 flex flex-col gap-3 hover:border-white/20 transition-all rounded-sm relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="font-mono text-[10px] tracking-[0.08em] text-[#00eefc] uppercase font-bold">ID: EXP-01-KREO</div>
                    <h2 className="font-mono text-xl sm:text-2xl font-bold text-on-surface uppercase tracking-tight">Kreo</h2>
                    <p className="font-mono text-[11px] sm:text-[12px] tracking-[0.1em] text-primary uppercase font-bold">Campus Ambassador</p>
                  </div>
                  <div className="bg-surface-variant/30 border border-white/5 px-2 py-1 rounded-sm backdrop-blur-sm shrink-0">
                    <span className="font-mono text-[10px] tracking-[0.08em] text-[#00eefc] uppercase font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00eefc] animate-pulse" />
                      ACTIVE
                    </span>
                  </div>
                </div>

                <div className="font-mono text-[10px] tracking-[0.08em] opacity-60 text-tertiary uppercase font-bold">
                  [SYS.TIME]: 2025 – Present
                </div>

                <ul className="flex flex-col gap-1.5 mt-1">
                  {[
                    "Led campus outreach initiatives and represented brand in technical communities",
                    "Coordinated student engagement events and partnerships",
                  ].map((point, i) => (
                    <li key={i} className="font-sans text-[13px] sm:text-[14px] text-on-surface-variant/80 leading-relaxed flex items-start gap-3">
                      <span className="text-[#00eefc] mt-1 shrink-0 text-[10px]">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-6 border-t border-surface-variant/50 pt-4 mt-2">
                  <div className="flex flex-col gap-1">
                    <div className="font-mono text-[10px] tracking-[0.08em] opacity-60 text-on-surface-variant uppercase font-bold">Projects</div>
                    <div className="text-base sm:text-lg font-mono text-[#00eefc] font-bold">12</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-mono text-[10px] tracking-[0.08em] opacity-60 text-on-surface-variant uppercase font-bold">Deploy Freq</div>
                    <div className="text-base sm:text-lg font-mono text-primary-container font-bold">Weekly</div>
                  </div>
                </div>
              </div>
            </motion.article>
          </HUDBox>
        </div>

        {/* Right — Education + Contact */}
        <div className="lg:col-span-4 flex flex-col gap-5 md:gap-6">
          <div className="font-mono text-[12px] sm:text-[14px] tracking-[0.1em] text-on-surface font-bold uppercase flex items-center gap-2">
            HOMOLOGATION DOCS
          </div>
          <div className="h-[1px] w-full bg-white/10" />

          <HUDBox>
            <motion.article
              variants={articleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-surface-container/60 backdrop-blur-xl border border-surface-variant p-5 sm:p-6 flex flex-col gap-4 rounded-sm card-ao"
            >
              <div className="border-b border-surface-variant pb-4 flex flex-col gap-1.5">
                <h3 className="font-mono text-xl sm:text-2xl font-bold text-on-surface uppercase tracking-tight">MIT Pune</h3>
                <p className="font-mono text-[12px] sm:text-[13px] tracking-[0.1em] text-[#00eefc] uppercase font-bold">B.Tech Computer Science</p>
                <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.08em] text-tertiary uppercase opacity-80">(Cloud Computing)</p>
              </div>

              <div className="flex flex-col gap-3 text-sm text-on-surface-variant flex-grow">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface-container-highest p-3 rounded-sm border border-white/5 flex flex-col gap-1">
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.08em] opacity-60 uppercase text-tertiary">Timeline</span>
                    <span className="font-mono text-[11px] sm:text-[12px] font-bold text-on-surface uppercase">Expected 2027</span>
                  </div>
                  <div className="bg-surface-container-highest p-3 rounded-sm border border-white/5 flex flex-col gap-1">
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.08em] opacity-60 uppercase text-tertiary">Performance</span>
                    <span className="font-mono text-[11px] sm:text-[12px] font-bold text-primary-container uppercase">CGPA: 8.23</span>
                  </div>
                </div>

                <div className="bg-surface-container-highest p-3 rounded-sm border border-white/5 flex flex-col gap-2 flex-grow">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.08em] opacity-60 block mb-1 text-tertiary uppercase">Core Modules Log</span>
                  <div className="flex flex-col gap-1.5 font-mono text-[10px] sm:text-[11px] text-on-surface/80 leading-[1.6]">
                    {["Distributed Systems", "Machine Learning", "Computer Networks", "Cloud Architecture", "System Design"].map((mod, i) => (
                      <motion.span
                        key={mod}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-tertiary/50">{"//"}</span>
                        {mod}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </HUDBox>

          {/* Contact quick-links */}
          <HUDBox>
            <div className="border border-surface-variant bg-surface-container/20 p-4 sm:p-5 flex flex-col gap-3 rounded-sm">
              <div className="font-mono text-[10px] sm:text-[11px] tracking-widest font-bold text-tertiary uppercase mb-1">DIRECT LINKS</div>
              {[
                { label: "yashkalkhambkar@gmail.com", icon: "mail", href: "mailto:yashkalkhambkar@gmail.com" },
                { label: "+91-8956279427", icon: "phone", href: "tel:+918956279427" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] text-on-surface-variant hover:text-primary-container transition-colors group break-all"
                >
                  <span className="material-symbols-outlined text-[14px] text-tertiary group-hover:text-primary-container transition-colors shrink-0">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </HUDBox>
        </div>
      </div>
    </div>
  );
}
