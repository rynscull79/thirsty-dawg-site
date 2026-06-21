import Link from 'next/link';

export const metadata = {
  title: 'Frozen Drink Machine Leasing | Pensacola & Gulf Coast',
  description:
    'Lease a commercial frozen drink machine for your business, venue, bar, restaurant, beach rental, or event space. Thirsty Dawg Rentals supports recurring lease customers with delivery, setup, training, maintenance, and local support.',
  alternates: {
    canonical: 'https://www.thirstydawgrentals.com/frozen-drink-machine-leasing',
  },
  openGraph: {
    title: 'Frozen Drink Machine Leasing | Thirsty Dawg Rentals',
    description:
      'Add frozen drinks to your business without buying a machine upfront. Frozen drink machine lease options are available across Pensacola and the Gulf Coast.',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/frozen-drink-machine-leasing',
    type: 'website',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

const styles = {
  page: {
    padding: '0 1rem 3rem',
  },
  hero: {
    maxWidth: '1120px',
    margin: '0 auto 2rem',
    padding: '3rem 1.5rem',
    borderRadius: '24px',
    background: 'linear-gradient(180deg, var(--td-blue) 0%, var(--td-blue-deep) 100%)',
    color: 'var(--td-white)',
    textAlign: 'center',
    boxShadow: 'var(--shadow-soft)',
  },
  kicker: {
    display: 'inline-block',
    marginBottom: '0.9rem',
    padding: '0.45rem 0.8rem',
    borderRadius: '999px',
    background: 'rgba(255,255,255,0.18)',
    border: '1px solid rgba(255,255,255,0.35)',
    fontWeight: 700,
  },
  h1: {
    maxWidth: '900px',
    margin: '0 auto',
    color: 'var(--td-white)',
    fontSize: 'clamp(2.15rem, 5vw, 4rem)',
  },
  heroText: {
    maxWidth: '860px',
    margin: '1rem auto 0',
    color: 'var(--td-white)',
    fontSize: '1.15rem',
    lineHeight: 1.65,
  },
  actions: {
    marginTop: '1.5rem',
    display: 'flex',
    gap: '0.8rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.85rem 1.2rem',
    borderRadius: '999px',
    background: 'var(--td-orange)',
    color: 'var(--td-black)',
    fontWeight: 800,
    boxShadow: 'var(--shadow-pop)',
  },
  secondary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.85rem 1.2rem',
    borderRadius: '999px',
    background: 'var(--td-white)',
    color: 'var(--td-blue-deep)',
    fontWeight: 800,
  },
  section: {
    maxWidth: '1120px',
    margin: '1.5rem auto',
    padding: '2rem 1.5rem',
    borderRadius: '22px',
    background: 'rgba(255,255,255,0.96)',
    boxShadow: 'var(--shadow-soft)',
  },
  photoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1rem',
    marginTop: '1.35rem',
  },
  photoCard: {
    overflow: 'hidden',
    borderRadius: '20px',
    background: 'var(--td-white)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
    border: '2px solid rgba(25, 181, 241, 0.16)',
  },
  photo: {
    display: 'block',
    width: '100%',
    height: '260px',
    objectFit: 'cover',
  },
  photoCaption: {
    padding: '0.85rem 1rem',
    fontWeight: 700,
    color: 'var(--td-black)',
    lineHeight: 1.45,
  },
  sectionAlt: {
    maxWidth: '1120px',
    margin: '1.5rem auto',
    padding: '2rem 1.5rem',
    borderRadius: '22px',
    background: '#fff8ef',
    border: '2px dashed rgba(247, 148, 29, 0.35)',
    boxShadow: 'var(--shadow-soft)',
  },
  h2: {
    color: 'var(--td-blue)',
    fontSize: 'clamp(1.8rem, 4vw, 2.7rem)',
    textAlign: 'center',
    marginBottom: '0.8rem',
  },
  text: {
    maxWidth: '880px',
    margin: '0.75rem auto 0',
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
    padding: '1rem',
    borderRadius: '18px',
    background: 'linear-gradient(180deg, #eef9ff 0%, #dff4ff 100%)',
    border: '2px solid rgba(25, 181, 241, 0.18)',
    lineHeight: 1.55,
    fontWeight: 650,
  },
  textLink: {
    color: 'var(--td-blue-deep)',
    fontWeight: 900,
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
  },
  split: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1rem',
    marginTop: '1.25rem',
  },
  planCard: {
    padding: '1.25rem',
    borderRadius: '18px',
    background: 'var(--td-white)',
    border: '2px solid rgba(247, 148, 29, 0.28)',
    lineHeight: 1.65,
  },
  ul: {
    margin: '1rem auto 0',
    paddingLeft: '1.2rem',
    maxWidth: '760px',
    lineHeight: 1.75,
  },
};

export default function FrozenDrinkMachineLeasingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Frozen Drink Machine Leasing',
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
    areaServed: ['Pensacola, FL', 'Gulf Breeze, FL', 'Navarre, FL', 'Milton, FL', 'Pace, FL', 'Perdido Key, FL', 'Gulf Coast'],
    description:
      'Frozen drink machine leasing with 6-month in-stock equipment leases plus 12-month and 24-month new equipment lease options for businesses, venues, bars, restaurants, vacation rentals, and event spaces across Pensacola and the Gulf Coast.',
  };

  const included = [
    '6-month, 12-month, and 24-month lease options',
    'New equipment options for 12-month and 24-month leases',
    'Lower monthly payments available with longer lease terms',
    'Commercial-grade frozen drink machines',
    'Delivery and setup included',
    'Training provided for your team',
    'Maintenance handled by Thirsty Dawg Rentals',
    'Replacement machine within 48 hours if equipment issues occur',
    'Mix available for lease customers',
    'Option to create your own drink menu or branding',
  ];

  const fits = [
    'Bars and restaurants',
    'Hotels and resorts',
    'Beach houses and vacation rentals',
    'Wedding and event venues',
    'Pool clubs and neighborhood amenities',
    'RV parks and campgrounds',
    'Bowling alleys and entertainment centers',
    'Tourist-heavy Gulf Coast businesses',
  ];

  return (
    <main style={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={styles.hero}>
        <span style={styles.kicker}>Frozen Drink Machine Leasing</span>
        <h1 style={styles.h1}>Add Frozen Drinks to Your Business Without Buying a Machine Upfront</h1>
        <p style={styles.heroText}>
          Thirsty Dawg Rentals offers frozen drink machine leasing for Gulf Coast businesses, venues, and rental properties that want a simple way to serve frozen beverages for a season or year-round.
        </p>
        <p style={styles.heroText}>
          We deliver, set up, train your team, and handle machine maintenance so you can focus on serving your guests.
        </p>
        <p style={styles.heroText}>
          Not sure which machine fits your location? We’ll help you choose the right setup for your space, expected volume, and drink menu. Already know exactly what you want? We can lease that to you too.
        </p>
        <div style={styles.actions}>
          <Link href="/contact?topic=frozen-drink-machine-leasing" style={styles.primary}>Request Lease Pricing</Link>
          <a href="tel:8505723796" style={styles.secondary}>Call or Text (850) 572-3796</a>
        </div>
      </section>

      <section style={styles.sectionAlt}>
        <h2 style={styles.h2}>Built for Ongoing Business Use</h2>
        <p style={styles.text}>
          Our machine lease program is designed for businesses that want frozen drinks available beyond a single event. We help with machine selection, delivery, setup, team training, maintenance, and local support.
        </p>
        <div style={styles.grid}>
          <div style={styles.card}>Good for seasonal or year-round drink programs</div>
          <div style={styles.card}>Machine options based on your space and expected volume</div>
          <div style={styles.card}>Local delivery, setup, training, maintenance, and support</div>
          <div style={styles.card}>Guidance on machine choice, volume needs, flavors, and setup</div>
        </div>
        <p style={styles.text}>
          Whether you are adding frozen drinks to a bar, venue, office, rental property, or guest-facing business, we can help you choose a setup that fits your space and how your team will use the machine day to day.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>A Simple Way to Offer Frozen Drinks</h2>
        <p style={styles.text}>
          Frozen drinks are a crowd favorite for bars, restaurants, resorts, event venues, pool areas, beach rentals, and entertainment spaces. With a machine lease, you can offer frozen beverages without the large upfront cost of purchasing your own commercial machine.
        </p>
        <div style={styles.photoGrid}>
          <figure style={styles.photoCard}>
            <img src="/gallery/leasing-bar-machine-lineup.jpg" alt="Multiple frozen drink machines lined up behind a bar" style={styles.photo} />
            <figcaption style={styles.photoCaption}>Multiple flavors lined up behind the bar can turn frozen drinks into a visible, menu-worthy attraction.</figcaption>
          </figure>
          <figure style={styles.photoCard}>
            <img src="/gallery/Bunn-Ultra-2.webp" alt="Commercial frozen drink machine dispensing frozen beverages" style={styles.photo} />
            <figcaption style={styles.photoCaption}>Commercial-grade machines for frozen drinks, slushies, and specialty beverages.</figcaption>
          </figure>
          <figure style={styles.photoCard}>
            <img src="/gallery/Taylor-430.webp" alt="Frozen drink machine set up on a commercial bar counter" style={styles.photo} />
            <figcaption style={styles.photoCaption}>A strong fit for bars, restaurants, venues, resorts, and guest-facing businesses.</figcaption>
          </figure>
        </div>
        <p style={styles.text}>
          We can help you decide whether a single-flavor, dual-flavor, or higher-output setup makes the most sense for your business. If you already know the machine type you want, we can build the lease around that machine and your location.
        </p>
        <p style={styles.text}>
          Lease pricing depends on machine type, lease term, business location, and setup needs. We offer 6-month leases on select in-stock equipment, plus 12-month and 24-month new equipment lease options. Monthly lease options are available for many businesses starting in the low $200s, depending on equipment and term.
        </p>
      </section>

      <section style={styles.sectionAlt}>
        <h2 style={styles.h2}>What’s Included</h2>
        <div style={styles.grid}>
          {included.map((item) => <div key={item} style={styles.card}>✅ {item}</div>)}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Why Lease a Frozen Drink Machine?</h2>
        <p style={styles.text}>
          Leasing gives businesses a practical way to add frozen drinks without tying up thousands of dollars in equipment upfront. It can also make more sense when you want local setup, training, maintenance, and help choosing the right machine before committing to ownership.
        </p>
        <div style={styles.grid}>
          <div style={styles.card}>Start serving frozen drinks without buying a commercial machine outright.</div>
          <div style={styles.card}>Test demand before deciding whether ownership makes sense.</div>
          <div style={styles.card}>Get local delivery, setup, training, maintenance, and support included.</div>
          <div style={styles.card}>Choose a lease term that matches seasonal demand or long-term business plans.</div>
        </div>
        <p style={styles.text}>
          Comparing leasing with buying? Read our guide to{' '}
          <Link href="/resources/frozen-drink-machine-leasing-vs-buying" style={styles.textLink}>
            frozen drink machine leasing vs buying
          </Link>.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Great For</h2>
        <p style={styles.text}>
          If your guests would enjoy frozen drinks, a machine lease may be a simple way to add a fun, high-demand offering.
        </p>
        <div style={styles.grid}>
          {fits.map((item) => <div key={item} style={styles.card}>🍹 {item}</div>)}
        </div>
      </section>

      <section style={styles.sectionAlt}>
        <h2 style={styles.h2}>Lease Options</h2>
        <div style={styles.split}>
          <article style={styles.planCard}>
            <h3>6-Month Seasonal Lease</h3>
            <p>Available on select in-stock equipment. A flexible option for seasonal businesses, venues testing frozen drinks, or locations that want frozen beverages during peak months.</p>
          </article>
          <article style={styles.planCard}>
            <h3>12-Month New Equipment Lease</h3>
            <p>Best for businesses that want a dedicated machine with a standard one-year commitment. New equipment placements require a 12-month minimum.</p>
          </article>
          <article style={styles.planCard}>
            <h3>24-Month New Equipment Lease</h3>
            <p>Best monthly value. Includes new equipment with a lower monthly payment for businesses planning ongoing frozen drink service.</p>
          </article>
        </div>
        <p style={styles.text}>
          Monthly pricing depends on machine type, lease term, location, and setup needs. Many lease options start in the low $200s per month, depending on equipment and term. Contact us for a custom quote.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Mix Options</h2>
        <p style={styles.text}>
          Drink mix is available for lease customers. We can help you choose flavors that fit your business, event space, or customer base.
        </p>
        <div style={{ ...styles.photoGrid, maxWidth: '620px', marginInline: 'auto' }}>
          <figure style={styles.photoCard}>
            <img src="/gallery/premier-mix.webp" alt="Frozen drink mix available for machine lease customers" style={styles.photo} />
            <figcaption style={styles.photoCaption}>Mix options are available, with future lease-customer incentives being evaluated.</figcaption>
          </figure>
        </div>
        <p style={styles.text}>
          Optional mix programs and lease customer incentives may be available. Ask about current mix options when requesting lease pricing.
        </p>
      </section>

      <section style={styles.sectionAlt}>
        <h2 style={styles.h2}>Who Handles What?</h2>
        <div style={styles.split}>
          <article style={styles.planCard}>
            <h3>Thirsty Dawg Rentals handles:</h3>
            <ul style={styles.ul}>
              <li>Delivery and setup</li>
              <li>Initial training</li>
              <li>Machine maintenance</li>
              <li>Local support</li>
              <li>Replacement machine within 48 hours if equipment issues occur</li>
            </ul>
          </article>
          <article style={styles.planCard}>
            <h3>The customer handles:</h3>
            <ul style={styles.ul}>
              <li>Keeping the machine clean</li>
              <li>Daily operation</li>
              <li>Serving guests or customers</li>
              <li>Creating drink menus, pricing, and branding if desired</li>
            </ul>
          </article>
        </div>
        <p style={styles.text}>
          Alcohol businesses are welcome. Thirsty Dawg Rentals provides the machine and non-alcoholic mix options; businesses are responsible for following all applicable alcohol laws and requirements.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Service Area</h2>
        <p style={styles.text}>
          Frozen drink machine leases are available in Pensacola and surrounding Gulf Coast areas. Distance may affect lease pricing depending on location and support needs.
        </p>
        <p style={styles.text}>
          If you are outside our standard delivery area, reach out anyway. Lease locations may be considered on a case-by-case basis.
        </p>
      </section>

      <section style={styles.hero}>
        <h2 style={{ ...styles.h2, color: 'var(--td-white)' }}>Interested in a Frozen Drink Machine Lease?</h2>
        <p style={styles.heroText}>
          Tell us a little about your business and what you’re looking for. We’ll help you choose the right machine, lease term, and setup for your location — or lease the specific machine you already have in mind.
        </p>
        <div style={styles.actions}>
          <Link href="/contact?topic=frozen-drink-machine-leasing" style={styles.primary}>Request Lease Pricing</Link>
          <a href="tel:8505723796" style={styles.secondary}>Call or Text (850) 572-3796</a>
        </div>
      </section>
    </main>
  );
}
