import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. vcard.rhinternationalsc.com, rhinternationalsc.com, localhost:3000)
  const hostname = req.headers
    .get('host')
    ?.replace('.localhost:3000', `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'rhinternationalsc.com'}`);

  // Check if it's the vcard subdomain
  if (
    hostname === 'vcard.rhinternationalsc.com' ||
    hostname === 'vcard.localhost:3000'
  ) {
    // Rewrite to the vcard directory
    return NextResponse.rewrite(new URL(`/vcard${url.pathname}`, req.url));
  }

  return NextResponse.next();
}
