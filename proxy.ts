import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  
  // Add performance and security headers
  const headers = response.headers;
  
  // Cache headers for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // Preload critical resources
  if (request.nextUrl.pathname === '/') {
    headers.append('Link', '</images/sol-fill.svg>; rel=preload; as=image');
    headers.append('Link', '</images/bnb-fill.svg>; rel=preload; as=image');
  }
  
  // Security headers
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Performance hints
  headers.set('X-DNS-Prefetch-Control', 'on');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
