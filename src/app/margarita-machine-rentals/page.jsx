// 📄 src/app/margarita-machine-rentals/page.jsx

import dynamic from 'next/dynamic';

const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Margarita Machine Rentals | Thirsty Dawg',
  description:
    'Rent frozen margarita machines for weddings, parties, and corporate events. Thirsty Dawg delivers, sets up, and provides everything you need for the ultimate frozen drink experience.',
  openGraph: {
    title: 'Margarita Machine Rentals | Thirsty Dawg',
    description: 'Book frozen margarita machine rentals for parties and events in the Pensacola area. Full service setup and delivery!',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/margarita-machine-rentals',
    type: 'website'
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export const viewport = {
  canonical: 'https://www.thirstydawgrentals.com/margarita-machine-rentals',
};

export default function MargaritaMachineRentalsPage() {
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
            🍸 Margarita Machine Rentals
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
            Add frozen margaritas to your party, wedding, beach event, or corporate gathering — with no ice, no blending, and no mess.
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
            Our commercial-grade machines are delivered fully stocked and ready to pour — just add alcohol if desired!
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
            🎉 What’s Included:
          </h3>
          <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
            <li>✔️ 1 frozen drink machine </li>
            <li>✔️ 1–2 flavor mixes (margarita, daiquiri, piña colada, etc.)</li>
            <li>✔️ Setup, sanitation, and pickup</li>
            <li>✔️ Instructions for adding alcohol (BYOB)</li>
            <li>✔️ Delivery within our standard service area</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            💲 Pricing:
          </h3>
          <p>
            Machines start at <strong>$185</strong> for weekend rentals. Additional mixes are available for $22 each
            (Bushwacker is $27). Extended rentals, dual flavor machines, or second machines can be added at discounted rates.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            🙋 FAQs (Just for Margarita Machines):
          </h3>

          <ul style={{ marginLeft: '1rem' }}>
            <li><strong>Do you supply alcohol?</strong> No. We provide the mix. You add the alcohol if you choose.</li>
            <li><strong>Is ice required?</strong> Nope — the machine freezes everything automatically!</li>
            <li><strong>How long does it take to freeze?</strong> Plan on 45 to 90 minutes depending on conditions. Plug in early!</li>
            <li><strong>Can kids use the machine?</strong> Yes! Use non-alcoholic mixes and let them enjoy fun slushies.</li>
            <li><strong>Do I need to clean it?</strong> Just drain the bowl. We handle all cleaning after pickup.</li>
            <li><strong>Can I move the machine?</strong> No. It must remain at the drop-off location — or a $500 fee applies.</li>
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
              📅 Reserve Your Margarita Machine Now
            </a>
          </div>
        </section>

        <FloatingBookNow />
      </div>
    </>
  );
}
