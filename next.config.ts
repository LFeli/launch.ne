import type { NextConfig } from 'next'

/**
 * Base URL of the backend API used by Next.js at build and bootstrap time.
 *
 * This value is resolved **before** the application runtime starts and is
 * required during Next.js configuration evaluation (pre-boot).
 *
 * ⚠️ This is not a runtime constant.
 * It must be defined here (or via `process.env`) because `next.config.ts`
 * is executed directly by Node.js before:
 * - Module alias resolution
 * - App Router initialization
 * - Environment client/server splitting
 */
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3333'

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
   * Controls Next.js internal logging behavior.
   *
   * This configuration is evaluated at build and runtime by Next.js
   * and affects how framework-level logs are emitted.
   */
  logging: {
    fetches: {
      fullUrl: true,
    },
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
