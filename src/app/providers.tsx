import { Analytics } from '@vercel/analytics/next'
import React from 'react'
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
    <React.Fragment>
      {children}
      <Analytics mode={isProduction ? 'production' : 'development'} />
    </React.Fragment>
  )
}
