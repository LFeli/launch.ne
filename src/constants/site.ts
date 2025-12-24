import { envClient } from '@/lib/env/client'
import { extractDomain } from '@/lib/extract-domain'

/**
 * Frontend domain extracted from the public application URL.
 */
const FRONTEND_URL = extractDomain({
  url: envClient.NEXT_PUBLIC_APP_URL,
})

/**
 * Backend URL extracted from the public application URL,
 * including the pathname.
 */
const BACKEND_URL = extractDomain({
  url: envClient.NEXT_PUBLIC_API_URL,
  includePathname: true,
})

export { FRONTEND_URL, BACKEND_URL }
