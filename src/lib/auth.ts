import type { NextRequest, NextResponse } from 'next/server'
import { nanoid } from 'nanoid'
import { SignJWT, jwtVerify } from 'jose'
import { USER_TOKEN, getJwtSecretKey } from './constants'
import axios from 'axios'
import { UserResponse } from '@/lib/types'

interface UserJwtPayload {
  jti: string
  iat: number
}

export class AuthError extends Error {}

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    if (isJson && data.errors !== null) {
      throw new Error(JSON.stringify(data.errors));
    }

    throw new Error(data.message || response.statusText);
  }

  return data as T;
}

/**
 * Verifies the user's JWT token and returns its payload if it's valid.
 */
export async function verifyAuth(req: NextRequest) {
  const token = req.cookies.get(USER_TOKEN)?.value

  if (!token) throw new AuthError('Missing user token')

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    )
    return verified.payload as UserJwtPayload
  } catch (err) {
    console.log('o erro é: ', err)
    throw new AuthError('Your token has expired.')
  }
}

/**
 * Verifies in cookies the user's name and returns it.
 */
export async function getAuthUser(token?: string) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  /*if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/me`, {
    method: "GET",
    headers,
  });
  console.log('response/me: ', response)
  //return handleResponse<UserResponse>(response).then((data) => data.data.user);*/

  if (token) {
    const auth = {
      headers: { "Authorization": `Bearer ${token}` }
    }
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/me`, auth)
    //console.log('o response em getAuthUser é: ', response.data)
    return response.data
  }
}

/**
 * Adds the user token cookie to a response.
 */
export async function setUserCookie(res: NextResponse) {
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(new TextEncoder().encode(getJwtSecretKey()))

  res.cookies.set(USER_TOKEN, token, {
    httpOnly: true,
    maxAge: 60 * 60 * 2, // 2 hours in seconds
  })

  return res
}

/**
 * Expires the user token cookie
 */
export function expireUserCookie(res: NextResponse) {
  res.cookies.set(USER_TOKEN, '', { httpOnly: true, maxAge: 0 })
  return res
}
