import { NextResponse } from 'next/server'
import { createToken } from '../../../../lib/jwt'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    // Use environment variables for comparison
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      const token = createToken({ username })
      
      const response = NextResponse.json({ success: true })
      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        // maxAge: 60 * 60 * 24 // 1 day
        maxAge: 60 * 60  // 1 hour
      })

      return response
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 })
  }
}