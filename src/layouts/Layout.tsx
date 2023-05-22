import React from 'react'
import Head from 'next/head'
import Sidebar from 'components/Sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        Dashboard
      </Head>
      <main className='flex flex-col md:flex-row'>
        <Sidebar />
        <section className='p-7 text-2xl font-semibold'>
          {children}
        </section>
      </main>
    </>
  )
}

export default Layout