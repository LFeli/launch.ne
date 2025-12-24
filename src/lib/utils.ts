import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes conditionally.
 * It combines `clsx` for conditional class handling and `twMerge` to eliminate conflicting classes.
 * @param inputs - A list of class values that can be strings, objects, or arrays.
 * @returns {string} A merged and optimized class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
