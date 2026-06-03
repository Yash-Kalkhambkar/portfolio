import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string): boolean {
  const el = document.getElementById(sectionId);
  if (!el) {
    console.warn(`Section not found: ${sectionId}`);
    return false;
  }
  const smooth = "scrollBehavior" in document.documentElement.style;
  el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  return true;
}

export function debounce<T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay: number
): { debouncedFn: (...args: Parameters<T>) => void; cancel: () => void } {
  let timer: ReturnType<typeof setTimeout> | undefined;

  const debouncedFn = (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => { timer = undefined; fn(...args); }, delay);
  };

  const cancel = () => { clearTimeout(timer); timer = undefined; };

  return { debouncedFn, cancel };
}
