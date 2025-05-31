'use client';

import dynamic from 'next/dynamic';
import styles from './page.module.css';
import OurRentals from '@/components/OurRentals';
import FloatingBookNow from '@/components/FloatingBookNow';
import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';

const GallerySection = dynamic(() => import('@/components/GallerySection'), { ssr: false });
const ReviewSlider = dynamic(() => import('@/components/ReviewSlider'), { ssr: false });
const DeliveryArea = dynamic(() => import('@/components/DeliveryArea'), {
  ssr: false,
  loading: () => <div>Loading delivery area...</div>,
});

export default function HomePage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [machineType, setMachineType] = useState('single');
  const [estimatedTotal, setEstimatedTotal] = useState(null);

  const handleEstimate = () => {
    if (!startDate || !endDate) return;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end - start;
    const numNights = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (numNights < 1) return setEstimatedTotal('Rental must be at least 1 night.');

    let baseRate = 0;
    let extraRate = 0;

    switch (machineType) {
      case 'single':
        baseRate = 185;
        extraRate = 40;
        break;
      case 'plastic':
        baseRate = 210;
        extraRate = 45;
        break;
      case 'stainless':
        baseRate = 240;
        extraRate = 50;
        break;
    }

    const extraNights = Math.max(0, numNights - 2);
    const subtotal = baseRate + extraNights * extraRate;
    const tax = subtotal * 0.075;
    const total = subtotal + tax;

    setEstimatedTotal(`$${total.toFixed(2)} (including 7.5% tax)`);
  };

  return (
    <>
      <Head>
        <title>Frozen Drink Machine Rentals in Pensacola | Thirsty Dawg Rentals</title>
        <meta
          name="description"
          content="Rent a frozen margarita or slushie machine in Pensacola. Thirsty Dawg delivers, sets up, and picks up — perfect for parties, weddings, and events!"
        />
      </Head>

      <div>
        <section className={styles.hero}>
          <h2>🥶 Frozen Drink Machines That Bring the Party to Life</h2>
          <p>We deliver, set up, and clean up — you enjoy the frozen fun across Pensacola and the Gulf Coast.</p>
          <p style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
            📞 Call or text us: <a href="tel:8505723796" style={{ color: 'white', textDecoration: 'underline' }}>(850) 572-3796</a>
          </p>
        </section>

        <section className={styles.section}>
          <GallerySection />
        </section>

        <ReviewSlider />
        <FloatingBookNow />

        <section className={styles.section} style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 'bold', color: '#009fdb', marginBottom: '1.5rem' }}>
            🍹 Why Choose Thirsty Dawg?
          </h3>
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
              <div key={index} style={{ backgroundColor: '#e6f4fd', padding: '1rem', borderRadius: '0.75rem', fontWeight: 'bold', color: '#1f2937', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                {reason}
              </div>
            ))}
          </div>
        </section>

        <DeliveryArea />

        <section id="pricing" style={{ padding: '2rem 1rem', backgroundColor: '#ffffff', borderRadius: '1rem', marginTop: '3rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem', color: '#009fdb' }}>💵 Rental Prices</h2>
          <p style={{ textAlign: 'center', marginBottom: '1rem', fontStyle: 'italic', color: '#333' }}>
            Need a machine for the whole week? Add extra weekdays to your rental!
          </p>

          {/* Pricing Cards Here — same as before */}

          <div style={{ marginTop: '2rem', backgroundColor: '#e6f4fd', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
            <div style={{ flex: '1 1 300px' }}>
              <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#009fdb', fontSize: '1.4rem' }}>💡 Want more than one machine?</h4>
              <ul style={{ fontSize: '1rem', paddingLeft: '1.5rem', marginTop: '0.75rem', color: '#1f2937', listStyleType: 'disc' }}>
                <li><strong>Second Stainless Single Machine:</strong> $100 + $40/extra weekday</li>
                <li><strong>Second Plastic Dual Machine:</strong> $115 + $45/extra weekday</li>
                <li><strong>Second Stainless Dual Machine:</strong> $130 + $50/extra weekday</li>
              </ul>
            </div>

            <div style={{ flex: '1 1 300px' }}>
              <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#009fdb', fontSize: '1.4rem' }}>🧮 Estimate Your Rental Cost</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Select your rental period below to estimate your total cost. Rentals include the first two nights; additional nights are charged based on machine type.
              </p>
              <label>Start Date:</label>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
              <label>End Date:</label>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
              <label>Machine Type:</label>
              <select value={machineType} onChange={(e) => setMachineType(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}>
                <option value="single">Stainless Single</option>
                <option value="plastic">Plastic Dual</option>
                <option value="stainless">Stainless Dual</option>
              </select>
              <button onClick={handleEstimate} style={{ width: '100%', padding: '0.75rem', backgroundColor: '#009fdb', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold' }}>
                Estimate Price
              </button>
              {estimatedTotal && (
                <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#1f2937' }}>Estimated Total: {estimatedTotal}</p>
              )}
              <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#555' }}>
                Final total may vary based on delivery distance and number of drink mixes needed.
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1rem', color: '#1f2937' }}>
            Questions? Call or text us at <strong>(850) 572-3796</strong>
          </p>
        </section>
      </div>
    </>
  );
}
