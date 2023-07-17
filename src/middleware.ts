import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get('_auth')?.value;
  const pathname = req.nextUrl.pathname;

  if (cookie && pathname === '/signin') {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'You are already authorized' }),
      { status: 403, headers: { 'content-type': 'application/json' } }
    );
  }

  if (pathname === '/signin' || pathname === '/signup' || pathname === '/') {
    return NextResponse.next();
  } else {
    if (!cookie) {
      return new NextResponse(
        JSON.stringify({ success: false, message: 'You are not authorized' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      );
    }
  }

  return NextResponse.next();
}

export const config = { matcher: '/((?!.*\\.).*)' };
