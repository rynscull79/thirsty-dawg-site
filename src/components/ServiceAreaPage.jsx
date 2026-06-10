import Link from 'next/link';
import { absoluteUrl, businessName, coreServices, localBusinessSchema, phoneDisplay, phoneHref } from '@/lib/seoData';

export function serviceAreaMetadata(area) {
  const title = `${area.headline} | Thirsty Dawg Rentals`;
  const description = `${area.intro} Delivery, setup, and pickup included. Call or text ${phoneDisplay} to check availability.`;
  const url = absoluteUrl(`/service-areas/${area.slug}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [`${absoluteUrl('/thirsty-dawg-logo.webp')}`],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${absoluteUrl('/thirsty-dawg-logo.webp')}`],
    },
  };
}

export default function ServiceAreaPage({ area }) {
  const pageUrl = absoluteUrl(`/service-areas/${area.slug}`);
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: area.headline,
    provider: { '@id': `${absoluteUrl('/')}#localbusiness`, name: businessName },
    serviceType: coreServices,
    areaServed: {
      '@type': 'City',
      name: `${area.city}, ${area.state}`,
    },
    url: pageUrl,
    description: area.intro,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do you deliver rental machines to ${area.city}, ${area.state}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Thirsty Dawg Rentals serves ${area.city}, ${area.state} for qualifying frozen drink machine, soft serve machine, frozen yogurt machine, and ice cream cart rentals. Availability can vary by date, event size, and delivery route.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What is included with a rental?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Delivery, setup, pickup, machine instructions, and post-event cleanup are handled by Thirsty Dawg Rentals. Mixes, supplies, and package details depend on the rental selected.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do frozen drink machines need ice?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The commercial machines freeze the mix automatically, which makes them easier for hosts than blender batches or ice-based drink stations.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="seo-hero">
        <p className="seo-eyebrow">{area.city}, {area.state} rental delivery</p>
        <h1>{area.headline}</h1>
        <p>{area.intro}</p>
        <p>{area.localAngle}</p>
        <div className="seo-actions">
          <Link href="/booking" className="btn-primary">Check Availability</Link>
          <a href={`tel:${phoneHref}`} className="btn-secondary">Call {phoneDisplay}</a>
        </div>
      </section>

      <section className="seo-section">
        <h2>Rentals available for {area.city} events</h2>
        <div className="seo-card-grid">
          <Link href="/frozen-drink-machine-rentals" className="seo-card seo-card-link">
            <strong>Frozen drink machines</strong>
            <span>Commercial frozen drink and slushie machines for parties, schools, fundraisers, and family events.</span>
          </Link>
          <Link href="/margarita-machine-rentals" className="seo-card seo-card-link">
            <strong>Margarita machines</strong>
            <span>Frozen margarita and daiquiri-style rentals. Thirsty Dawg does not provide alcohol; guests add their own if desired.</span>
          </Link>
          <Link href="/soft-serve-machine-rentals" className="seo-card seo-card-link">
            <strong>Soft serve machines</strong>
            <span>Vanilla and chocolate soft serve machine rentals for weddings, birthdays, schools, and corporate events.</span>
          </Link>
          <Link href="/frozen-yogurt-machine-rentals" className="seo-card seo-card-link">
            <strong>Frozen yogurt machines</strong>
            <span>New frozen yogurt flavor options for parties, schools, office treats, weddings, and summer events.</span>
          </Link>
          <Link href="/icecream" className="seo-card seo-card-link">
            <strong>Stocked ice cream carts</strong>
            <span>Novelty ice cream carts delivered stocked and ready for guests to serve themselves.</span>
          </Link>
        </div>
      </section>

      <section className="seo-section">
        <h2>Good fits in {area.city}</h2>
        <ul className="seo-list">
          <li>Birthday parties, graduations, and family reunions</li>
          <li>Weddings, showers, and rehearsal weekends</li>
          <li>School, church, camp, and fundraiser events</li>
          <li>Corporate events, employee appreciation days, and customer events</li>
          <li>Vacation rentals, beach houses, and larger private gatherings</li>
        </ul>
      </section>

      <section className="seo-section">
        <h2>Nearby communities</h2>
        <p>
          We also serve nearby areas including {area.nearby.join(', ')}. If your event is outside the standard route, ask and we will confirm availability before booking.
        </p>
        <Link href="/service-areas" className="seo-text-link">View all service areas</Link>
      </section>
    </>
  );
}
