'use client';

import React from 'react';
import styles from './IceCreamPage.module.css';
import Image from 'next/image';

export default function IceCreamClientPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🍦 Ice Cream Party Packs</h1>
      <p className={styles.description}>
        Choose from a variety of novelty ice cream packages, delivered in a pre-chilled freezer
        ready for your event. No setup, no hassle — just open and enjoy!
      </p>

      {/* The VIP Package */}
      <div className={styles.card}>
        <h2 className={styles.packageTitle}>The VIP – $275</h2>
        <div className={styles.imageGrid}>
          <div className={styles.imageWrapper} data-name="Choco Taco">
            <Image
              src="/icecream/choco-taco.webp"
              width={100}
              height={100}
              alt="Choco Taco"
              className={styles.productImage}
            />
          </div>
          <div className={styles.imageWrapper} data-name="Drumstick">
            <Image
              src="/icecream/drumstick.webp"
              width={100}
              height={100}
              alt="Drumstick"
              className={styles.productImage}
            />
          </div>
          <div className={styles.imageWrapper} data-name="Cookie Sandwich">
            <Image
              src="/icecream/cookie-sandwich.webp"
              width={100}
              height={100}
              alt="Cookie Sandwich"
              className={styles.productImage}
            />
          </div>
          <div className={styles.imageWrapper} data-name="Strawberry Shortcake">
            <Image
              src="/icecream/strawberry-shortcake.webp"
              width={100}
              height={100}
              alt="Strawberry Shortcake"
              className={styles.productImage}
            />
          </div>
        </div>
        <ul className={styles.itemList}>
          <li>Includes a mix of premium ice cream novelties</li>
          <li>Enough for 78+ servings</li>
          <li>Delivered in a fully chilled freezer</li>
          <li>Perfect for corporate events, weddings, or big parties</li>
        </ul>
      </div>

      {/* Add additional packages below this section using the same layout */}
      {/* Frosted Favorites, Coolest Deal, Cool Kid Combo, The Crowd Pleaser... */}
    </div>
  );
}
