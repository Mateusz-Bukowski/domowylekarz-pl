import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Doctor - Lekarz dla Twojego dziecka 24/7',
  description: '25+ specjalizacji bez skierowania • Teleporada w ten sam dzień • Już od 1,36 zł dziennie. Zaufany partner w opiece zdrowotnej od 2017 roku.',
  keywords: 'lekarz online, telemedycyna, pediatra online, konsultacje lekarskie, lekarz dla dzieci, teleporada, specjaliści online, home doctor',
  authors: [{ name: 'Home Doctor' }],
  creator: 'Home Doctor',
  publisher: 'Home Doctor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://domowylekarz.pl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Home Doctor - Lekarz dla Twojego dziecka 24/7',
    description: '25+ specjalizacji bez skierowania • Teleporada w ten sam dzień • Już od 1,36 zł dziennie',
    url: 'https://domowylekarz.pl',
    siteName: 'Home Doctor',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Doctor - Telemedycyna dla dzieci',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Doctor - Lekarz dla Twojego dziecka 24/7',
    description: '25+ specjalizacji bez skierowania • Teleporada w ten sam dzień',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4A90E2" />
        <meta name="msapplication-TileColor" content="#4A90E2" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Home Doctor",
              "description": "Telemedycyna dla dzieci - 25+ specjalizacji bez skierowania",
              "url": "https://domowylekarz.pl",
              "logo": "https://domowylekarz.pl/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+48-800-000-000",
                "contactType": "customer service",
                "availableLanguage": "Polish"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PL"
              },
              "medicalSpecialty": [
                "Pediatrics",
                "Internal Medicine",
                "Dermatology",
                "Cardiology",
                "Neurology"
              ],
              "priceRange": "1.36 PLN per day"
            })
          }}
        />
      </body>
    </html>
  )
}
