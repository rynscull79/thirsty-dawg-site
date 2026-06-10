// 📄 src/app/frozen-drink-machine-rentals/page.jsx

import dynamic from 'next/dynamic';

const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Frozen Drink Machine Rentals | Thirsty Dawg',
  description:
    'Rent commercial frozen drink machines for parties, school events, and family gatherings. Delivery and setup included across Pensacola and surrounding areas.',
  alternates: {
    canonical: 'https://www.thirstydawgrentals.com/frozen-drink-machine-rentals',
  },
  openGraph: {
    title: 'Frozen Drink Machine Rentals | Thirsty Dawg',
    description: 'Book frozen drink machines for events, schools, and parties. No ice needed. Delivered and set up in Pensacola and nearby areas.',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/frozen-drink-machine-rentals',
    type: 'website'
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export default function FrozenDrinkMachineRentalsPage() {
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
            ❄️ Frozen Drink Machine Rentals
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
            Perfect for schools, fundraisers, parties, and family events — no ice or blender needed!
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
            Our commercial frozen drink machines keep the fun flowing with kid-friendly and crowd-pleasing flavors.
            Choose one flavor, two flavors, or multiple machines based on your guest count and serving pace.
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
            🎉 Great for Any Occasion:
          </h3>
          <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
            <li>✔️ School events, fundraisers, and PTA days</li>
            <li>✔️ Kids' birthday parties</li>
            <li>✔️ Community cookouts and summer camps</li>
            <li>✔️ Weddings, baby showers, and graduations</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            💲 What’s Included:
          </h3>
          <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
            <li>✅ Frozen drink machine</li>
            <li>✅ 1–2 flavor mixes (cherry, blue raspberry, lemonade, etc.)</li>
            <li>✅ Delivery, setup, and pickup — no hassle!</li>
            <li>✅ Easy-to-follow instructions (no alcohol required)</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            🍹 Single vs. Dual Flavor:
          </h3>
          <ul style={{ marginLeft: '1rem', marginBottom: '2rem' }}>
            <li>✔️ Dual-flavor machines are great for smaller and mid-size events when guests want variety.</li>
            <li>✔️ For big parties, high-volume events, or peak-demand service, two single-flavor machines provide better output and help keep lines shorter.</li>
            <li>✔️ Not sure what you need? Tell us your guest count and event style — we’ll recommend the best setup.</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            ❓ FAQs:
          </h3>
          <ul style={{ marginLeft: '1rem' }}>
            <li><strong>Does it use ice?</strong> Nope — just water and our mix. The machine freezes it for you!</li>
            <li><strong>Are the flavors safe for kids?</strong> Absolutely. We offer a wide range of non-alcoholic flavors made for everyone.</li>
            <li><strong>Can I add my own mix?</strong> Please only use Thirsty Dawg-approved mix — others may damage the machine.</li>
            <li><strong>Do I need to clean it?</strong> No. Just drain the bowls — we handle all sanitation after pickup.</li>
            <li><strong>Can I move it during the event?</strong> No — moving the machine violates the rental terms and may incur fees.</li>
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
              📅 Book Your Frozen Drink Machine Now
            </a>
          </div>
        </section>

        <FloatingBookNow />
      </div>
    </>
  );
}
