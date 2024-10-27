import { NextResponse } from 'next/server'

export async function middleware(request) {
  // Check for Auth0 session cookie
  const authSession = request.cookies.get('appSession')
  
  if (!authSession) {
    // No session found, redirect to login
    return NextResponse.redirect(new URL('/api/auth/login', request.url))
  }

  // Session exists, continue
  const response = NextResponse.next()
  
  // Optional: Add security headers
  response.headers.set('x-middleware-cache', 'no-cache')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  
  return response
}

// Protect dashboard route
export const config = {
  matcher: ['/dashboard']
}