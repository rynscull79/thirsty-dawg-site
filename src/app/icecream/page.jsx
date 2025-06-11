// 📄 src/app/icecream/page.jsx

import Image from 'next/image';

export const metadata = {
  title: 'Ice Cream Party Packs | Thirsty Dawg Rentals',
  description: 'Frozen novelty ice cream delivered in a pre-chilled freezer. Choose a party pack or build your own.',
  keywords: 'ice cream rental, freezer party pack, Pensacola ice cream, frozen novelty treats, Thirsty Dawg',
  authors: [{ name: 'Thirsty Dawg Rentals' }],
  openGraph: {
    title: 'Ice Cream Party Packs | Thirsty Dawg Rentals',
    description: 'Choose from our fun-filled ice cream bundles delivered in a chilled freezer!',
    url: 'https://www.thirstydawgrentals.com/icecream',
    images: [
      'https://www.thirstydawgrentals.com/gallery/thirsty-dawg-cart.webp',
    ],
    type: 'product.group',
  },
};

export default function IceCreamPage() {
  const packages = [
    {
      name: 'The VIP',
      pieces: 147,
      price: 275,
      items: [
        { name: 'Magnum Double Caramel Bars', qty: 27, image: 'magnumdoublecaramel.webp' },
        { name: 'Klondike Original', qty: 24, image: 'klondike-original.webp' },
        { name: "Reese's Peanut Butter Frozen Bars", qty: 24, image: 'reeses-peanut-butter-bar-.jpg' },
        { name: 'Wellsley Farms Strawberry Shortcake Bar', qty: 18, image: 'strawberry-shortcake-bar.webp' },
        { name: 'Haagen-Dazs Chocolate Dark Chocolate Ice Cream Bars', qty: 15, image: 'dark-chocolate-ice-cream-bars.webp' },
        { name: 'FatBoy Hot Fudge Brownie Ice Cream Sandwich', qty: 18, image: 'fat-boy-hot-fudge.webp' },
        { name: 'Snickers Ice Cream Chocolate Caramel Peanut Butter Bars', qty: 24, image: 'snickers-ice-cream-bar.webp' },
      ],
    },
    {
      name: 'Frosted Favorites',
      pieces: 158,
      price: 225,
      items: [
        { name: 'Oreo Bars', qty: 30, image: 'oreo-bars.webp' },
        { name: 'Snickers Bars', qty: 24, image: 'snickers-ice-cream-bar.webp' },
        { name: "Reese's Peanut Butter Frozen Bars", qty: 24, image: 'reeses-peanut-butter-bar-.jpg' },
        { name: 'Butterfinger Ice Cream Candy Bar', qty: 24, image: 'butterfinger-ice-cream-bar.webp' },
        { name: 'Twix Caramel Vanilla Milk Chocolate Ice Cream Bars', qty: 24, image: 'Twix-Caramel-Milk-Chocolate-Ice-Cream-Bars.webp' },
        { name: 'Kit Kat Ice Cream Cones', qty: 32, image: 'Kit-Kat-Ice-Cream-Cone.webp' },
      ],
    },
    {
      name: 'Coolest Deal in Town',
      pieces: 216,
      price: 225,
      items: [
        { name: 'Chocolate Crunch Cake', qty: 24, image: 'chocolate-crunch-cake.webp' },
        { name: 'Cool Watermelon Bar', qty: 24, image: 'Cool-Watermelon-Bar.webp' },
        { name: 'Orange Cream Bar', qty: 24, image: 'Orange-Cream-Bar.webp' },
        { name: 'Straw Shortcake Bar', qty: 24, image: 'Strawberry-Shortcake-Bar-Rich-Ice-Cream.webp' },
        { name: 'Sour Cyclone', qty: 24, image: 'sour-cyclone.webp' },
        { name: 'Wellsley Farms Vanilla Sandwiches', qty: 24, image: 'fat-boy-ice-cream-sandwiches.webp' },
        { name: 'Bomb Pop Ice Pops', qty: 36, image: 'bomb-pop.webp' },
        { name: 'FatBoy Vanilla Sandwich', qty: 36, image: 'fat-boy-ice-cream-sandwiches.webp' },
      ],
    },
    {
      name: 'Cool Kid Combo',
      pieces: 156,
      price: 215,
      items: [
        { name: 'Chocolate Crunch Cake', qty: 24, image: 'chocolate-crunch-cake.webp' },
        { name: 'Strawberry Shortcake', qty: 24, image: 'strawberry-shortcake-bar.webp' },
        { name: 'Mickey Mouse Ice Cream Bars', qty: 24, image: 'mickey-mouse-bar.webp' },
        { name: 'Vanilla Sandwiches', qty: 24, image: 'fat-boy-ice-cream-sandwiches.webp' },
        { name: 'Bomb Pop Ice Pops', qty: 36, image: 'bomb-pop.webp' },
        { name: 'Popsicle Spongebob', qty: 24, image: 'spongebob-popsicle.webp' },
      ],
    },
    {
      name: 'The Crowd Pleaser',
      pieces: 288,
      price: 250,
      items: [
        { name: 'Vanilla Sandwiches', qty: 144, image: 'fat-boy-ice-cream-sandwiches.webp' },
        { name: 'Bomb Pop Ice Pops', qty: 144, image: 'bomb-pop.webp' },
      ],
    },
  ];

  return (
    <main
      style={{
        padding: '2rem',
        maxWidth: '1024px',
        margin: '0 auto',
        fontFamily: "'Chewy', sans-serif",
        background: "#fffaf3 url('/gallery/icecream-bg-texture.webp') repeat",
        backgroundSize: 'contain',
        borderRadius: '1rem',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* KEEP your existing h1, p, and "How It Works" section lines 35–117 EXACTLY AS THEY ARE */}

      {packages.map((pkg, index) => (
        <section
          key={index}
          style={{
            background: '#fff',
            border: '2px solid #f6e8dd',
            padding: '2rem',
            marginBottom: '4rem',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <h3
            style={{
              fontSize: '1.75rem',
              marginBottom: '1.5rem',
              color: '#3a1a0a',
              textAlign: 'left',
            }}
          >
            {pkg.name} – {pkg.pieces} Pieces (${pkg.price})
          </h3>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '18px',
              marginBottom: '2rem',
            }}
          >
            {pkg.items.map((item, idx) => (
              <div
                key={idx}
                style={{
                  width: '100px',
                  background: '#fff',
                  padding: '8px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Image
                  src={`/gallery/${item.image}`}
                  alt={item.name}
                  width={100}
                  height={100}
                  unoptimized
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    marginBottom: '6px',
                  }}
                />
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#333',
                    lineHeight: '1.2',
                  }}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              fontSize: '1rem',
              color: '#333',
              textAlign: 'left',
              maxWidth: '520px',
            }}
          >
            {pkg.items.map((item, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: '0.5rem',
                  position: 'relative',
                  paddingLeft: '1.5rem',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: '#4caf50',
                    fontWeight: 'bold',
                  }}
                >
                  ✓
                </span>{' '}
                {item.name} – {item.qty}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}


