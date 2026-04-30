import { motion } from "motion/react";
import { HUDBox } from "../components/hud-box";
import { useAppContext } from "../lib/context";
import { useState } from "react";

export function CommsView() {
  const { setTerminalOpen } = useAppContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [payload, setPayload] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTerminalOpen(true);
    setName("");
    setEmail("");
    setPayload("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="flex-grow pt-[120px] pb-[48px] px-6 md:px-12 max-w-5xl mx-auto w-full flex flex-col justify-center min-h-[calc(100vh-100px)]"
    >
      <div className="text-center mb-12">
        <h1 className="font-mono text-4xl md:text-5xl font-bold uppercase tracking-tight text-on-surface inline-flex flex-col md:flex-row items-center gap-4">
          <span className="text-surface-variant hidden md:inline">[</span>
          <span className="text-primary-container drop-shadow-[0_0_15px_rgba(255,87,26,0.3)]">COMMS</span> TERMINAL
          <span className="text-surface-variant hidden md:inline">]</span>
        </h1>
        <p className="font-sans text-sm text-on-surface-variant opacity-80 mt-4">
          Establishing secure communication protocols.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        
        {/* Contact Form */}
        <HUDBox containerClassName="md:col-span-8">
          <div className="bg-surface/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-lg shadow-[inset_0_1px_rgba(255,255,255,0.05)]">
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
              <h2 className="font-mono font-bold tracking-widest text-on-surface uppercase input-label">DIRECT_CHANNEL</h2>
              <span className="font-mono text-[10px] tracking-widest text-primary-container/80 uppercase">Status: Encrypted</span>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <label className="font-mono text-[12px] text-tertiary uppercase tracking-widest md:col-span-1">IDENTIFICATION</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="ENTER_NAME" 
                  required
                  className="md:col-span-3 bg-surface-lowest border border-white/10 px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary-container focus:shadow-[0_0_10px_rgba(255,87,26,0.2)] transition-all w-full text-on-surface placeholder-tertiary/50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <label className="font-mono text-[12px] text-tertiary uppercase tracking-widest md:col-span-1">RETURN_VECTOR</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="ENTER_EMAIL@DOMAIN"
                  required
                  className="md:col-span-3 bg-surface-lowest border border-white/10 px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary-container focus:shadow-[0_0_10px_rgba(255,87,26,0.2)] transition-all w-full text-on-surface placeholder-tertiary/50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                <label className="font-mono text-[12px] text-tertiary uppercase tracking-widest md:col-span-1 pt-3">PAYLOAD</label>
                <textarea 
                  rows={5}
                  value={payload}
                  onChange={e => setPayload(e.target.value)}
                  placeholder="TRANSMIT_MESSAGE_HERE..." 
                  required
                  className="md:col-span-3 bg-surface-lowest border border-white/10 px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary-container focus:shadow-[0_0_10px_rgba(255,87,26,0.2)] transition-all w-full text-on-surface placeholder-tertiary/50 resize-none"
                />
              </div>

              <div className="flex justify-end mt-4">
                <button type="submit" className="bg-primary-container/20 border border-primary-container text-primary-container font-mono text-[12px] font-bold tracking-widest px-6 py-3 uppercase hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">sensors</span>
                  INITIATE_TRANSMISSION
                </button>
              </div>
            </form>
          </div>
        </HUDBox>

        {/* Links */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <HUDBox containerClassName="w-full">
             <div className="mb-4 inline-block font-mono text-[12px] font-bold text-on-surface uppercase bg-surface border border-white/10 px-3 py-1 relative z-20 translate-y-3 translate-x-4">SATELLITE_LINKS</div>
             <div className="flex flex-col gap-4 border border-white/10 p-6 pt-8 rounded-lg bg-surface/30 backdrop-blur-md">
                
                {[
                  { name: "LINKED_IN", desc: "Modulars LINKED_IN", icon: "link", href: "https://linkedin.com" },
                  { name: "GIT_HUB", desc: "Modular GIT_HUB", icon: "code", href: "https://github.com" },
                  { name: "SECURE_MAIL", desc: "Modular Mail", icon: "mail", href: "mailto:korakeayushman@gmail.com" }
                ].map((link, i) => (
                  <motion.a 
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center justify-between p-4 border border-white/5 bg-surface-container hover:border-primary-container/40 transition-colors group rounded"
                  >
                    <div className="flex items-center gap-4">
                       <span className="material-symbols-outlined text-primary-container/80 text-[24px] group-hover:text-primary-container">{link.icon}</span>
                       <div>
                         <div className="font-mono font-bold text-on-surface tracking-widest">{link.name}</div>
                         <div className="font-sans text-[11px] text-on-surface-variant opacity-60">{link.desc}</div>
                       </div>
                    </div>
                    <span className="material-symbols-outlined text-white/30 group-hover:text-white transition-colors">arrow_outward</span>
                  </motion.a>
                ))}

             </div>
          </HUDBox>

          <div className="mt-8 text-right flex flex-col items-end">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_4px_#FF571A] animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary-container">UPLINK_STABLE</span>
            </div>
            <div className="font-mono text-[10px] tracking-widest text-tertiary opacity-50 uppercase">
              Latency: 12ms | Ping: OK
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
