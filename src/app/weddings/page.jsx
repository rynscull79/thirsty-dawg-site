// 📄 src/app/weddings/page.jsx

import dynamic from 'next/dynamic';

const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Wedding Rentals | Frozen Drink, Ice Cream & Soft Serve | Thirsty Dawg',
  description:
    'Make your wedding unforgettable with frozen drink machines, soft serve rentals, and fully stocked novelty ice cream carts. Delivery, setup, and cleanup included!',
  alternates: {
    canonical: 'https://www.thirstydawgrentals.com/weddings',
  },
  openGraph: {
    title: 'Wedding Rentals | Frozen Drink, Ice Cream & Soft Serve | Thirsty Dawg',
    description:
      'Make your wedding unforgettable with frozen drink machines, soft serve rentals, and fully stocked novelty ice cream carts. Delivery, setup, and cleanup included!',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/weddings',
    type: 'website',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export const viewport = {
  canonical: 'https://www.thirstydawgrentals.com/weddings',
};

export default function WeddingsPage() {
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
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}
          >
            💍 Wedding Rentals — Frozen Fun for Your Big Day
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              marginTop: '1rem',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}
          >
            Bring something unforgettable to your wedding with Thirsty Dawg's frozen drink machines, soft serve rentals, and fully stocked novelty ice cream carts.
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
            Whether it's the welcome party, reception, or late-night treat station — we deliver, set up, and clean up, so you can celebrate stress-free.
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
            📞 Let’s make your wedding a frozen blast —{' '}
            <a href="tel:8505723796" style={{ color: 'white', textDecoration: 'underline' }}>
              (850) 572-3796
            </a>
          </p>
        </section>

        <section style={{ padding: '2rem', fontFamily: 'var(--font-chewy)' }}>
          <h3 style={{ fontSize: '1.6rem' }}>🍹 Frozen Drink Machines</h3>
          <p style={{ marginTop: '0.5rem' }}>
            Perfect for signature wedding cocktails — whether it's margaritas, daiquiris, or your own mix like a wedding-day Bushwacker. Machines come in single or dual flavor options and keep drinks flowing all night.
          </p>
        </section>

        <section style={{ padding: '2rem', fontFamily: 'var(--font-chewy)' }}>
          <h3 style={{ fontSize: '1.6rem' }}>🍦 Soft Serve Ice Cream</h3>
          <p style={{ marginTop: '0.5rem' }}>
            Add a sweet twist to your dessert table with our commercial soft serve machines — a huge hit with kids and adults alike.
          </p>
        </section>

        <section style={{ padding: '2rem', fontFamily: 'var(--font-chewy)' }}>
          <h3 style={{ fontSize: '1.6rem' }}>🛒 Fully Stocked Ice Cream Carts</h3>
          <p style={{ marginTop: '0.5rem' }}>
            Our adorable ice cream carts come stocked with your choice of novelty treats. A nostalgic surprise your guests will talk about long after the big day.
          </p>
        </section>

        <section
          style={{
            backgroundColor: '#009fdb',
            padding: '2rem',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'var(--font-chewy)',
            marginTop: '2rem',
            borderRadius: '1rem',
          }}
        >
          <h4 style={{ fontSize: '1.5rem', textShadow: '-1px -1px 0 #000, 1px 1px 0 #000' }}>
            Ready to reserve your date?
          </h4>
          <p style={{ marginTop: '0.5rem' }}>
            Let’s make your wedding unforgettable. Reserve your frozen drink machine, soft serve, or novelty cart today!
          </p>
          <FloatingBookNow />
        </section>
      </div>
    </>
  );
}
