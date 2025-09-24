'use client';

import dynamic from 'next/dynamic';
import styles from './page.module.css';
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

  return (
    <>
      <Head>
  <title>Frozen Drink & Soft Serve Machine Rentals in Pensacola | Thirsty Dawg Rentals</title>
  <meta name="description"
  content="Rent frozen drink, slushie, and soft serve ice cream machines for parties, weddings, schools, and events in Pensacola. Thirsty Dawg delivers, sets up, and picks up — hassle-free fun for all ages!"
 />
         <meta property="og:title" content="Frozen Drink & Soft Serve Rentals | Thirsty Dawg - Pensacola" />
        <meta property="og:description" content="Rent soft serve ice cream and frozen drink machines for weddings, parties, and events. Serving Pensacola and the Gulf Coast with delivery and setup." />
        <meta property="og:image" content="https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp" />
        <meta property="og:url" content="https://www.thirstydawgrentals.com/" />
        <link rel="canonical" href="https://www.thirstydawgrentals.com/" />
        <meta property="og:type" content="website" />

      </Head>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Thirsty Dawg Rentals",
      "url": "https://www.thirstydawgrentals.com",
      "telephone": "850-572-3796",
      "image": "https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp",
      "description": "Rent frozen drink machines and soft serve ice cream machines for events, parties, and weddings in Pensacola, FL and surrounding counties. Delivery, setup, cleanup included.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pensacola",
        "addressRegion": "FL",
        "postalCode": "32577",
        "addressCountry": "US"
      },
      "areaServed": ["Pensacola", "Escambia County", "Santa Rosa County", "Baldwin County"],
      "priceRange": "$$",
      "openingHours": "Mo-Su 08:00-20:00",
      "sameAs": [
      "https://www.facebook.com/thirstydawgrentals"
      ]
    })
  }}
/>

      <div>
       <section className={styles.hero}>
  <h1 style={{ fontFamily: '"Chewy", cursive', fontSize: '2.5rem', lineHeight: '1.2', textAlign: 'center' }}>
    🧊 Frozen Drink Machines, Soft Serve Machines & Ice Cream Carts – Pensacola Rentals
  </h1>
  <p style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '700px', marginInline: 'auto', textAlign: 'center' }}>
    Rent commercial-grade frozen drink machines, soft serve ice cream machines, and fully-stocked novelty ice cream carts for parties, schools, weddings, and events across Pensacola, Gulf Breeze, Pace, and surrounding areas.
  </p>
  <p style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center' }}>
    📞 Call or text us: <a href="tel:8505723796" style={{ color: 'white', textDecoration: 'underline' }}>(850) 572-3796</a>
  </p>
</section>


 
        <section style={{
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1rem',
  padding: '20px 0',
}}>
  <img
  src="/gallery/frozen-margarita.webp"
  alt="Frozen Margarita on Machine"
  width="320"
  height="427"
  style={{
    maxWidth: '320px',
    width: '100%',
    borderRadius: '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
  }}
/>

<img
  src="/gallery/frozen-drinks-and-softserve.webp"
  alt="Frozen drink and soft serve ice cream rental machines set up for a party in Pensacola, Florida"
  style={{
    width: '100%',
    maxWidth: '320px',
    height: '427px',         // fixed height
    borderRadius: '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    objectFit: 'cover'       // 👈 prevents squish, crops instead
  }}
/>

<img
  src="/gallery/ice-cream-bar.webp"
  alt="Ice Cream Party"
  style={{
    width: '100%',
    maxWidth: '320px',
    height: '427px',         // fixed height
    borderRadius: '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    objectFit: 'cover'       // 👈 prevents squish, crops instead
  }}
/>


</section>

<section
  style={{
    backgroundColor: '#fef9f4',
    padding: '40px 20px',
    margin: '40px 0',
    borderRadius: '16px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
  }}
>
  {/* Header and buttons centered across full width */}
  <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', marginBottom: '2rem' }}>
    <h2
      style={{
        fontSize: '2.4rem',
        marginBottom: '20px',
        color: '#009fdb',
        fontFamily: '"Chewy", cursive',
      }}
    >
      🎉 New Frozen Treat Rentals for 2025!
    </h2>
    <p
      style={{
        fontSize: '1.3rem',
        marginBottom: '25px',
        color: '#009fdb',
        fontWeight: 'bold',
        fontFamily: '"Chewy", cursive',
      }}
    >
      We're now serving up Soft Serve AND fully-stocked Ice Cream Carts — perfect for parties, schools, weddings, and more!
    </p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
        marginBottom: '2rem',
      }}
    >
      <Link href="/booking">
        <button
          style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            backgroundColor: '#ff6f00',
            color: '#ffffff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontFamily: '"Chewy", cursive',
          }}
        >
          🍦 Book Soft Serve
        </button>
      </Link>
      <Link href="/icecream">
        <button
          style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            backgroundColor: '#007bb5',
            color: '#ffffff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontFamily: '"Chewy", cursive',
          }}
        >
          🍧 View Ice Cream Packages
        </button>
      </Link>
    </div>
  </div>

  {/* Images side by side */}
 <div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  }}
>
  <img
    src="/gallery/kid-soft-serve.webp"
    alt="Kid enjoying soft serve ice cream"
    width="260"
    height="340"
    style={{
      width: '100%',
      maxWidth: '260px',
      borderRadius: '1rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      objectFit: 'cover',
      flexShrink: 0,
    }}
  />
  <img
    src="/gallery/frozen_novelties_cart.webp"
    alt="Updated frozen novelty cart"
    width="260"
    height="340"
    style={{
      width: '100%',
      maxWidth: '260px',
      borderRadius: '1rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      objectFit: 'cover',
      flexShrink: 0,
    }}
  />
  <img
    src="/gallery/wedding_novelty_cart.webp"
    alt="Wedding-themed novelty cart"
    width="260"
    height="340"
    style={{
      width: '100%',
      maxWidth: '260px',
      borderRadius: '1rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      objectFit: 'cover',
      flexShrink: 0,
    }}
  />
</div>

</section>

        <section className={styles.section}><GallerySection /></section>
        <ReviewSlider />
        <FloatingBookNow />

        <section className={styles.section} style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem' }}>
  <h3 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 'bold', color: '#009fdb', marginBottom: '1.5rem' }}>
    🍹 Why Choose Thirsty Dawg Rentals?
  </h3>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
    {[
      '❄️ No Ice Needed – Our machines freeze the mix automatically',
      '🥇 Commercial-Grade Equipment – Bar-quality drink and dessert machines',
      '🍦 Soft Serve Machines – Delicious vanilla and chocolate in minutes',
      '🍧 Stocked Ice Cream Carts – Delivered with frozen novelties ready to serve',
      '🙌 Full-Service Delivery – We deliver, set up, and pick up for you',
      '🧃 Natural Fruit Juices – Made with real fruit flavorings',
      '👨‍👧‍👦 Kid- and Family-Friendly Options – Alcohol-free or adult-style drinks',
      '🌀 Multiple Machine Types – Choose the best fit for your event',
      '⚡ Quick Freeze Time – Be party-ready in under 90 minutes',
      '🧼 Post-Party Cleanup – We handle everything',
      '🌟 5-Star Rated – Loved by families, schools, and event planners',
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

      </div>
    </>
  );
}
