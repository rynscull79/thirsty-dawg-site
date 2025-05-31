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
  const [secondMachineType, setSecondMachineType] = useState('');
  const [estimatedTotal, setEstimatedTotal] = useState(null);

const handleEstimate = () => {
  if (!startDate || !endDate) return;
  const start = new Date(startDate);
  const end = new Date(endDate);
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

    // Override base for second machine with secondary machine rates
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

        <section id="pricing" style={{ padding: '2rem 1rem', backgroundColor: '#ffffff', borderRadius: '1rem', marginTop: '3rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem', color: '#009fdb' }}>💵 Rental Prices</h2>
          <p style={{ textAlign: 'center', marginBottom: '1rem', fontStyle: 'italic', color: '#333' }}>
            Need a machine for the whole week? Add extra weekdays to your rental!
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <div style={{ flex: '1 1 300px', backgroundColor: '#e6f4fd', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1f2937' }}>🍹 Stainless Single Flavor – $185</h3>
              <ul style={{ paddingLeft: '1.2rem', color: '#333', fontSize: '0.95rem' }}>
                <li>Weekend Rental: Friday evening through Sunday evening – <strong>$185</strong></li>
                <li>Add Extra Days: <strong>$40</strong> per additional weekday</li>
              </ul>
              <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>🧊 Example: Friday to Wednesday = $185 + 3 extra days = $305</p>
            </div>

            <div style={{ flex: '1 1 300px', backgroundColor: '#e6f4fd', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1f2937' }}>🥤 Plastic Dual Flavor – $210</h3>
              <ul style={{ paddingLeft: '1.2rem', color: '#333', fontSize: '0.95rem' }}>
                <li>Weekend Rental: Friday evening through Sunday evening – <strong>$210</strong></li>
                <li>Add Extra Days: <strong>$45</strong> per additional weekday</li>
              </ul>
              <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>🧊 Example: Friday to Wednesday = $210 + 3 extra days = $345</p>
            </div>

            <div style={{ flex: '1 1 300px', backgroundColor: '#e6f4fd', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1f2937' }}>🍧 Stainless Dual Flavor – $240</h3>
              <ul style={{ paddingLeft: '1.2rem', color: '#333', fontSize: '0.95rem' }}>
                <li>Weekend Rental: Friday evening through Sunday evening – <strong>$240</strong></li>
                <li>Add Extra Days: <strong>$50</strong> per additional weekday</li>
              </ul>
              <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>🧊 Example: Friday to Wednesday = $240 + 3 extra days = $390</p>
            </div>
          </div>

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
              <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#009fdb', fontSize: '1.4rem' }}>📊 Estimate Your Rental Cost</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Select your rental period below to estimate your total cost. Rentals include the first two nights; additional nights are charged based on machine type.
              </p>
<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
  <label htmlFor="startDate" style={{ fontWeight: 'bold' }}>Start Date:</label>
  <input
    id="startDate"
    type="date"
    value={startDate}
    onChange={(e) => setStartDate(e.target.value)}
    style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
  />

  <label htmlFor="endDate" style={{ fontWeight: 'bold' }}>End Date:</label>
  <input
    id="endDate"
    type="date"
    value={endDate}
    onChange={(e) => setEndDate(e.target.value)}
    style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
  />

  <label htmlFor="machineType" style={{ fontWeight: 'bold' }}>Machine Type:</label>
  <select
    id="machineType"
    value={machineType}
    onChange={(e) => setMachineType(e.target.value)}
    style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
  >
    <option value="single">Stainless Single</option>
    <option value="plastic">Plastic Dual</option>
    <option value="stainless">Stainless Dual</option>
  </select>
  <label htmlFor="secondMachineType" style={{ fontWeight: 'bold' }}>Second Machine (Optional):</label>
<select
  id="secondMachineType"
  value={secondMachineType}
  onChange={(e) => setSecondMachineType(e.target.value)}
  style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
>
  <option value="">None</option>
  <option value="single">Stainless Single</option>
  <option value="plastic">Plastic Dual</option>
  <option value="stainless">Stainless Dual</option>
</select>

</div>

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
