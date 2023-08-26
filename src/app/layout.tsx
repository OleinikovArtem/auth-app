import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devchallenges',
  description: 'Authentication App'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,
  maximum-scale=5"
        />

        <link rel="shortcut icon" type="image/x-icon" href="https://devchallenges.io/" />

        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
