// 📄 src/app/daiquiri-machine-rentals/page.jsx

import dynamic from 'next/dynamic';
const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Daiquiri Machine Rentals | Thirsty Dawg',
  description:
    'Daiquiri machine rentals in Pensacola and nearby areas. We deliver frozen drink machines and mix — you just add the booze!',
  openGraph: {
    title: 'Daiquiri Machine Rentals | Thirsty Dawg',
    description:
      'Rent daiquiri machines for parties, beach days, weddings, and events. Frozen drinks made easy — BYOB style!',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/daiquiri-machine-rentals',
    type: 'website',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export const viewport = {
  canonical: 'https://www.thirstydawgrentals.com/daiquiri-machine-rentals',
};

export default function DaiquiriMachineRentalsPage() {
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
            🍓 Daiquiri Machine Rentals in Pensacola
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
            Host the ultimate party with frozen daiquiri machines delivered to your door.
            Just add alcohol — we’ll bring the mix, setup, and good times.
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
            Perfect for backyard bashes, weddings, beach rentals, and birthdays. Choose from single or dual flavor machines.
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
            <a href="tel:8505723796" style={{ color: 'white', textDecoration: 'underline' }}>
              (850) 572-3796
            </a>
          </p>
        </section>

        <section
          style={{
            padding: '2rem 1rem',
            maxWidth: '900px',
            margin: '0 auto',
            fontFamily: 'var(--font-chewy)',
            lineHeight: 1.6,
            color: '#222',
          }}
        >
          <h3 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>How It Works</h3>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '1rem' }}>
            <li>✅ Select your rental date and machine type</li>
            <li>✅ Pick your favorite daiquiri mix flavors</li>
            <li>✅ We deliver and set everything up for you</li>
            <li>✅ You add the alcohol (BYOB style)</li>
            <li>✅ Enjoy frozen drinks on demand</li>
          </ul>

          <h3 style={{ fontSize: '1.75rem', marginTop: '2rem' }}>Service Area</h3>
          <p>
            We deliver daiquiri machines throughout Pensacola, Gulf Breeze, Navarre, Perdido, Milton, and more. Unsure if we service your location? Just ask!
          </p>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <a
              href="/booking"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                backgroundColor: '#ff3366',
                color: 'white',
                fontSize: '1.25rem',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              Book a Daiquiri Machine
            </a>
          </div>
        </section>

        <FloatingBookNow />
      </div>
    </>
  );
}
