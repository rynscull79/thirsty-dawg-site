'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import styles from './page.module.css';

const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));
const GallerySection = dynamic(() => import('@/components/GallerySection'), { ssr: false });
const ReviewSlider = dynamic(() => import('@/components/ReviewSlider'), { ssr: false });
const DeliveryArea = dynamic(() => import('@/components/DeliveryArea'), {
  ssr: false,
  loading: () => <div>Loading delivery area...</div>,
});

export default function HomeClient() {
  return (
    <div>
      <section className={styles.hero}>
        <h1
          style={{
            fontFamily: '"Chewy", cursive',
            fontSize: '2.5rem',
            lineHeight: '1.2',
            textAlign: 'center',
          }}
        >
          🧊 Frozen Drink Machines, Soft Serve Machines & Ice Cream Carts — Pensacola, FL
        </h1>

        <p
          style={{
            fontSize: '1.2rem',
            marginTop: '1rem',
            maxWidth: '700px',
            marginInline: 'auto',
            textAlign: 'center',
          }}
        >
          Rent commercial-grade frozen drink machines, soft serve ice cream machines, and fully-stocked novelty ice cream
          carts for parties, schools, weddings, and events across Pensacola, Gulf Breeze, Navarre, Milton, Pace, and nearby
          areas.
        </p>

        <p style={{ marginTop: '0.85rem', fontSize: '1.05rem', textAlign: 'center' }}>
          Local delivery & setup (no shipping). Fast booking, friendly support, and 5-star service.
        </p>

        <p style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center' }}>
          📞 Call or text us:{' '}
          <a href="tel:8505723796" style={{ color: 'white', textDecoration: 'underline' }}>
            (850) 572-3796
          </a>
        </p>

        <div
          style={{
            marginTop: '1.25rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/rentals">
            <button
              style={{
                padding: '12px 22px',
                fontSize: '1.05rem',
                backgroundColor: '#ff6f00',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontFamily: '"Chewy", cursive',
              }}
            >
              🍹 View Rentals
            </button>
          </Link>

          <Link href="/booking">
            <button
              style={{
                padding: '12px 22px',
                fontSize: '1.05rem',
                backgroundColor: '#007bb5',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontFamily: '"Chewy", cursive',
              }}
            >
              ✅ Book Now
            </button>
          </Link>
        </div>
      </section>

      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          padding: '20px 0',
        }}
      >
        <img
          src="/gallery/mardi-gras-party.webp"
          alt="Woman in costume pouring mix into a frozen drink machine for a Mardi Gras party rental in Pensacola"
          style={{
            width: '100%',
            maxWidth: '320px',
            height: '427px',
            borderRadius: '1rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            objectFit: 'cover',
          }}
        />

        <img
          src="/gallery/frozen-drinks-and-softserve.webp"
          alt="Frozen drink and soft serve ice cream rental machines set up for a party in Pensacola, Florida"
          style={{
            width: '100%',
            maxWidth: '320px',
            height: '427px',
            borderRadius: '1rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            objectFit: 'cover',
          }}
        />

        <img
          src="/gallery/ice-cream-bar.webp"
          alt="Ice cream party setup with frozen novelties"
          style={{
            width: '100%',
            maxWidth: '320px',
            height: '427px',
            borderRadius: '1rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            objectFit: 'cover',
          }}
        />
      </section>

      <section
        style={{
          backgroundColor: '#fef9f4',
          padding: '40px 20px',
          margin: '40px 0',
          borderRadius: '16px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', marginBottom: '2rem' }}>
          <h2
            style={{
              fontSize: '2.4rem',
              marginBottom: '20px',
              color: '#009fdb',
              fontFamily: '"Chewy", cursive',
            }}
          >
            🎉 New Frozen Treat Rentals for 2025!
          </h2>

          <p
            style={{
              fontSize: '1.3rem',
              marginBottom: '25px',
              color: '#009fdb',
              fontWeight: 'bold',
              fontFamily: '"Chewy", cursive',
            }}
          >
            We&apos;re now serving up Soft Serve AND fully-stocked Ice Cream Carts — perfect for parties, schools, weddings,
            and more!
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            <Link href="/booking">
              <button
                style={{
                  padding: '12px 24px',
                  fontSize: '1.1rem',
                  backgroundColor: '#ff6f00',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontFamily: '"Chewy", cursive',
                }}
              >
                🍦 Book Soft Serve
              </button>
            </Link>

            <Link href="/icecream">
              <button
                style={{
                  padding: '12px 24px',
                  fontSize: '1.1rem',
                  backgroundColor: '#007bb5',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontFamily: '"Chewy", cursive',
                }}
              >
                🍧 View Ice Cream Packages
              </button>
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          <img
            src="/gallery/kid-soft-serve.webp"
            alt="Kid enjoying soft serve ice cream"
            width="260"
            height="340"
            style={{
              width: '100%',
              maxWidth: '260px',
              borderRadius: '1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
          <img
            src="/gallery/frozen_novelties_cart.webp"
            alt="Fully-stocked frozen novelty cart"
            width="260"
            height="340"
            style={{
              width: '100%',
              maxWidth: '260px',
              borderRadius: '1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
          <img
            src="/gallery/wedding_novelty_cart.webp"
            alt="Wedding-themed novelty cart"
            width="260"
            height="340"
            style={{
              width: '100%',
              maxWidth: '260px',
              borderRadius: '1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
        </div>
      </section>

      <GallerySection />
      <ReviewSlider />
      <FloatingBookNow />

      <section className={styles.section} style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem' }}>
        <h3
          style={{
            textAlign: 'center',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#009fdb',
            marginBottom: '1.5rem',
          }}
        >
          🍹 Why Choose Thirsty Dawg Rentals?
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
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
            <div
              key={index}
              style={{
                backgroundColor: '#e6f4fd',
                padding: '1rem',
                borderRadius: '0.75rem',
                fontWeight: 'bold',
                color: '#1f2937',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                textAlign: 'center',
              }}
            >
              {reason}
            </div>
          ))}
        </div>
      </section>

            <section
        style={{
          padding: '50px 20px',
          margin: '40px 0',
          borderRadius: '16px',
          backgroundColor: '#f8fbff',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              color: '#009fdb',
              marginBottom: '1rem',
              fontFamily: '"Chewy", cursive',
            }}
          >
            Planning a Larger Event?
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#1f2937',
              marginBottom: '1.5rem',
            }}
          >
            If you need more than frozen drinks or ice cream, you can explore
            additional party and event services like bartenders, DJs, catering,
            rentals, and more across the Gulf Coast.
          </p>

          <a
            href="https://www.gulfcoasteventhub.com"
            style={{
              display: 'inline-block',
              padding: '12px 22px',
              backgroundColor: '#1E5FAF',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
            }}
          >
            Explore Gulf Coast Event Hub
          </a>
        </div>
      </section>

      <DeliveryArea />
    </div>
  );
}