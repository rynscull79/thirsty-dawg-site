// 📄 src/app/soft-serve-machine-rentals/page.jsx

import dynamic from 'next/dynamic';

const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Soft Serve Milkshake Machine Rentals | Thirsty Dawg',
  description:
    'Rent soft serve machines designed for milkshakes and blended frozen treats. Perfect for weddings, parties, and events across the Pensacola area.',
  openGraph: {
    title: 'Soft Serve Milkshake Machine Rentals | Thirsty Dawg',
    description:
      'Create creamy milkshakes and frozen blended drinks at your next event. Full delivery and setup included with our soft serve machines.',
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
            🥤 Soft Serve Milkshake Machine Rentals
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
            Serve rich, creamy milkshakes at your event with our commercial soft serve machines.
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
            Just add your mix — we’ll take care of the rest. Perfect for weddings, parties, and summer celebrations.
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
            🎉 Great For:
          </h3>
          <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
            <li>✔️ Weddings & receptions</li>
            <li>✔️ Birthday parties and baby showers</li>
            <li>✔️ Church socials, school celebrations, and fundraisers</li>
            <li>✔️ Backyard BBQs and summer gatherings</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            🥤 What’s Included:
          </h3>
          <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
            <li>✅ One soft serve machine (milkshake-ready)</li>
            <li>✅ Ice cream base or shake mix options</li>
            <li>✅ Full delivery, setup, and pickup</li>
            <li>✅ Instructions for easy, on-demand use</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            ❓ FAQs:
          </h3>
          <ul style={{ marginLeft: '1rem' }}>
            <li><strong>Is it a cone-style machine?</strong> No — our unit is used for thick, blended-style frozen treats like milkshakes or frozen coffees.</li>
            <li><strong>What’s the prep time?</strong> 15–30 minutes after delivery depending on environment and mix temperature.</li>
            <li><strong>Can I add toppings?</strong> Absolutely! Mix your own or top off after pouring.</li>
            <li><strong>Do I need to clean it?</strong> Just drain it — we handle full cleaning after pickup.</li>
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
