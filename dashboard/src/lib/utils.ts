import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isValidArray<T>(array: T[]): boolean {
  return array && Array.isArray(array) && array.length > 0
}
