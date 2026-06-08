'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));
const GallerySection = dynamic(() => import('@/components/GallerySection'), {
  ssr: false,
});
const ReviewSlider = dynamic(() => import('@/components/ReviewSlider'), {
  ssr: false,
});
const DeliveryArea = dynamic(() => import('@/components/DeliveryArea'), {
  ssr: false,
  loading: () => <div>Loading delivery area...</div>,
});

export default function HomeClient() {
  return (
    <div>
      <section className={styles.hero}>
        <h1 className="hero-title">
          🧊 Frozen Drink Machines, Soft Serve &amp; Ice Cream Carts — Pensacola,
          FL
        </h1>

        <p className="hero-subtext">
          Rent commercial-grade frozen drink machines, soft serve machines, and
          fully-stocked novelty ice cream carts for parties, weddings, schools,
          and events across Pensacola and surrounding areas.
        </p>

        <p className="hero-subtext-small">
          Local delivery &amp; setup • Fast booking • 5-star service
        </p>

        <p className="hero-phone">
          📞 Call or text: <a href="tel:8505723796">(850) 572-3796</a>
        </p>

        <div className="hero-buttons">
          <Link href="/rentals" className="btn-primary">
            🍹 View Rentals
          </Link>

          <Link href="/booking" className="btn-secondary">
            ✅ Book Now
          </Link>
        </div>
      </section>

      <section className="home-photo-strip">
        <img
          src="/gallery/mardi-gras-party.webp"
          alt="Woman in costume pouring mix into a frozen drink machine for a Mardi Gras party rental in Pensacola"
          className="home-photo-card"
        />

        <img
          src="/gallery/frozen-drinks-and-softserve.webp"
          alt="Frozen drink and soft serve ice cream rental machines set up for a party in Pensacola, Florida"
          className="home-photo-card"
        />

        <img
          src="/gallery/ice-cream-bar.webp"
          alt="Ice cream party setup with frozen novelties"
          className="home-photo-card"
        />
      </section>

      <section className="promo-section">
        <div className="promo-section__intro">
          <h2 className="promo-section__title">🎉 New Frozen Treat Rentals for 2025!</h2>

          <p className="promo-section__lead">
            We&apos;re now serving up Soft Serve and fully-stocked Ice Cream Carts —
            perfect for parties, schools, weddings, and more!
          </p>

          <div className="promo-section__actions">
            <Link href="/booking" className="btn-primary">
              🍦 Book Soft Serve
            </Link>

            <Link href="/icecream" className="btn-secondary">
              🍧 View Ice Cream Packages
            </Link>
          </div>
        </div>

        <div className="promo-section__images">
          <img
            src="/gallery/kid-soft-serve.webp"
            alt="Kid enjoying soft serve ice cream"
            width="260"
            height="340"
            className="promo-section__image"
          />
          <img
            src="/gallery/frozen_novelties_cart.webp"
            alt="Fully-stocked frozen novelty cart"
            width="260"
            height="340"
            className="promo-section__image"
          />
          <img
            src="/gallery/wedding_novelty_cart.webp"
            alt="Wedding-themed novelty cart"
            width="260"
            height="340"
            className="promo-section__image"
          />
        </div>
      </section>

      <section className="content-section">
        <div style={{
          maxWidth: '1050px',
          margin: '0 auto',
          padding: '2rem 1.5rem',
          borderRadius: '22px',
          background: '#fff8ef',
          border: '2px dashed rgba(247, 148, 29, 0.35)',
          boxShadow: 'var(--shadow-soft)',
          textAlign: 'center',
        }}>
          <h2 style={{ color: 'var(--td-blue)', fontSize: '2.2rem', marginBottom: '0.75rem' }}>
            Long-Term Frozen Drink Machine Leasing
          </h2>
          <p style={{ maxWidth: '780px', margin: '0 auto 1.25rem', lineHeight: 1.65, fontSize: '1.08rem' }}>
            Want frozen drinks available at your business, venue, or rental property year-round? Thirsty Dawg Rentals offers 6-month and annual frozen drink machine leases with delivery, setup, training, maintenance, and local support included.
          </p>
          <Link href="/long-term-leasing" className="btn-primary">
            Learn About Long-Term Leasing
          </Link>
        </div>
      </section>

      <section className="content-section">
        <GallerySection />
      </section>

      <section className="content-section">
        <ReviewSlider />
      </section>

      <FloatingBookNow />

      <section className={`why-section ${styles.section}`}>
        <h3 className="why-section-title">🍹 Why Choose Thirsty Dawg Rentals?</h3>

        <div className="why-grid">
          {[
            '❄️ No Ice Needed – Our machines freeze the mix automatically',
            '🥇 Commercial-Grade Equipment – Bar-quality drink and dessert machines',
            '🍦 Soft Serve Machines – Delicious vanilla and chocolate in minutes',
            '🍧 Stocked Ice Cream Carts – Delivered with frozen novelties ready to serve',
            '🙌 Full-Service Delivery – We deliver, set up, and pick up for you',
            '🧃 Natural Fruit Juices – Made with real fruit flavorings',
            '👨‍👧‍👦 Kid- and Family-Friendly Options – Alcohol-free or adult-style drinks',
            '🌀 Multiple Machine Types – Choose the best fit for your event',
            '⚡ Quick Freeze Time – Be party-ready in under 90 minutes',
            '🧼 Post-Party Cleanup – We handle everything',
            '🌟 5-Star Rated – Loved by families, schools, and event planners',
          ].map((reason, index) => (
            <div key={index} className="why-card">
              {reason}
            </div>
          ))}
        </div>
      </section>

      <section className="seo-section">
        <h2>Popular local rental searches</h2>
        <p>
          Looking for frozen drink, soft serve, or ice cream cart rentals near you? We serve Pensacola and nearby Gulf Coast communities with delivery, setup, and pickup included.
        </p>
        <div className="seo-card-grid">
          <Link href="/service-areas/pensacola-fl" className="seo-card seo-card-link">
            <strong>Pensacola, FL</strong>
            <span>Frozen drink machines, soft serve, and ice cream cart rentals for local parties and events.</span>
          </Link>
          <Link href="/service-areas/gulf-breeze-fl" className="seo-card seo-card-link">
            <strong>Gulf Breeze, FL</strong>
            <span>Delivered frozen treat rentals for waterfront parties, schools, and wedding weekends.</span>
          </Link>
          <Link href="/service-areas/navarre-fl" className="seo-card seo-card-link">
            <strong>Navarre, FL</strong>
            <span>Slushie machines, soft serve rentals, and stocked novelty carts for Navarre events.</span>
          </Link>
          <Link href="/service-areas" className="seo-card seo-card-link">
            <strong>All service areas</strong>
            <span>See the full list of Florida Panhandle and select South Alabama communities we serve.</span>
          </Link>
        </div>
      </section>

      <section className="eventhub-section">
        <div className="eventhub-section__inner">
          <h2 className="eventhub-section__title">Planning a Larger Event?</h2>

          <p className="eventhub-section__text">
            If you need more than frozen drinks or ice cream, you can explore
            additional party and event services like bartenders, DJs, catering,
            rentals, and more across the Gulf Coast.
          </p>

          <a
            href="https://www.gulfcoasteventhub.com"
            className="eventhub-section__button"
          >
            Explore Gulf Coast Event Hub
          </a>
        </div>
      </section>

      <DeliveryArea />
    </div>
  );
}