'use client';

import React from 'react';
import Image from 'next/image';

const rentalsImages = [
  {
    src: '/gallery/Bunn-Ultra-2.webp',
    caption: 'Bunn Ultra 2 – Great for small indoor events and kids\' parties. Recommended for fewer than 20 guests. Indoor use only.'
  },
  {
    src: '/gallery/Frosty-Factory-217A.webp',
    caption: 'Frosty Factory 217A – Our most popular rental! Dual stainless design, perfect for weddings, events, and high-demand venues.'
  },
  {
    src: '/gallery/Taylor-430.webp',
    caption: 'Taylor 430 – High-capacity, commercial-grade unit ideal for large events and extended lease use. Smooth, consistent pours.'
  },
  {
    src: '/gallery/Grindmaster-3311.webp',
    caption: 'Grindmaster 3311 – Stainless single-flavor machine. Great for weddings, showers, or adding a second flavor to any event.'
  }
];

export default function RentalsGallery() {
  return (
    <section style={{
      marginTop: '3rem',
      padding: '2rem',
      borderRadius: '1rem',
      backgroundColor: '#f0f9ff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      textAlign: 'center',
      fontFamily: '"Chewy", cursive'
    }}>
      <h3 style={{
        fontSize: '2rem',
        marginBottom: '2rem',
        color: '#009fdb',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        📸 Machines in Action
      </h3>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        {rentalsImages.map((img, index) => (
          <div key={index} style={{ maxWidth: '300px', textAlign: 'center' }}>
            <Image
              src={img.src}
              alt={img.caption}
              width={300}
              height={200}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
              }}
            />
            <p style={{ marginTop: '0.75rem', fontWeight: 'bold', color: '#333' }}>{img.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
