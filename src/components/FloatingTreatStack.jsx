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

export default function FloatingTreatStack() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '4rem 0',
        position: 'relative',
        height: '600px',
      }}
    >
      <h2
        style={{
          fontSize: '1.5rem',
          color: '#3a1a0a',
          textAlign: 'center',
          marginBottom: '2rem',
          zIndex: 1,
        }}
      >
        🍦 Our Favorite Frozen Treats
      </h2>

      <div style={{ position: 'relative', width: '180px', height: '500px' }}>
        {treats.map((file, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0],
              rotate: [0, i % 2 === 0 ? 2 : -2, 0],
              zIndex: treats.length - i,
            }}
            transition={{
              duration: 3 + i * 0.15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: `${i * 40}px`,
              left: `${i % 2 === 0 ? 0 : 10}px`,
              width: '160px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              overflow: 'hidden',
              backgroundColor: '#fff',
              zIndex: treats.length - i,
            }}
          >
            <img
              src={`/gallery/${file}`}
              alt={file.replace(/[-.]/g, ' ').replace(/\bwebp|jpg|jpeg\b/gi, '').trim()}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
