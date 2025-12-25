import React from 'react'

/**
 * Custom React hook that returns true after the component has mounted.
 *
 * @returns {boolean} Whether the component is mounted.
 */
export function useMounted() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
