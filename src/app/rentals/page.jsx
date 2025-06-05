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
            🧊 Our Frozen Drink Machine Rentals
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
            Choose from stainless or plastic, single or dual flavor machines. Commercial-grade equipment for the perfect pour.
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
            Whether you're hosting a backyard party, planning a wedding, or managing a vacation rental, Thirsty Dawg brings the frozen fun right to your door — no ice, no hassle.
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
