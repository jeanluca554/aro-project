import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import { api } from "../providers/Api";

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
  signIn: (data: SignInData) => Promise<void>
}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user; //if user exists or not

  useEffect(() => {
    const { 'aro.token': token } = parseCookies();

    if (token) {
      const auth = {
        headers: { "Authorization": `Bearer ${token}` }
      }
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/me`, auth).then(function (response) {
        console.log(response.data.user);
        setUser(response.data.user);

      })
        .catch(function (error) {
          console.log(error);
          Router.push('/login');
        });
    }
  }, [])


  async function signIn({ email, password }: SignInData) {

    await api.post('/login', {
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response);
        // setTeste(response);

        setCookie(undefined, 'aro.token', response.data.access_token, {
          maxAge: 60 * 60 * 1, //1 hour
        })

        api.defaults.headers['Authorization'] = `Bearer ${response.data.access_token}`;

        setUser(response.data.user);
        //console.log(infoUser)
        console.log(response.data.access_token)
        Router.push('/dashboard');

      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}