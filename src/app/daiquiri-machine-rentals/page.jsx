// 📄 src/app/daiquiri-machine-rentals/page.jsx

import FloatingBookNow from '@/components/FloatingBookNow';

export const metadata = {
  title: 'Daiquiri Machine Rentals | Thirsty Dawg',
  description:
    'Daiquiri machine rentals delivered straight to your event in Pensacola and surrounding areas. Thirsty Dawg makes it easy — we provide the mix, you add the booze!',
};

export default function DaiquiriMachineRentals() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'var(--font-chewy)', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2e2e2e' }}>
        Daiquiri Machine Rentals
      </h1>

      <p>
        Planning a party, corporate event, or backyard bash? Our <strong>Daiquiri machines</strong> are the perfect way to beat the heat and bring the fun. With <strong>dual-flavor frozen drink machines</strong> and a wide variety of tasty mixes, we make it easy for your guests to enjoy their favorite daiquiri flavors — from strawberry and mango to the ever-popular bushwacker.
      </p>

      <p>
        <strong>Just add the booze.</strong> We deliver the machines, the daiquiri mix, and all instructions. You bring the alcohol — we’ll bring the chill. No bartenders required.
      </p>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', color: '#2e2e2e' }}>
        Why Rent a Daiquiri Machine from Thirsty Dawg?
      </h2>

      <ul style={{ paddingLeft: '1.25rem', marginTop: '1rem' }}>
        <li>✅ Fast setup, easy operation</li>
        <li>✅ Mix included – simply add your favorite liquor</li>
        <li>✅ Single or dual flavor options</li>
        <li>✅ Free delivery and pickup in the Pensacola area</li>
        <li>✅ Perfect for weddings, birthdays, beach days, and more</li>
      </ul>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', color: '#2e2e2e' }}>
        How It Works
      </h2>

      <ol style={{ paddingLeft: '1.25rem', marginTop: '1rem' }}>
        <li>✅ Choose your rental date and machine type</li>
        <li>✅ Select your daiquiri flavors (we have a ton!)</li>
        <li>✅ We deliver, set up, and show you how to use it</li>
        <li>✅ You add the alcohol on-site — totally BYOB</li>
      </ol>

      <h2 style={{ fontSize: '1.75rem', marginTop: '2rem', color: '#2e2e2e' }}>
        Serving Pensacola & Beyond
      </h2>

      <p>
        We proudly serve the entire Pensacola area including Gulf Breeze, Perdido, Milton, Cantonment, Navarre, and more. Not sure if you’re in our zone? Reach out and ask!
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

      <FloatingBookNow />
    </main>
  );
}
