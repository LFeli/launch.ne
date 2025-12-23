import 'server-only'

import { createEnv } from '@t3-oss/env-nextjs'

/**
 * Creates the server-side environment configuration.
 * Uses `createEnv` to define environment variables available only on the server.
 */
export const envServer = createEnv({
  server: {},
  runtimeEnv: {},
})
