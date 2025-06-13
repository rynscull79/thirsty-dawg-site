'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#009fdb',
        color: 'white',
        padding: '2rem 1rem',
        marginTop: '4rem',
        fontFamily: 'var(--font-chewy)',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
        {/* Navigation Links */}
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Menu</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2rem' }}>
  <li><Link href="/">Home</Link></li>
  <li><Link href="/rentals">Frozen Drink/Softserve</Link></li>
  <li><Link href="/icecream">Novelty Cart</Link></li> {/* ✅ New link */}
  <li><Link href="/our-story">Our Story</Link></li>
  <li><Link href="/faq">FAQ</Link></li>
  <li><Link href="/booking">Booking</Link></li>
  <li><Link href="/contact">Contact</Link></li>
</ul>

        </div>

        {/* Contact Info */}
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact</h3>
          <p>📞 <a href="tel:8505723796" style={{ color: 'white' }}>(850) 572-3796</a></p>
          <p>📧 <a href="mailto:info@thirstydawgrentals.com" style={{ color: 'white' }}>info@thirstydawgrentals.com</a></p>
        </div>

        {/* Legal Link */}
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Legal</h3>
          <p>
  <Link href="/privacy-policy">Privacy Policy</Link><br />
  <Link href="/terms">Terms of Service</Link>
</p>
        </div>
      </div>
      <div style={{ marginTop: '2rem', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Thirsty Dawg Rentals. All rights reserved.
      </div>
    </footer>
  );
}
