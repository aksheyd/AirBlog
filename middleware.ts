import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { auth } from './app/actions/auth';


const corsOptions = {
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

function customMiddleware(request: NextRequest) {
  const response = NextResponse.next();

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  })

  return response;
}


export default async function middleware(request: NextRequest, event: NextFetchEvent) {
  if (!request.nextUrl.pathname.startsWith('/api') &&
    (request.nextUrl.pathname.startsWith('/create_post') &&
      request.nextUrl.pathname.startsWith('/browse'))) {

    const authResponse = await withAuth(
      {
        pages: {
          signIn: "/account",
          signOut: "/account"
        },
      }
    );


    return await authResponse(request as NextRequestWithAuth, event);
  }

  return customMiddleware(request);

}

export const config = {
  matcher: [
    '/:pages*',
  ],
}