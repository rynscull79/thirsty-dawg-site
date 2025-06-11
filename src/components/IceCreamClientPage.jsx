'use client';

import styles from './IceCreamPage.module.css';

export default function IceCreamClientPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.heading}>🍦 Ice Cream Party Packs</h1>
      <p className={styles.description}>
        Choose from our curated novelty ice cream packages or build your own freezer full of treats!
      </p>

      <div className={styles.packages}>
        <div className={styles.card}>
          <h2>The VIP</h2>
          <p>Includes 78 premium novelties and a freezer rental — $275</p>
        </div>
        <div className={styles.card}>
          <h2>Frosted Favorites</h2>
          <p>A classic mix of frozen treats — $225</p>
        </div>
        <div className={styles.card}>
          <h2>The Crowd Pleaser</h2>
          <p>Perfect for large events — $250</p>
        </div>
      </div>
    </main>
  );
}
