import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import type React from 'react'
import { envClient } from '@/lib/env/client'

interface ProvidersProps {
  children: React.ReactNode
}

/**
 * Application-level providers wrapper.
 */
export function Providers({ children }: ProvidersProps) {
  const isProduction = envClient.NEXT_PUBLIC_APP_MODE === 'production'

  return (
    <ThemeProvider
      attribute={'class'}
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
      <Analytics mode={isProduction ? 'production' : 'development'} />
    </ThemeProvider>
  )
}
