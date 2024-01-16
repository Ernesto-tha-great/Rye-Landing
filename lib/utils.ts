import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, limit: number): string {
  if (typeof text !== "string") {
    throw new Error("Invalid input: text must be a string");
  }

  if (text.length > limit) {
    return text.slice(0, limit) + "...";
  }
  return text;
}
