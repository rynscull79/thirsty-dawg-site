// 📁 src/components/FloatingTreatStack.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const treats = [
  'oreo-bars.webp',
  'reeses-peanut-butter-bar-.jpg',
  'bomb-pop.webp',
  'magnumdoublecaramel.webp',
  'spongebob-popsicle.webp',
  'klondike-original.webp',
  'fat-boy-hot-fudge.webp',
  'dark-chocolate-ice-cream-bars.webp',
];

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function FloatingTreatStack() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '4rem 0',
        gap: '1.5rem',
      }}
    >
      <h2
        style={{
          fontSize: '1.5rem',
          color: '#3a1a0a',
          textAlign: 'center',
          marginBottom: '1rem',
        }}
      >
        🍦 Our Favorite Frozen Treats (Animated Stack)
      </h2>

      {treats.map((file, i) => (
        <motion.div
          key={i}
          variants={floatVariants}
          animate="animate"
          style={{
            width: '140px',
            height: 'auto',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={`/gallery/${file}`}
            alt={file.replace(/[-.]/g, ' ').replace(/\bwebp|jpg|jpeg\b/gi, '').trim()}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </motion.div>
      ))}
    </section>
  );
}
