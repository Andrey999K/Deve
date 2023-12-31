import './globals.css'
import { Manrope } from 'next/font/google'
import Head from "next/head";

const manrope = Manrope({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese', 'greek'],
  display: 'swap',
})

export const metadata = {
  title: 'DeveBot',
  description: "Generated by create next app"
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </Head>
      {/*<Head>*/}
      {/*  <title>My page title</title>*/}
      {/*  <meta property="og:title" content="My page title" key="title" />*/}
      {/*</Head>*/}
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
