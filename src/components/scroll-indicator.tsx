import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import type { Tab } from "../lib/context";

interface ScrollIndicatorProps {
  activeTab: Tab;
}

const POSITIONS = [
  { tab: "DRIVE" as Tab,     rpm: 1000, label: "Drive",    redline: false },
  { tab: "SPECS" as Tab,     rpm: 2000, label: "Specs",    redline: false },
  { tab: "GARAGE" as Tab,    rpm: 3000, label: "Garage",   redline: false },
  { tab: "TELEMETRY" as Tab, rpm: 4000, label: "Telemetry",redline: false },
  { tab: "COMMS" as Tab,     rpm: 5000, label: "Comms",    redline: true  },
];

const W = 80;
const H = 220;
const X = 44;
const TOP = 20;
const BTM = 200;
const RANGE = BTM - TOP;
const COUNT = POSITIONS.length;

function tickY(i: number) {
  return TOP + ((COUNT - 1 - i) / (COUNT - 1)) * RANGE;
}

function activeIndex(tab: Tab) {
  return POSITIONS.findIndex((p) => p.tab === tab);
}

export function ScrollIndicator({ activeTab }: ScrollIndicatorProps) {
  const idx = activeIndex(activeTab);
  const needleY = tickY(idx);

  const [hovered, setHovered] = useState<Tab | null>(null);
  const timers = useRef<Map<Tab, ReturnType<typeof setTimeout>>>(new Map());

  const onEnter = (tab: Tab) => {
    clearTimeout(timers.current.get(tab));
    timers.current.set(tab, setTimeout(() => setHovered(tab), 200));
  };

  const onLeave = (tab: Tab) => {
    clearTimeout(timers.current.get(tab));
    timers.current.delete(tab);
    setHovered(null);
  };

  const activeLabel = POSITIONS.find((p) => p.tab === activeTab)?.label ?? activeTab;

  return (
    <div
      className="hidden md:flex flex-col items-center"
      style={{ position: "fixed", right: 40, top: "50%", transform: "translateY(-50%)", zIndex: 500 }}
      role="navigation"
      aria-label={`Section indicator – currently viewing ${activeLabel}`}
    >
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none" aria-hidden="true" overflow="visible">
        <line x1={X} y1={TOP} x2={X} y2={BTM} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

        {POSITIONS.map((pos, i) => {
          const y = tickY(i);
          const isActive = pos.tab === activeTab;
          const color = pos.redline ? "#ff3b00" : isActive ? "rgb(255,87,26)" : "rgba(255,255,255,0.35)";
          return (
            <g key={pos.tab}>
              <line x1={X - 10} y1={y} x2={X} y2={y} stroke={color} strokeWidth={isActive ? 2 : 1} />
              <text x={X - 14} y={y + 4} textAnchor="end" fontSize="9" fontFamily="Space Grotesk, monospace"
                fontWeight={isActive ? "700" : "400"} fill={color} letterSpacing="0.05em">
                {pos.rpm}
              </text>
              {pos.redline && <circle cx={X + 8} cy={y} r="3" fill="#ff3b00" fillOpacity="0.4" />}
              <rect x={0} y={y - 12} width={W} height={24} fill="transparent"
                onMouseEnter={() => onEnter(pos.tab)} onMouseLeave={() => onLeave(pos.tab)} />
            </g>
          );
        })}

        <motion.g
          animate={{ y: needleY - tickY(0) }}
          initial={{ y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <ellipse cx={X + 9} cy={tickY(0)} rx="8" ry="5" fill="rgba(255,87,26,0.2)" />
          <polygon
            points={`${X + 4},${tickY(0) - 6} ${X + 4},${tickY(0) + 6} ${X + 14},${tickY(0)}`}
            fill="rgb(255,87,26)"
          />
        </motion.g>
      </svg>

      <span style={{ fontFamily: "Space Grotesk, monospace", fontSize: "8px", letterSpacing: "0.12em",
        color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginTop: 2 }}>
        RPM ×10³
      </span>

      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered}
            initial={{ opacity: 0, x: 4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 4 }}
            transition={{ duration: 0.15 }}
            style={{ position: "absolute", right: W + 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
          >
            <span style={{ display: "inline-block", fontFamily: "Space Grotesk, monospace", fontSize: "10px",
              letterSpacing: "0.1em", textTransform: "uppercase", color: "rgb(255,87,26)",
              background: "rgba(0,0,0,0.75)", border: "1px solid rgba(255,87,26,0.35)",
              borderRadius: 3, padding: "3px 7px", whiteSpace: "nowrap" }}>
              {POSITIONS.find((p) => p.tab === hovered)?.label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
