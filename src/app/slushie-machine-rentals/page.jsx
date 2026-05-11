// 📄 src/app/slushie-machine-rentals/page.jsx

import dynamic from 'next/dynamic';

const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Slushie Machine Rentals | Thirsty Dawg',
  description:
    'Rent slushie machines for kids parties, schools, and summer events. Delivered frozen drink machines with your choice of flavors — we handle setup and pickup!',
  openGraph: {
    title: 'Slushie Machine Rentals | Thirsty Dawg',
    description: 'Book a slushie machine rental in Pensacola or surrounding areas. No ice needed. Easy setup and cleanup included.',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/slushie-machine-rentals',
    type: 'website'
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export const viewport = {
  canonical: 'https://www.thirstydawgrentals.com/slushie-machine-rentals',
};

export default function SlushieMachineRentalsPage() {
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
            🧊 Slushie Machine Rentals
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
            Serve up smiles with sweet, icy slushies — perfect for birthdays, school carnivals, and neighborhood fun!
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
            Our slushie machines are delivered fully stocked and ready to pour with your choice of flavors.
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
            <li>✔️ Birthday parties and block parties</li>
            <li>✔️ School field days, fundraisers, and carnivals</li>
            <li>✔️ Church events and holiday celebrations</li>
            <li>✔️ Summer camps and daycares</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            🧃 What’s Included:
          </h3>
          <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
            <li>✅ One commercial slushie machine (single or dual bowl)</li>
            <li>✅ 1–2 flavor mixes (cherry, blue raspberry, tropical punch, lemonade)</li>
            <li>✅ Full delivery, setup, and pickup</li>
            <li>✅ Instructions included (no ice or alcohol needed)</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            ❓ Common Questions:
          </h3>
          <ul style={{ marginLeft: '1rem' }}>
            <li><strong>Does it need ice?</strong> Nope! Just plug in, add water + mix — it freezes automatically.</li>
            <li><strong>Can adults use it too?</strong> Absolutely! Great for non-alcoholic mocktails at events.</li>
            <li><strong>How long does it take to freeze?</strong> 45–90 minutes depending on the environment.</li>
            <li><strong>Do I need to clean it?</strong> Nope! Just drain leftover slush — we handle sanitation.</li>
            <li><strong>Can I pick it up?</strong> No — all machines are delivered and picked up by our team for safety.</li>
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
              📅 Book Your Slushie Machine Now
            </a>
          </div>
        </section>

        <FloatingBookNow />
      </div>
    </>
  );
}
