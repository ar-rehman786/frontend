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
    pathname.startsWith('/api') ||
    pathname === '/'; // Allow access to root page for everyone

  // Require auth for protected routes (excluding root)
  if (!hasAuthCookie && !isPublicRoute && pathname !== '/') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Handle root page '/' logic
  if (pathname === '/') {
    if (hasAuthCookie) {
      // Logged-in users get redirected based on role
      if (userRole === 'SUPER_ADMIN' || userRole === 'MASTER_ADMIN') {
        return NextResponse.redirect(new URL('/super-admin', request.url));
      } else if (userRole === 'ADMIN') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
      // For other roles or no role, stay on root page
      return NextResponse.next();
    }
    // Not logged in - stay on root page
    return NextResponse.next();
  }

  /* =========================================
     MASTER_ADMIN / SUPER_ADMIN → FULL ACCESS
     NO RESTRICTIONS AT ALL
  ========================================== */
  if (userRole === 'SUPER_ADMIN' || userRole === 'MASTER_ADMIN') {
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

  // Redirect logged-in users from login page
  if (hasAuthCookie && (pathname === '/login' || pathname.startsWith('/auth/login'))) {
    if (userRole === 'SUPER_ADMIN' || userRole === 'MASTER_ADMIN') {
      return NextResponse.redirect(new URL('/super-admin', request.url));
    } else if (userRole === 'ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    // For other roles, redirect to home
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};