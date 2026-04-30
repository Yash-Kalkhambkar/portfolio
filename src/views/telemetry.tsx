import { motion } from "motion/react";
import { HUDBox } from "../components/hud-box";

export function TelemetryView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow pt-[120px] pb-[48px] px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col min-h-[calc(100vh-100px)]"
    >
      <header className="mb-12 border-l-4 border-primary-container pl-6 flex flex-col gap-2 relative z-10 w-full max-w-4xl">
        <p className="font-mono text-[11px] font-bold tracking-[0.08em] text-primary-container uppercase">PILOT: YASH KALKHAMBKAR</p>
        <h1 className="font-mono text-5xl md:text-6xl font-bold text-on-surface uppercase tracking-tight drop-shadow-[0_0_15px_rgba(255,87,26,0.3)]">
           <span className="text-primary-container">CAREER</span> TELEMETRY
        </h1>
        <p className="font-sans text-sm text-on-surface-variant max-w-2xl mt-2 opacity-80">
          Tracking historical performance data, active deployment metrics, and baseline homologation records.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Column - Professional Laps */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="font-mono text-[14px] tracking-[0.1em] text-on-surface font-bold uppercase flex items-center gap-2 mb-2">
            PROFESSIONAL LAPS
          </div>
          <div className="h-[1px] w-full bg-white/10 mb-2" />

          {/* Featured Experience */}
          <HUDBox>
            <article className="bg-surface-container/60 backdrop-blur-lg border border-surface-variant border-l-[6px] border-l-primary-container p-8 relative flex flex-col gap-4 overflow-hidden rounded-sm card-ao">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,87,26,0.15),transparent,transparent)] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="font-mono text-[11px] font-bold tracking-[0.08em] text-[#00eefc] uppercase bg-[#00eefc]/10 px-2 py-1 rounded-sm">
                      ID: EXP-02-FOR
                    </div>
                    <div className="font-mono text-[11px] font-bold tracking-[0.08em] text-primary-container uppercase bg-primary-container/10 border border-primary-container/50 px-2 py-1 flex items-center gap-2 shadow-[0_0_10px_rgba(232,93,36,0.2)] rounded-sm">
                      <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse shadow-[0_0_5px_#E85D24]"></span> SYSTEM_PRIORITY: HIGH
                    </div>
                  </div>
                  <div className="border border-primary-container/40 px-3 py-1 rounded-sm">
                     <span className="font-mono text-[11px] tracking-[0.08em] opacity-80 text-primary-container uppercase font-bold">ARCHIVED</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-6">
                  <h2 className="font-mono text-4xl md:text-5xl font-bold text-on-surface mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] uppercase">Forengers Foundation</h2>
                  <p className="font-mono text-[16px] font-bold tracking-[0.1em] text-primary uppercase">Featured Deployment: Web Developer</p>
                </div>

                <div className="font-mono text-[12px] tracking-[0.08em] text-tertiary mb-4 uppercase opacity-60">
                   [SYS.TIME]: Past Deployment
                </div>
                <p className="font-sans text-[16px] md:text-[18px] text-on-surface-variant max-w-4xl leading-relaxed opacity-90">
                   Engineered environmental awareness platforms. Optimized structural code for maximum efficiency and reach, laying the groundwork for complex system architecture and significantly boosting platform engagement metrics.
                </p>
              </div>
            </article>
          </HUDBox>

          {/* Secondary Experience */}
          <HUDBox>
            <article className="bg-surface-container/40 backdrop-blur-md border border-surface-variant/50 p-6 flex flex-col gap-2 opacity-80 hover:opacity-100 transition-opacity rounded-sm relative overflow-hidden">
             
             <div className="relative z-10 flex flex-col gap-2 h-full">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col gap-1">
                  <div className="font-mono text-[10px] tracking-[0.08em] text-[#00eefc] uppercase font-bold">ID: EXP-01-KREO</div>
                  <h2 className="font-mono text-2xl font-bold text-on-surface uppercase mb-0 tracking-tight">Kreo</h2>
                  <p className="font-mono text-[12px] tracking-[0.1em] text-primary uppercase font-bold">Campus Ambassador</p>
                </div>
                <div className="bg-surface-variant/30 border border-white/5 px-2 py-1 rounded-sm backdrop-blur-sm">
                  <span className="font-mono text-[10px] tracking-[0.08em] opacity-80 text-[#00eefc] uppercase font-bold">ACTIVE</span>
                </div>
              </div>

              <div className="font-mono text-[10px] tracking-[0.08em] opacity-60 text-tertiary mb-2 flex gap-4 uppercase font-bold">
                 <span>[SYS.TIME]: Present</span>
                 <span>[LOC]: Bangalore, IN</span>
              </div>
              
              <p className="font-sans text-[14px] text-on-surface-variant/80 mb-4 leading-relaxed">
                 Architecting high-performance backend systems focusing on low-latency data retrieval and developing seamless user interfaces mimicking dashboard-level precision.
              </p>

              {/* Mini Stats (bottom right equivalent) */}
              <div className="flex gap-6 border-t border-surface-variant/50 pt-4 mt-auto">
                 <div className="flex flex-col gap-1">
                    <div className="font-mono text-[10px] tracking-[0.08em] opacity-60 text-on-surface-variant uppercase font-bold">Projects</div>
                    <div className="text-lg font-mono text-[#00eefc] font-bold">12</div>
                 </div>
                 <div className="flex flex-col gap-1">
                    <div className="font-mono text-[10px] tracking-[0.08em] opacity-60 text-on-surface-variant uppercase font-bold">Deploy Freq</div>
                    <div className="text-lg font-mono text-primary-container font-bold">Weekly</div>
                 </div>
              </div>
             </div>
            </article>
          </HUDBox>
        </div>

        {/* Right Column - Homologation (Education) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
           <div className="font-mono text-[14px] tracking-[0.1em] text-on-surface font-bold uppercase flex items-center gap-2 mb-2">
            HOMOLOGATION DOCS
          </div>
          <div className="h-[1px] w-full bg-white/10 mb-2" />

          <HUDBox>
            <article className="bg-surface-container/60 backdrop-blur-xl border border-surface-variant p-6 flex flex-col gap-4 rounded-sm card-ao h-full">
              <div className="border-b border-surface-variant pb-4 flex flex-col gap-2 relative z-10">
                <h3 className="font-mono text-2xl font-bold text-on-surface uppercase tracking-tight">MIT Pune</h3>
                <p className="font-mono text-[13px] tracking-[0.1em] text-[#00eefc] mt-1 uppercase font-bold">B.Tech Computer Science</p>
                <p className="font-mono text-[11px] tracking-[0.08em] text-tertiary uppercase opacity-80">(Cloud Computing)</p>
              </div>

              <div className="flex flex-col gap-4 text-sm text-on-surface-variant relative z-10 flex-grow">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-container-highest p-3 rounded-sm border border-white/5 flex flex-col gap-1">
                       <span className="font-mono text-[10px] font-bold tracking-[0.08em] opacity-60 uppercase text-tertiary">Timeline</span>
                       <span className="font-mono text-[12px] font-bold text-on-surface uppercase">Expected 2027</span>
                    </div>
                    <div className="bg-surface-container-highest p-3 rounded-sm border border-white/5 flex flex-col gap-1">
                       <span className="font-mono text-[10px] font-bold tracking-[0.08em] opacity-60 uppercase text-tertiary">Performance</span>
                       <span className="font-mono text-[12px] font-bold text-primary-container uppercase">GPA: 8.23</span>
                    </div>
                 </div>

                 <div className="bg-surface-container-highest p-3 rounded-sm border border-white/5 flex flex-col gap-2 flex-grow">
                    <span className="font-mono text-[11px] font-bold tracking-[0.08em] opacity-60 block mb-1 text-tertiary uppercase">Core Modules Log</span>
                    <div className="flex flex-col gap-2 font-mono text-[11px] text-on-surface/80 leading-[1.6]">
                       <span className="flex items-center gap-2"><span className="text-tertiary/50">{"//"}</span> Distributed Systems</span>
                       <span className="flex items-center gap-2"><span className="text-tertiary/50">{"//"}</span> Machine Learning</span>
                       <span className="flex items-center gap-2"><span className="text-tertiary/50">{"//"}</span> Computer Networks</span>
                    </div>
                 </div>
              </div>
            </article>
          </HUDBox>

          {/* Decorative Wait State */}
          <HUDBox>
            <div className="mt-auto h-32 border border-surface-variant bg-surface-container/20 flex items-center justify-center relative overflow-hidden rounded-sm group">
               <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0)_25%,rgba(255,255,255,0.02)_50%,rgba(0,0,0,0)_75%)] bg-[length:200%_200%] animate-[scanline_3s_linear_infinite]" />
               <div className="z-10 font-mono text-[11px] tracking-[0.08em] font-bold opacity-60 text-tertiary text-center uppercase leading-relaxed">
                  [SYS.READY]<br/>AWAITING_INPUT
               </div>
            </div>
          </HUDBox>
        </div>
      </div>
    </motion.div>
  );
}
