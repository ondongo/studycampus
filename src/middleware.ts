import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// On fusionne le middleware next-intl (pour la gestion des locales) et l'authentification

const intlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  const intlResponse = intlMiddleware(req);
  if (intlResponse) {
    if (intlResponse.status !== 200) return intlResponse;
  }


  const { pathname, origin } = req.nextUrl;

  // On ne protège que les routes d'admin, signin et access-denied
  const isAdminRoute = pathname.startsWith('/admin');
  const isSigninRoute = pathname === '/signin';
  const isAccessDeniedRoute = pathname === '/access-denied';

  if (isAdminRoute || isSigninRoute || isAccessDeniedRoute) {
    const token = await getToken({
      req,
      secret: process.env.AUTH_SECRET,
      cookieName:
        process.env.NODE_ENV === "production"
          ? "__Secure-authjs.session-token"
          : "authjs.session-token",
      secureCookie: true,
    });

    // Rediriger un utilisateur déjà connecté qui tente d'accéder à /signin
    if (token && isSigninRoute) {
      return NextResponse.redirect(`${origin}/admin`);
    }

    // Rediriger un utilisateur non connecté qui tente d'accéder à une page protégée (hors /signin)
    if (!token && !isSigninRoute) {
      return NextResponse.redirect(`${origin}/signin`);
    }

    // Rediriger un utilisateur connecté mais non admin qui tente d'accéder à /admin
    if (token && token.role !== "admin" && isAdminRoute) {
      return NextResponse.redirect(`${origin}/access-denied`);
    }
  }


  return intlResponse ?? NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)', // Pour next-intl (toutes les pages sauf API et fichiers statiques)
    '/signin',
    '/admin/:path*',
    '/access-denied',
  ],
};
