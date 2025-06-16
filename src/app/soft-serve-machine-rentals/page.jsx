// 📄 src/app/soft-serve-machine-rentals/page.jsx

import dynamic from 'next/dynamic';

const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Soft Serve Ice Cream Machine Rentals | Thirsty Dawg',
  description:
    'Rent soft serve ice cream machines for parties, weddings, and events. Creamy ice cream delivered with setup and pickup included.',
  openGraph: {
    title: 'Soft Serve Ice Cream Machine Rentals | Thirsty Dawg',
    description:
      'Make your next event unforgettable with real soft serve ice cream. Our machines are easy to use and come with full delivery and setup.',
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
            Add a cool twist to your party with real soft serve ice cream! Perfect for events, weddings, schools, and more.
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
            Our commercial machines deliver smooth, delicious soft serve right into bowls or cups — no scooping needed.
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
            <li>✔️ Weddings and receptions</li>
            <li>✔️ School celebrations and appreciation events</li>
            <li>✔️ Backyard birthday parties and church socials</li>
            <li>✔️ Corporate events and summer fun</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            🍨 What’s Included:
          </h3>
          <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
            <li>✅ One soft serve machine (commercial-grade)</li>
            <li>✅ Ice cream mix (vanilla, chocolate, or both)</li>
            <li>✅ Setup, operation guide, and pickup</li>
            <li>✅ Optional toppings: sprinkles, fudge, caramel (upon request)</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            ❓ FAQs:
          </h3>
          <ul style={{ marginLeft: '1rem' }}>
            <li><strong>Is this self-serve?</strong> Yes, but best operated by an adult — just push the button to dispense.</li>
            <li><strong>Can I use bowls or cups?</strong> Yes — we recommend serving in bowls or cups for easy portioning and cleanup.</li>
            <li><strong>What’s the prep time?</strong> The machine is ready within 15–30 minutes after setup.</li>
            <li><strong>Do I need to clean it?</strong> Nope — just drain it and we handle full sanitation after pickup.</li>
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
