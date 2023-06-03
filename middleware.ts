// middleware.ts
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';


const isAdminRoute = (pathname: string) => {
  return pathname.startsWith('/api/admin');
}

const isUserRoute = (pathname: string) => {
  return pathname.startsWith('/api/users');
}

const PUBLIC_FILE = /\.(.*)$/;

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest,  ev: NextFetchEvent ) {

    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    
    const { pathname } = req.nextUrl


    if ( !session ) {
      const requestedUrl = req.nextUrl.pathname;
      const url = req.nextUrl.clone();
      url.pathname = `/auth/login`;
      url.search = `p=${ requestedUrl }`

      return NextResponse.redirect( url ); 
    }

    // if (isUserRoute(pathname) && !includes(["user", "admin"], role)) {
    //   return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
    // }

    // return NextResponse.redirect(new URL('/about-2', req.url))
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', 
  '/customer:path*']
}