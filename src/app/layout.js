// layout.js with updated realistic beach header, snowflakes, and glowing logo

import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { Chewy } from 'next/font/google';
import HeaderNav from '@/components/HeaderNav';
import FloatingBookNow from '@/components/FloatingBookNow';
import Footer from '@/components/Footer';

const chewy = Chewy({ subsets: ['latin'], weight: '400', variable: '--font-chewy' });

export const metadata = {
  title: 'Thirsty Dawg Rentals | Frozen Drink Machine Rentals in Pensacola',
  description:
    'Book a frozen margarita or slushie machine for your next party or event in Pensacola. Delivery, setup, and delicious drinks included.',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.png'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={chewy.variable}>
      <link rel="preload" as="image" href="/thirsty-dawg-logo.webp" />
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-NXWPV7L'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NXWPV7L');
          `,
        }} />
      </head>
      <body
        style={{
          fontFamily: 'var(--font-chewy)',
          backgroundColor: '#f7f9f8',
          color: '#1f2937',
          margin: 0,
          position: 'relative'
        }}
      >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXWPV7L"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>

        {console.log('✅ HeaderNav rendering')}

        <HeaderNav />
        <FloatingBookNow />

        <header
          style={{
            width: '100%',
            height: '280px',
            overflow: 'visible',
            position: 'relative',
            paddingBottom: 0,
            marginBottom: '-80px'
          }}
        >
          <Image
            src="/Pensacola-Beach.webp"
            alt="Thirsty Dawg Header"
            width={1920}
            height={600}
            priority
            className="header-image"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0
            }}
          />
        </header>

        <main
          className="main"
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            backgroundColor: '#e6f0fa',
            padding: '2rem',
            borderRadius: '1rem',
            zIndex: 2,
            position: 'relative'
          }}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
