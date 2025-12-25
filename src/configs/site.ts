import type { Site } from '@/types/site'

/**
 * Global site configuration.
 * Defines metadata such as name, URL, description, keywords, and author info.
 */
const siteConfig: Site = {
  name: 'launch.ne',
  url: 'https://github.com/LFeli/launch.ne',
  description:
    'A production-ready Next.js boilerplate with type-safe envs, shadcn/ui, Biome, performance optimizations, and a scalable dara folder pattern.',
  keywords: [
    'Next.js',
    'TypeScript',
    'Boilerplate',
    'Shadcn/ui',
    'Biome',
    'Performance Optimization',
    'Dara Folder Pattern',
  ],
  author: {
    name: 'Lucas Araújo | LFeli',
    github: 'https://github.com/LFeli',
  },
}

export { siteConfig }
