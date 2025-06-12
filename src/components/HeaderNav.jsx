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
  <Link href="/" style={{ padding: '12px 16px', display: 'inline-block' }}>Home</Link>
  <Link href="/rentals" style={{ padding: '12px 16px', display: 'inline-block' }}>Our Rentals</Link>
  <Link href="/icecream" onClick={closeMenu} style={{ padding: '12px 16px', display: 'inline-block' }}>
  Frozen Novelties
</Link>

  <Link href="/our-story" style={{ padding: '12px 16px', display: 'inline-block' }}>Our Story</Link>
  <Link href="/faq" style={{ padding: '12px 16px', display: 'inline-block' }}>FAQ</Link>
  <Link href="/booking" style={{ padding: '12px 16px', display: 'inline-block' }}>Booking</Link>
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
  <Link href="/" onClick={closeMenu} style={{ padding: '12px 16px', display: 'inline-block' }}>Home</Link>
  <Link href="/rentals" onClick={closeMenu} style={{ padding: '12px 16px', display: 'inline-block' }}>Our Rentals</Link>
  <Link href="/icecream" onClick={closeMenu} style={{ padding: '12px 16px', display: 'inline-block' }}>
  Frozen Novelties
</Link>

  <Link href="/our-story" onClick={closeMenu} style={{ padding: '12px 16px', display: 'inline-block' }}>Our Story</Link>
  <Link href="/faq" onClick={closeMenu} style={{ padding: '12px 16px', display: 'inline-block' }}>FAQ</Link>
  <Link href="/booking" onClick={closeMenu} style={{ padding: '12px 16px', display: 'inline-block' }}>Booking</Link>
</div>

      )}
    </nav>
  );
}
