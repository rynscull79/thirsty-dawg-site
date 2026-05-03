export const siteUrl = 'https://www.thirstydawgrentals.com';
export const businessName = 'Thirsty Dawg Rentals';
export const phoneDisplay = '(850) 572-3796';
export const phoneHref = '8505723796';

export const coreServices = [
  'Frozen drink machine rentals',
  'Margarita machine rentals',
  'Slushie machine rentals',
  'Soft serve machine rentals',
  'Stocked novelty ice cream carts',
];

export const serviceAreas = [
  {
    slug: 'pensacola-fl',
    city: 'Pensacola',
    state: 'FL',
    headline: 'Frozen Drink Machine, Soft Serve & Ice Cream Cart Rentals in Pensacola, FL',
    intro:
      'Thirsty Dawg Rentals delivers commercial frozen drink machines, soft serve machines, and stocked novelty ice cream carts for Pensacola parties, weddings, schools, offices, churches, and neighborhood events.',
    localAngle:
      'From backyard birthdays and graduation parties to school field days, beach-house gatherings, and corporate events, Pensacola hosts need rentals that arrive clean, cold, and ready without adding another chore to the day.',
    nearby: ['Gulf Breeze', 'Perdido Key', 'Pace', 'Milton', 'Navarre'],
  },
  {
    slug: 'gulf-breeze-fl',
    city: 'Gulf Breeze',
    state: 'FL',
    headline: 'Frozen Drink Machine Rentals in Gulf Breeze, FL',
    intro:
      'Book frozen drink machines, soft serve machines, and ice cream carts for Gulf Breeze parties and coastal events with delivery, setup, and pickup handled by Thirsty Dawg Rentals.',
    localAngle:
      'Gulf Breeze events often mean family parties, waterfront celebrations, school functions, and wedding weekends where simple, self-serve frozen drinks and desserts keep guests happy in the Florida heat.',
    nearby: ['Pensacola Beach', 'Pensacola', 'Navarre', 'Oriole Beach', 'Tiger Point'],
  },
  {
    slug: 'navarre-fl',
    city: 'Navarre',
    state: 'FL',
    headline: 'Frozen Drink, Slushie & Soft Serve Machine Rentals in Navarre, FL',
    intro:
      'Thirsty Dawg Rentals serves Navarre with commercial frozen drink machines, soft serve rentals, and stocked novelty ice cream carts for parties, weddings, schools, churches, and vacation rental events.',
    localAngle:
      'Navarre hosts need equipment that can handle warm Gulf Coast weather, vacation-home gatherings, and family events without requiring bags of ice, cleanup, or complicated setup.',
    nearby: ['Gulf Breeze', 'Pensacola Beach', 'Milton', 'Pace', 'Fort Walton Beach'],
  },
  {
    slug: 'perdido-key-fl',
    city: 'Perdido Key',
    state: 'FL',
    headline: 'Frozen Drink Machine Rentals in Perdido Key, FL',
    intro:
      'Make Perdido Key beach-house parties, wedding weekends, and family reunions easier with delivered frozen drink machines, margarita machines, soft serve machines, and ice cream carts.',
    localAngle:
      'Perdido Key events are often destination gatherings, so delivery, setup, and pickup matter. Thirsty Dawg handles the machine side so hosts can focus on guests instead of ice runs and cleanup.',
    nearby: ['Pensacola', 'Orange Beach', 'Gulf Shores', 'Innerarity Point', 'Warrington'],
  },
  {
    slug: 'pace-fl',
    city: 'Pace',
    state: 'FL',
    headline: 'Frozen Drink & Soft Serve Machine Rentals in Pace, FL',
    intro:
      'Rent frozen drink machines, soft serve machines, and stocked novelty ice cream carts for Pace birthday parties, school events, church gatherings, fundraisers, and family celebrations.',
    localAngle:
      'For Pace families and organizations, frozen drinks and ice cream carts are an easy crowd-pleaser: no blender line, no ice machine, and no messy teardown after the event.',
    nearby: ['Milton', 'Pensacola', 'Pea Ridge', 'Gulf Breeze', 'Cantonment'],
  },
  {
    slug: 'milton-fl',
    city: 'Milton',
    state: 'FL',
    headline: 'Frozen Drink Machine Rentals in Milton, FL',
    intro:
      'Thirsty Dawg Rentals delivers frozen drink machines, margarita machines, soft serve machines, and novelty ice cream carts for Milton parties, schools, churches, offices, and community events.',
    localAngle:
      'Milton events can range from backyard parties to larger school and community gatherings. Commercial-grade machines help serve a crowd consistently while keeping the host workload low.',
    nearby: ['Pace', 'Pensacola', 'Navarre', 'Bagdad', 'Pea Ridge'],
  },
  {
    slug: 'orange-beach-al',
    city: 'Orange Beach',
    state: 'AL',
    headline: 'Ice Cream Cart & Frozen Drink Rentals for Orange Beach, AL Events',
    intro:
      'Thirsty Dawg Rentals offers select service to Orange Beach for larger Gulf Coast events, especially stocked novelty ice cream carts, beach-house celebrations, wedding weekends, and corporate gatherings.',
    localAngle:
      'Orange Beach hosts often need a simple frozen treat option that works for guests of all ages. Stocked ice cream carts and frozen drink machines create an easy self-serve station for coastal events.',
    nearby: ['Perdido Key', 'Gulf Shores', 'Foley', 'Pensacola', 'Elberta'],
  },
  {
    slug: 'foley-al',
    city: 'Foley',
    state: 'AL',
    headline: 'Ice Cream Cart Rentals for Foley, AL Events',
    intro:
      'For select South Alabama events, Thirsty Dawg Rentals delivers stocked novelty ice cream carts and frozen treat options that work well for schools, churches, corporate events, and community gatherings in Foley.',
    localAngle:
      'Foley events benefit from a clean, simple frozen dessert setup: stocked novelties, easy self-service, and a setup that looks professional without requiring a staffed dessert bar.',
    nearby: ['Orange Beach', 'Gulf Shores', 'Fairhope', 'Elberta', 'Perdido Key'],
  },
  {
    slug: 'fairhope-al',
    city: 'Fairhope',
    state: 'AL',
    headline: 'Ice Cream Cart Rentals for Fairhope, AL Events',
    intro:
      'Thirsty Dawg Rentals provides select stocked novelty ice cream cart service for Fairhope weddings, schools, church events, corporate gatherings, and larger Gulf Coast celebrations.',
    localAngle:
      'Fairhope events often call for a polished, family-friendly dessert option. A stocked novelty cart gives guests variety, keeps service simple, and avoids the mess of scooping or melting tubs.',
    nearby: ['Foley', 'Daphne', 'Spanish Fort', 'Orange Beach', 'Pensacola'],
  },
];

