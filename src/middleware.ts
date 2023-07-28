import { verify } from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from './lib/auth'
// import decode from 'jwt-decode'

export async function middleware(req: NextRequest) {
  // validate the user is authenticated
  const verifiedToken = await verifyAuth(req).catch((err) => {
    console.error(err.message)
  })

  if (!verifiedToken) {
    // if this an API request, respond with JSON
    if (req.nextUrl.pathname.startsWith('/api/')) {
      return new NextResponse(
        JSON.stringify({ error: { message: 'authentication required' } }),
        { status: 401 },
      )
    }
    // otherwise, redirect to the set token page
    else {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }
}

// const signInURL = new URL('http://localhost:3000/login')

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('aroToken')?.value

//   // console.log('request url: ',request.url)
//   if (!token) {
//     return NextResponse.redirect(signInURL, {
//       headers: {
//         'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`,
//       },
//     })
//   }

//   const secret = process.env.JWT_SECRET || '';
//   console.log('secret: ', secret);

//   try {
//     const decoded = verify(token, secret);
//     console.log('decoded: ',decoded);
//   }catch (e) {
//     // return NextResponse.redirect(signInURL, {
//     //   headers: {
//     //     'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`,
//     //   },
//     // })

//     console.log('o erro é: ',e)
//   }

//   return NextResponse.next()
// }

export const config = {
  matcher: '/dashboard/:path*',
}
