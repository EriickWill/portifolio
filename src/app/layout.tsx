
import NavBar from '@/components/NavBar'
import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets:["latin"],weight:["400","500","600"] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} bodyHome`}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
