import { createEnv } from '@t3-oss/env-nextjs'
import z from 'zod'

/**
 * Defines the client-side / shared environment configuration.
 * Validates and exposes public runtime variables using Zod schemas.
 */
export const envClient = createEnv({
  client: {},
  shared: {
    NEXT_PUBLIC_APP_URL: z.url().default('http://localhost:3000'),
    NEXT_PUBLIC_APP_MODE: z
      .enum(['development', 'production', 'test'])
      .default('development'),
    NEXT_PUBLIC_DEBUG_MODE: z
      .enum(['active', 'deactivated'])
      .default('deactivated'),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_APP_MODE: process.env.NEXT_PUBLIC_APP_MODE,
    NEXT_PUBLIC_DEBUG_MODE: process.env.NEXT_PUBLIC_DEBUG_MODE,
  },
})
