import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface HUDBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
}

export function HUDBox({ children, containerClassName, className, ...props }: HUDBoxProps) {
  return (
    <div className={cn("relative group", containerClassName)}>
      {/* Corner Brackets */}
      <div className="hud-corner hud-tl z-20 hidden md:block"></div>
      <div className="hud-corner hud-tr z-20 hidden md:block"></div>
      <div className="hud-corner hud-bl z-20 hidden md:block"></div>
      <div className="hud-corner hud-br z-20 hidden md:block"></div>
      
      {/* Main Content Area */}
      <div className={cn("relative z-10 w-full h-full", className)} {...props}>
        {children}
      </div>
    </div>
  );
}
