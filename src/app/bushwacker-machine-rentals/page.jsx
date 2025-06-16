// 📄 src/app/bushwacker-machine-rentals/page.jsx

import dynamic from 'next/dynamic';

const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Bushwacker Machine Rentals | Thirsty Dawg',
  description:
    'Rent frozen drink machines for making creamy, chocolatey Bushwacker slushies. Thirsty Dawg delivers, sets up, and picks up — perfect for parties, weddings, and events.',
  openGraph: {
    title: 'Bushwacker Machine Rentals | Thirsty Dawg',
    description:
      'Bring the beach to your event with Bushwacker frozen drink machine rentals. Thirsty Dawg makes setup, flavor, and cleanup easy.',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/bushwacker-machine-rentals',
    type: 'website',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export const viewport = {
  canonical: 'https://www.thirstydawgrentals.com/bushwacker-machine-rentals',
};

export default function BushwackerMachineRentalsPage() {
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
            🥥 Bushwacker Machine Rentals
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
            Add a taste of the beach to your next event! Our frozen drink machines can serve delicious Bushwackers — creamy, chocolatey frozen treats that everyone loves.
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
            We deliver, set up, and pick up — all you do is plug in and enjoy. No alcohol included, but the flavor is unforgettable.
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
            📞 Call or text{' '}
            <a href="tel:8505723796" style={{ color: 'white', textDecoration: 'underline' }}>
              (850) 572-3796
            </a>{' '}
            with questions!
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
            🌴 What’s a Bushwacker?
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            It’s a tropical, creamy frozen drink with hints of chocolate, coffee, and coconut — a Pensacola favorite! Ours are alcohol-free by default but taste amazing as-is or dressed up by you.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            🎯 Perfect For:
          </h3>
          <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
            <li>✔️ Beach-themed weddings</li>
            <li>✔️ Backyard cookouts</li>
            <li>✔️ Corporate events</li>
            <li>✔️ Birthday bashes</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            ✅ What’s Included:
          </h3>
          <ul style={{ marginLeft: '1rem' }}>
            <li>1 frozen drink machine (ready to go)</li>
            <li>Bushwacker flavor mix (enough for the whole party)</li>
            <li>Setup, instructions, and pickup</li>
            <li>Delivery within our standard area</li>
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
              📅 Reserve a Bushwacker Machine Now
            </a>
          </div>
        </section>

        <FloatingBookNow />
      </div>
    </>
  );
}
