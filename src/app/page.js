'use client';

import dynamic from 'next/dynamic';
import styles from './page.module.css';
import OurRentals from '@/components/OurRentals';
import FloatingBookNow from '@/components/FloatingBookNow';
import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const GallerySection = dynamic(() => import('@/components/GallerySection'), { ssr: false });
const ReviewSlider = dynamic(() => import('@/components/ReviewSlider'), { ssr: false });
const DeliveryArea = dynamic(() => import('@/components/DeliveryArea'), {
  ssr: false,
  loading: () => <div>Loading delivery area...</div>,
});

export default function HomePage() {
  const [machineType, setMachineType] = useState('single');
  const [secondMachineType, setSecondMachineType] = useState('');
  const [estimatedTotal, setEstimatedTotal] = useState(null);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleEstimate = () => {
    const start = new Date(range[0].startDate);
    const end = new Date(range[0].endDate);
    const timeDiff = end - start;
    const numNights = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    if (numNights < 1) return setEstimatedTotal('Rental must be at least 1 night.');

    const getRates = (type) => {
      switch (type) {
        case 'single': return { base: 185, extra: 40 };
        case 'plastic': return { base: 210, extra: 45 };
        case 'stainless': return { base: 240, extra: 50 };
        default: return { base: 0, extra: 0 };
      }
    };

    const rates1 = getRates(machineType);
    const rates2 = getRates(secondMachineType);
    const extraNights = Math.max(0, numNights - 2);

    let fullRate = { base: 0, extra: 0 };
    let secondRate = { base: 0, extra: 0 };

    if (!secondMachineType) {
      fullRate = rates1;
    } else {
      const allRates = [rates1, rates2].sort((a, b) => b.base - a.base);
      fullRate = allRates[0];
      secondRate = allRates[1];

      if (secondRate.base === 185) secondRate.base = 100;
      if (secondRate.base === 210) secondRate.base = 115;
      if (secondRate.base === 240) secondRate.base = 130;
    }

    const subtotal =
      fullRate.base + fullRate.extra * extraNights +
      (secondMachineType ? secondRate.base + secondRate.extra * extraNights : 0);

    const tax = subtotal * 0.075;
    const total = subtotal + tax;
    setEstimatedTotal(`$${total.toFixed(2)} (including 7.5% tax)`);
  };

  return (
    <>
      <Head>
        <title>Frozen Drink Machine Rentals in Pensacola | Thirsty Dawg Rentals</title>
        <meta name="description" content="Rent a frozen margarita or slushie machine in Pensacola. Thirsty Dawg delivers, sets up, and picks up — perfect for parties, weddings, and events!" />
      </Head>

      <div>
        <section className={styles.hero}>
          <h2>🥶 Frozen Drink Machines That Bring the Party to Life</h2>
          <p>We deliver, set up, and clean up — you enjoy the frozen fun across Pensacola and the Gulf Coast.</p>
          <p style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
            📞 Call or text us: <a href="tel:8505723796" style={{ color: 'white', textDecoration: 'underline' }}>(850) 572-3796</a>
          </p>
        </section>

        <section className={styles.section}><GallerySection /></section>
        <ReviewSlider />
        <FloatingBookNow />

        <section className={styles.section} style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 'bold', color: '#009fdb', marginBottom: '1.5rem' }}>🍹 Why Choose Thirsty Dawg?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[ 
              '❄️ No Ice Needed – Our machines freeze the mix without ice',
              '🥇 Commercial-Grade Machines – Same quality found in bars',
              '🙌 Full-Service Delivery – We deliver, set up, and clean up',
              '🍓 Natural Fruit Juices – Made with real fruit flavorings',
              '👨‍👧‍👦 Family-Friendly Flavors – Serve with or without alcohol',
              '🌀 Variety of Machine Options – Choose the perfect unit for your event',
              '🥃 Dual Machines Include Two Mixes – Serve two flavors at once',
              '⚡ Quick Freeze Time – Chills mix in under 90 minutes',
              '🧼 We Handle the Cleaning – Post-party cleanup is on us',
              '🌟 5-Star Rated – Backed by glowing reviews from happy customers',
            ].map((reason, index) => (
              <div key={index} style={{ backgroundColor: '#e6f4fd', padding: '1rem', borderRadius: '0.75rem', fontWeight: 'bold', color: '#1f2937', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>{reason}</div>
            ))}
          </div>
        </section>

        <DeliveryArea />
<OurRentals />


      </div>
    </>
  );
}
