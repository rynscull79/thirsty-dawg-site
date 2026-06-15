import Link from 'next/link';

const ARTICLE_URL =
  'https://www.thirstydawgrentals.com/resources/what-are-you-really-paying-for-with-a-frozen-drink-machine-rental';
const ARTICLE_IMAGE = 'https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp';

export const metadata = {
  title: 'What Are You Really Paying for With a Frozen Drink Machine Rental? | Thirsty Dawg Rentals',
  description:
    'Learn what professional frozen drink machine rental value should include: clean equipment, setup, maintenance, support, pickup, cleanup, and premium machines from companies that stand behind their products.',
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'What Are You Really Paying for With a Frozen Drink Machine Rental?',
    description:
      'A guide to understanding professional frozen drink machine rental value, equipment quality, setup, maintenance, and support.',
    images: [ARTICLE_IMAGE],
    url: ARTICLE_URL,
    type: 'article',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

const styles = {
  page: {
    padding: '0 1rem 3rem',
  },
  hero: {
    maxWidth: '1040px',
    margin: '0 auto 1.5rem',
    padding: '3rem 1.5rem',
    borderRadius: '22px',
    background: 'linear-gradient(180deg, var(--td-blue) 0%, var(--td-blue-deep) 100%)',
    color: 'var(--td-white)',
    boxShadow: 'var(--shadow-soft)',
  },
  kicker: {
    display: 'inline-block',
    marginBottom: '0.9rem',
    padding: '0.45rem 0.8rem',
    borderRadius: '999px',
    background: 'rgba(255,255,255,0.18)',
    border: '1px solid rgba(255,255,255,0.35)',
    color: 'var(--td-white)',
    fontWeight: 800,
  },
  h1: {
    maxWidth: '900px',
    color: 'var(--td-white)',
    fontSize: 'clamp(2.05rem, 5vw, 3.75rem)',
  },
  heroText: {
    maxWidth: '850px',
    marginTop: '1rem',
    color: 'var(--td-white)',
    fontSize: '1.13rem',
    lineHeight: 1.65,
  },
  meta: {
    marginTop: '1rem',
    color: 'rgba(255,255,255,0.88)',
    fontWeight: 700,
  },
  article: {
    maxWidth: '920px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
    borderRadius: '22px',
    background: 'rgba(255,255,255,0.97)',
    boxShadow: 'var(--shadow-soft)',
  },
  h2: {
    marginTop: '2.2rem',
    color: 'var(--td-blue-deep)',
    fontSize: 'clamp(1.55rem, 4vw, 2.2rem)',
  },
  p: {
    marginTop: '1rem',
    lineHeight: 1.72,
    fontSize: '1.05rem',
  },
  ul: {
    marginTop: '1rem',
    paddingLeft: '1.3rem',
    lineHeight: 1.85,
    fontSize: '1.05rem',
  },
  link: {
    color: 'var(--td-blue-deep)',
    fontWeight: 800,
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
  },
  callout: {
    marginTop: '1.5rem',
    padding: '1.25rem',
    borderRadius: '18px',
    background: '#fff8ef',
    border: '2px solid rgba(247, 148, 29, 0.3)',
    lineHeight: 1.65,
  },
  cta: {
    marginTop: '2.5rem',
    padding: '2rem 1.25rem',
    borderRadius: '22px',
    background: 'linear-gradient(180deg, var(--td-blue) 0%, var(--td-blue-deep) 100%)',
    color: 'var(--td-white)',
    textAlign: 'center',
  },
  ctaTitle: {
    color: 'var(--td-white)',
    fontSize: 'clamp(1.7rem, 4vw, 2.35rem)',
  },
  ctaText: {
    maxWidth: '720px',
    margin: '1rem auto 0',
    color: 'var(--td-white)',
    lineHeight: 1.65,
  },
  actions: {
    marginTop: '1.4rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '0.8rem',
    flexWrap: 'wrap',
  },
  primary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.85rem 1.15rem',
    borderRadius: '999px',
    background: 'var(--td-orange)',
    color: 'var(--td-black)',
    fontWeight: 900,
    boxShadow: 'var(--shadow-pop)',
  },
  secondary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.85rem 1.15rem',
    borderRadius: '999px',
    background: 'var(--td-white)',
    color: 'var(--td-blue-deep)',
    fontWeight: 900,
  },
};

export default function FrozenDrinkRentalValuePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Are You Really Paying for With a Frozen Drink Machine Rental?',
    description:
      'A guide to understanding professional frozen drink machine rental value, including equipment quality, setup, cleaning, maintenance, support, and service.',
    author: {
      '@type': 'Organization',
      name: 'Thirsty Dawg Rentals',
      url: 'https://www.thirstydawgrentals.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Thirsty Dawg Rentals',
      logo: {
        '@type': 'ImageObject',
        url: ARTICLE_IMAGE,
      },
    },
    mainEntityOfPage: ARTICLE_URL,
    image: ARTICLE_IMAGE,
  };

  return (
    <main style={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={styles.hero}>
        <span style={styles.kicker}>Frozen Drink Rental Guide</span>
        <h1 style={styles.h1}>What Are You Really Paying for With a Frozen Drink Machine Rental?</h1>
        <p style={styles.heroText}>
          When you rent a frozen drink machine for a party, wedding, school event, corporate
          gathering, beach house stay, or outdoor celebration, you are not just paying for a machine.
          You are paying for a service.
        </p>
        <p style={styles.meta}>
          Written by Thirsty Dawg Rentals, a Pensacola-based frozen drink machine rental company
          serving parties, weddings, schools, businesses, beach houses, and Gulf Coast events.
        </p>
      </section>

      <article style={styles.article}>
        <p style={styles.p}>
          You are paying for clean equipment, proper setup, dependable performance, maintenance,
          support, pickup, cleanup, and confidence that the company stands behind what they bring to
          your event.
        </p>
        <p style={styles.p}>That is why not every frozen drink machine rental is the same.</p>

        <h2 style={styles.h2}>A Rental Should Be More Than a Machine Drop-Off</h2>
        <p style={styles.p}>
          Frozen drink machines are easy to find online, and some machines can be purchased at
          relatively low prices. That does not mean those machines cannot make frozen drinks.
        </p>
        <p style={styles.p}>
          But when a customer is paying professional rental pricing, they should receive professional
          rental value.
        </p>
        <p style={styles.p}>
          A good rental should include more than someone buying a low-cost machine, dropping it off,
          and charging event-level prices. Customers deserve to know what they are actually paying for.
        </p>
        <p style={styles.p}>
          Are they getting a complete rental service, or are they simply paying to use a machine for
          the weekend?
        </p>
        <p style={styles.p}>
          Think of it like renting a luxury vehicle and a basic economy car for the same price. Both
          may have four wheels and get you down the road, but most customers would expect the option
          built for comfort, performance, and reliability if the price is the same. Frozen drink
          machine rentals work the same way. If two companies charge similar rental prices, the
          quality of the equipment and the service behind it matter.
        </p>
        <p style={styles.p}>
          When a rental company invests in premium equipment from established manufacturers, the
          customer benefits from more than the machine itself. They benefit from better support,
          better serviceability, and equipment chosen for repeated event use.
        </p>

        <h2 style={styles.h2}>The Machine Is Only One Part of the Rental</h2>
        <p style={styles.p}>
          A frozen drink machine rental should include preparation, setup, cleanliness, maintenance,
          and support.
        </p>
        <p style={styles.p}>
          For a real event, the rental company should make sure the equipment is clean, inspected,
          ready to use, and appropriate for the event. The company should understand how the machine
          works, what power it needs, where it should be placed, how to prepare the mix, and what to
          do if there is a problem.
        </p>
        <p style={styles.p}>
          That is the difference between renting equipment and hiring a professional rental service.
        </p>

        <h2 style={styles.h2}>Why Reliability and Support Matter</h2>
        <p style={styles.p}>
          Frozen drink machines are mechanical equipment. They have refrigeration systems, motors,
          seals, bowls, controls, handles, and moving parts.
        </p>
        <p style={styles.p}>For personal use, a machine problem is frustrating.</p>
        <p style={styles.p}>For a paid event, it can affect the customer&apos;s party.</p>
        <p style={styles.p}>
          That is why maintenance and serviceability matter. A rental business should be able to
          clean, inspect, maintain, and support the equipment it sends out. If parts are hard to find,
          support is limited, or the machine cannot be repaired quickly, that becomes part of the risk
          the customer is unknowingly renting.
        </p>
        <p style={styles.p}>
          A professional rental service should not be built only around the lowest upfront equipment
          cost. It should be built around reliability, preparation, maintenance, and customer support.
        </p>

        <h2 style={styles.h2}>What Professional Rental Value Should Include</h2>
        <p style={styles.p}>
          When you rent a frozen drink machine, you should expect more than the machine itself.
        </p>
        <p style={styles.p}>A professional rental should include:</p>
        <ul style={styles.ul}>
          <li>Clean, maintained equipment</li>
          <li>Delivery and setup</li>
          <li>Proper placement guidance</li>
          <li>Power requirement guidance</li>
          <li>Drink mix planning</li>
          <li>A clean, professional-looking setup</li>
          <li>Pickup after the event</li>
          <li>Cleaning handled for you</li>
          <li>Support from someone who understands the equipment</li>
        </ul>
        <p style={styles.p}>
          That is what separates a real rental service from someone simply charging rental prices for
          a machine they bought online.
        </p>

        <h2 style={styles.h2}>Questions Customers Should Ask Before Renting</h2>
        <p style={styles.p}>
          Before booking a frozen drink machine rental, it is fair to ask what is included.
        </p>
        <ul style={styles.ul}>
          <li>What type of machine will be delivered?</li>
          <li>Is it cleaned and maintained between rentals?</li>
          <li>Who sets it up?</li>
          <li>What power does it need?</li>
          <li>Is drink mix included or planned for?</li>
          <li>What happens if there is a problem?</li>
          <li>Is pickup and cleanup included?</li>
          <li>Am I paying for a complete service or just the use of a machine?</li>
        </ul>
        <p style={styles.p}>These are reasonable questions because customers deserve transparency.</p>

        <h2 style={styles.h2}>What Thirsty Dawg Rentals Focuses On</h2>
        <p style={styles.p}>
          At Thirsty Dawg Rentals, we do not look at frozen drink machine rentals as simply dropping
          off equipment. We look at the full event experience.
        </p>
        <p style={styles.p}>
          That means thinking about cleanliness, setup, power requirements, drink mix planning,
          reliability, customer support, pickup, cleanup, and the kind of event being hosted.
        </p>
        <p style={styles.p}>
          We also believe the equipment itself matters. Thirsty Dawg Rentals uses premium frozen drink
          machines from American-owned companies that stand behind their products. That matters
          because rental equipment needs to be reliable, serviceable, and supported. If a machine
          needs parts, maintenance, or technical support, we want to know there is a real company
          behind it.
        </p>
        <p style={styles.p}>
          Our goal is to bring equipment and service that fit the event, not just place a machine on
          a table and call it done.
        </p>
        <p style={styles.p}>
          For parties, weddings, schools, businesses, vacation rentals, beach houses, and outdoor
          gatherings in Pensacola, Gulf Breeze, Navarre, Milton, Pace, Perdido Key, Foley, Fairhope,
          Spanish Fort, Daphne, and nearby Gulf Coast areas, customers need more than a machine that
          technically works. They need a setup they can trust.
        </p>

        <div style={styles.callout}>
          <strong>The bottom line:</strong> A frozen drink machine rental should be more than a
          low-cost machine rented out at professional prices. Customers deserve clean equipment,
          proper setup, reliable service, maintenance, support, and a company that stands behind the
          rental.
        </div>

        <p style={styles.p}>
          You are not just renting a machine. You are paying for confidence that the drinks will be
          ready, the setup will be handled, and the rental company will support the event from start
          to finish.
        </p>

        <section style={styles.cta}>
          <h2 style={styles.ctaTitle}>Planning a Gulf Coast Event?</h2>
          <p style={styles.ctaText}>
            Thirsty Dawg Rentals handles delivery, setup, pickup, and cleanup for frozen drink
            machine rentals in Pensacola and nearby Gulf Coast areas.
          </p>
          <div style={styles.actions}>
            <Link href="/booking" style={styles.primary}>Book a Frozen Drink Machine</Link>
            <Link href="/contact" style={styles.secondary}>Ask a Question</Link>
          </div>
        </section>

        <p style={styles.p}>
          Related pages:
          {' '}<Link href="/frozen-drink-machine-rentals" style={styles.link}>frozen drink machine rentals</Link>,
          {' '}<Link href="/rentals" style={styles.link}>rentals</Link>,
          {' '}<Link href="/resources" style={styles.link}>resources</Link>.
        </p>
      </article>
    </main>
  );
}
