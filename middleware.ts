import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check for any authentication cookie
  const authCookies = [
    'sessionid',
    'csrftoken', 
    'auth_session',
    'auth-token',
    'adminToken',
    'access_token'
  ];
  
  let hasAuthCookie = false;
  for (const cookieName of authCookies) {
    if (request.cookies.get(cookieName)) {
      hasAuthCookie = true;
      break;
    }
  }
  
  const userRole = request.cookies.get('user_role')?.value || request.cookies.get('user-role')?.value;
  
  // Define public routes that don't require authentication
  const publicRoutes = [
    '/admin',
    '/login',
    '/auth/login',
    '/auth/signup'
  ];
  
  // Check if current route is public
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || 
    pathname.startsWith(`${route}/`) ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/')
  );
  
  // Define role-based access
  const roleAccess: Record<string, string[]> = {
    'MASTER_ADMIN': [
      '/admin',
      '/admin/dashboard',
      '/admin/users',
      '/admin/settings'
    ],
    'ADMIN': [
      '/dashboard'
    ],
    'INSTITUTIONAL': [
      '/institutional',
      '/institutional/dashboard',
      '/institutional/portfolio'
    ],
    'BROKERAGE': [
      '/brokerage',
      '/brokerage/dashboard',
      '/brokerage/listings'
    ],
    'REALTOR': [
      '/realtor',
      '/realtor/dashboard',
      '/realtor/properties'
    ],
    'CONSUMER': [
      '/consumer',
      '/consumer/dashboard',
      '/consumer/marketplace'
    ]
  };

  // Handle signup page accessibility
  if (pathname === '/auth/signup' && process.env.NEXT_PUBLIC_ENABLE_SIGNUP !== 'true') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If route is not public and user is not authenticated
  if (!isPublicRoute && !hasAuthCookie) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Dashboard access is only for ADMIN and MASTER_ADMIN
  if (pathname === '/dashboard' || pathname.startsWith('/dashboard/')) {
    if (!hasAuthCookie) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (userRole !== 'ADMIN' && userRole !== 'MASTER_ADMIN') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // If authenticated but trying to access auth pages
  if (hasAuthCookie && (pathname === '/login' || pathname === '/auth/signup')) {
    let redirectUrl = '/';
    if (userRole) {
      switch (userRole) {
        case 'MASTER_ADMIN':
          redirectUrl = '/admin/dashboard';
          break;
        case 'ADMIN':
          redirectUrl = '/dashboard';
          break;
        case 'INSTITUTIONAL':
          redirectUrl = '/institutional/dashboard';
          break;
        case 'BROKERAGE':
          redirectUrl = '/brokerage/dashboard';
          break;
        case 'REALTOR':
          redirectUrl = '/realtor/dashboard';
          break;
        case 'CONSUMER':
          redirectUrl = '/consumer/dashboard';
          break;
        default:
          redirectUrl = '/';
      }
    }
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  // Role-based access control for authenticated users
  if (hasAuthCookie && userRole) {
    const allowedRoutes = roleAccess[userRole] || [];
    const isAllowedRoute = allowedRoutes.some(route => 
      pathname === route || pathname.startsWith(`${route}/`)
    );

    // If root path, redirect to role-specific dashboard
    if (pathname === '/') {
      switch (userRole) {
        case 'MASTER_ADMIN':
          return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        case 'ADMIN':
          return NextResponse.redirect(new URL('/dashboard', request.url));
        case 'INSTITUTIONAL':
          return NextResponse.redirect(new URL('/institutional/dashboard', request.url));
        case 'BROKERAGE':
          return NextResponse.redirect(new URL('/brokerage/dashboard', request.url));
        case 'REALTOR':
          return NextResponse.redirect(new URL('/realtor/dashboard', request.url));
        case 'CONSUMER':
          return NextResponse.redirect(new URL('/consumer/dashboard', request.url));
      }
    }

    // If trying to access a route not allowed for their role
    if (!isAllowedRoute && !isPublicRoute) {
      // Redirect to their role's dashboard
      switch (userRole) {
        case 'MASTER_ADMIN':
          return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        case 'ADMIN':
          return NextResponse.redirect(new URL('/dashboard', request.url));
        case 'INSTITUTIONAL':
          return NextResponse.redirect(new URL('/institutional/dashboard', request.url));
        case 'BROKERAGE':
          return NextResponse.redirect(new URL('/brokerage/dashboard', request.url));
        case 'REALTOR':
          return NextResponse.redirect(new URL('/realtor/dashboard', request.url));
        case 'CONSUMER':
          return NextResponse.redirect(new URL('/consumer/dashboard', request.url));
        default:
          // If role is not recognized, clear auth and redirect to login
          const response = NextResponse.redirect(new URL('/login', request.url));
          authCookies.forEach(cookie => {
            response.cookies.delete(cookie);
          });
          return response;
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/institutional/:path*',
    '/brokerage/:path*',
    '/dashboard/:path*',
    '/super-admin/:path*',
  ],
};