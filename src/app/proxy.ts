import { type NextRequest, NextResponse } from 'next/server'

/**
 * Middleware configuration that limits execution to `/example/*` routes.
 */
export const config = {
  matcher: '/example/:path*',
}

/**
 * Next.js middleware handler that simply allows the request to continue.
 * @returns A response that forwards the request to the next handler.
 */
export async function proxy(request: NextRequest): Promise<NextResponse> {
  /**
   * here you can add any logic you want to process the request before loading the page.
   * like a verification of user authentication, some logging, etc.
   */

  return NextResponse.next()
}
