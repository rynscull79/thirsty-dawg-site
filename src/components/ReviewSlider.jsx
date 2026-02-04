'use client';

import React, { useState } from 'react';

export default function ReviewSlider() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Tangee M.',
      review: 'Thirsty Dawg was a huge hit for our Aloha party at Navarre Beach! Guests loved the drinks, and we’re booking again next year!',
    },
    {
      name: 'Jeff H.',
      review: 'We rented the Bushwacker and Margarita machine for my 50th. The drinks made the party. Super easy and everyone loved it!',
    },
    {
      name: 'Katie K.',
      review: 'Used them for teacher appreciation week. Ryan was so easy to work with and everyone raved about the drinks!',
    },
    {
      name: 'Beth B.',
      review: 'Awesome machine at our fundraiser! The service was 5 stars from start to finish.',
    },
    {
      name: 'Dan T.',
      review: 'Perfect touch for my daughter’s wedding. Ryan confirmed ahead of time, arrived early, and helped with setup. Huge guest favorite!',
    }
  ];

  const goToPrev = () => {
    setCurrentReview(currentReview === 0 ? reviews.length - 1 : currentReview - 1);
  };

  const goToNext = () => {
    setCurrentReview(currentReview === reviews.length - 1 ? 0 : currentReview + 1);
  };

  return (
    <section style={{
      backgroundColor: '#fffbe6',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      margin: '2rem 0'
    }}>
      <h3 style={{
        textAlign: 'center',
        fontSize: '1.8rem',
        marginBottom: '1.5rem',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        ⭐ Rated 5 Stars by 55+ Happy Customers
      </h3>
      

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
        <button onClick={goToPrev} aria-label="Previous" style={{
          fontSize: '2rem',
          background: '#009fdb',
          border: 'none',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        }}>‹</button>

     <div style={{
  width: 'min(100%, 500px)',
  minWidth: '280px',
  backgroundColor: '#ffffff',
  padding: '1.5rem',
  borderRadius: '12px',
  border: '1px solid #f4d28c',
  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
  textAlign: 'start',
  margin: '0 auto'
}}>

          <p style={{
  fontSize: '1.0rem',
  lineHeight: '1.6',
  fontStyle: 'italic',
  marginBottom: '1rem',
  whiteSpace: 'normal'
}}>
            “{reviews[currentReview].review}”
          </p>
          <p style={{ fontWeight: 'bold', color: '#009fdb' }}>{reviews[currentReview].name}</p>
        </div>

        <button onClick={goToNext} aria-label="Next" style={{
          fontSize: '2rem',
          background: '#009fdb',
          border: 'none',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        }}>›</button>
      </div>
    </section>
  );
}
