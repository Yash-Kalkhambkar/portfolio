/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { AnimatePresence } from "motion/react";
import { Footer } from "./components/footer";
import { Nav } from "./components/nav";
import { AppProvider, useAppContext } from "./lib/context";
import { TerminalModal } from "./components/terminal-modal";
import { SettingsModal } from "./components/settings-modal";
import { CommsView } from "./views/comms";
import { DriveView } from "./views/drive";
import { GarageView } from "./views/garage";
import { SpecsView } from "./views/specs";
import { TelemetryView } from "./views/telemetry";

function MainContent() {
  const { activeTab } = useAppContext();

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      
      <main className="flex-grow flex flex-col relative">
        <AnimatePresence mode="wait">
          {activeTab === "DRIVE" && <DriveView key="drive" />}
          {activeTab === "SPECS" && <SpecsView key="specs" />}
          {activeTab === "GARAGE" && <GarageView key="garage" />}
          {activeTab === "TELEMETRY" && <TelemetryView key="telemetry" />}
          {activeTab === "COMMS" && <CommsView key="comms" />}
        </AnimatePresence>
      </main>

      <Footer />
      <TerminalModal />
      <SettingsModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
