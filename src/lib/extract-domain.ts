interface ExtractDomainProps {
  url: string
  includePathname?: boolean
}

/**
 * Extracts the domain (host) from a URL, optionally including the pathname.
 *
 * @param url - The URL to extract the domain from
 * @param includePathname - If true, includes the pathname after the host
 * @returns The extracted domain string
 */
export function extractDomain({
  url,
  includePathname = false,
}: ExtractDomainProps) {
  const { host, pathname } = new URL(url)
  return includePathname ? host + pathname : host
}
