import HomeClient from './HomeClient';

export const metadata = {
  title: 'Frozen Drink & Soft Serve Machine Rentals in Pensacola, FL | Thirsty Dawg Rentals',
  description:
    'Rent frozen drink, slushie, and soft serve ice cream machines plus fully-stocked ice cream carts for parties, weddings, schools, and events in Pensacola, Gulf Breeze, Navarre, Milton, Pace, and nearby areas. Delivery, setup, and pickup included.',
  alternates: {
    canonical: 'https://www.thirstydawgrentals.com/',
  },
  openGraph: {
    title: 'Frozen Drink & Soft Serve Rentals in Pensacola, FL | Thirsty Dawg Rentals',
    description:
      'Rent soft serve ice cream and frozen drink machines for weddings, parties, and events. Serving Pensacola and the Gulf Coast with delivery and setup.',
    images: ['https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp'],
    url: 'https://www.thirstydawgrentals.com/',
    type: 'website',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Thirsty Dawg Rentals',
    url: 'https://www.thirstydawgrentals.com',
    telephone: '850-572-3796',
    image: 'https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp',
    description:
      'Rent frozen drink machines and soft serve ice cream machines for events, parties, and weddings in Pensacola, FL and nearby Gulf Coast areas. Delivery, setup, and pickup included.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pensacola',
      addressRegion: 'FL',
      postalCode: '32577',
      addressCountry: 'US',
    },
    areaServed: [
      'Pensacola, FL',
      'Gulf Breeze, FL',
      'Navarre, FL',
      'Milton, FL',
      'Pace, FL',
      'Perdido Key, FL',
      'Escambia County, FL',
      'Santa Rosa County, FL',
      'Baldwin County, AL',
      'Gulf Shores, AL',
      'Orange Beach, AL',
    ],
    priceRange: '$$',
    openingHours: 'Mo-Su 08:00-20:00',
    sameAs: ['https://www.facebook.com/thirstydawgrentals'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HomeClient />
    </>
  );
}