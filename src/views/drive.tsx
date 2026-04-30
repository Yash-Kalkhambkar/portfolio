import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { HUDBox } from "../components/hud-box";
import { useAppContext } from "../lib/context";

export function DriveView() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { setActiveTab } = useAppContext();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow pt-[100px] flex items-center relative overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_50%,rgba(13,43,43,0.25)_100%)] pointer-events-none z-0" />
      <div className="scan-line" />
      
      {/* Background Grid with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none w-[110%] h-[110%] -left-[5%] -top-[5%] grid-bg-dots opacity-30"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 py-12">
        {/* Left Column - Typography */}
        <HUDBox containerClassName="col-span-1 md:col-span-6 flex flex-col justify-center py-12">
          <motion.div 
              initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-white/10 bg-surface/40 backdrop-blur-md w-max shadow-[inset_0_1px_0_rgba(255,255,255,0.04),inset_0_-1px_0_rgba(0,0,0,0.3)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00C878] shadow-[0_0_6px_2px_rgba(0,200,120,0.6)] animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.1em] opacity-60 text-white uppercase">System Online</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-mono text-[48px] md:text-[72px] font-[800] leading-[1.0] text-on-surface mb-2 tracking-tighter"
          >
            YASH<br/>KALKHAMBKAR:
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-mono text-[40px] md:text-[64px] font-[700] mb-8 drop-shadow-[0_0_12px_rgba(255,87,26,0.4)] text-primary-container leading-[1.1] tracking-tighter"
          >
            FULL-STACK<br/>ARCHITECT
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-sans text-[14px] leading-[1.65] text-on-surface-variant mb-12 max-w-md border-l-2 border-outline/30 pl-4 opacity-75"
          >
            Building high-performance systems with cloud-native precision. Architecting the digital infrastructure of tomorrow.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button 
              onClick={() => setActiveTab("GARAGE")}
              className="bg-primary-container text-on-primary-container font-mono text-[14px] h-[48px] px-6 uppercase tracking-[0.1em] hover:bg-inverse-primary transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(232,93,36,0.4)] hover:shadow-[0_0_30px_rgba(232,93,36,0.7)]"
            >
              EXPLORE GARAGE
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button 
              onClick={() => setActiveTab("COMMS")}
              className="border-[1.5px] border-white/50 text-white font-mono text-[14px] h-[48px] px-6 uppercase tracking-[0.1em] hover:bg-white/10 transition-all"
            >
              INITIATE COMMS
            </button>
          </motion.div>

          {/* Telemetry Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            {[
              { label: "Uptime", value: "99.99%" },
              { label: "Latency", value: "12ms", highlight: true },
              { label: "Deployments", value: "1,024+" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-[12px] tracking-[0.1em] mb-1 uppercase text-primary-container/80">
                  {stat.label}
                </div>
                <div className={`font-mono text-[24px] font-bold ${stat.highlight ? 'text-white' : 'text-on-surface'}`}>
                  {stat.value}
                </div>
              </div>
            ))}
          </motion.div>
        </HUDBox>

        {/* Right Column - 3D Visualizer Profile */}
        <HUDBox containerClassName="col-span-1 md:col-span-6 flex items-center relative w-full h-full min-h-[600px]">
          <div className="absolute top-0 right-0 md:left-4 z-20 font-mono text-[10px] tracking-[0.1em] opacity-40 text-white uppercase mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary-container hover:opacity-100 transition-opacity">LINKEDIN</a>
            <span className="mx-3 opacity-50">|</span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary-container hover:opacity-100 transition-opacity">GITHUB</a>
          </div>
          
          <div className="absolute bottom-0 right-0 flex gap-1.5 z-20">
            <span className="block w-10 h-[3px] bg-primary-container shadow-[0_0_8px_#FF571A]" />
            <span className="block w-2.5 h-[3px] bg-surface-bright" />
            <span className="block w-2.5 h-[3px] bg-surface-bright" />
          </div>

          <motion.div 
            className="w-full h-full flex flex-col justify-end items-center relative mx-auto max-w-[600px] pt-12"
            style={{
              rotateY: mousePosition.x * -0.5,
              rotateX: mousePosition.y * 0.5,
            }}
          >
            <img 
              src="/yk_pic_6.png" 
              alt="Yash Kalkhambkar" 
              className="w-[95%] h-auto max-w-[550px] object-contain relative z-10 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] mt-auto [mask-image:linear-gradient(to_right,transparent_0%,black_20%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_20%)]"
            />
          </motion.div>
        </HUDBox>
      </div>
    </motion.div>
  );
}
