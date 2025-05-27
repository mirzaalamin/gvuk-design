import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isYouTubeUrl(url) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}
