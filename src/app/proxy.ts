import { type NextRequest, NextResponse } from 'next/server'

/**
 * Middleware configuration that defines which routes the middleware applies to.
 *
 * Excludes API routes, Next.js internal assets, image optimization routes,
 * and PNG files from middleware execution.
 */
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
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
