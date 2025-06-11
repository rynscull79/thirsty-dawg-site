import styles from '@/components/IceCreamPage.module.css';

export const metadata = {
  title: 'Ice Cream Party Packs | Thirsty Dawg Rentals',
  description:
    'Choose from pre-packed novelty ice cream bundles or build your own. Delivered in a pre-chilled freezer for events in Pensacola and surrounding areas.',
  openGraph: {
    title: 'Ice Cream Party Packs | Thirsty Dawg Rentals',
    description:
      'Choose from pre-packed novelty ice cream bundles or build your own. Delivered in a pre-chilled freezer for events in Pensacola and surrounding areas.',
    images: ['https://www.thirstydawgrentals.com/gallery/thirsty-dawg-cart.webp'],
    url: 'https://www.thirstydawgrentals.com/icecream',
    type: 'product.group'
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export default function IceCreamPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🍦 Ice Cream Party Packs</h1>
      <p className={styles.description}>
        Choose a pre-packed bundle or build your own selection of novelty frozen treats!
      </p>

      <p className={styles.description}>
        All bundles are delivered in a pre-chilled, fully stocked freezer — no setup needed.
      </p>

      <ul className={styles.packageList}>
        <li>
          <strong>The VIP</strong> – $275 – High-end crowd pleaser with max variety
        </li>
        <li>
          <strong>Frosted Favorites</strong> – $225 – Best-selling classics
        </li>
        <li>
          <strong>Coolest Deal in Town</strong> – $225 – Most value per dollar
        </li>
        <li>
          <strong>Cool Kid Combo</strong> – $215 – Tailored for children’s parties
        </li>
        <li>
          <strong>The Crowd Pleaser</strong> – $250 – Balanced mix of all-time favorites
        </li>
      </ul>

      <p className={styles.note}>
        Don’t see what you need? We also offer à la carte ice cream options with a $150 minimum, plus the freezer rental fee.
      </p>
    </div>
  );
}
