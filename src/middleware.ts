import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get('_auth')?.value;

  if (!cookie) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'You are not authorized' }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    );
  }

  console.log(cookie);

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/lessons',
  ],
};
