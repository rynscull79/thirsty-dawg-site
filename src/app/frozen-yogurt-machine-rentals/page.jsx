import Link from 'next/link';
import FloatingBookNow from '@/components/FloatingBookNow';

export const metadata = {
  title: 'Frozen Yogurt Machine Rentals in Pensacola, FL | Thirsty Dawg',
  description:
    'Rent a frozen yogurt machine for parties, schools, weddings, office treats, pool parties, and Gulf Coast events. New 2026 frozen yogurt flavors from Thirsty Dawg Rentals with delivery, setup, and pickup included.',
  alternates: {
    canonical: 'https://www.thirstydawgrentals.com/frozen-yogurt-machine-rentals',
  },
  openGraph: {
    title: 'Frozen Yogurt Machine Rentals in Pensacola, FL | Thirsty Dawg',
    description:
      'Frozen yogurt is now available from Thirsty Dawg Rentals for Pensacola parties, schools, weddings, office treats, and Gulf Coast events.',
    images: ['https://www.thirstydawgrentals.com/gallery/frozen-yogurt-2026.jpg'],
    url: 'https://www.thirstydawgrentals.com/frozen-yogurt-machine-rentals',
    type: 'website',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

const styles = {
  page: {
    padding: '0 1rem 2.5rem',
  },
  hero: {
    maxWidth: '1100px',
    margin: '0 auto 2rem',
    padding: '3rem 1.5rem',
    borderRadius: '22px',
    background: 'linear-gradient(180deg, var(--td-blue) 0%, var(--td-blue-deep) 100%)',
    color: 'var(--td-white)',
    textAlign: 'center',
    boxShadow: 'var(--shadow-soft)',
  },
  h1: {
    maxWidth: '880px',
    margin: '0 auto',
    color: 'var(--td-white)',
    fontSize: 'clamp(2.1rem, 5vw, 3.7rem)',
    lineHeight: 1.1,
  },
  heroText: {
    maxWidth: '820px',
    margin: '1rem auto 0',
    color: 'var(--td-white)',
    fontSize: '1.12rem',
    lineHeight: 1.65,
  },
  actions: {
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '0.8rem',
    flexWrap: 'wrap',
  },
  section: {
    maxWidth: '1050px',
    margin: '1.5rem auto',
    padding: '2rem 1.5rem',
    borderRadius: '22px',
    background: 'rgba(255,255,255,0.96)',
    boxShadow: 'var(--shadow-soft)',
  },
  sectionAlt: {
    maxWidth: '1050px',
    margin: '1.5rem auto',
    padding: '2rem 1.5rem',
    borderRadius: '22px',
    background: '#fff8ef',
    border: '2px dashed rgba(247, 148, 29, 0.35)',
    boxShadow: 'var(--shadow-soft)',
  },
  h2: {
    color: 'var(--td-blue)',
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    margin: 0,
    textAlign: 'center',
    lineHeight: 1.1,
  },
  text: {
    maxWidth: '820px',
    margin: '0.9rem auto 0',
    lineHeight: 1.7,
    fontSize: '1.05rem',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: '1rem',
    marginTop: '1.25rem',
  },
  card: {
    padding: '1rem 1.1rem',
    borderRadius: '18px',
    background: 'linear-gradient(180deg, #eef9ff 0%, #dff4ff 100%)',
    border: '2px solid rgba(25, 181, 241, 0.18)',
    lineHeight: 1.6,
    color: 'var(--td-black)',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1rem',
    marginTop: '1.35rem',
    alignItems: 'stretch',
  },
  image: {
    display: 'block',
    width: '100%',
    height: '100%',
    maxHeight: '380px',
    objectFit: 'cover',
    borderRadius: '18px',
    boxShadow: 'var(--shadow-soft)',
  },
};

export default function FrozenYogurtMachineRentalsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Frozen Yogurt Machine Rentals in Pensacola, FL',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Thirsty Dawg Rentals',
      telephone: '850-572-3796',
      url: 'https://www.thirstydawgrentals.com',
      image: 'https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pensacola',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    areaServed: [
      'Pensacola, FL',
      'Gulf Breeze, FL',
      'Navarre, FL',
      'Milton, FL',
      'Pace, FL',
      'Perdido Key, FL',
      'Orange Beach, AL',
      'Foley, AL',
      'Fairhope, AL',
    ],
    serviceType: 'Frozen yogurt machine rental',
    description:
      'Frozen yogurt machine rentals for parties, schools, weddings, office treats, pool parties, and Gulf Coast events with delivery, setup, and pickup included.',
  };

  const flavors = [
    'Pina Colada',
    'Pineapple Whip',
    'Mango Whip',
    'Cookies & Cream',
    'Vanilla',
    'Birthday Cake',
  ];

  return (
    <main style={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={styles.hero}>
        <h1 style={styles.h1}>Frozen Yogurt Machine Rentals in Pensacola, FL</h1>
        <p style={styles.heroText}>
          Frozen yogurt is new for 2026 at Thirsty Dawg Rentals. Add it to birthdays,
          school events, office treats, weddings, pool parties, and summer get-togethers
          across Pensacola and the Gulf Coast.
        </p>
        <p style={styles.heroText}>
          We deliver the machine, set it up, show you how it works, and pick it up after
          your event so you can focus on your guests.
        </p>
        <div style={styles.actions}>
          <Link href="/booking" className="btn-primary">Book Frozen Yogurt</Link>
          <a href="tel:8505723796" className="btn-secondary">Call or Text (850) 572-3796</a>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Now Available With Our Soft Serve Rentals</h2>
        <p style={styles.text}>
          By popular demand, frozen yogurt flavors are joining the soft serve lineup
          along with the vanilla and chocolate soft serve everyone already loves.
          It is a simple dessert station that works for kids, adults, schools, offices,
          and casual Gulf Coast events.
        </p>
        <div style={styles.imageGrid}>
          <img
            src="/gallery/frozen-yogurt-2026.jpg"
            alt="Frozen yogurt flavor options available from Thirsty Dawg Rentals"
            style={styles.image}
          />
          <img
            src="/gallery/kid-soft-serve.webp"
            alt="Kid enjoying soft serve from a Thirsty Dawg Rentals machine"
            style={styles.image}
          />
        </div>
      </section>

      <section style={styles.sectionAlt}>
        <h2 style={styles.h2}>Frozen Yogurt Flavor Options</h2>
        <p style={styles.text}>
          Current frozen yogurt and soft serve flavor options may vary by date and
          availability, but these are the flavors we are featuring now.
        </p>
        <div style={styles.grid}>
          {flavors.map((flavor) => (
            <div key={flavor} style={styles.card}>
              <strong>{flavor}</strong>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Good Fits for Frozen Yogurt Rentals</h2>
        <div style={styles.grid}>
          {[
            'Birthday parties and backyard get-togethers',
            'School events, teacher appreciation, and summer programs',
            'Office treats and employee appreciation days',
            'Weddings, showers, and rehearsal weekends',
            'Pool parties, beach houses, and vacation rentals',
            'Church events, fundraisers, and community gatherings',
          ].map((item) => (
            <div key={item} style={styles.card}>{item}</div>
          ))}
        </div>
      </section>

      <section style={styles.sectionAlt}>
        <h2 style={styles.h2}>What Is Included?</h2>
        <div style={styles.grid}>
          <div style={styles.card}>Commercial soft serve / frozen yogurt machine</div>
          <div style={styles.card}>Delivery, setup, quick instructions, and pickup</div>
          <div style={styles.card}>Help choosing flavors and the right setup for your guest count</div>
          <div style={styles.card}>Local service across Pensacola and nearby Gulf Coast areas</div>
        </div>
        <p style={styles.text}>
          A dedicated 120V outlet on a 20 amp breaker is recommended for soft serve
          and frozen yogurt machines. We will confirm setup details before delivery.
        </p>
      </section>

      <section style={styles.hero}>
        <h2 style={{ ...styles.h2, color: 'var(--td-white)' }}>Ready to Add Frozen Yogurt to Your Event?</h2>
        <p style={styles.heroText}>
          Tell us your date, location, guest count, and favorite flavors. We will help
          you decide whether frozen yogurt, soft serve, or another frozen treat setup
          is the best fit.
        </p>
        <div style={styles.actions}>
          <Link href="/booking" className="btn-primary">Check Availability</Link>
          <Link href="/soft-serve-machine-rentals" className="btn-secondary">View Soft Serve Rentals</Link>
        </div>
      </section>

      <FloatingBookNow />
    </main>
  );
}
