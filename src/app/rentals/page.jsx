// File: src/app/rentals/page.jsx

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

  const pageWrapStyle = {
    padding: '0 1rem 2rem',
  };

  const heroStyle = {
    backgroundColor: '#009fdb',
    color: 'white',
    padding: '3rem 2rem',
    borderRadius: '1rem',
    textAlign: 'center',
    fontFamily: 'var(--font-chewy)',
  };

  const heroHeadingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    margin: 0,
  };

  const heroParaStyle = {
    fontSize: '1.2rem',
    marginTop: '1rem',
    color: 'white',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  };

  const heroParaSmallStyle = {
    fontSize: '1.05rem',
    marginTop: '1rem',
    color: 'white',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  };

  const heroParaBoldStyle = {
    fontSize: '1.2rem',
    marginTop: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  };

  const sectionCardStyle = {
    margin: '2rem auto',
    maxWidth: '1100px',
    padding: '2rem 1.5rem',
    borderRadius: '1rem',
    background: 'rgba(255,255,255,0.9)',
    border: '3px solid rgba(0,0,0,0.12)',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    fontFamily: 'var(--font-chewy)',
  };

  const sectionTitleStyle = {
    fontSize: '1.9rem',
    margin: 0,
    textAlign: 'center',
    color: '#0b2230',
    textShadow:
      '-1px -1px 0 rgba(255,255,255,0.6), 1px -1px 0 rgba(255,255,255,0.6), -1px 1px 0 rgba(255,255,255,0.6), 1px 1px 0 rgba(255,255,255,0.6)',
  };

  const sectionIntroStyle = {
    marginTop: '0.9rem',
    fontSize: '1.15rem',
    lineHeight: 1.55,
    color: '#0b2230',
    textAlign: 'center',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1rem',
    marginTop: '1.25rem',
  };

  const gridCardStyle = {
    borderRadius: '0.9rem',
    padding: '1rem 1.1rem',
    background: 'rgba(0,159,219,0.08)',
    border: '2px solid rgba(0,0,0,0.08)',
  };

  const gridCardTitleRowStyle = {
    fontSize: '1.35rem',
    marginBottom: '0.4rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#0b2230',
  };

  const gridCardTextStyle = {
    margin: 0,
    fontSize: '1.05rem',
    lineHeight: 1.45,
    color: '#0b2230',
  };

  const bottomLineStyle = {
    marginTop: '1.25rem',
    padding: '1rem 1.1rem',
    borderRadius: '0.9rem',
    background: 'rgba(0,0,0,0.04)',
    border: '2px dashed rgba(0,0,0,0.18)',
    textAlign: 'center',
    color: '#0b2230',
    fontSize: '1.1rem',
    lineHeight: 1.5,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div style={pageWrapStyle}>
        {/* Hero */}
        <section style={heroStyle}>
          <h1 style={heroHeadingStyle}>
            🍹 Frozen Drink & Soft Serve Machine Rentals in Pensacola, FL
          </h1>

          <p style={heroParaStyle}>
            Choose from single or dual flavor frozen drink machines — or cool things down with our
            soft serve ice cream rentals!
          </p>

          <p style={heroParaSmallStyle}>
            Serving Pensacola, Gulf Breeze, Navarre, Milton, Pace, Perdido Key, and nearby areas —
            local delivery & setup (no shipping).
          </p>

          <p style={{ ...heroParaStyle, marginTop: '1.5rem' }}>
            Perfect for birthday parties, beach days, weddings, schools, and vacation rentals —
            Thirsty Dawg brings the frozen fun to you. No ice needed, no cleanup hassle.
          </p>

          <p style={heroParaBoldStyle}>
            📞 Have questions? Call or text us at{' '}
            <a
              href="tel:8505723796"
              style={{ color: 'white', textDecoration: 'underline' }}
            >
              (850) 572-3796
            </a>
          </p>
        </section>

        {/* Gallery */}
        <RentalsGallery />

        {/* Rentals / Machine Descriptions */}
        <OurRentals />

        {/* Why Machine Quality Matters (moved BELOW the rentals so it reads in the order you want) */}
        <section style={sectionCardStyle}>
          <h2 style={sectionTitleStyle}>Why Machine Quality Matters</h2>

          <p style={sectionIntroStyle}>
            Not all frozen drink machines are built for outdoor events and Gulf Coast heat. For a
            smooth, consistent freeze — and drinks that stay frozen during peak demand — equipment
            quality makes a big difference.
          </p>

          <div style={gridStyle}>
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
              <div key={item.title} style={gridCardStyle}>
                <div style={gridCardTitleRowStyle}>
                  <span aria-hidden="true">{item.icon}</span>
                  <span style={{ fontWeight: 'bold' }}>{item.title}</span>
                </div>

                <p style={gridCardTextStyle}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={bottomLineStyle}>
            <strong>Bottom line:</strong> When you’re hosting an event, you want the machine to
            perform like a champ — so you can focus on your guests, not troubleshooting equipment.
          </div>
        </section>

        <FloatingBookNow />
      </div>
    </>
  );
}