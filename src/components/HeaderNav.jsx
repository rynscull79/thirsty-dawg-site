'use client';

import { useState } from 'react';
import Link from 'next/link';
import './HeaderNav.css';

export default function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/rentals', label: 'Frozen Drinks & Soft Serve' },
    { href: '/long-term-leasing', label: 'Long-Term Leasing' },
    { href: '/icecream', label: 'Frozen Novelties' },
    { href: '/our-story', label: 'Our Story' },
    { href: '/faq', label: 'FAQ' },
    { href: '/booking', label: 'Booking' },
  ];

  return (
    <nav className="nav-wrapper" aria-label="Primary navigation">
      <div className="nav-desktop">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link">
            {link.label}
          </Link>
        ))}
      </div>

      <button
        type="button"
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div className="nav-mobile-dropdown">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="nav-mobile-link"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}