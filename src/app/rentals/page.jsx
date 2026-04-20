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
    background: 'linear-gradient(180deg, var(--td-blue) 0%, var(--td-blue-deep) 100%)',
    color: 'var(--td-white)',
    padding: '3rem 2rem',
    borderRadius: '22px',
    textAlign: 'center',
    boxShadow: 'var(--shadow-soft)',
    maxWidth: '1100px',
    margin: '0 auto 2rem',
  };

  const heroHeadingStyle = {
    fontSize: '2.3rem',
    fontWeight: '700',
    color: 'var(--td-white)',
    margin: 0,
    fontFamily: 'var(--heading-font)',
    lineHeight: 1.1,
  };

  const heroParaStyle = {
    fontSize: '1.15rem',
    marginTop: '1rem',
    color: 'var(--td-white)',
    fontFamily: 'var(--body-font)',
    lineHeight: 1.65,
    maxWidth: '820px',
    marginInline: 'auto',
  };

  const heroParaSmallStyle = {
    fontSize: '1.05rem',
    marginTop: '1rem',
    color: 'var(--td-white)',
    fontFamily: 'var(--body-font)',
    lineHeight: 1.65,
    maxWidth: '820px',
    marginInline: 'auto',
  };

  const heroParaBoldStyle = {
    fontSize: '1.15rem',
    marginTop: '1.5rem',
    fontWeight: '700',
    color: 'var(--td-white)',
    fontFamily: 'var(--body-font)',
    lineHeight: 1.6,
  };

  const sectionCardStyle = {
    margin: '2rem auto',
    maxWidth: '1100px',
    padding: '2rem 1.5rem',
    borderRadius: '22px',
    background: 'rgba(255,255,255,0.96)',
    boxShadow: 'var(--shadow-soft)',
  };

  const sectionTitleStyle = {
    fontSize: '2rem',
    margin: 0,
    textAlign: 'center',
    color: 'var(--td-blue)',
    fontFamily: 'var(--heading-font)',
    lineHeight: 1.1,
  };

  const sectionIntroStyle = {
    marginTop: '0.9rem',
    fontSize: '1.08rem',
    lineHeight: 1.7,
    color: 'var(--td-black)',
    textAlign: 'center',
    fontFamily: 'var(--body-font)',
    maxWidth: '850px',
    marginInline: 'auto',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1rem',
    marginTop: '1.25rem',
  };

  const gridCardStyle = {
    borderRadius: '18px',
    padding: '1rem 1.1rem',
    background: 'linear-gradient(180deg, #eef9ff 0%, #dff4ff 100%)',
    border: '2px solid rgba(25, 181, 241, 0.18)',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06)',
  };

  const gridCardTitleRowStyle = {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--td-black)',
    fontFamily: 'var(--body-font)',
    fontWeight: '700',
  };

  const gridCardTextStyle = {
    margin: 0,
    fontSize: '1rem',
    lineHeight: 1.6,
    color: 'var(--td-black)',
    fontFamily: 'var(--body-font)',
  };

  const bottomLineStyle = {
    marginTop: '1.25rem',
    padding: '1rem 1.1rem',
    borderRadius: '18px',
    background: '#fff8ef',
    border: '2px dashed rgba(247, 148, 29, 0.35)',
    textAlign: 'center',
    color: 'var(--td-black)',
    fontSize: '1.05rem',
    lineHeight: 1.6,
    fontFamily: 'var(--body-font)',
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
  style={{
    color: 'var(--td-white)',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
  }}
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