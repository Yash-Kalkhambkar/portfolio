import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth trailing cursor
  const springConfig = { damping: 25, stiffness: 300 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const checkPointer = () => {
      const el = document.elementFromPoint(cursorX.get(), cursorY.get());
      if (el) {
        const style = window.getComputedStyle(el);
        setIsPointer(style.cursor === "pointer");
      }
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", checkPointer);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", checkPointer);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [cursorX, cursorY]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Crosshair dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Center dot */}
        <div
          className="w-1.5 h-1.5 rounded-full bg-white absolute"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        />
        {/* Crosshair lines */}
        <div className="absolute w-3 h-px bg-white/70" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        <div className="absolute w-px h-3 bg-white/70" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={
            isPointer
              ? { width: 36, height: 36, borderColor: "rgba(255,87,26,0.9)" }
              : { width: 24, height: 24, borderColor: "rgba(255,87,26,0.5)" }
          }
          transition={{ duration: 0.15 }}
          className="rounded-full border border-primary-container/50"
          style={{
            boxShadow: isPointer
              ? "0 0 12px rgba(255,87,26,0.4), inset 0 0 8px rgba(255,87,26,0.1)"
              : "0 0 6px rgba(255,87,26,0.2)",
          }}
        />
      </motion.div>
    </>
  );
}
