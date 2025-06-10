'use client';

import Image from 'next/image';
import styles from './IceCreamPage.module.css';

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

export default function IceCreamClientPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Ice Cream Party Packs</h1>
      <p className={styles.description}>
        Choose from our pre-packed novelty ice cream assortments. Perfect for schools, camps, parties, and events!
      </p>
      <section className={styles.cartSection}>
        <h2 className={styles.cartTitle}>How It Works</h2>
        <div className={styles.cartLayout}>
          <Image
            src="/gallery/thirsty-dawg-cart.webp"
            alt="Thirsty Dawg freezer rental cart"
            width={300}
            height={300}
            className={styles.cartImage}
          />
          <ul className={styles.steps}>
            <li><strong>1.</strong> Choose a Party Pack or build your own — $150 minimum</li>
            <li><strong>2.</strong> We deliver your order in a pre-chilled freezer ($95 rental)</li>
            <li><strong>3.</strong> Delivery is free in our standard area. Outside areas may incur a fee</li>
            <li><strong>4.</strong> We pick it all up after your event — no cleanup, no stress</li>
          </ul>
        </div>
      </section>

      {packages.map((pkg, index) => (
        <section key={index} className={styles.card}>
          <h3 className={styles.packageTitle}>{pkg.name} – {pkg.pieces} Pieces (${pkg.price})</h3>
          <div className={styles.imageGrid}>
            {pkg.items.map((item, idx) => (
              <div
                key={idx}
                className={styles.imageWrapper}
                style={{ '--i': idx }}
                data-name={item.name}
              >
                <Image
                  src={`/gallery/${item.image}`}
                  alt={item.name}
                  width={100}
                  height={100}
                  className={styles.productImage}
                />
              </div>
            ))}
          </div>
          <ul className={styles.itemList}>
            {pkg.items.map((item, idx) => (
              <li key={idx}>{item.name} – {item.qty}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
