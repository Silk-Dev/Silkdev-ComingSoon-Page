import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Silkdev',
  description: 'Digital Agency Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id='gtm' strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','G-MFNXMTXB96');`}}></Script>
        <meta name="facebook-domain-verification" content="4xtt89ssstvkmbc0mkc9dshgvbvv43" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
