import React from 'react'

/**
 * Pixel width used as the cutoff for determining mobile screens.
 */
const MOBILE_BREAKPOINT = 768

/**
 * React hook that determines whether the current viewport width is considered mobile.
 *
 * @returns {boolean} `true` if the viewport width is below the mobile breakpoint, otherwise `false`.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
