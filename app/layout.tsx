import type { Metadata } from 'next'
import { Poppins, Poppins_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { RootLayoutClient } from './RootLayoutClient'
import './globals.css'

const _poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
});
const _poppinsMono = Poppins({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Konstruct Technofab Pvt. Ltd. | Innovative Pre Engineered Building Solutions',
  description: 'Konstruct Technofab specializes in PEB structures, industrial sheds and prefabricated buildings. Durable, cost-efficient construction since 2017.',
  generator: 'v0.app',
  metadataBase: new URL('https://www.konstruct.co.in'),
  openGraph: {
    title: 'SteelForge Construction | Premium Steel Shuttering & Industrial Formwork',
    description: 'Industry-leading steel shuttering systems and construction frameworks.',
    url: 'https://steelforge-construction.com',
    siteName: 'SteelForge Construction',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503387762519-52582191664730-d307ca884978?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Konstruct Technofab Pvt. Ltd.',
              url: 'https://www.konstruct.co.in',
              logo: '/placeholder-logo.svg',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '393, Sant Nagar, Scheme No.114, AB Road, Pithampur',
                addressLocality: 'Indore',
                addressRegion: 'Madhya Pradesh',
                postalCode: '452010',
                addressCountry: 'India'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-8718000037',
                email: 'info.konstructconstruction@gmail.com',
                contactType: 'Customer Service'
              },
              foundingDate: '2017',
              employeeCount: '200+',
              gstNumber: '23ARFPV2038P1ZD'
            }),
          }}
        />
      </head>
    <body className={`${_poppins.variable} ${_poppinsMono.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
        <Analytics />
      </body>
    </html>
  )
}
