import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get('_auth')?.value;

  console.log(req.nextUrl.pathname);

  if (
    req.nextUrl.pathname === '/signin' ||
    req.nextUrl.pathname === '/signup'
  ) {
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
