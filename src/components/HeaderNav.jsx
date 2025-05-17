'use client';

import { useState } from 'react';
import Link from 'next/link';
import './HeaderNav.css';

export default function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav-wrapper">
      {/* Desktop menu */}
      <div className="nav-desktop">
        <Link href="/">Home</Link>
        <Link href="/rentals">Our Rentals</Link>
        <Link href="/our-story">Our Story</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/booking">Booking</Link>
      </div>

      {/* Hamburger / Close icon */}
      <div
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? '✕' : '☰'}
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="nav-mobile-dropdown">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/rentals" onClick={closeMenu}>Our Rentals</Link>
          <Link href="/our-story" onClick={closeMenu}>Our Story</Link>
          <Link href="/faq" onClick={closeMenu}>FAQ</Link>
          <Link href="/booking" onClick={closeMenu}>Booking</Link>
        </div>
      )}
    </nav>
  );
}
