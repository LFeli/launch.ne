import type { Metadata } from 'next'
import { siteConfig } from './site'

/**
 * Application metadata configuration for Next.js.
 *
 * Defines default title, SEO tags, and author info.
 */
const siteMetadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.github,
    },
  ],
  creator: siteConfig.author.name,
}

export { siteMetadata }
