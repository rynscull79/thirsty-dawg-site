'use client';

import React, { useState } from 'react';
import './ReviewSlider.css';

export default function ReviewSlider() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Tangee M.',
      review:
        'Thirsty Dawg was a huge hit for our Aloha party at Navarre Beach! Guests loved the drinks, and we’re booking again next year!',
    },
    {
      name: 'Jeff H.',
      review:
        'We rented the Bushwacker and Margarita machine for my 50th. The drinks made the party. Super easy and everyone loved it!',
    },
    {
      name: 'Katie K.',
      review:
        'Used them for teacher appreciation week. Ryan was so easy to work with and everyone raved about the drinks!',
    },
    {
      name: 'Beth B.',
      review:
        'Awesome machine at our fundraiser! The service was 5 stars from start to finish.',
    },
    {
      name: 'Dan T.',
      review:
        'Perfect touch for my daughter’s wedding. Ryan confirmed ahead of time, arrived early, and helped with setup. Huge guest favorite!',
    },
  ];

  const goToPrev = () => {
    setCurrentReview(currentReview === 0 ? reviews.length - 1 : currentReview - 1);
  };

  const goToNext = () => {
    setCurrentReview(currentReview === reviews.length - 1 ? 0 : currentReview + 1);
  };

  return (
    <section className="review-slider">
      <h3 className="review-slider__title">⭐ Rated 5 Stars by 55+ Happy Customers</h3>

      <div className="review-slider__row">
  <div className="review-slider__card">
    <p className="review-slider__quote">“{reviews[currentReview].review}”</p>
    <p className="review-slider__name">{reviews[currentReview].name}</p>
  </div>

  <div className="review-slider__controls">
    <button
      type="button"
      onClick={goToPrev}
      aria-label="Previous review"
      className="review-slider__arrow"
    >
      ‹
    </button>

    <button
      type="button"
      onClick={goToNext}
      aria-label="Next review"
      className="review-slider__arrow"
    >
      ›
    </button>
  </div>
</div>
    </section>
  );
}