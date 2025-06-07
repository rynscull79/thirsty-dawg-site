'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/gallery/mardi-gras-party.webp', caption: 'Mardi Gras Mixes & Masquerades' },
  { src: '/gallery/beach-house.webp', caption: 'Poolside Sips at the Beach House' },
  { src: '/gallery/kids-party.webp', caption: 'Happy Faces, Frozen Flavors' },
  { src: '/gallery/school-party.webp', caption: 'Teachers + Slushies = YES' },
  { src: '/gallery/elberta-sausage-festival.webp', caption: 'Fueling Fun at the Sausage Fest' },
  { src: '/gallery/charity-event.webp', caption: 'Frozen Fun for a Great Cause' },
  { src: '/gallery/community-center-party.webp', caption: 'Slushies and Smiles at the Center' },
  { src: '/gallery/breast-cancer-awareness.webp', caption: 'Serving Pink Power at Awareness Events' },
  { src: '/gallery/community-fun.webp', caption: 'Neighborhood Chill Zone' },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    updateItemsPerPage(); // set on load
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxIndex = Math.ceil(images.length / itemsPerPage) - 1;
  const goToPrevious = () => setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  const goToNext = () => setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));
  const visibleImages = images.slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage);

  return (
    <section style={{
      marginTop: '3rem',
      padding: '2rem',
      borderRadius: '1rem',
      backgroundColor: '#f0f9ff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      textAlign: 'center'
    }}>
      <h3 style={{
        fontSize: '1.8rem',
        marginBottom: '1.5rem',
        fontWeight: 'bold',
        color: '#009fdb',
        textShadow: '1px 1px 1px rgba(0,0,0,0.1)'
      }}>
        🎉 Where the Party At?
      </h3>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {visibleImages.map((image, index) => (
          <div key={index} style={{ maxWidth: itemsPerPage === 1 ? '100%' : '300px', textAlign: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: itemsPerPage === 1 ? '95%' : '300px',
              margin: '0 auto'
            }}>
              <Image
                src={image.src}
                alt={image.caption}
                width={itemsPerPage === 1 ? 360 : 300}
                height={itemsPerPage === 1 ? 260 : 200}
                loading={index === 0 && currentIndex === 0 ? 'eager' : 'lazy'}
                priority={index === 0 && currentIndex === 0}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}
              />
            </div>
            <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#333' }}>{image.caption}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <button onClick={goToPrevious} aria-label="Previous" style={{
          fontSize: '2rem',
          background: '#009fdb',
          border: 'none',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        }}>
          ‹
        </button>
        <button onClick={goToNext} aria-label="Next" style={{
          fontSize: '2rem',
          background: '#009fdb',
          border: 'none',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        }}>
          ›
        </button>
      </div>
    </section>
  );
}
