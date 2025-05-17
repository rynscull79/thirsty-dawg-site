'use client';

import dynamic from 'next/dynamic';
import styles from './page.module.css';
import OurRentals from '@/components/OurRentals';
import FloatingBookNow from '@/components/FloatingBookNow';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

const GallerySection = dynamic(() => import('@/components/GallerySection'), { ssr: false });
const ReviewSlider = dynamic(() => import('@/components/ReviewSlider'), { ssr: false });
const DeliveryArea = dynamic(() => import('@/components/DeliveryArea'), {
  ssr: false,
  loading: () => <div>Loading delivery area...</div>,
});

export default function HomePage() {
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

        <section
          className={styles.section}
          style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem' }}
        >
          <h3
            style={{
              textAlign: 'center',
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#009fdb',
              marginBottom: '1.5rem',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            🍹 Why Choose Thirsty Dawg?
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}
          >
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
              <div
                key={index}
                style={{
                  backgroundColor: '#e6f4fd',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  textAlign: 'center',
                }}
              >
                {reason}
              </div>
            ))}
          </div>
        </section>

        <DeliveryArea />

        <section
          style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '1rem',
            marginTop: '3rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          }}
        >
          <h3
            style={{
              textAlign: 'center',
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#009fdb',
              marginBottom: '1.5rem',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            💵 Rental Prices (Single Day or Weekend)
          </h3>
          <p style={{ textAlign: 'center', marginBottom: '1rem', fontStyle: 'italic', color: '#333' }}>
            Looking to keep a machine for your beach trip or vacation week? Ask us about extended weekly rates!
          </p>
          <p style={{ textAlign: 'center', marginBottom: '2rem', fontStyle: 'italic', color: '#333' }}>
            🏪 Starting a bar or restaurant? Need a frozen drink machine on-site for months at a time? We offer affordable long-term leasing options for new venues, food trucks, seasonal businesses, and more.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                emoji: '🧊',
                title: 'Single Flavor Machine',
                price: '$185 / single day or weekend',
                details: 'Commercial-grade stainless machine. Easy to operate, ideal for small events.',
              },
              {
                emoji: '🍹',
                title: 'Dual Flavor Machine (Stainless)',
                price: '$240 / single day or weekend',
                details:
                  'Serve two frozen flavors at once! Great for weddings and large events. Includes two mixes.',
              },
              {
                emoji: '🎉',
                title: 'Dual Flavor Machine (Plastic)',
                price: '$210 / single day or weekend',
                details:
                  'Includes two mixes. For indoor use only and best for groups under 20 guests. Compact and kid-friendly.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#e6f4fd',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  textAlign: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                }}
              >
                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1f2937' }}>
                  {item.emoji} {item.title}
                </h4>
                <p style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#009fdb' }}>{item.price}</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#333' }}>{item.details}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1rem', color: '#1f2937' }}>
            Questions? Call or text us at <strong>(850) 572-3796</strong>
          </p>
        </section>
      </div>
    </>
  );
}
