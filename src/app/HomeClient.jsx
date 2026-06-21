import Link from 'next/link';
import styles from './page.module.css';
import FloatingBookNow from '@/components/FloatingBookNow';
import GallerySection from '@/components/GallerySection';
import ReviewSlider from '@/components/ReviewSlider';
import DeliveryArea from '@/components/DeliveryArea';

export default function HomeClient() {
  return (
    <div>
      <section className={styles.hero}>
        <h1 className="hero-title">
          🧊 Frozen Drink Machines, Soft Serve &amp; Ice Cream Carts — Pensacola,
          FL
        </h1>

        <p className="hero-subtext">
          Rent commercial-grade frozen drink machines, soft serve machines,
          frozen yogurt machines, and fully-stocked novelty ice cream carts for
          parties, weddings, schools, and events across Pensacola and surrounding
          areas.
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
          loading="lazy"
          decoding="async"
        />

        <img
          src="/gallery/frozen-drinks-and-softserve.webp"
          alt="Frozen drink and soft serve ice cream rental machines set up for a party in Pensacola, Florida"
          className="home-photo-card"
          loading="lazy"
          decoding="async"
        />

        <img
          src="/gallery/ice-cream-bar.webp"
          alt="Ice cream party setup with frozen novelties"
          className="home-photo-card"
          loading="lazy"
          decoding="async"
        />

        <img
          src="/gallery/wedding-treats.webp"
          alt="Wedding-themed novelty ice cream cart rental setup"
          className="home-photo-card"
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="promo-section">
        <div className="promo-section__intro">
          <p className="promo-section__eyebrow">New for 2026</p>
          <h2 className="promo-section__title">Frozen Yogurt Is Now Available!</h2>

          <p className="promo-section__lead">
            By popular demand, frozen yogurt is joining our soft serve lineup
            along with the vanilla and chocolate everyone already loves.
          </p>

          <div className="promo-section__actions">
            <Link href="/frozen-yogurt-machine-rentals" className="btn-primary">
              Book Frozen Yogurt
            </Link>

            <Link href="/soft-serve-machine-rentals" className="btn-secondary">
              View Soft Serve Rentals
            </Link>
          </div>
        </div>

        <div className="promo-section__feature">
          <img
            src="/gallery/frozen-yogurt-2026.webp"
            alt="Frozen yogurt flavor options now available from Thirsty Dawg Rentals"
            width="520"
            height="390"
            className="promo-section__feature-image"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/gallery/kid-soft-serve.webp"
            alt="Kid enjoying soft serve ice cream"
            width="260"
            height="340"
            className="promo-section__image"
            loading="lazy"
            decoding="async"
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
          <h2 style={{ color: 'var(--td-blue-deep)', fontSize: '2.2rem', marginBottom: '0.75rem' }}>
            Frozen Drink Machine Leasing
          </h2>
          <p style={{ maxWidth: '780px', margin: '0 auto 1.25rem', lineHeight: 1.65, fontSize: '1.08rem' }}>
            Want frozen drinks available at your business, venue, or rental property year-round? Thirsty Dawg Rentals offers 6-month in-stock equipment leases plus 12-month and 24-month new equipment leases with delivery, setup, training, maintenance, and local support included.
          </p>
          <Link href="/frozen-drink-machine-leasing" className="btn-primary">
            Learn About Machine Leasing
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
            'Frozen Yogurt Rentals - New 2026 flavors for parties, schools, and office treats',
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
        <h2>Serving Pensacola and the Gulf Coast</h2>
        <p>
          Looking for frozen drink, soft serve, frozen yogurt, or ice cream cart rentals near you? We serve Pensacola and nearby Gulf Coast communities with delivery, setup, and pickup included.
        </p>
        <div className="seo-card-grid">
          <Link href="/service-areas/pensacola-fl" className="seo-card seo-card-link">
            <strong>Pensacola, FL</strong>
            <span>Frozen drink machines, soft serve, frozen yogurt, and ice cream cart rentals for local parties and events.</span>
          </Link>
          <Link href="/service-areas/gulf-breeze-fl" className="seo-card seo-card-link">
            <strong>Gulf Breeze, FL</strong>
            <span>Delivered frozen treat rentals for waterfront parties, schools, and wedding weekends.</span>
          </Link>
          <Link href="/service-areas/navarre-fl" className="seo-card seo-card-link">
            <strong>Navarre, FL</strong>
            <span>Slushie machines, soft serve, frozen yogurt, and stocked novelty carts for Navarre events.</span>
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
