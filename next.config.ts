import type { NextConfig } from 'next'

import { BACKEND_URL } from '@/constants/site'

/**
 * Next.js application configuration.
 * Defines build output, experimental features, and server/runtime behavior.
 */
const nextConfig: NextConfig = {
  /**
   * Generates a standalone production build optimized for deployment.
   */
  output: 'standalone',

  /**
   * Enables the React Compiler for automatic optimizations.
   */
  reactCompiler: true,

  /**
   * Enables caching for React Server Components.
   */
  cacheComponents: true,

  /**
   * Enables type-safe route generation.
   */
  typedRoutes: true,

  /**
   * Configuration for Next.js development indicators in the browser.
   */
  devIndicators: {
    position: 'bottom-right',
  },

  /**
   * Node.js-only dependencies allowed to be used
   * inside Server Components and Route Handlers.
   */
  serverExternalPackages: [
    '@biomejs/biome',
    'jest',
    'playwright',
    'playwright-core',
    'postcss',
    'typescript',
    'webpack',
    'websocket',
  ],

  experimental: {
    /**
     * Packages optimized during the build to improve tree-shaking
     * and reduce bundle size.
     */
    optimizePackageImports: ['lucide-react', 'motion', 'date-fns', 'recharts'],

    serverActions: {
      /**
       * Allowed origins that can invoke Server Actions.
       */
      allowedOrigins: [BACKEND_URL, `*.${BACKEND_URL}`],
    },
  },
}

export default nextConfig
