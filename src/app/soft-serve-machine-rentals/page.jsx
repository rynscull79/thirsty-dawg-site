// 📄 src/app/soft-serve-machine-rentals/page.jsx

import dynamic from 'next/dynamic';

const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Soft Serve Ice Cream Machine Rentals | Thirsty Dawg',
  description:
    'Rent soft serve ice cream machines for weddings, birthdays, school events, and more. Delivery and setup included. Pensacola and surrounding areas.',
  openGraph: {
    title: 'Soft Serve Ice Cream Machine Rentals | Thirsty Dawg',
    description:
      'Serve up real soft serve ice cream at your event with our commercial soft serve rentals. No hassle setup — we deliver and pick up!',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/soft-serve-machine-rentals',
    type: 'website',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export const viewport = {
  canonical: 'https://www.thirstydawgrentals.com/soft-serve-machine-rentals',
};

export default function SoftServeMachineRentalsPage() {
  return (
    <>
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
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}
          >
            🍦 Soft Serve Ice Cream Machine Rentals
          </h2>

          <p
            style={{
              fontSize: '1.2rem',
              marginTop: '1rem',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}
          >
            Bring real soft serve to your party, wedding, or event — no scooping, no stress!
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
            Our commercial machines make it easy to serve vanilla, chocolate, or twist cones with just a pull of a handle.
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
            📞 Questions? Call or text{' '}
            <a href="tel:8505723796" style={{ color: 'white', textDecoration: 'underline' }}>
              (850) 572-3796
            </a>
          </p>
        </section>

        <section
          style={{
            backgroundColor: '#fff',
            color: '#333',
            padding: '2rem 1.5rem',
            maxWidth: '900px',
            margin: '2rem auto',
            fontFamily: 'var(--font-chewy)',
            lineHeight: 1.6,
          }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            🎉 Perfect for:
          </h3>
          <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
            <li>✔️ Weddings and receptions</li>
            <li>✔️ School celebrations and teacher appreciation days</li>
            <li>✔️ Backyard birthday parties</li>
            <li>✔️ Corporate events and church socials</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            🍦 What’s Included:
          </h3>
          <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
            <li>✅ One soft serve machine (single or twist-style)</li>
            <li>✅ Ice cream mix (vanilla, chocolate, or both)</li>
            <li>✅ Setup, operation guide, and pickup</li>
            <li>✅ Add-ons available: cones, cups, sprinkles, and toppings</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            ❓ FAQs:
          </h3>
          <ul style={{ marginLeft: '1rem' }}>
            <li><strong>Does the machine freeze the mix?</strong> Yes — it chills and dispenses fresh soft serve with no prep needed.</li>
            <li><strong>How long does it take to be ready?</strong> Around 10–20 minutes after setup.</li>
            <li><strong>Can I operate it myself?</strong> Yes — we’ll show you how. It’s as easy as pulling a lever!</li>
            <li><strong>Do I need to clean it?</strong> Just drain the machine — we handle the full sanitation after pickup.</li>
            <li><strong>Can I request specific flavors?</strong> Absolutely! Let us know your event theme and we’ll help match it.</li>
          </ul>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href="/booking"
              style={{
                backgroundColor: '#009fdb',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '2rem',
                fontSize: '1.25rem',
                textDecoration: 'none',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              }}
            >
              📅 Book Your Soft Serve Machine Now
            </a>
          </div>
        </section>

        <FloatingBookNow />
      </div>
    </>
  );
}
