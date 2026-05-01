export function Footer() {
  return (
    <footer className="w-full py-6 sm:py-8 px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#0A0A0A] border-t border-white/5 mt-auto z-20 relative">
      <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase opacity-60 text-primary-container text-center sm:text-left">
        ©{new Date().getFullYear()} YASH_KALKHAMBKAR — DESIGNED_FOR_PEAK_PERFORMANCE
      </div>
      <ul className="flex gap-4 sm:gap-6 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase opacity-60">
        <li>
          <a
            href="https://github.com/Yash-Kalkhambkar"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-primary-container hover:tracking-[0.3em] transition-all duration-300"
          >
            GITHUB
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/yash-kalkhambkar"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-primary-container hover:tracking-[0.3em] transition-all duration-300"
          >
            LINKEDIN
          </a>
        </li>
        <li>
          <a
            href="mailto:yashkalkhambkar@gmail.com"
            className="text-neutral-500 hover:text-primary-container hover:tracking-[0.3em] transition-all duration-300"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </footer>
  );
}
