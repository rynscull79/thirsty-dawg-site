import dynamic from 'next/dynamic';

// Dynamically import the client component — no SSR
const IceCreamClientPage = dynamic(() => import('@/components/IceCreamClientPage'), {
  ssr: false,
});

export const metadata = {
  title: 'Ice Cream Party Packs | Thirsty Dawg Rentals',
  description: 'Choose from pre-packed novelty ice cream bundles or build your own. Delivered in a pre-chilled freezer for events in Pensacola and surrounding areas.',
  robots: 'noindex, nofollow',
  keywords: 'ice cream party pack, novelty ice cream pensacola, frozen treat rental, freezer rental, thirsty dawg rentals',
  authors: [{ name: 'Thirsty Dawg Rentals' }],
  openGraph: {
    title: 'Ice Cream Party Packs | Thirsty Dawg Rentals',
    description: 'Choose from pre-packed novelty ice cream bundles or build your own. Delivered in a pre-chilled freezer for events in Pensacola and surrounding areas.',
    type: 'product.group',
    url: 'https://www.thirstydawgrentals.com/icecream',
    images: [
      'https://www.thirstydawgrentals.com/gallery/thirsty-dawg-cart.webp',
    ],
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

export default function IceCreamPage() {
  return <IceCreamClientPage />;
}