export function getAreaBySlug(slug) {
  return serviceAreas.find((area) => area.slug === slug);
}

export function absoluteUrl(path = '/') {
  return `${siteUrl}${path === '/' ? '' : path}`;
}

export function localBusinessSchema(overrides = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: businessName,
    url: siteUrl,
    telephone: phoneDisplay,
    image: `${siteUrl}/thirsty-dawg-logo.webp`,
    logo: `${siteUrl}/thirsty-dawg-logo.webp`,
    description:
      'Commercial frozen drink machine rentals, margarita machine rentals, soft serve machine rentals, and stocked novelty ice cream carts with delivery, setup, and pickup in Pensacola and nearby Gulf Coast areas.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pensacola',
      addressRegion: 'FL',
      postalCode: '32577',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.4213,
      longitude: -87.2169,
    },
    areaServed: serviceAreas.map((area) => ({
      '@type': 'City',
      name: `${area.city}, ${area.state}`,
    })),
    priceRange: '$$',
    openingHours: 'Mo-Su 08:00-20:00',
    sameAs: ['https://www.facebook.com/thirstydawgrentals'],
    makesOffer: coreServices.map((name) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
        areaServed: 'Pensacola, FL and nearby Gulf Coast areas',
      },
    })),
    ...overrides,
  };
}
