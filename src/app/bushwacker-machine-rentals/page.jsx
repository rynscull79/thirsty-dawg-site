// 📄 src/app/bushwacker-machine-rentals/page.jsx

import dynamic from 'next/dynamic';

const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Bushwacker Machine Rentals | Thirsty Dawg',
  description:
    'Serve up classic Bushwackers with our frozen drink machine rentals. We provide the mix — you add the alcohol. Delivery, setup, and pickup included.',
  openGraph: {
    title: 'Bushwacker Machine Rentals | Thirsty Dawg',
    description:
      'The iconic Pensacola drink, now easier than ever. Rent a frozen drink machine with Bushwacker mix included — just add alcohol and serve!',
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
            🍹 Bushwacker Machine Rentals
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
            Host a party your guests won’t forget. Our Bushwacker machine rental comes with the legendary frozen mix — just add your favorite alcohol and you’re ready to pour.
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
            We deliver the machine and mix, set it up, and make sure everything is ready. All you have to do is party.
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
            🌴 What Is a Bushwacker?
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            A frozen Pensacola classic. Rich, creamy, and boozy — a crowd favorite that’s become a beach tradition. Our mix is designed for Bushwackers, and you bring the alcohol to make it your own.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            🎉 Perfect For:
          </h3>
          <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
            <li>✔️ Beach house parties</li>
            <li>✔️ Wedding receptions</li>
            <li>✔️ Backyard BBQs</li>
            <li>✔️ Corporate happy hours</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            ✅ What’s Included:
          </h3>
          <ul style={{ marginLeft: '1rem' }}>
            <li>1 commercial-grade frozen drink machine</li>
            <li>Bushwacker drink mix (ready to blend)</li>
            <li>Delivery, setup, and next-day pickup</li>
            <li>Tips and guidance for getting it just right</li>
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
              📅 Book Your Bushwacker Machine
            </a>
          </div>
        </section>

        <FloatingBookNow />
      </div>
    </>
  );
}
