import IceCreamPageWrapper from '@/components/IceCreamPageWrapper';

export const metadata = {
  title: 'Ice Cream Party Packs | Thirsty Dawg Rentals',
  description:
    'Choose from pre-packed novelty ice cream bundles or build your own. Delivered in a pre-chilled freezer for stress-free events in Pensacola and surrounding areas.',
  robots: 'noindex, nofollow',
  keywords:
    'ice cream party pack, novelty ice cream pensacola, frozen treat rental, freezer rental, thirsty dawg rentals',
  authors: [{ name: 'Thirsty Dawg Rentals' }],
  openGraph: {
    title: 'Ice Cream Party Packs | Thirsty Dawg Rentals',
    description:
      'Choose from pre-packed novelty ice cream bundles or build your own. Delivered in a pre-chilled freezer for events in Pensacola and surrounding areas.',
    type: 'product.group',
    url: 'https://www.thirstydawgrentals.com/icecream',
    images: [
      'https://www.thirstydawgrentals.com/gallery/thirsty-dawg-cart.webp',
    ],
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProductGroup",
  name: "Ice Cream Party Packs",
  description: "Frozen novelty ice cream bundles delivered in a pre-chilled freezer.",
  brand: {
    "@type": "Brand",
    name: "Thirsty Dawg Rentals"
  },
  url: "https://www.thirstydawgrentals.com/icecream",
  image: "https://www.thirstydawgrentals.com/gallery/thirsty-dawg-cart.webp",
  hasProduct: [
    {
      "@type": "Product",
      name: "The VIP",
      offers: {
        "@type": "Offer",
        price: "275",
        priceCurrency: "USD"
      }
    },
    {
      "@type": "Product",
      name: "Frosted Favorites",
      offers: {
        "@type": "Offer",
        price: "225",
        priceCurrency: "USD"
      }
    },
    {
      "@type": "Product",
      name: "Coolest Deal in Town",
      offers: {
        "@type": "Offer",
        price: "225",
        priceCurrency: "USD"
      }
    },
    {
      "@type": "Product",
      name: "Cool Kid Combo",
      offers: {
        "@type": "Offer",
        price: "215",
        priceCurrency: "USD"
      }
    },
    {
      "@type": "Product",
      name: "The Crowd Pleaser",
      offers: {
        "@type": "Offer",
        price: "250",
        priceCurrency: "USD"
      }
    }
  ]
};

export default function IceCreamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <IceCreamPageWrapper />
    </>
  );
}
