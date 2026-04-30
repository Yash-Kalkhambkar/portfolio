/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { AnimatePresence, motion } from "motion/react";
import { useState, useRef } from "react";
import { Footer } from "./components/footer";
import { Nav } from "./components/nav";
import { AppProvider, useAppContext, TABS, Tab } from "./lib/context";
import { TerminalModal } from "./components/terminal-modal";
import { SettingsModal } from "./components/settings-modal";
import { BootScreen } from "./components/boot-screen";
import { CustomCursor } from "./components/custom-cursor";
import { CommsView } from "./views/comms";
import { DriveView } from "./views/drive";
import { GarageView } from "./views/garage";
import { SpecsView } from "./views/specs";
import { TelemetryView } from "./views/telemetry";

const TAB_INDEX: Record<Tab, number> = {
  DRIVE: 0,
  SPECS: 1,
  GARAGE: 2,
  TELEMETRY: 3,
  COMMS: 4,
};

function MainContent() {
  const { activeTab } = useAppContext();
  const prevTabRef = useRef<Tab>(activeTab);
  const direction =
    TAB_INDEX[activeTab] > TAB_INDEX[prevTabRef.current] ? 1 : -1;
  prevTabRef.current = activeTab;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-grow flex flex-col relative overflow-hidden">
        {/* Flash overlay on transition */}
        <AnimatePresence>
          <motion.div
            key={`flash-${activeTab}`}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: [0, 0.06, 0], y: ["0%", "100%"] }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 bg-primary-container pointer-events-none z-30"
          />
        </AnimatePresence>

        <AnimatePresence mode="wait" custom={direction}>
          {activeTab === "DRIVE" && (
            <motion.div
              key="drive"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex-grow flex flex-col"
            >
              <DriveView />
            </motion.div>
          )}
          {activeTab === "SPECS" && (
            <motion.div
              key="specs"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex-grow flex flex-col"
            >
              <SpecsView />
            </motion.div>
          )}
          {activeTab === "GARAGE" && (
            <motion.div
              key="garage"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex-grow flex flex-col"
            >
              <GarageView />
            </motion.div>
          )}
          {activeTab === "TELEMETRY" && (
            <motion.div
              key="telemetry"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex-grow flex flex-col"
            >
              <TelemetryView />
            </motion.div>
          )}
          {activeTab === "COMMS" && (
            <motion.div
              key="comms"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex-grow flex flex-col"
            >
              <CommsView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
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
