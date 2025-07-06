import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  const getCookies = await cookies()
  const isDevelopment = process.env.NODE_ENV === 'development'

  const cookieName = isDevelopment
    ? 'next-auth.session-token'
    : '__Secure-next-auth.session-token'

  const nextAuthSession = getCookies.get(cookieName)?.value || ''

  return NextResponse.json({ token: nextAuthSession })
}
