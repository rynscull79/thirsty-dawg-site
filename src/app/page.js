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

const machineRates = {
  'Stainless Single': { weekend: 185, extra: 40, second: 100, secondExtra: 40 },
  'Plastic Dual': { weekend: 210, extra: 45, second: 115, secondExtra: 45 },
  'Stainless Dual': { weekend: 240, extra: 50, second: 130, secondExtra: 50 },
};

function calculateEstimate(machineType, start, end, includeSecond) {
  if (!machineType || !start || !end) return null;

  const rates = machineRates[machineType];
  const startDate = new Date(start);
  const endDate = new Date(end);
  const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

  let weekdays = 0;
  for (let i = 0; i < days; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    const day = d.getDay();
    if (day >= 1 && day <= 4) weekdays++;
  }

  const base = rates.weekend + (rates.extra * weekdays);
  const second = includeSecond ? (rates.second + (rates.secondExtra * weekdays)) : 0;
  const subtotal = base + second;
  const total = subtotal + subtotal * 0.075;

  return total.toFixed(2);
}

export default function HomePage() {
  const [machineType, setMachineType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [includeSecond, setIncludeSecond] = useState(false);
  const [estimate, setEstimate] = useState(null);

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
          <p>
            We deliver, set up, and clean up — you enjoy the frozen fun across Pensacola and the Gulf Coast.
          </p>
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
          <h3 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 'bold', color: '#009fdb', marginBottom: '1.5rem', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
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

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {/* Pricing Cards - Skipped to focus on updated code block */}
          </div>

          <div style={{ marginTop: '2rem', backgroundColor: '#e6f4fd', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 300px' }}>
              <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#009fdb', fontSize: '1.4rem' }}>💡 Want more than one machine?</h4>
              <ul style={{ fontSize: '1rem', paddingLeft: '1.5rem', marginTop: '0.75rem', color: '#1f2937', listStyleType: 'disc' }}>
                <li><strong>Second Stainless Single Machine:</strong> $100 + $40/extra weekday</li>
                <li><strong>Second Plastic Dual Machine:</strong> $115 + $45/extra weekday</li>
                <li><strong>Second Stainless Dual Machine:</strong> $130 + $50/extra weekday</li>
              </ul>
            </div>

            <div style={{ flex: '1 1 300px' }}>
              <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#009fdb' }}>📊 Estimate Your Price</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '0.5rem' }}>
                <select value={machineType} onChange={(e) => setMachineType(e.target.value)}>
                  <option value="">Select machine type</option>
                  <option value="Stainless Single">Stainless Single Flavor</option>
                  <option value="Plastic Dual">Plastic Dual Flavor</option>
                  <option value="Stainless Dual">Stainless Dual Flavor</option>
                </select>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                <label>
                  <input type="checkbox" checked={includeSecond} onChange={(e) => setIncludeSecond(e.target.checked)} /> Add second machine
                </label>
                <button onClick={() => setEstimate(calculateEstimate(machineType, startDate, endDate, includeSecond))}>
                  Calculate Estimate
                </button>
                {estimate && (
                  <div style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
                    Estimated Total: ${estimate} (with 7.5% tax)
                  </div>
                )}
                <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#444' }}>
                  Final price may vary based on number of mixes and delivery distance.
                </p>
              </div>
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
