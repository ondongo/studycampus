import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import NextAuth from 'next-auth';
import authConfig from '@/configs/auth.config';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const { auth } = NextAuth(authConfig);
const intlMiddleware = createMiddleware(routing);

export default auth(async function middleware(req: NextRequest) {
  const intlResponse = intlMiddleware(req);
  if (intlResponse && intlResponse.status !== 200) {
    return intlResponse;
  }

  const origin = req.nextUrl.origin;
  const pathname = req.nextUrl.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');

  const isAdminRoute = pathname.startsWith('/admin');
  const isSigninRoute = pathname === '/signin';
  const isAccessDeniedRoute = pathname === '/access-denied';

  if (isAdminRoute || isSigninRoute || isAccessDeniedRoute) {
    const token = await getToken({
      req,
      secret: process.env.AUTH_SECRET,
      cookieName:
        process.env.NODE_ENV === 'production'
          ? '__Secure-authjs.session-token'
          : 'authjs.session-token',
      secureCookie: process.env.NODE_ENV === 'production',
    });

    if (token && isSigninRoute) {
      return NextResponse.redirect(new URL('/admin/dashboard', origin));
    }

    if (!token && (isAdminRoute || isAccessDeniedRoute)) {
      return NextResponse.redirect(new URL('/signin', origin));
    }

    if (token && token.role !== 'admin' && isAdminRoute) {
      return NextResponse.redirect(new URL('/access-denied', origin));
    }
  }

  return intlResponse ?? NextResponse.next();
});

export const config = {
  matcher: [
    '/:locale((?!api|trpc|_next|_vercel|.*\\..*).*)',
    '/:locale/signin',
    '/:locale/admin/:path*',
    '/:locale/access-denied',
  ],
};
