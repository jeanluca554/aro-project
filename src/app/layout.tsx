import './globals.css'
import './paymentCard.css'
import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'

// import { Hero } from '@/components/Hero'
// import { Profile } from '@/components/Profile'
// import { SignIn } from '@/components/SignIn'
// import { Copyright } from '@/components/Copyright'
// import { cookies } from 'next/headers'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Institute Aro',
  description: 'Instituto Aro',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  // const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
