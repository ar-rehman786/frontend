import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const authCookies = [
    'sessionid',
    'csrftoken',
    'auth_session',
    'auth-token',
    'adminToken',
    'access_token',
  ];

  const hasAuthCookie = authCookies.some(c => request.cookies.get(c));

  const userRole =
    request.cookies.get('user_role')?.value ||
    request.cookies.get('user-role')?.value;

  const isPublicRoute =
    pathname.startsWith('/login') ||
    pathname.startsWith('/auth') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api');

  // Require auth
  if (!hasAuthCookie && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  /* =========================================
     MASTER_ADMIN / SUPER_ADMIN → FULL ACCESS
     NO RESTRICTIONS AT ALL
  ========================================== */
  if (userRole === 'SUPER_ADMIN' || userRole === 'MASTER_ADMIN') {
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/super-admin', request.url));
    }
    return NextResponse.next(); // FULL ACCESS
  }

  /* =====================
     /dashboard → ADMIN ONLY
     (super admins already bypassed)
  ====================== */
  if (pathname.startsWith('/dashboard')) {
    if (userRole !== 'ADMIN' && userRole !== 'SUPER_ADMIN' && userRole !== 'MASTER_ADMIN') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Redirect logged-in users from login
  if (hasAuthCookie && pathname === '/login') {
    if (userRole === 'ADMIN' || userRole === 'SUPER_ADMIN' || userRole === 'MASTER_ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  // Root redirect - ONLY redirect SUPER_ADMIN/MASTER_ADMIN
  // ADMIN can stay on / page
  if (pathname === '/' && hasAuthCookie) {
    if (userRole === 'SUPER_ADMIN' || userRole === 'MASTER_ADMIN') {
      return NextResponse.redirect(new URL('/super-admin', request.url));
    }
    // Admin can stay on / page, no redirect needed
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};