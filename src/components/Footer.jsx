'use client';

import Link from 'next/link';
import { serviceAreas } from '@/lib/seoData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__column">
          <h3 className="site-footer__heading">Menu</h3>
          <ul className="site-footer__list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/rentals">Frozen Drinks & Soft Serve</Link></li>
            <li><Link href="/icecream">Frozen Novelties</Link></li>
            <li><Link href="/our-story">Our Story</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/booking">Booking</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/service-areas">Service Areas</Link></li>
          </ul>
        </div>

        <div className="site-footer__column">
          <h3 className="site-footer__heading">Service Areas</h3>
          <ul className="site-footer__list">
            {serviceAreas.slice(0, 6).map((area) => (
              <li key={area.slug}>
                <Link href={`/service-areas/${area.slug}`}>{area.city}, {area.state}</Link>
              </li>
            ))}
            <li><Link href="/service-areas">View all areas</Link></li>
          </ul>
        </div>

        <div className="site-footer__column">
          <h3 className="site-footer__heading">Contact</h3>
          <p className="site-footer__text">
            📞 <a href="tel:8505723796">(850) 572-3796</a>
          </p>
          <p className="site-footer__text">
            📧 <a href="mailto:info@thirstydawgrentals.com">info@thirstydawgrentals.com</a>
          </p>
        </div>

        <div className="site-footer__column">
          <h3 className="site-footer__heading">Legal</h3>
          <p className="site-footer__text">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
          <p className="site-footer__text">
            <Link href="/terms">Terms of Service</Link>
          </p>
        </div>
      </div>

      <div className="site-footer__bottom">
        © {new Date().getFullYear()} Thirsty Dawg Rentals. All rights reserved.
      </div>
    </footer>
  );
}