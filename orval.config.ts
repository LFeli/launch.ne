import { defineConfig } from 'orval'

/**
 * Base URL for the backend API.
 * Falls back to a local development server if not defined.
 */
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3333'

/**
 * URL to the Swagger/OpenAPI JSON definition.
 * Falls back to a local Swagger endpoint if not defined.
 */
const SWAGGER_URL =
  process.env.NEXT_PUBLIC_SWAGGER_URL ?? 'http://localhost:3333/docs/json'

/**
 * Orval configuration for generating a typed HTTP client from a Swagger schema.
 */
export default defineConfig({
  api: {
    /**
     * Swagger/OpenAPI schema input URL.
     */
    input: SWAGGER_URL,

    output: {
      /**
       * Splits generated files by OpenAPI tags.
       */
      mode: 'tags-split',

      /**
       * Base URL used by the generated HTTP client.
       */
      baseUrl: BACKEND_URL,

      /**
       * Output file path for the generated API client.
       */
      target: './src/http/api.ts',

      /**
       * HTTP client implementation to use.
       */
      httpClient: 'fetch',

      /**
       * Client type to generate.
       */
      client: 'fetch',

      /**
       * Disables mock generation.
       */
      mock: false,

      /**
       * Enables Biome formatting for generated files.
       */
      biome: true,

      /**
       * Cleans the output directory before generation.
       */
      clean: true,

      /**
       * URL-encodes request parameters when needed.
       */
      urlEncodeParameters: true,

      // override: {
      //   suppressReadonlyModifier: true,
      //
      //   // setup the mutator later.
      //   mutator: {},
      // },
    },
  },
})
