// 📄 src/app/icecream/page.jsx

export const metadata = {
  title: 'Ice Cream Party Packs | Thirsty Dawg Rentals',
  description:
    'Choose from pre-packed novelty ice cream bundles or build your own. Delivered in a pre-chilled freezer for stress-free events in Pensacola and surrounding areas.',
  openGraph: {
    title: 'Ice Cream Party Packs | Thirsty Dawg Rentals',
    description:
      'Frozen novelty ice cream bundles delivered in a pre-chilled freezer. Book a stocked freezer for your next party or event.',
    images: ['https://www.thirstydawgrentals.com/gallery/thirsty-dawg-cart.webp'],
    url: 'https://www.thirstydawgrentals.com/icecream',
    type: 'product.group',
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};


export default function IceCreamPage() {
  const schema = {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section
        style={{
          backgroundColor: '#ff66b2',
          color: 'white',
          padding: '3rem 2rem',
          borderRadius: '1rem',
          textAlign: 'center',
          fontFamily: 'var(--font-chewy)',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            textShadow:
              '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
          }}
        >
          🍦 Ice Cream Party Packs & Freezer Rentals
        </h2>

        <p
          style={{
            fontSize: '1.2rem',
            marginTop: '1rem',
            color: 'white',
            textShadow:
              '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
          }}
        >
          Rent a fully-stocked novelty ice cream freezer delivered cold and ready for your event.
        </p>

        <p
          style={{
            fontSize: '1.2rem',
            marginTop: '1.5rem',
            color: 'white',
            textShadow:
              '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
          }}
        >
          Choose from pre-built bundles or build your own. Great for parties, schools, camps, and fundraisers.
        </p>
      </section>
    </>
  );
}
