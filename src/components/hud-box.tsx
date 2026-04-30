import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface HUDBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
  animate?: boolean;
}

const cornerVariants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { delay, duration: 0.3 },
  }),
};

export function HUDBox({
  children,
  containerClassName,
  className,
  animate = true,
  ...props
}: HUDBoxProps) {
  return (
    <div className={cn("relative group", containerClassName)}>
      {/* Animated Corner Brackets */}
      {animate && (
        <>
          <motion.div
            className="hud-corner hud-tl z-20 hidden md:block"
            variants={cornerVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          />
          <motion.div
            className="hud-corner hud-tr z-20 hidden md:block"
            variants={cornerVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.05}
            viewport={{ once: true }}
          />
          <motion.div
            className="hud-corner hud-bl z-20 hidden md:block"
            variants={cornerVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
          />
          <motion.div
            className="hud-corner hud-br z-20 hidden md:block"
            variants={cornerVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: true }}
          />
        </>
      )}

      {/* Main Content Area */}
      <div className={cn("relative z-10 w-full h-full", className)} {...props}>
        {children}
      </div>
    </div>
  );
}
