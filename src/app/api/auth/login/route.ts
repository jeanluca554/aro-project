'use server'
import { api } from '../../../../lib/api'
import { AxiosError } from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const { email, password } = body

  try {
    const registerResponse = await api.post('/login', {
      email,
      password,
    })

    console.log('registerResponse: ', registerResponse.data)

    if (!registerResponse.data.statusCode) {  
      const { access_token, user } = registerResponse.data

      const cookieExpiresInSeconds = 60 * 60 * 24 * 30
  
      const redirectTo = request.cookies.get('redirectTo')?.value

      return new Response(JSON.stringify({message: 'authenticated', redirectTo}), {
        status: 200,
        headers: {
          'Set-Cookie': `aroToken=${access_token}; Path=/; max-age=${cookieExpiresInSeconds};`,
        },
      })
    }
  } catch (e) {
    const error = e as AxiosError

    return NextResponse.json({error: error.message})
  }
}
