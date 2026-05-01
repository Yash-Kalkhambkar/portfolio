import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import { HUDBox } from "../components/hud-box";
import { useState, useRef } from "react";

// ─── Replace these with your EmailJS credentials ───────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
// ───────────────────────────────────────────────────────────────────────────

function AnimatedInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  isTextarea,
  disabled,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
  isTextarea?: boolean;
  disabled?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  const sharedClass =
    "w-full bg-surface-lowest border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-mono focus:outline-none transition-all text-on-surface placeholder-tertiary/50 resize-none disabled:opacity-40";

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-4 gap-1.5 sm:gap-4 sm:items-start">
      <label className="font-mono text-[11px] sm:text-[12px] text-tertiary uppercase tracking-widest sm:col-span-1 sm:pt-3">
        {label}
      </label>
      <div className="sm:col-span-3 relative">
        <AnimatePresence>
          {focused && !disabled && (
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
            disabled={disabled}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`${sharedClass} ${focused && !disabled ? "border-primary-container/40 shadow-[0_0_10px_rgba(255,87,26,0.1)]" : ""}`}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`${sharedClass} ${focused && !disabled ? "border-primary-container/40 shadow-[0_0_10px_rgba(255,87,26,0.1)]" : ""}`}
          />
        )}
      </div>
    </div>
  );
}

type Status = "idle" | "sending" | "success" | "error";

export function CommsView() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [payload, setPayload] = useState("");
  const [status, setStatus]   = useState<Status>("idle");
  const formRef               = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  name,
          from_email: email,
          message:    payload,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setName("");
      setEmail("");
      setPayload("");
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => setStatus("idle");

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
            className="bg-surface/60 backdrop-blur-xl border border-white/10 p-5 sm:p-6 md:p-8 rounded-lg shadow-[inset_0_1px_rgba(255,255,255,0.05)] relative overflow-hidden min-h-[320px] flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-white/5 pb-4 gap-2">
              <h2 className="font-mono font-bold tracking-widest text-on-surface uppercase text-sm sm:text-base">
                DIRECT_CHANNEL
              </h2>
              <span className="font-mono text-[10px] tracking-widest uppercase flex items-center gap-1.5 shrink-0">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  status === "success" ? "bg-[#00C27A]" :
                  status === "error"   ? "bg-red-400" :
                  "bg-[#00C27A]"
                }`} />
                <span className={
                  status === "success" ? "text-[#00C27A]" :
                  status === "error"   ? "text-red-400" :
                  "text-primary-container/80"
                }>
                  {status === "success" ? "TRANSMITTED" :
                   status === "error"   ? "FAILED" :
                   "ENCRYPTED"}
                </span>
              </span>
            </div>

            {/* Success state */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex-grow flex flex-col items-center justify-center gap-6 py-8"
                >
                  {/* Animated checkmark ring */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-16 h-16 rounded-full border-2 border-[#00C27A] flex items-center justify-center shadow-[0_0_20px_rgba(0,194,122,0.3)]"
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.2 }}
                      className="material-symbols-outlined text-[#00C27A] text-[28px]"
                    >
                      check
                    </motion.span>
                  </motion.div>

                  <div className="text-center">
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="font-mono font-bold text-on-surface uppercase tracking-widest text-base mb-2"
                    >
                      TRANSMISSION RECEIVED
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="font-sans text-sm text-on-surface-variant opacity-70"
                    >
                      Message routed to yashkalkhambkar@gmail.com
                    </motion.p>
                  </div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onClick={resetForm}
                    className="font-mono text-[11px] tracking-widest uppercase border border-white/20 text-white/60 px-5 py-2 hover:border-white/40 hover:text-white transition-all"
                  >
                    NEW TRANSMISSION
                  </motion.button>
                </motion.div>

              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5 sm:gap-6 flex-grow"
                  onSubmit={handleSubmit}
                >
                  <AnimatedInput
                    label="IDENTIFICATION"
                    value={name}
                    onChange={setName}
                    placeholder="ENTER_NAME"
                    required
                    disabled={status === "sending"}
                  />
                  <AnimatedInput
                    label="RETURN_VECTOR"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="ENTER_EMAIL@DOMAIN"
                    required
                    disabled={status === "sending"}
                  />
                  <AnimatedInput
                    label="PAYLOAD"
                    value={payload}
                    onChange={setPayload}
                    placeholder="TRANSMIT_MESSAGE_HERE..."
                    required
                    isTextarea
                    disabled={status === "sending"}
                  />

                  {/* Error message */}
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="font-mono text-[11px] text-red-400 tracking-widest uppercase flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[14px]">error</span>
                        TRANSMISSION FAILED — CHECK CONNECTION AND RETRY
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-end mt-auto pt-2">
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-primary-container/20 border border-primary-container text-primary-container font-mono text-[11px] sm:text-[12px] font-bold tracking-widest px-4 sm:px-6 py-2.5 sm:py-3 uppercase hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center gap-2 disabled:opacity-60"
                    >
                      {status === "sending" ? (
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
                </motion.form>
              )}
            </AnimatePresence>
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
                  { name: "GIT_HUB",   desc: "github.com/Yash-Kalkhambkar",      icon: "code", href: "https://github.com/Yash-Kalkhambkar" },
                  { name: "SECURE_MAIL", desc: "yashkalkhambkar@gmail.com",       icon: "mail", href: "mailto:yashkalkhambkar@gmail.com" },
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
