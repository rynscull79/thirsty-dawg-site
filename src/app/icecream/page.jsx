// 📄 src/app/icecream/page.jsx

import FloatingBookNow from '@/components/FloatingBookNow';

export const metadata = {
  title: 'Ice Cream Cart Rentals in Pensacola, FL | Thirsty Dawg',
  description:
    'Rent a fully stocked ice cream cart for your next event in Pensacola, Gulf Breeze, Navarre, Milton, Pace, and nearby Gulf Coast areas. Choose pre-built packages or build your own.',
  alternates: {
    canonical: 'https://www.thirstydawgrentals.com/icecream',
  },
  openGraph: {
    title: 'Ice Cream Cart Rentals in Pensacola, FL | Thirsty Dawg',
    description:
      'Fully stocked novelty ice cream carts delivered to your event. Pre-built packages or custom orders. Serving Pensacola and nearby areas.',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/icecream',
    type: 'website',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export default function IceCreamPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Thirsty Dawg Rentals',
    url: 'https://www.thirstydawgrentals.com/icecream',
    telephone: '850-572-3796',
    image: 'https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp',
    description:
      'Ice cream cart rentals in Pensacola, FL and surrounding Gulf Coast areas. Fully stocked novelty ice cream carts delivered to your event.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pensacola',
      addressRegion: 'FL',
      postalCode: '32577',
      addressCountry: 'US',
    },
    areaServed: [
      'Pensacola, FL',
      'Gulf Breeze, FL',
      'Navarre, FL',
      'Milton, FL',
      'Pace, FL',
      'Perdido Key, FL',
      'Escambia County, FL',
      'Santa Rosa County, FL',
      'Baldwin County, AL',
      'Orange Beach, AL',
      'Foley, AL',
      'Fairhope, AL',
    ],
    priceRange: '$$',
    openingHours: 'Mo-Su 08:00-20:00',
    sameAs: ['https://www.facebook.com/thirstydawgrentals'],
  };

  const hShadow = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';

  return (
    <main style={{ padding: '2rem', maxWidth: '1140px', margin: '0 auto', fontFamily: "'Chewy', sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <h1
        style={{
          fontSize: '2.25rem',
          color: '#00b3e6',
          marginBottom: '1rem',
          textShadow: hShadow,
        }}
      >
        Ice Cream Cart Rentals for Any Event
      </h1>

      <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '1rem' }}>
        Enjoy hassle-free novelty ice cream service with our fully stocked, self-serve carts — perfect for parties,
        schools, and corporate events.
      </p>

      <p style={{ fontSize: '1rem', color: '#444', marginBottom: '2rem' }}>
        We deliver ice cream carts across Pensacola, Gulf Breeze, Navarre, and nearby Florida Panhandle areas — including
        select South Alabama communities like Orange Beach, Foley, and Fairhope.
      </p>

      {/* Image Trio */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            color: '#00b3e6',
            marginBottom: '1.5rem',
            textAlign: 'center',
            textShadow: hShadow,
          }}
        >
          Ice Cream Cart Rentals That Impress
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            justifyItems: 'center',
          }}
        >
          <img
            src="/gallery/fun-icecream-cart.webp"
            alt="Frozen novelty cart with blue umbrella"
            style={{
              width: '100%',
              maxWidth: '300px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />

          <img
            src="/gallery/kids-enjoying-frozen-treats.webp"
            alt="Kids enjoying novelty ice cream at party"
            style={{
              width: '100%',
              maxWidth: '300px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />

          <img
            src="/gallery/wedding-treats.webp"
            alt="Wedding-themed novelty cart"
            style={{
              width: '100%',
              maxWidth: '300px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
        </div>
      </section>

      {/* Benefits */}
      <h2 style={{ fontSize: '1.5rem', color: '#00b3e6', marginBottom: '1rem', textShadow: hShadow }}>
        Why You&apos;ll Love It
      </h2>
      <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1.25rem', marginBottom: '2.25rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>✅ Self-serve convenience — guests grab treats while you enjoy the event</li>
        <li style={{ marginBottom: '0.75rem' }}>🍦 Tons of variety — novelty bars, sandwiches, cones, and sundaes</li>
        <li style={{ marginBottom: '0.75rem' }}>🎉 Perfect for any event — from birthdays to corporate events</li>
        <li style={{ marginBottom: '0.75rem' }}>✨ Clean and simple — pre-wrapped treats = no mess, no stress</li>
        <li>🔄 Customize your order — choose a package or build your own</li>
      </ul>

      {/* Pricing */}
      <h2 style={{ fontSize: '1.5rem', color: '#00b3e6', marginBottom: '1rem', textShadow: hShadow }}>
        Pricing & Details
      </h2>
      <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1.25rem', marginBottom: '1rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          Freezer / Cart Rental: <strong>$95</strong>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>Package sizes: 150–300 treats, or build your own</li>
        <li style={{ marginBottom: '0.5rem' }}>Free delivery & pickup included (within standard area)</li>
        <li>
          <em>$150 minimum order</em>
        </li>
      </ul>
      <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2.5rem', textAlign: 'center' }}>
        <em>
          Package and a la carte prices do not include the <strong>$95 cart rental fee</strong>, which is required with every
          order.
        </em>
      </p>

      {/* Favorites Carousel */}
      <section style={{ margin: '3rem 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#00b3e6', marginBottom: '1rem', textShadow: hShadow }}>
          A Few of Our Frozen Favorites
        </h2>

        <div
          style={{
            overflow: 'hidden',
            width: '100%',
            minHeight: '140px',
            position: 'relative',
          }}
        >
          <div className="carousel-track">
            {[...Array(4)]
              .flatMap(() => [
                'oreo-bars.webp',
                'magnumdoublecaramel.webp',
                'klondike-original.webp',
                "reeses-peanut-butter-bar-.jpg",
                'butterfinger-ice-cream-bar.webp',
                'snickers-ice-cream-bar.webp',
                'Twix-Caramel-Milk-Chocolate-Ice-Cream-Bars.webp',
                'dark-chocolate-ice-cream-bars.webp',
                'Strawberry-Shortcake-Bar-Rich-Ice-Cream.webp',
                'mickey-mouse-bar.webp',
                'fat-boy-hot-fudge.webp',
                'bomb-pop.webp',
                'spongebob-popsicle.webp',
              ])
              .map((file, i) => (
                <img
                  key={`${file}-${i}`}
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

      {/* Packages */}
      <h2 style={{ fontSize: '1.5rem', color: '#00b3e6', marginBottom: '1rem', textShadow: hShadow }}>
        Pre-Built Ice Cream Packages – Delivered
      </h2>

      <div className="package-grid">
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#3a1a0a' }}>🍦 The VIP – 147 Pieces ($275)</h3>
          <ul>
            <li>Magnum Double Caramel Bars – 27</li>
            <li>Klondike Original – 24</li>
            <li>Reese&apos;s Peanut Butter Frozen Bars – 24</li>
            <li>Wellsley Farms Strawberry Shortcake Bars – 18</li>
            <li>Haagen-Dazs Dark Chocolate Ice Cream Bars – 15</li>
            <li>FatBoy Hot Fudge Brownie Ice Cream Sandwich – 18</li>
            <li>Snickers Ice Cream Bars – 24</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#3a1a0a' }}>🍨 Frosted Favorites – 158 Pieces ($225)</h3>
          <ul>
            <li>Oreo Bars – 30</li>
            <li>Snickers Ice Cream Bars – 24</li>
            <li>Reese&apos;s Peanut Butter Frozen Bars – 24</li>
            <li>Butterfinger Ice Cream Candy Bars – 24</li>
            <li>Twix Ice Cream Bars – 24</li>
            <li>Kit Kat Ice Cream Cones – 32</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#3a1a0a' }}>🍭 Coolest Deal in Town – 216 Pieces ($225)</h3>
          <ul>
            <li>Chocolate Crunch Cake Bars – 24</li>
            <li>Cool Watermelon Bars – 24</li>
            <li>Orange Cream Bars – 24</li>
            <li>Straw Shortcake Bars – 24</li>
            <li>Sour Cyclone – 24</li>
            <li>Fudge Frenzy Bars – 24</li>
            <li>Bomb Pop Ice Pops – 36</li>
            <li>FatBoy Vanilla Sandwich – 36</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#3a1a0a' }}>🎉 Cool Kid Combo – 156 Pieces ($215)</h3>
          <ul>
            <li>Chocolate Crunch Cake Bars – 24</li>
            <li>Strawberry Shortcake Bars – 24</li>
            <li>Mickey Mouse Ice Cream Bars – 24</li>
            <li>Wellsley Farms Vanilla Ice Cream Sandwiches – 24</li>
            <li>Bomb Pop Ice Pops – 36</li>
            <li>Popsicle Spongebob – 24</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#3a1a0a' }}>👨‍👩‍👧‍👦 The Crowd Pleaser – 288 Pieces ($250)</h3>
          <ul>
            <li>Vanilla Sandwiches – 144</li>
            <li>Bomb Pop Ice Pops – 144</li>
          </ul>
        </section>
      </div>

      {/* A la carte */}
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
        <h2 style={{ fontSize: '1.5rem', color: '#00b3e6', marginBottom: '1rem', textAlign: 'center' }}>
          Custom Ice Cream Cart Orders – A La Carte Pricing
        </h2>

        <p style={{ fontSize: '1rem', color: '#444', marginBottom: '1rem', textAlign: 'center' }}>
          Want to build your own mix? Order individual boxes of your favorite frozen novelties.
          <br />
          <strong style={{ color: '#5b2b1b' }}>$150 minimum order required.</strong>
        </p>

        <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '-0.25rem', marginBottom: '1.25rem' }}>
          *Cart rental not included. Add $95 per event.
        </p>

        {[
          {
            title: '🍫 Ice Cream Bars',
            items: [
              ['Magnum Double Caramel Bars', 12, '$36.00'],
              ['Magnum Double Raspberry Bar', 12, '$36.00'],
              ['Magnum Almond Bar', 12, '$36.00'],
              ['Klondike Original', 24, '$42.00'],
              ["Reese's Peanut Butter Frozen Bars", 24, '$54.00'],
              ['Snickers Ice Cream Bars', 24, '$54.00'],
              ['Butterfinger Ice Cream Candy Bar', 24, '$54.00'],
              ['Twix Ice Cream Bars', 24, '$54.00'],
              ['Oreo Bars', 15, '$26.25'],
              ['Good Humor Cookies & Cream Bar', 24, '$60.00'],
            ],
          },
          {
            title: '🍪 Ice Cream Sandwiches',
            items: [
              ['FatBoy Hot Fudge Brownie Ice Cream Sandwich', 9, '$18.00'],
              ['FatBoy Birthday Cake Ice Cream Sandwich Pop', 12, '$24.00'],
              ['FatBoy Vanilla Sandwich', 18, '$36.00'],
              ['Wellsley Farms Vanilla Ice Cream Sandwiches', 24, '$42.00'],
              ["Rich's Vanilla Sandwiches", 24, '$42.00'],
              ['MM Van Cook Sand', 24, '$60.00'],
            ],
          },
          {
            title: '🍦 Cones & Sundaes',
            items: [
              ['Kit Kat Ice Cream Cones', 15, '$33.75'],
              ["Rich's Crumbled Cookie Cone", 24, '$42.00'],
              ["Rich's Birthday Cake Cone", 24, '$42.00'],
              ['Good Humor Giant King Cone', 12, '$30.00'],
            ],
          },
          {
            title: '🍭 Popsicles & Novelties',
            items: [
              ['Chocolate Crunch Cake', 24, '$42.00'],
              ['Cool Watermelon Bar', 24, '$42.00'],
              ['Orange Cream Bar', 24, '$42.00'],
              ['Straw Shortcake Bar', 24, '$42.00'],
              ['Sour Cyclone', 24, '$42.00'],
              ['Bomb Pop Ice Pops', 36, '$54.00'],
              ['Mickey Mouse Ice Cream Bars', 12, '$24.00'],
              ['Popsicle Spongebob', 6, '$12.00'],
              ['Spiderman Popsicle', 6, '$12.00'],
              ['Blue Bunny Soft Vanilla Cups', 24, '$42.00'],
              ["Rich's Fudge Frenzy", 24, '$42.00'],
            ],
          },
        ].map(({ title, items }, i) => (
          <details
            key={i}
            style={{
              marginBottom: '1rem',
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              textAlign: 'left',
            }}
          >
            <summary
              style={{
                padding: '0.75rem 1rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                color: '#3a1a0a',
                fontSize: '1.1rem',
              }}
            >
              {title}
            </summary>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#fef6e4' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem 1rem', borderBottom: '2px solid #ddd' }}>Product</th>
                  <th style={{ textAlign: 'right', padding: '0.5rem 1rem', borderBottom: '2px solid #ddd' }}>Box Size</th>
                  <th style={{ textAlign: 'right', padding: '0.5rem 1rem', borderBottom: '2px solid #ddd' }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map(([product, size, price], j) => (
                  <tr key={j} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '0.5rem 1rem' }}>{product}</td>
                    <td style={{ textAlign: 'right', padding: '0.5rem 1rem' }}>{size}</td>
                    <td style={{ textAlign: 'right', padding: '0.5rem 1rem' }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
        ))}

        <section style={{ margin: '2rem 0 0', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <img
            src="/gallery/boston-terrier-at-freezer.webp"
            alt="Boston terrier standing on a stool peeking into an ice cream cart full of frozen treats"
            style={{
              maxWidth: '300px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              objectFit: 'cover',
            }}
          />
          <img
            src="/gallery/icecream-outside.webp"
            alt="Woman smiling while eating an ice cream sandwich"
            style={{
              maxWidth: '300px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              objectFit: 'cover',
            }}
          />
        </section>
      </section>

      {/* CTA */}
      <h2 style={{ fontSize: '1.75rem', color: '#00b3e6', marginBottom: '1rem', textShadow: hShadow }}>
        Ready to Book Your Ice Cream Cart?
      </h2>

      <p style={{ fontSize: '1rem', color: '#444', marginBottom: '1.5rem' }}>
        We’ll deliver your ice cream cart pre-chilled and fully stocked with the treats you choose. You serve, we pick up —
        it’s that simple.
      </p>

      <FloatingBookNow />
    </main>
  );
}