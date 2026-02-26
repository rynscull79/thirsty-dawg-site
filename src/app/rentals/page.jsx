import OurRentals from '@/components/OurRentals';
import RentalsGallery from '@/components/RentalsGallery';
import dynamic from 'next/dynamic';

const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Frozen Drink & Soft Serve Machine Rentals in Pensacola, FL | Thirsty Dawg',
  description:
    'Rent frozen drink and soft serve ice cream machines in Pensacola, Gulf Breeze, Navarre, Milton, Pace, and nearby areas. Delivery, setup, and pickup included.',
  alternates: {
    canonical: 'https://www.thirstydawgrentals.com/rentals',
  },
  openGraph: {
    title: 'Frozen Drink & Soft Serve Machine Rentals in Pensacola, FL | Thirsty Dawg',
    description:
      'Rent frozen drink and soft serve machines for events across Pensacola and nearby areas. Thirsty Dawg handles delivery, setup, and pickup!',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/rentals',
    type: 'website',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export default function RentalsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Thirsty Dawg Rentals',
    url: 'https://www.thirstydawgrentals.com/rentals',
    telephone: '850-572-3796',
    image: 'https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp',
    description:
      'Frozen drink machine and soft serve ice cream machine rentals in Pensacola, FL and surrounding Gulf Coast areas. Delivery, setup, and pickup included.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pensacola',
      addressRegion: 'FL',
      postalCode: '32577',
      addressCountry: 'US',
    },
    areaServed: [
      'Pensacola, FL',
      'Gulf Breeze, FL',
      'Navarre, FL',
      'Milton, FL',
      'Pace, FL',
      'Perdido Key, FL',
      'Escambia County, FL',
      'Santa Rosa County, FL',
      'Baldwin County, AL',
    ],
    priceRange: '$$',
    openingHours: 'Mo-Su 08:00-20:00',
    sameAs: ['https://www.facebook.com/thirstydawgrentals'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div>
        <section
          style={{
            backgroundColor: '#009fdb',
            color: 'white',
            padding: '3rem 2rem',
            borderRadius: '1rem',
            textAlign: 'center',
            fontFamily: 'var(--font-chewy)',
          }}
        >
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              margin: 0,
            }}
          >
            🍹 Frozen Drink & Soft Serve Machine Rentals in Pensacola, FL
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              marginTop: '1rem',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}
          >
            Choose from single or dual flavor frozen drink machines — or cool things down with our soft serve ice cream rentals!
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              marginTop: '1rem',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}
          >
            Serving Pensacola, Gulf Breeze, Navarre, Milton, Pace, Perdido Key, and nearby areas — local delivery & setup (no shipping).
          </p>

          <p
            style={{
              fontSize: '1.2rem',
              marginTop: '1.5rem',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}
          >
            Perfect for birthday parties, beach days, weddings, schools, and vacation rentals — Thirsty Dawg brings the frozen fun to you. No ice needed, no cleanup hassle.
          </p>

          <p
            style={{
              fontSize: '1.2rem',
              marginTop: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}
          >
            📞 Have questions? Call or text us at{' '}
            <a
              href="tel:8505723796"
              style={{ color: 'white', textDecoration: 'underline' }}
            >
              (850) 572-3796
            </a>
          </p>
        </section>

        <RentalsGallery />
        <OurRentals />
        <FloatingBookNow />
      </div>
    </>
  );
}