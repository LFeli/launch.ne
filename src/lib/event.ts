import va from '@vercel/analytics'
import { eventSchema } from '@/validations/event'

/**
 * Validates and sends a custom analytics event to Vercel Analytics.
 *
 * @param {Event} input - The event to track, matching the event schema.
 */
export function trackEvent(input: Event): void {
  const event = eventSchema.parse(input)

  if (event) {
    va.track(event.name, event.properties)
  }
}
