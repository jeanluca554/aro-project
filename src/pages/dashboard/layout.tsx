import React from 'react'
import Head from 'next/head'
import Sidebar from '../../components/Sidebar'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        Dashboard
      </Head>
      <main className='flex flex-col md:flex-row'>
        <Sidebar />
        <section className='flex-1'>
          {children}
        </section>
      </main>
    </>
  )
}