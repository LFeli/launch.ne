import type { Metadata } from 'next'

import { siteMetadata } from '@/configs/metadata'
import { fontMono, fontSans } from '@/lib/font'
import { cn } from '@/lib/utils'

import '@/styles/globals.css'

import { Providers } from './providers'

/**
 * Global metadata for the application.
 */
export const metadata: Metadata = siteMetadata

/**
 * Root layout component for the Next.js application.
 * Wraps all pages with global HTML structure, fonts, and styles.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'h-full min-h-svh flex-col overscroll-none font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
