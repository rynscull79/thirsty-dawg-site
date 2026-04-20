'use client';

import React from 'react';
import Image from 'next/image';

const rentalsImages = [
  {
    src: '/gallery/Frosty-Factory-217A.webp',
    caption:
      'Frosty Factory 217A – Our most popular rental! Dual stainless design, perfect for weddings, events, and high-demand venues.',
  },
  {
    src: '/gallery/Taylor-430.webp',
    caption:
      'Taylor 430 – High-capacity, commercial-grade unit ideal for large events and extended lease use. Smooth, consistent pours. Requires 120V outlet on a dedicated 20 amp breaker. Customer must verify outlet before delivery.',
  },
  {
    src: '/gallery/Grindmaster-3311.webp',
    caption:
      'Grindmaster 3311 – Stainless single-flavor machine. Great for weddings, showers, or adding a second flavor to any event.',
  },
  {
    src: '/gallery/taylor-152-12.webp',
    caption:
      'Taylor 152-12 – Compact, single-flavor soft serve machine. A powerful performer for smaller gatherings, kids’ parties, or backyard events. Requires 120V outlet on a dedicated 20 amp breaker. Customer must verify outlet before delivery.',
  },
];

export default function RentalsGallery() {
  return (
    <section
      style={{
        marginTop: '3rem',
        padding: '2rem',
        borderRadius: '22px',
        background: 'rgba(255, 255, 255, 0.96)',
        boxShadow: 'var(--shadow-soft)',
        textAlign: 'center',
        maxWidth: '1100px',
        marginInline: 'auto',
      }}
    >
      <h3
        style={{
          fontSize: '2rem',
          marginBottom: '2rem',
          color: 'var(--td-blue)',
          fontFamily: 'var(--heading-font)',
          lineHeight: 1.1,
        }}
      >
        📸 Machines in Action
      </h3>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        {rentalsImages.map((img, index) => (
          <div
            key={index}
            style={{
              maxWidth: '300px',
              textAlign: 'center',
            }}
          >
            <Image
              src={img.src}
              alt={img.caption}
              width={300}
              height={200}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '18px',
                border: '3px solid rgba(255, 255, 255, 0.9)',
                boxShadow: 'var(--shadow-soft)',
              }}
            />
            <p
              style={{
                marginTop: '0.85rem',
                color: 'var(--td-black)',
                fontFamily: 'var(--body-font)',
                fontWeight: '700',
                lineHeight: 1.55,
              }}
            >
              {img.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}