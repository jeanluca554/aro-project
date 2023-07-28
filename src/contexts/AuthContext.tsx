'use client'

import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
// import { api } from "../providers/Api";

import { getUserName } from '../lib/auth';

import { AuthError } from "../lib/auth";
import { jwtVerify } from "jose";
import { getJwtSecretKey } from "@/lib/constants";

import { verify } from 'jsonwebtoken'


type User = {
  name: string;
  email: string;
}

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  // signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export async function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user; //if user exists or not

  useEffect(() => {

    const { 'aroToken': token } = parseCookies();
    console.log('o token é: ', token);

    const secret = process.env.NEXT_PUBLIC_BASE_JWT_SECRET_KEY;
     console.log('o secrete é: ', secret)

    var decoded = verify(token, 'secret');
    console.log(decoded) // bar

    // try {
    //   async function verifyJWT() {
    //     const verified = await jwtVerify(
    //     token,
    //     new TextEncoder().encode(getJwtSecretKey())
    //     )
    //     console.log('o payload é: ', verified.payload)
    //     setUser(verified.payload as User)
    //   }
    //   verifyJWT()
    // } catch (err) {
    //   console.log('error to get name in token', err)
    //   throw new AuthError('Your token has expired.')
    // }

  }, [])

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}