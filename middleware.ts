import { NextRequest, NextResponse } from 'next/server'
// export { default } from "next-auth/middleware"

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}
 
export function middleware(request: NextRequest) { 
  if (request.nextUrl.pathname.startsWith('/create_post') ||
      request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/in_progress', request.url))
  }

  const response = NextResponse.next();
 
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  })
 
  return response;
}

 
export const config = {
  matcher: [
    '/api/:path*', 
    '/:path*',
  ],
}