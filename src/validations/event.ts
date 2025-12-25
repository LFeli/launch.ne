import z from 'zod'

/**
 * Zod schema for validating tracked events.
 * Only allows specific event names and optional properties.
 */
const eventSchema = z.object({
  name: z.enum([
    'copy_npm_command',
    'copy_usage_import_code',
    'copy_usage_code',
  ]),
  properties: z
    .record(
      z.string(),
      z.union([z.string(), z.number(), z.boolean(), z.null()])
    )
    .optional(),
})

type Event = z.infer<typeof eventSchema>

export { eventSchema, type Event }
