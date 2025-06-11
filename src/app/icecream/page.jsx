// 📄 src/app/icecream/page.jsx

export const metadata = {
  title: 'Ice Cream Rentals | Thirsty Dawg',
  description: 'Rent novelty ice cream packages delivered in a pre-chilled freezer. Perfect for events in Florida.',
};

export default function IceCreamPage() {
  return (
    <main
      style={{
        padding: '2rem',
        maxWidth: '720px',
        margin: '0 auto',
        fontFamily: "'Chewy', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: '2.25rem',
          marginBottom: '1rem',
          color: '#5b2b1b',
        }}
      >
        Ice Cream Rentals
      </h1>

      <p
        style={{
          fontSize: '1.1rem',
          color: '#444',
          marginBottom: '2rem',
        }}
      >
        Our novelty ice cream packages are perfect for schools, parties, or corporate events. We deliver them in a
        pre-chilled freezer, ready to serve. You eat. We pick it up. No cleanup.
      </p>

      <h2 style={{ fontSize: '1.5rem', color: '#3a1a0a', marginBottom: '1rem' }}>Packages Available:</h2>

      <ul style={{ paddingLeft: '1.25rem', fontSize: '1rem', color: '#333' }}>
        <li style={{ marginBottom: '0.5rem' }}>🍦 The VIP — 147 pieces — $275</li>
        <li style={{ marginBottom: '0.5rem' }}>🍨 Frosted Favorites — 158 pieces — $225</li>
        <li style={{ marginBottom: '0.5rem' }}>🍭 Coolest Deal in Town — 216 pieces — $225</li>
        <li style={{ marginBottom: '0.5rem' }}>🎉 Cool Kid Combo — 156 pieces — $215</li>
        <li>👨‍👩‍👧‍👦 The Crowd Pleaser — 288 pieces — $250</li>
      </ul>

      <p
        style={{
          marginTop: '2rem',
          fontStyle: 'italic',
          color: '#777',
        }}
      >
        Free delivery in our standard area. $95 freezer rental. $150 minimum order.
      </p>
    </main>
  );
}
