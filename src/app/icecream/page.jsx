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
        Enjoy hassle-free ice cream service with our fully stocked, self-serve freezers—perfect for any gathering.
      </p>

<section
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    marginBottom: '2rem',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }}
>
  <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
    <h3 style={{ fontSize: '1.25rem', color: '#5b2b1b', marginBottom: '1rem' }}>Backyard Party-Ready!</h3>
    <img
      src="/gallery/freezer-at-party.webp"
      alt="Thirsty Dawg freezer setup at an event"
      style={{
        maxWidth: '100%',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    />
  </div>

  <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
    <h3 style={{ fontSize: '1.25rem', color: '#5b2b1b', marginBottom: '1rem' }}>Happy Customers in Action</h3>
    <img
      src="/gallery/kids-enjoying-frozen-treats.webp"
      alt="Kids enjoying novelty ice cream at party"
      style={{
        maxWidth: '100%',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    />
  </div>
</section>


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
<section style={{ margin: '3rem 0' }}>
  <h2 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#3a1a0a', marginBottom: '1rem' }}>
    A Few of Our Frozen Favorites
  </h2>
  <div
    style={{
      overflow: 'hidden',
      width: '100%',
      position: 'relative',
    }}
  >
    <div
      style={{
        display: 'flex',
whiteSpace: 'nowrap',
        width: 'fit-content',
        animation: 'scrollCarousel 40s linear infinite',
        gap: '1rem',
      }}
    >
{[
  'oreo-bars.webp',
  'magnumdoublecaramel.webp',
  'klondike-original.webp',
  'reeses-peanut-butter-bar-.jpg',
  'butterfinger-ice-cream-bar.webp',
  'snickers-ice-cream-bar.webp',
  'Twix-Caramel-Milk-Chocolate-Ice-Cream-Bars.webp',
  'dark-chocolate-ice-cream-bars.webp',
  'strawberry-shortcake-bar.webp',
  'mickey-mouse-bar.webp',
  'fat-boy-hot-fudge.webp',
  'bomb-pop.webp',
  'spongebob-popsicle.webp',
  // Duplicate for seamless looping
  'oreo-bars.webp',
  'magnumdoublecaramel.webp',
  'klondike-original.webp',
  'reeses-peanut-butter-bar-.jpg',
  'butterfinger-ice-cream-bar.webp',
  'snickers-ice-cream-bar.webp',
  'Twix-Caramel-Milk-Chocolate-Ice-Cream-Bars.webp',
  'dark-chocolate-ice-cream-bars.webp',
  'strawberry-shortcake-bar.webp',
  'mickey-mouse-bar.webp',
  'fat-boy-hot-fudge.webp',
  'bomb-pop.webp',
  'spongebob-popsicle.webp',
].map((file, i) => (
  <img
    key={i}
    src={`/gallery/${file}`}
    alt={file.replace(/[-.]/g, ' ')}
    style={{
      height: '120px',
      borderRadius: '8px',
      objectFit: 'cover',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    }}
  />
))}

</div>
  </div>
</section>

      <h2 style={{ fontSize: '1.5rem', color: '#3a1a0a', marginBottom: '1rem' }}>What's in Each Package</h2>

<section style={{ marginBottom: '2rem' }}>
  <h3 style={{ fontSize: '1.25rem', color: '#5b2b1b' }}>🍦 The VIP – 147 Pieces ($275)</h3>
  <ul>
    <li>Magnum Double Caramel Bars – 27</li>
    <li>Klondike Original – 24</li>
    <li>Reese's Peanut Butter Frozen Bars – 24</li>
    <li>Wellsley Farms Strawberry Shortcake Bar – 18</li>
    <li>Haagen-Dazs Chocolate Dark Chocolate Ice Cream Bars – 15</li>
    <li>FatBoy Hot Fudge Brownie Ice Cream Sandwich – 18</li>
    <li>Snickers Ice Cream Chocolate Caramel Peanut Butter Bars – 24</li>
  </ul>
</section>

<section style={{ marginBottom: '2rem' }}>
  <h3 style={{ fontSize: '1.25rem', color: '#5b2b1b' }}>🍨 Frosted Favorites – 158 Pieces ($225)</h3>
  <ul>
    <li>Oreo Bars – 30</li>
    <li>Snickers Ice Cream Chocolate Caramel Peanut Butter Bars – 24</li>
    <li>Reese's Peanut Butter Frozen Bars – 24</li>
    <li>Butterfinger Ice Cream Candy Bar – 24</li>
    <li>Twix Caramel Vanilla Milk Chocolate Ice Cream Bars – 24</li>
    <li>Kit Kat Ice Cream Cones – 32</li>
  </ul>
</section>

<section style={{ marginBottom: '2rem' }}>
  <h3 style={{ fontSize: '1.25rem', color: '#5b2b1b' }}>🍭 Coolest Deal in Town – 216 Pieces ($225)</h3>
  <ul>
    <li>Chocolate Crunch Cake – 24</li>
    <li>Cool Watermelon Bar – 24</li>
    <li>Orange Cream Bar – 24</li>
    <li>Straw Shortcake Bar – 24</li>
    <li>Sour Cyclone – 24</li>
    <li>Wellsley Farms Vanilla Ice Cream Sandwiches – 24</li>
    <li>Bomb Pop Ice Pops – 36</li>
    <li>FatBoy Vanilla Sandwich – 36</li>
  </ul>
</section>

<section style={{ marginBottom: '2rem' }}>
  <h3 style={{ fontSize: '1.25rem', color: '#5b2b1b' }}>🎉 Cool Kid Combo – 156 Pieces ($215)</h3>
  <ul>
    <li>Chocolate Crunch Cake – 24</li>
    <li>Strawberry Shortcake – 24</li>
    <li>Mickey Mouse Ice Cream Bars – 24</li>
    <li>Wellsley Farms Vanilla Ice Cream Sandwiches – 24</li>
    <li>Bomb Pop Ice Pops – 36</li>
    <li>Popsicle Spongebob – 24</li>
  </ul>
</section>

<section style={{ marginBottom: '2rem' }}>
  <h3 style={{ fontSize: '1.25rem', color: '#5b2b1b' }}>👨‍👩‍👧‍👦 The Crowd Pleaser – 288 Pieces ($250)</h3>
  <ul>
    <li>Vanilla Sandwiches – 144</li>
    <li>Bomb Pop Ice Pops – 144</li>
  </ul>
</section>



<section
  style={{
    marginTop: '3rem',
    marginBottom: '2rem',
    padding: '1.5rem',
    background: '#fef6e4',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    textAlign: 'center',
  }}
>
  <h2 style={{ fontSize: '1.75rem', color: '#5b2b1b', marginBottom: '1rem' }}>
    Ready to Book Your Ice Cream Freezer?
  </h2>
  <p style={{ fontSize: '1rem', color: '#444', marginBottom: '1.5rem' }}>
    We'll deliver it pre-chilled and fully stocked with the treats you choose. You serve, we pick up — it’s that simple.
  </p>
</section>

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
