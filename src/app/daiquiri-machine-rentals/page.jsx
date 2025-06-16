// 📄 src/app/daiquiri-machine-rentals/page.jsx

import FloatingBookNow from '@/components/FloatingBookNow';

export const metadata = {
  title: 'Daiquiri Machine Rentals | Thirsty Dawg Frozen Drinks',
  description: 'Rent daiquiri machines for parties, weddings, and events in Pensacola and nearby. Choose from single or dual flavor options. Delivery and setup included!',
  openGraph: {
    title: 'Daiquiri Machine Rentals | Thirsty Dawg Frozen Drinks',
    description: 'Frozen daiquiri machine rentals with delivery and setup. Perfect for weddings, fundraisers, and summer parties in Pensacola.',
  },
};

export default function DaiquiriMachineRentalsPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'var(--font-chewy)', background: '#fff' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Daiquiri Machine Rentals</h1>

      <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
        Bring the frozen fun to your next event with Thirsty Dawg's daiquiri machine rentals! Whether you're hosting a wedding, corporate function, or neighborhood party,
        our machines let guests enjoy icy-cold daiquiris all day long.
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Perfect for Any Occasion</h2>
        <ul style={{ paddingLeft: '1.25rem', fontSize: '1.1rem' }}>
          <li>Weddings & Receptions</li>
          <li>Backyard BBQs</li>
          <li>Beach Parties</li>
          <li>Fundraisers & School Events</li>
          <li>Corporate Mixers</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Single or Dual Flavor Machines</h2>
        <p style={{ fontSize: '1.1rem' }}>
          Choose from our stainless or plastic daiquiri machines in both single and dual flavor setups. Each machine is easy to use, sanitized before delivery, and comes with a quick start guide.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>How It Works</h2>
        <ol style={{ paddingLeft: '1.25rem', fontSize: '1.1rem' }}>
          <li>We deliver and set up the machine at your event</li>
          <li>You choose the daiquiri flavors from our menu</li>
          <li>Your guests pour and enjoy all day long!</li>
        </ol>
        <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
          *Mixes are alcohol-free by default. You may add your own spirits if desired.
        </p>
      </section>

      <FloatingBookNow />
    </main>
  );
}
