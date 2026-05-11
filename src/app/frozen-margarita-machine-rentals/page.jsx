// 📄 src/app/frozen-margarita-machine-rentals/page.jsx

import dynamic from 'next/dynamic';
import RentalsGallery from '@/components/RentalsGallery';
const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Frozen Margarita Machine Rentals | Thirsty Dawg',
  description:
    'Rent frozen margarita machines for parties, weddings, and events in Pensacola and the Gulf Coast. Choose from single or dual flavor machines — stainless or plastic. Thirsty Dawg handles delivery, setup, and cleanup!',
  openGraph: {
    title: 'Frozen Margarita Machine Rentals | Thirsty Dawg',
    description:
      'Rent frozen margarita machines for parties, weddings, and events in Pensacola and surrounding areas. Thirsty Dawg brings the fun to you — setup and cleanup included!',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/frozen-margarita-machine-rentals',
    type: 'website'
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export const viewport = {
  canonical: 'https://www.thirstydawgrentals.com/frozen-margarita-machine-rentals',
};

export default function FrozenMargaritaMachineRentalsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Thirsty Dawg Rentals",
    url: "https://www.thirstydawgrentals.com/frozen-margarita-machine-rentals",
    telephone: "850-572-3796",
    image: "https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp",
    description:
      "Rent frozen margarita machines in Pensacola and nearby areas. Choose single or dual flavor. Delivery, setup, and cleanup included!",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pensacola",
      addressRegion: "FL",
      postalCode: "32577",
      addressCountry: "US"
    },
    areaServed: [
      "Pensacola",
      "Escambia County",
      "Santa Rosa County",
      "Baldwin County"
    ],
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-20:00",
    sameAs: ["https://www.facebook.com/thirstydawgrentals"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div>
        <section
          style={{
            backgroundColor: '#009fdb',
            color: 'white',
            padding: '3rem 2rem',
            borderRadius: '1rem',
            textAlign: 'center',
            fontFamily: 'var(--font-chewy)'
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}
          >
            🍹 Frozen Margarita Machine Rentals in Pensacola
          </h2>

          <p
            style={{
              fontSize: '1.2rem',
              marginTop: '1rem',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}
          >
            Bring the party to life with Thirsty Dawg’s frozen margarita machines! Perfect for weddings, birthdays, beach parties, and corporate events.
          </p>

          <p
            style={{
              fontSize: '1.2rem',
              marginTop: '1.5rem',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}
          >
            Choose from single or dual flavor setups. No bartender needed — just plug, pour, and enjoy icy cold margaritas all day long.
          </p>

          <p
            style={{
              fontSize: '1.2rem',
              marginTop: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}
          >
            📞 Call or text to book: <a href="tel:8505723796" style={{ color: 'white', textDecoration: 'underline' }}>(850) 572-3796</a>
          </p>
        </section>

        <RentalsGallery />
        <FloatingBookNow />
      </div>
    </>
  );
}
