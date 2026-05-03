// 📄 src/app/soft-serve-machine-rentals/page.jsx

import FloatingBookNow from '@/components/FloatingBookNow';

export const metadata = {
  title: 'Soft Serve Machine Rentals in Pensacola, FL | Thirsty Dawg',
  description:
    'Rent a commercial soft serve ice cream machine for parties, weddings, schools, and events in Pensacola, Gulf Breeze, Navarre, Milton, Pace, and nearby areas. Delivery, setup, and pickup included.',
  alternates: {
    canonical: 'https://www.thirstydawgrentals.com/soft-serve-machine-rentals',
  },
  openGraph: {
    title: 'Soft Serve Machine Rentals in Pensacola, FL | Thirsty Dawg',
    description:
      'Commercial soft serve machine rentals delivered to your event. Easy to use, great for parties and weddings. Serving Pensacola and nearby Gulf Coast areas.',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/soft-serve-machine-rentals',
    type: 'website',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export default function SoftServeMachineRentalsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Thirsty Dawg Rentals',
    url: 'https://www.thirstydawgrentals.com/soft-serve-machine-rentals',
    telephone: '850-572-3796',
    image: 'https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp',
    description:
      'Soft serve ice cream machine rentals in Pensacola, FL and surrounding Gulf Coast areas. Delivery, setup, and pickup included.',
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
      'Orange Beach, AL',
      'Foley, AL',
      'Fairhope, AL',
    ],
    priceRange: '$$',
    openingHours: 'Mo-Su 08:00-20:00',
    sameAs: ['https://www.facebook.com/thirstydawgrentals'],
  };

  const hShadow = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div>
        {/* Hero */}
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
              fontSize: '2.1rem',
              fontWeight: 'bold',
              color: 'white',
              textShadow: hShadow,
              margin: 0,
            }}
          >
            🍦 Soft Serve Machine Rentals in Pensacola, FL
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              marginTop: '1rem',
              color: 'white',
              textShadow: hShadow,
              maxWidth: '900px',
              marginInline: 'auto',
            }}
          >
            Add a cool twist to your event with real soft serve ice cream — perfect for birthday parties, weddings,
            schools, church events, and company celebrations across Pensacola and nearby areas.
          </p>

          <p
            style={{
              fontSize: '1.2rem',
              marginTop: '1.25rem',
              color: 'white',
              textShadow: hShadow,
              maxWidth: '900px',
              marginInline: 'auto',
            }}
          >
            Our commercial machines dispense smooth soft serve into cups or bowls — fast, fun, and easy to serve.
            For larger groups or rush-style serving, we’ll help you decide whether one machine is enough or whether multiple machines make sense.
          </p>

          <p
            style={{
              fontSize: '1.2rem',
              marginTop: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              textShadow: hShadow,
            }}
          >
            📞 Questions? Call or text{' '}
            <a href="tel:8505723796" style={{ color: 'white', textDecoration: 'underline' }}>
              (850) 572-3796
            </a>
          </p>
        </section>

        {/* Content */}
        <section
          style={{
            backgroundColor: '#fff',
            color: '#333',
            padding: '2rem 1.5rem',
            maxWidth: '900px',
            margin: '2rem auto',
            fontFamily: 'var(--font-chewy)',
            lineHeight: 1.6,
            borderRadius: '14px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
          }}
        >
          <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '1rem' }}>🎉 Great For</h2>
          <ul style={{ marginLeft: '1.25rem', marginBottom: '2rem' }}>
            <li>✔️ Weddings and receptions</li>
            <li>✔️ School celebrations and appreciation events</li>
            <li>✔️ Backyard birthday parties and neighborhood get-togethers</li>
            <li>✔️ Corporate events, employee appreciation, and summer fun</li>
          </ul>

          <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '1rem' }}>🍨 What’s Included</h2>
          <ul style={{ marginLeft: '1.25rem', marginBottom: '2rem' }}>
            <li>✅ One commercial soft serve machine</li>
            <li>✅ Soft serve mix (vanilla, chocolate, or swirl)</li>
            <li>✅ Delivery, setup, quick how-to, and pickup</li>
            <li>✅ Optional toppings (sprinkles, fudge, caramel) upon request</li>
          </ul>

          <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '1rem' }}>❓ FAQs</h2>
          <ul style={{ marginLeft: '1.25rem' }}>
            <li>
              <strong>Is it self-serve?</strong> Yes — guests can serve themselves, but we recommend adult supervision.
            </li>
            <li>
              <strong>Do I need cups or bowls?</strong> Either works. Bowls/cups are easiest for portioning and cleanup.
            </li>
            <li>
              <strong>How fast is setup?</strong> Typically ready within <strong>15–30 minutes</strong> after setup.
            </li>
            <li>
              <strong>How many guests can one machine handle?</strong> It depends on the event pace and serving window. For schools, corporate events, big parties, or other high-volume times, ask us about adding a second machine to keep service moving.
            </li>
            <li>
              <strong>Do I need to clean it?</strong> No deep cleaning — just drain it. We handle full sanitation after pickup.
            </li>
          </ul>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href="/booking"
              style={{
                display: 'inline-block',
                backgroundColor: '#009fdb',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '2rem',
                fontSize: '1.25rem',
                textDecoration: 'none',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              }}
            >
              📅 Book Your Soft Serve Machine
            </a>
          </div>

          <p style={{ textAlign: 'center', marginTop: '1.25rem', color: '#666', fontSize: '0.95rem' }}>
            Serving Pensacola, Gulf Breeze, Navarre, Milton, Pace, and nearby Gulf Coast areas.
          </p>
        </section>

        <FloatingBookNow />
      </div>
    </>
  );
}