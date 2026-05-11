import Image from 'next/image';
import './globals.css';
import './seo.css';
import { Chewy, Fredoka } from 'next/font/google';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';
import Script from 'next/script';

const chewy = Chewy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-chewy',
});

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
});

export const metadata = {
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
  title: {
    default: 'Thirsty Dawg Rentals | Frozen Drink Machine Rentals in Pensacola',
    template: '%s',
  },
  description:
    'Rent frozen drink machines, margarita machines, soft serve machines, and stocked ice cream carts for parties, weddings, schools, and events around Pensacola and the Gulf Coast.',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.png',
  },
  verification: {
    google: 'LHt8tv1KLJb0KXV3Sb-QbR6G-wKw62NoX1auUUJKakg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${chewy.variable} ${fredoka.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6R94KFTC67"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-6R94KFTC67');
          `}
        </Script>

        <Script
          id="cookieconsent"
          src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
          strategy="afterInteractive"
        />
        <Script id="cookieconsent-init" strategy="afterInteractive">
          {`
            window.addEventListener("load", function () {
              if (!window.cookieconsent) return;

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
                  if (status === 'allow') fireFacebookPixel();
                },
                onStatusChange: function (status) {
                  if (status === 'allow') fireFacebookPixel();
                }
              });

              function fireFacebookPixel() {
                if (window.fbq) {
                  window.fbq('track', 'PageView');
                  return;
                }

                !(function (f, b, e, v, n, t, s) {
                  if (f.fbq) return;
                  n = f.fbq = function () {
                    n.callMethod
                      ? n.callMethod.apply(n, arguments)
                      : n.queue.push(arguments);
                  };
                  if (!f._fbq) f._fbq = n;
                  n.push = n;
                  n.loaded = true;
                  n.version = '2.0';
                  n.queue = [];
                  t = b.createElement(e);
                  t.async = true;
                  t.src = v;
                  s = b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t, s);
                })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

                fbq('init', '1385023635883645');
                fbq('track', 'PageView');
              }
            });
          `}
        </Script>

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=1385023635883645&ev=PageView&noscript=1" />`,
          }}
        />
      </head>

      <body style={{ position: 'relative' }}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXWPV7L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Script
          id="localbusiness-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Thirsty Dawg Rentals',
              image:
                'https://www.thirstydawgrentals.com/gallery/TransparentBG-ThirstyDawg.png',
              url: 'https://www.thirstydawgrentals.com',
              telephone: '8505723796',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Pensacola',
                addressRegion: 'FL',
                postalCode: '32577',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 30.4213,
                longitude: -87.2169,
              },
              areaServed: [
                { '@type': 'Place', name: 'Pensacola' },
                { '@type': 'Place', name: 'Gulf Breeze' },
                { '@type': 'Place', name: 'Navarre' },
                { '@type': 'Place', name: 'Orange Beach' },
                { '@type': 'Place', name: 'Foley' },
                { '@type': 'Place', name: 'Fairhope' },
              ],
              priceRange: '$$',
              description:
                'Frozen drink machine, soft serve machine, and ice cream cart rentals for parties, weddings, schools, beach houses, and events across Pensacola and the Gulf Coast.',
              openingHours: 'Mo-Su 08:00-20:00',
            }),
          }}
        />

        <header className="top-brand-bar">
          <div className="top-brand-bar__inner">
            <div className="top-brand-bar__logo">
              <Image
                src="/thirsty-dawg-logo.webp"
                alt="Thirsty Dawg Rentals Logo"
                width={180}
                height={180}
                sizes="(max-width: 768px) 120px, 180px"
                priority
                style={{
                  width: 'auto',
                  height: '70px',
                }}
              />
            </div>

            <div className="top-brand-bar__nav">
              <HeaderNav />
            </div>
          </div>
        </header>

        <main
          className="main"
          style={{
            maxWidth: '1140px',
            margin: '0.75rem auto 0',
            backgroundColor: 'var(--td-white)',
            boxShadow: 'var(--shadow-soft)',
            padding: '1.5rem',
            borderRadius: '1rem',
            zIndex: 2,
            position: 'relative',
          }}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}