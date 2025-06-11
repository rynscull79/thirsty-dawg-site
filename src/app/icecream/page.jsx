// 📄 src/app/icecream/page.jsx

export const metadata = {
  title: 'Novelty Ice Cream Freezer Rentals | Thirsty Dawg',
  description: 'Pre-stocked novelty ice cream and freezer rentals for any event—self-serve convenience delivered to your door.',
};

export default function IceCreamPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '720px', margin: '0 auto', fontFamily: "'Chewy', sans-serif" }}>
      <h1 style={{ fontSize: '2.25rem', color: '#5b2b1b', marginBottom: '1rem' }}>
        Novelty Ice Cream Rentals Delivered
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '2rem' }}>
        Enjoy hassle-free ice cream service with our fully stocked, self-serve freezers or carts—perfect for any gathering.
      </p>

      <h2 style={{ fontSize: '1.5rem', color: '#3a1a0a', marginBottom: '1rem' }}>Why You'll Love It</h2>
      <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1.25rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>✅ Self-serve convenience — guests grab treats while you enjoy the event</li>
        <li style={{ marginBottom: '0.75rem' }}>🍦 Tons of variety — novelty bars, sandwiches, and sundaes</li>
        <li style={{ marginBottom: '0.75rem' }}>🎉 Perfect for any event — from birthday parties to corporate events</li>
        <li style={{ marginBottom: '0.75rem' }}>✨ Clean and simple — pre-wrapped treats = no mess, no stress</li>
        <li>🔄 Customize your order — choose a package or build your own</li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', color: '#3a1a0a', marginBottom: '1rem' }}>Pricing & Details</h2>
      <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1.25rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Freezer or Cart Rental: <strong>$95</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Package sizes: 150–300 treats or ala-carte</li>
        <li style={{ marginBottom: '0.5rem' }}>Free delivery & pickup included</li>
        <li><em>$150 minimum order</em></li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', color: '#3a1a0a', marginBottom: '1rem' }}>Available Packages</h2>
      <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.75rem' }}>🍦 The VIP — 147 treats — $275</p>
      <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.75rem' }}>🍨 Frosted Favorites — 158 treats — $225</p>
      <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.75rem' }}>🍭 Coolest Deal — 216 treats — $225</p>
      <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.75rem' }}>🎉 Cool Kid Combo — 156 treats — $215</p>
      <p style={{ fontSize: '1rem', color: '#333', marginBottom: '2rem' }}>👨‍👩‍👧‍👦 Crowd Pleaser — 288 treats — $250</p>

      <a
        href="#book"
        style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          background: '#5b2b1b',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1.1rem',
        }}
      >
        Book Now
      </a>
    </main>
  );
}
