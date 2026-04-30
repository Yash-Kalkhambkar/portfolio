import { createContext, useContext, useState, ReactNode } from "react";

export const TABS = ["DRIVE", "SPECS", "GARAGE", "TELEMETRY", "COMMS"] as const;
export type Tab = typeof TABS[number];

interface AppContextType {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  isTerminalOpen: boolean;
  setTerminalOpen: (isOpen: boolean) => void;
  isSettingsOpen: boolean;
  setSettingsOpen: (isOpen: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<Tab>("DRIVE");
  const [isTerminalOpen, setTerminalOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  return (
    <AppContext.Provider value={{ activeTab, setActiveTab, isTerminalOpen, setTerminalOpen, isSettingsOpen, setSettingsOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
}
