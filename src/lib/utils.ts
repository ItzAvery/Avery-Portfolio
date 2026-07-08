import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function withBase(path: string) {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}