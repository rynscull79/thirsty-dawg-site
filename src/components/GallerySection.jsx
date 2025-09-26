'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './GallerySection.module.css';

const images = [
  { src: '/gallery/beach-house.webp', caption: 'Poolside Sips at the Beach House' },
  { src: '/gallery/kids-party.webp', caption: 'Happy Faces, Frozen Flavors' },
  { src: '/gallery/dual-flavor-machines.webp', caption: 'Frozen Favorites at "FLORA-BEULAH"' },
  { src: '/gallery/school-party.webp', caption: 'Teachers + Slushies = YES' },
  { src: '/gallery/elberta-sausage-festival.webp', caption: 'Fueling Fun at the Sausage Fest' },
  { src: '/gallery/charity-event.webp', caption: 'Frozen Fun for a Great Cause' },
  { src: '/gallery/community-center-party.webp', caption: 'Slushies and Smiles at the Center' },
  { src: '/gallery/breast-cancer-awareness.webp', caption: 'Serving Pink Power at Awareness Events' },
  { src: '/gallery/community-fun.webp', caption: 'Neighborhood Chill Zone' },
  { src: '/gallery/frozen-treats.webp', caption: 'Frozen treat cart and soft serve at community event.' },
  { src: '/gallery/frozen-margarita.webp', caption: 'Bar-quality frozen drinks.' },
  { src: '/gallery/wedding-toast.webp', caption: 'Frozen Memories on the Big Day' },
];

export default function GallerySection() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [index, setIndex] = useState(0); // group index
  const [isHover, setIsHover] = useState(false);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  // responsive items per page
  useEffect(() => {
    const update = () => setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, Math.ceil(images.length / itemsPerPage) - 1),
    [itemsPerPage]
  );

  const go = (dir) => {
    setIndex((prev) => {
      if (dir === 1) return prev === maxIndex ? 0 : prev + 1;
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  // autoplay only when visible and not hovered
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let inView = true;
    const io = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.25 }
    );
    io.observe(node);

    const tick = () => {
      if (inView && !isHover) go(1);
    };

    autoplayRef.current = setInterval(tick, 4200);
    return () => {
      clearInterval(autoplayRef.current);
      io.disconnect();
    };
  }, [isHover, maxIndex, itemsPerPage]);

  // touch/swipe handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const threshold = 50; // px
    if (touchDeltaX.current > threshold) go(-1);
    else if (touchDeltaX.current < -threshold) go(1);
  };

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [maxIndex]);

  // build slide groups
  const groups = useMemo(() => {
    const out = [];
    for (let i = 0; i < images.length; i += itemsPerPage) {
      out.push(images.slice(i, i + itemsPerPage));
    }
    return out;
  }, [itemsPerPage]);

  return (
    <section
      className={styles.section}
      ref={containerRef}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <h3 className={styles.title} aria-label="Where the Party At?">🎉 Where the Party At?</h3>

      <div className={styles.viewport}
           onTouchStart={onTouchStart}
           onTouchMove={onTouchMove}
           onTouchEnd={onTouchEnd}
           aria-roledescription="carousel"
           aria-label="Event gallery"
           >
        {/* sliding rail */}
        <div
          className={styles.rail}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {groups.map((group, gIdx) => (
            <div className={styles.group} key={`g-${gIdx}`}>
              {group.map((img, iIdx) => {
                const first = gIdx === 0 && iIdx === 0;
                return (
                  <figure className={styles.card} key={`${img.src}-${iIdx}`}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        sizes={itemsPerPage === 1 ? '(max-width: 768px) 92vw, 33vw' : '33vw'}
                        priority={first}
                        loading={first ? 'eager' : 'lazy'}
                        className={styles.image}
                      />
                      <figcaption className={styles.caption} aria-live="polite">
                        {img.caption}
                      </figcaption>
                    </div>
                  </figure>
                );
              })}
            </div>
          ))}
        </div>

        {/* edge fades */}
        <div className={`${styles.edge} ${styles.leftEdge}`} aria-hidden />
        <div className={`${styles.edge} ${styles.rightEdge}`} aria-hidden />
      </div>

      {/* controls */}
      <div className={styles.controls}>
        <button className={styles.navBtn} onClick={() => go(-1)} aria-label="Previous slide">‹</button>
        <div className={styles.dots} role="tablist" aria-label="Slide indicators">
          {groups.map((_, i) => (
            <button
              key={`dot-${i}`}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              role="tab"
            />
          ))}
        </div>
        <button className={styles.navBtn} onClick={() => go(1)} aria-label="Next slide">›</button>
      </div>
    </section>
  );
}
