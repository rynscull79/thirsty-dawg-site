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
                <RentalsGallery />

        {/* Why Machine Quality Matters */}
        <section
          style={{
            margin: '2rem auto',
            maxWidth: '1100px',
            padding: '2rem 1.5rem',
            borderRadius: '1rem',
            background: 'rgba(255,255,255,0.9)',
            border: '3px solid rgba(0,0,0,0.12)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            fontFamily: 'var(--font-chewy)',
          }}
        >
          <h2
            style={{
              fontSize: '1.9rem',
              margin: 0,
              textAlign: 'center',
              color: '#0b2230',
              textShadow:
                '-1px -1px 0 rgba(255,255,255,0.6), 1px -1px 0 rgba(255,255,255,0.6), -1px 1px 0 rgba(255,255,255,0.6), 1px 1px 0 rgba(255,255,255,0.6)',
            }}
          >
            Why Machine Quality Matters
          </h2>

          <p
            style={{
              marginTop: '0.9rem',
              fontSize: '1.15rem',
              lineHeight: 1.55,
              color: '#0b2230',
              textAlign: 'center',
            }}
          >
            Not all frozen drink machines are built for outdoor events and Gulf Coast heat.
            For a smooth, consistent freeze — and drinks that stay frozen during peak demand —
            equipment quality makes a big difference.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              marginTop: '1.25rem',
            }}
          >
            {[
              {
                title: 'Built for Florida Heat',
                text: 'Commercial-grade performance that holds temperature better in hot, humid weather.',
                icon: '☀️',
              },
              {
                title: 'Keeps Up With Crowds',
                text: 'Higher output means fewer “waits” and more consistent slush all event long.',
                icon: '🥤',
              },
              {
                title: 'More Reliable Results',
                text: 'Stable freezing and mixing helps prevent watery drinks and half-frozen texture.',
                icon: '✅',
              },
              {
                title: 'Looks Professional',
                text: 'Clean, polished presentation that fits weddings, schools, and corporate events.',
                icon: '✨',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: '0.9rem',
                  padding: '1rem 1.1rem',
                  background: 'rgba(0,159,219,0.08)',
                  border: '2px solid rgba(0,0,0,0.08)',
                }}
              >
                <div
                  style={{
                    fontSize: '1.35rem',
                    marginBottom: '0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#0b2230',
                  }}
                >
                  <span aria-hidden="true">{item.icon}</span>
                  <span style={{ fontWeight: 'bold' }}>{item.title}</span>
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: '1.05rem',
                    lineHeight: 1.45,
                    color: '#0b2230',
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '1.25rem',
              padding: '1rem 1.1rem',
              borderRadius: '0.9rem',
              background: 'rgba(0,0,0,0.04)',
              border: '2px dashed rgba(0,0,0,0.18)',
              textAlign: 'center',
              color: '#0b2230',
              fontSize: '1.1rem',
              lineHeight: 1.5,
            }}
          >
            <strong>Bottom line:</strong> When you’re hosting an event, you want the machine to
            perform like a champ — so you can focus on your guests, not troubleshooting equipment.
          </div>
        </section>

        <OurRentals />
        <FloatingBookNow />
      </div>
    </>
  );
}