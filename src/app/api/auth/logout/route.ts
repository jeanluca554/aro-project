import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/login', request.url)
  console.log('está no expire')
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `aroToken=; Path=/; max-age=0;`,
    },
  })
}

// import { type NextRequest } from 'next/server'
// import { jsonResponse } from '@/lib/utils'
// import { expireUserCookie } from '@/lib/auth'

// export const config = {
//   runtime: 'edge',
// }

// export default async function expire(req: NextRequest) {
//   if (req.method !== 'POST') {
//     return jsonResponse(405, { error: { message: 'Method not allowed' } })
//   }
//   console.log('está no expire')
//   return expireUserCookie(jsonResponse(200, { success: true }))
// }
