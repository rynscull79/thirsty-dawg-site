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
        <li style={{ marginBottom: '0.75rem' }}>✅ **Self-serve convenience** with zero setup—guests grab treats while you enjoy the event :contentReference[oaicite:18]{index=18}</li>
        <li style={{ marginBottom: '0.75rem' }}>🍦 **Tons of variety**—grab-n-go novelty bars, sandwiches, and sundae kits included :contentReference[oaicite:19]{index=19}</li>
        <li style={{ marginBottom: '0.75rem' }}>🎉 **Perfect for any event**—from kids’ parties to weddings, ice cream is always a crowd-pleaser :contentReference[oaicite:20]{index=20}</li>
        <li style={{ marginBottom: '0.75rem' }}>✨ **Clean and convenient**—pre-wrapped treats mean no mess and easy clean-up</li>
        <li>🔄 **Customize your order**—choose from sweet packages or build your own ala‑carte spread :contentReference[oaicite:21]{index=21}</li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', color: '#3a1a0a', marginBottom: '1rem' }}>Pricing & Details</h2>
      <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1.25rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Freezer or Cart Rental: <strong>$95</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Package sizes from 150–300 treats, or pick your items ala‑carte</li>
        <li style={{ marginBottom: '0.5rem' }}>Free delivery before your event, pickup after—it’s all included</li>
        <li><em>$150 minimum order</em></li>
      </ul>

      <a href="#book" style={{
        display: 'inline-block', padding: '1rem 2rem', background: '#5b2b1b',
        color: '#fff', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem'
      }}>
        Book Now
      </a>
    </main>
  );
}
