import { motion, AnimatePresence } from "motion/react";
import { HUDBox } from "../components/hud-box";
import { useAppContext } from "../lib/context";
import { useState } from "react";

function AnimatedInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  isTextarea,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
  isTextarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  const sharedClass =
    "w-full bg-surface-lowest border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-mono focus:outline-none transition-all text-on-surface placeholder-tertiary/50 resize-none";

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-4 gap-1.5 sm:gap-4 sm:items-start">
      <label className="font-mono text-[11px] sm:text-[12px] text-tertiary uppercase tracking-widest sm:col-span-1 sm:pt-3">
        {label}
      </label>
      <div className="sm:col-span-3 relative">
        <AnimatePresence>
          {focused && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary-container shadow-[0_0_8px_rgba(255,87,26,0.6)] origin-left z-10"
            />
          )}
        </AnimatePresence>
        {isTextarea ? (
          <textarea
            rows={4}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`${sharedClass} ${focused ? "border-primary-container/40 shadow-[0_0_10px_rgba(255,87,26,0.1)]" : ""}`}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`${sharedClass} ${focused ? "border-primary-container/40 shadow-[0_0_10px_rgba(255,87,26,0.1)]" : ""}`}
          />
        )}
      </div>
    </div>
  );
}

export function CommsView() {
  const { setTerminalOpen } = useAppContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [payload, setPayload] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setTerminalOpen(true);
      setName("");
      setEmail("");
      setPayload("");
    }, 1200);
  };

  return (
    <div className="flex-grow pt-20 md:pt-24 pb-12 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full flex flex-col justify-center min-h-screen">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-on-surface flex flex-row items-center justify-center gap-3 flex-wrap">
          <span className="text-surface-variant hidden sm:inline">[</span>
          <span className="text-primary-container drop-shadow-[0_0_15px_rgba(255,87,26,0.3)]">COMMS</span>
          <span>TERMINAL</span>
          <span className="text-surface-variant hidden sm:inline">]</span>
        </h1>
        <p className="font-sans text-sm text-on-surface-variant opacity-80 mt-3">
          Establishing secure communication protocols.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 relative z-10">

        {/* Contact Form */}
        <HUDBox containerClassName="md:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-surface/60 backdrop-blur-xl border border-white/10 p-5 sm:p-6 md:p-8 rounded-lg shadow-[inset_0_1px_rgba(255,255,255,0.05)]"
          >
            <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-white/5 pb-4 gap-2">
              <h2 className="font-mono font-bold tracking-widest text-on-surface uppercase text-sm sm:text-base">
                DIRECT_CHANNEL
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-primary-container/80 uppercase flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C27A] animate-pulse" />
                Encrypted
              </span>
            </div>

            <form className="flex flex-col gap-5 sm:gap-6" onSubmit={handleSubmit}>
              <AnimatedInput label="IDENTIFICATION" value={name} onChange={setName} placeholder="ENTER_NAME" required />
              <AnimatedInput label="RETURN_VECTOR" type="email" value={email} onChange={setEmail} placeholder="ENTER_EMAIL@DOMAIN" required />
              <AnimatedInput label="PAYLOAD" value={payload} onChange={setPayload} placeholder="TRANSMIT_MESSAGE_HERE..." required isTextarea />

              <div className="flex justify-end mt-2">
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary-container/20 border border-primary-container text-primary-container font-mono text-[11px] sm:text-[12px] font-bold tracking-widest px-4 sm:px-6 py-2.5 sm:py-3 uppercase hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center gap-2 disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="material-symbols-outlined text-[15px] sm:text-[16px]"
                      >
                        sync
                      </motion.span>
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[15px] sm:text-[16px]">sensors</span>
                      INITIATE_TRANSMISSION
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </HUDBox>

        {/* Sidebar */}
        <div className="md:col-span-4 flex flex-col gap-5 sm:gap-6">
          <HUDBox containerClassName="w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="mb-3 inline-block font-mono text-[11px] sm:text-[12px] font-bold text-on-surface uppercase bg-surface border border-white/10 px-3 py-1 relative z-20 translate-y-3 translate-x-3 sm:translate-x-4">
                SATELLITE_LINKS
              </div>
              <div className="flex flex-col gap-3 border border-white/10 p-4 sm:p-6 pt-6 sm:pt-8 rounded-lg bg-surface/30 backdrop-blur-md">
                {[
                  { name: "LINKED_IN", desc: "linkedin.com/in/yash-kalkhambkar", icon: "link", href: "https://linkedin.com/in/yash-kalkhambkar" },
                  { name: "GIT_HUB", desc: "github.com/Yash-Kalkhambkar", icon: "code", href: "https://github.com/Yash-Kalkhambkar" },
                  { name: "SECURE_MAIL", desc: "yashkalkhambkar@gmail.com", icon: "mail", href: "mailto:yashkalkhambkar@gmail.com" },
                ].map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center justify-between p-3 sm:p-4 border border-white/5 bg-surface-container hover:border-primary-container/40 transition-colors group rounded"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="material-symbols-outlined text-primary-container/80 text-[20px] sm:text-[24px] group-hover:text-primary-container shrink-0">
                        {link.icon}
                      </span>
                      <div className="min-w-0">
                        <div className="font-mono font-bold text-on-surface tracking-widest text-[12px] sm:text-sm">{link.name}</div>
                        <div className="font-sans text-[10px] sm:text-[11px] text-on-surface-variant opacity-60 truncate">{link.desc}</div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-white/30 group-hover:text-white transition-colors text-[18px] shrink-0 ml-2">
                      arrow_outward
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </HUDBox>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-2"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_4px_#FF571A] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-primary-container">UPLINK_STABLE</span>
            </div>
            <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-tertiary opacity-50 uppercase">
              Pune, India
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
