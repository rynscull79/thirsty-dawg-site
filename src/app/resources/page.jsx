import Link from 'next/link';

export const metadata = {
  title: 'Frozen Drink Machine Resources | Thirsty Dawg Rentals',
  description:
    'Helpful frozen drink machine rental resources from Thirsty Dawg Rentals for Pensacola, Gulf Coast events, restaurants, bars, schools, weddings, and parties.',
  alternates: {
    canonical: 'https://www.thirstydawgrentals.com/resources',
  },
  openGraph: {
    title: 'Frozen Drink Machine Resources | Thirsty Dawg Rentals',
    description:
      'Helpful frozen drink machine rental guides from Thirsty Dawg Rentals for Gulf Coast events and businesses.',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/resources',
    type: 'website',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

const styles = {
  page: {
    padding: '0 1rem 3rem',
  },
  hero: {
    maxWidth: '1040px',
    margin: '0 auto 2rem',
    padding: '3rem 1.5rem',
    borderRadius: '22px',
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
    fontWeight: 800,
  },
  h1: {
    maxWidth: '820px',
    margin: '0 auto',
    color: 'var(--td-white)',
    fontSize: 'clamp(2.15rem, 5vw, 4rem)',
  },
  heroText: {
    maxWidth: '760px',
    margin: '1rem auto 0',
    color: 'var(--td-white)',
    fontSize: '1.12rem',
    lineHeight: 1.65,
  },
  grid: {
    maxWidth: '1040px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '260px',
    padding: '1.35rem',
    borderRadius: '18px',
    background: 'rgba(255,255,255,0.96)',
    border: '2px solid rgba(25, 181, 241, 0.18)',
    boxShadow: 'var(--shadow-soft)',
  },
  cardKicker: {
    color: 'var(--td-orange)',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: 0,
    fontSize: '0.85rem',
  },
  h2: {
    marginTop: '0.65rem',
    color: 'var(--td-blue-deep)',
    fontSize: '1.65rem',
  },
  text: {
    marginTop: '0.85rem',
    lineHeight: 1.65,
    fontSize: '1.02rem',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    marginTop: 'auto',
    padding: '0.8rem 1rem',
    borderRadius: '999px',
    background: 'var(--td-orange)',
    color: 'var(--td-black)',
    fontWeight: 900,
    boxShadow: 'var(--shadow-pop)',
  },
};

export default function ResourcesPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <span style={styles.kicker}>Thirsty Dawg Resources</span>
        <h1 style={styles.h1}>Frozen Drink Machine Guides for Events and Businesses</h1>
        <p style={styles.heroText}>
          Practical answers from Thirsty Dawg Rentals for customers comparing frozen drink machines,
          planning Gulf Coast events, or looking at machine leasing options for a business.
        </p>
      </section>

      <section style={styles.grid} aria-label="Resource articles">
        <article style={styles.card}>
          <span style={styles.cardKicker}>Business Leasing</span>
          <h2 style={styles.h2}>Frozen Drink Machine Leasing vs Buying</h2>
          <p style={styles.text}>
            Compare leasing and owning a frozen drink machine for bars, restaurants, venues, resorts,
            and Gulf Coast businesses that want to add frozen drinks without guessing wrong on equipment.
          </p>
          <Link
            href="/resources/frozen-drink-machine-leasing-vs-buying"
            style={styles.button}
          >
            Read the guide
          </Link>
        </article>

        <article style={styles.card}>
          <span style={styles.cardKicker}>Machine Count</span>
          <h2 style={styles.h2}>How Many Frozen Drink Machines Do You Need for a Party?</h2>
          <p style={styles.text}>
            Learn how guest count, drink options, free drinks, multiple flavors, and event size affect
            whether one machine is enough or a custom recommendation makes more sense.
          </p>
          <Link
            href="/resources/how-many-frozen-drink-machines-do-you-need"
            style={styles.button}
          >
            Read the guide
          </Link>
        </article>

        <article style={styles.card}>
          <span style={styles.cardKicker}>Rental Value</span>
          <h2 style={styles.h2}>What Are You Really Paying for With a Frozen Drink Machine Rental?</h2>
          <p style={styles.text}>
            Learn why a professional frozen drink machine rental should include clean equipment,
            setup, support, maintenance, and premium machines from companies that stand behind their
            products.
          </p>
          <Link
            href="/resources/what-are-you-really-paying-for-with-a-frozen-drink-machine-rental"
            style={styles.button}
          >
            Read the guide
          </Link>
        </article>

        <article style={styles.card}>
          <span style={styles.cardKicker}>Party Planning</span>
          <h2 style={styles.h2}>Frozen Drink Machine Rental vs DIY Frozen Drinks</h2>
          <p style={styles.text}>
            Compare DIY frozen drinks, home frozen drink machines, and party-size frozen drink machine
            rentals for Gulf Coast parties, weddings, beach houses, and events.
          </p>
          <Link
            href="/resources/frozen-drink-machine-rental-vs-diy-frozen-drinks"
            style={styles.button}
          >
            Read the guide
          </Link>
        </article>

        <article style={styles.card}>
          <span style={styles.cardKicker}>Outdoor Events</span>
          <h2 style={styles.h2}>Do Frozen Drink Machines Work Outdoors in Florida Heat?</h2>
          <p style={styles.text}>
            Learn how frozen drink machines perform at outdoor Gulf Coast events, including shade,
            dedicated 20 amp power, guest count, and why stainless steel machines are a better fit
            for Florida heat.
          </p>
          <Link
            href="/resources/do-frozen-drink-machines-work-outdoors-in-florida-heat"
            style={styles.button}
          >
            Read the guide
          </Link>
        </article>

        <article style={styles.card}>
          <span style={styles.cardKicker}>Frozen Drink Machines</span>
          <h2 style={styles.h2}>Plastic Bowl vs Stainless Steel Frozen Drink Machines</h2>
          <p style={styles.text}>
            Learn when plastic bowl machines make sense, why Thirsty Dawg does not use them for
            short-term event rentals, and why commercial stainless steel machines are better for
            parties, weddings, schools, and outdoor Gulf Coast events.
          </p>
          <Link
            href="/resources/plastic-bowl-vs-stainless-steel-frozen-drink-machines"
            style={styles.button}
          >
            Read the guide
          </Link>
        </article>
      </section>
    </main>
  );
}
