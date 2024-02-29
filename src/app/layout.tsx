import { BackgroundGradient } from '@/components/aceternity/demo/bg-gradient'
import NavigationMenu from '@/examples/awwwards/navigation-menu'
import SmoothScrolling from '@/lib/SmoothScrolling'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + ' w-svw" h-svh'}>
        {/* <Header /> */}
        <BackgroundGradient className="h-full w-full">
          <NavigationMenu />
          <SmoothScrolling>{children}</SmoothScrolling>
        </BackgroundGradient>
        {/* <AnimationCursor /> */}
      </body>
    </html>
  )
}
