export function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center bg-[#0A0A0A] border-t border-white/5 mt-auto z-20 relative">
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-60 text-primary-container mb-4 md:mb-0">
        ©2024 DESIGNED_FOR_PEAK_PERFORMANCE
      </div>
      <ul className="flex space-x-6 font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">
        <li>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-primary-container hover:tracking-[0.3em] transition-all duration-300">GITHUB</a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-primary-container hover:tracking-[0.3em] transition-all duration-300">LINKEDIN</a>
        </li>
        <li>
          <a href="#" className="text-neutral-500 hover:text-primary-container hover:tracking-[0.3em] transition-all duration-300">SOURCE_CODE</a>
        </li>
      </ul>
    </footer>
  );
}
