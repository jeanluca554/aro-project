import React from 'react'
import Head from 'next/head'
import Sidebar from '../../components/Sidebar';

import { AuthProvider } from '@/contexts/AuthContext'
import { parseCookies } from 'nookies';
import { cookies } from "next/headers";
import { getAuthUser } from '@/lib/auth';

export const metadata = {
  title: "Dashboard",
  description: "Aro Dashboard",
};

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {


  const cookieStore = cookies();
  const token = cookieStore.get("aroToken");

// const user = await getAuthUser(token?.value)
// console.log('getAuthUser: ', user)

// const sidebarUserName = user.name || ''
const sidebarUserName = 'Jean Luca ds'

  return (
    <>
      <main className='flex flex-col md:flex-row'>
        <Sidebar  
          name={sidebarUserName}
        />
        <section className='flex-1'>
            {children}
        </section>
      </main>
    </>
  )
}