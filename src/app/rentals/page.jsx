'use client';

import Head from 'next/head';
import OurRentals from '@/components/OurRentals';
import RentalsGallery from '@/components/RentalsGallery';

export default function RentalsPage() {
  return (
    <>
      <Head>
   <title>Frozen Drink & Soft Serve Machine Rentals | Thirsty Dawg</title>
<meta
  name="description"
  content="Rent frozen drink and soft serve ice cream machines in Pensacola and nearby areas. Choose from single or dual flavor options — stainless or plastic. Thirsty Dawg handles delivery, setup, and pickup!"
/>
<meta property="og:title" content="Frozen Drink & Soft Serve Machine Rentals | Thirsty Dawg" />
<meta property="og:description" content="Rent frozen drink and soft serve machines for events across Pensacola. Thirsty Dawg handles delivery, setup, and cleanup!" />
<meta property="og:image" content="https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp" />
<meta property="og:url" content="https://www.thirstydawgrentals.com/rentals" />
<meta property="og:type" content="website" />

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Thirsty Dawg Rentals",
      "url": "https://www.thirstydawgrentals.com/rentals",
      "telephone": "850-572-3796",
      "image": "https://www.thirstydawgrentals.com/thirsty-dawg-logo.webp",
      "description": "Rent frozen drink machines and soft serve ice cream machines for events, parties, and weddings in Pensacola, FL and surrounding counties. Delivery, setup, cleanup included.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pensacola",
        "addressRegion": "FL",
        "postalCode": "32577",
        "addressCountry": "US"
      },
      "areaServed": ["Pensacola", "Escambia County", "Santa Rosa County", "Baldwin County"],
      "priceRange": "$$",
      "openingHours": "Mo-Su 08:00-20:00",
      "sameAs": [
        "https://www.facebook.com/thirstydawgrentals"
      ]
    })
  }}
/>

      </Head>

      <div>
        <section
          style={{
            backgroundColor: '#009fdb',
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
  🍹 Frozen Drink & Soft Serve Machine Rentals
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
  Choose from stainless or plastic, single or dual flavor frozen drink machines — or cool things down with our new soft serve ice cream rentals!
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
  Perfect for birthday parties, beach days, weddings, schools, and vacation rentals — Thirsty Dawg brings the frozen fun to you. No ice needed, no cleanup hassle.
</p>


          <p
            style={{
              fontSize: '1.2rem',
              marginTop: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}
          >
            📞 Have questions? Call or text us at{' '}
            <a href="tel:8505723796" style={{ color: 'white', textDecoration: 'underline' }}>
              (850) 572-3796
            </a>
          </p>
        </section>
<RentalsGallery />
        <OurRentals />
        
      </div>
    </>
  );
}
