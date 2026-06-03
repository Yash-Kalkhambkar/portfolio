import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Footer } from "./components/footer";
import { Nav } from "./components/nav";
import { AppProvider, TABS, useAppContext } from "./lib/context";
import type { Tab } from "./lib/context";
import { debounce, scrollToSection } from "./lib/utils";
import { TerminalModal } from "./components/terminal-modal";
import { SettingsModal } from "./components/settings-modal";
import { BootScreen } from "./components/boot-screen";
import { CustomCursor } from "./components/custom-cursor";
import { ScrollIndicator } from "./components/scroll-indicator";
import { CommsView } from "./views/comms";
import { DriveView } from "./views/drive";
import { GarageView } from "./views/garage";
import { SpecsView } from "./views/specs";
import { TelemetryView } from "./views/telemetry";

const HISTORY_THROTTLE = 500;

function MainContent() {
  const { activeTab, setActiveTab } = useAppContext();
  const lastHistoryUpdate = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const i = TABS.indexOf(activeTab);
      if (e.key === "PageDown" && i < TABS.length - 1) scrollToSection(TABS[i + 1].toLowerCase());
      if (e.key === "PageUp" && i > 0) scrollToSection(TABS[i - 1].toLowerCase());
      if (e.key === "Home") scrollToSection("drive");
      if (e.key === "End") scrollToSection("comms");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const valid = TABS.some((t) => t.toLowerCase() === hash);
    if (valid) {
      const id = setTimeout(() => scrollToSection(hash), 500);
      return () => clearTimeout(id);
    }
    window.history.replaceState(null, "", "#drive");
  }, []);

  useEffect(() => {
    const now = Date.now();
    const hash = `#${activeTab.toLowerCase()}`;
    if (window.location.hash !== hash && now - lastHistoryUpdate.current > HISTORY_THROTTLE) {
      window.history.pushState(null, "", hash);
      lastHistoryUpdate.current = now;
    }
  }, [activeTab]);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1);
      if (TABS.some((t) => t.toLowerCase() === hash)) scrollToSection(hash);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const ids = TABS.map((t) => t.toLowerCase());
    const { debouncedFn: debouncedSet, cancel } = debounce((tab: Tab) => setActiveTab(tab), 100);

    if (!("IntersectionObserver" in window)) {
      const handleScroll = () => {
        let best: Tab | null = null;
        let max = 0;
        ids.forEach((id) => {
          const el = document.getElementById(id);
          if (!el) return;
          const r = el.getBoundingClientRect();
          const h = Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
          if (h > max) { max = h; best = id.toUpperCase() as Tab; }
        });
        if (best) debouncedSet(best);
      };
      const target = document.querySelector(".scroll-container") ?? window;
      target.addEventListener("scroll", handleScroll, { passive: true });
      return () => { cancel(); target.removeEventListener("scroll", handleScroll); };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let visible: Tab | null = null;
        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio && entry.intersectionRatio >= 0.5) {
            maxRatio = entry.intersectionRatio;
            visible = entry.target.id.toUpperCase() as Tab;
          }
        });
        if (visible) debouncedSet(visible);
      },
      { root: null, rootMargin: "0px", threshold: [0, 0.5, 1.0] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => { cancel(); observer.disconnect(); };
  }, [setActiveTab]);

  const sectionProps = {
    className: "min-h-screen",
    style: { scrollSnapAlign: "start" as const, willChange: "transform" as const },
    initial: { opacity: 0, y: 60, filter: "blur(4px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <AnimatePresence>
        <motion.div
          key={`flash-${activeTab}`}
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: [0, 0.06, 0], y: ["0%", "100%"] }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 bg-primary-container pointer-events-none z-30"
        />
      </AnimatePresence>

      <div className="flex-grow overflow-y-auto scroll-container" style={{ scrollSnapType: "y mandatory" }}>
        <motion.section id="drive" aria-label="Drive section" {...sectionProps}><DriveView /></motion.section>
        <motion.section id="specs" aria-label="Specs section" {...sectionProps}><SpecsView /></motion.section>
        <motion.section id="garage" aria-label="Garage section" {...sectionProps}><GarageView /></motion.section>
        <motion.section id="telemetry" aria-label="Telemetry section" {...sectionProps}><TelemetryView /></motion.section>
        <motion.section id="comms" aria-label="Comms section" {...sectionProps}><CommsView /></motion.section>
        <Footer />
      </div>

      <ScrollIndicator activeTab={activeTab} />
      <TerminalModal />
      <SettingsModal />
    </div>
  );
}

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <AppProvider>
      <CustomCursor />
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}
      {booted && <MainContent />}
    </AppProvider>
  );
}
