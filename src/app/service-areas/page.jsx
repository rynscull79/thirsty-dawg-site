import Link from 'next/link';
import { absoluteUrl, businessName, coreServices, phoneDisplay, phoneHref, serviceAreas } from '@/lib/seoData';

export const metadata = {
  title: 'Service Areas | Frozen Drink & Ice Cream Rentals Near Pensacola, FL',
  description:
    'See where Thirsty Dawg Rentals delivers frozen drink machines, margarita machines, soft serve machines, and stocked ice cream carts across Pensacola and the Gulf Coast.',
  alternates: { canonical: absoluteUrl('/service-areas') },
  openGraph: {
    title: 'Thirsty Dawg Rentals Service Areas',
    description: 'Frozen drink, soft serve, and ice cream cart rentals for Pensacola and nearby Gulf Coast communities.',
    url: absoluteUrl('/service-areas'),
    images: [`${absoluteUrl('/thirsty-dawg-logo.webp')}`],
    type: 'website',
  },
};

export default function ServiceAreasPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Thirsty Dawg Rentals Service Areas',
    url: absoluteUrl('/service-areas'),
    description: metadata.description,
    mainEntity: serviceAreas.map((area) => ({
      '@type': 'WebPage',
      name: area.headline,
      url: absoluteUrl(`/service-areas/${area.slug}`),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="seo-hero">
        <p className="seo-eyebrow">Delivery, setup & pickup included</p>
        <h1>Frozen Drink, Soft Serve & Ice Cream Cart Rentals Across the Gulf Coast</h1>
        <p>
          {businessName} serves Pensacola and nearby Florida Panhandle communities with commercial-grade frozen treat rentals for parties, weddings, schools, offices, vacation rentals, and larger events.
        </p>
        <div className="seo-actions">
          <Link href="/booking" className="btn-primary">Check Availability</Link>
          <a href={`tel:${phoneHref}`} className="btn-secondary">Call {phoneDisplay}</a>
        </div>
      </section>

      <section className="seo-section">
        <h2>Primary rental options</h2>
        <div className="seo-card-grid">
          {coreServices.map((service) => (
            <div className="seo-card" key={service}>{service}</div>
          ))}
        </div>
      </section>

      <section className="seo-section">
        <h2>Local service-area pages</h2>
        <p>
          These pages help customers find the right rental by location and give Google clearer signals about where Thirsty Dawg delivers.
        </p>
        <div className="seo-card-grid">
          {serviceAreas.map((area) => (
            <Link className="seo-card seo-card-link" href={`/service-areas/${area.slug}`} key={area.slug}>
              <strong>{area.city}, {area.state}</strong>
              <span>{area.headline}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
