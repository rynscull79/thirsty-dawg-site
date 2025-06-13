// layout.js with updated realistic beach header, snowflakes, and glowing logo

import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { Chewy } from 'next/font/google';
import HeaderNav from '@/components/HeaderNav';
const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';



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
      <head>
        {/* Existing head content stays the same */}
        <script
  id="facebook-pixel"
  type="text/plain"
  data-cookieconsent="marketing"
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1385023635883645'); 
      fbq('track', 'PageView');
    `
  }}
/>

<noscript
  dangerouslySetInnerHTML={{
    __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1385023635883645&ev=PageView&noscript=1" />`,
  }}
/>


      </head>
      <script
  id="cookieconsent"
  src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
  defer
></script>
<script
  defer
  dangerouslySetInnerHTML={{
    __html: `
      window.addEventListener("load", function(){
        window.cookieconsent.initialise({
          palette: {
            popup: { background: "#252e39" },
            button: { background: "#f1d600" }
          },
          theme: "classic",
          type: "opt-in",
          content: {
            message: "We use cookies to track ads and improve your experience.",
            dismiss: "OK",
            allow: "Allow cookies",
            deny: "Decline",
            link: "Learn more",
            href: "/privacy-policy"
          },
          onInitialise: function (status) {
            if (status == 'allow') fireFacebookPixel();
          },
          onStatusChange: function(status) {
            if (status == 'allow') fireFacebookPixel();
          }
        });

        function fireFacebookPixel() {
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1385023635883645');
          fbq('track', 'PageView');
        }
      });
    `
  }}
/>

      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Thirsty Dawg Rentals",
      "image": "https://www.thirstydawgrentals.com/gallery/TransparentBG-ThirstyDawg.png",
      "url": "https://www.thirstydawgrentals.com",
      "telephone": "8505723796",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pensacola",
        "addressRegion": "FL",
        "postalCode": "32501",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.4213,
        "longitude": -87.2169
      },
      "areaServed": [
        { "@type": "Place", "name": "Pensacola" },
        { "@type": "Place", "name": "Gulf Breeze" },
        { "@type": "Place", "name": "Navarre" },
        { "@type": "Place", "name": "Orange Beach" },
        { "@type": "Place", "name": "Foley" },
        { "@type": "Place", "name": "Fairhope" }
      ],
      "priceRange": "$$",
      "description": "Rent fully stocked novelty ice cream freezers for parties and events. Serving Pensacola, the Florida Panhandle, and South Alabama.",
      "openingHours": "Mo-Su 08:00-20:00"
    })
  }}
/>

      <body style={{ fontFamily: 'var(--font-chewy)', backgroundColor: '#f7f9f8', color: '#1f2937', margin: 0, position: 'relative' }}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXWPV7L"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>

<HeaderNav />
<Image
  src="/Pensacola-Beach.webp"
  alt="Thirsty Dawg Header"
  width={1920}
  height={600}
  sizes="100vw"
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
<header style={{ width: '100%', height: '440px', overflow: 'visible', position: 'relative', paddingBottom: 0, marginBottom: '-80px' }}>

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
