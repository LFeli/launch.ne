import { Geist, Geist_Mono } from 'next/font/google'

/**
 * Sans-serif Geist font configuration for the application.
 * Exposes a CSS variable for global usage.
 */
const fontSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

/**
 * Monospaced Geist font configuration for the application.
 * Exposes a CSS variable for global usage.
 */
const fontMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export { fontSans, fontMono }
