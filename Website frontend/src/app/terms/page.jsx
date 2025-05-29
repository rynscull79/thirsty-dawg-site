'use client';

import Head from 'next/head';

export default function TermsOfServicePage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Thirsty Dawg Rentals</title>
        <meta
          name="description"
          content="Review the terms and conditions for renting frozen drink machines from Thirsty Dawg Rentals. Includes policies for deposits, liability, and service limits."
        />
      </Head>

      <div style={{ backgroundColor: '#ffffff', padding: '2rem', fontFamily: 'var(--font-chewy)', color: '#1f2937', maxWidth: '960px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', textAlign: 'center', color: '#009fdb', marginBottom: '2rem', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
          📜 Terms of Service
        </h1>

        <p style={{ marginBottom: '1rem' }}>
          These Terms of Service ("Terms") govern your use of the Thirsty Dawg Rentals website and services. By placing a booking, you agree to these Terms in full.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>1. Services Provided</h2>
        <p style={{ marginBottom: '1rem' }}>
          Thirsty Dawg Rentals provides commercial-grade frozen drink machine rentals to customers in the Gulf Coast and Pensacola areas. We handle delivery, setup, and pickup. Machines must not be moved after delivery.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>2. Booking & Deposits</h2>
        <p style={{ marginBottom: '1rem' }}>
          A $75 deposit is required to confirm your booking. This deposit is non-refundable if you choose to cancel for any reason.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>3. Refund Policy</h2>
        <p style={{ marginBottom: '1rem' }}>
          No refunds are offered except in cases where Thirsty Dawg Rentals is at fault (e.g., failure to deliver the machine as promised).
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>4. Damage and Liability</h2>
        <p style={{ marginBottom: '1rem' }}>
          Customers are responsible for any damage to rental equipment caused by negligence, misuse, or unauthorized relocation of the machine. Repair or replacement costs may be charged to the customer.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>5. Right to Refuse Service</h2>
        <p style={{ marginBottom: '1rem' }}>
          Thirsty Dawg Rentals reserves the right to refuse or cancel bookings due to weather conditions, safety concerns, or misuse of equipment. In such cases, deposits may be refunded at our discretion.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>6. Website Usage</h2>
        <p style={{ marginBottom: '1rem' }}>
          You may not use this website or its content for any unlawful or unauthorized purpose. All content is the property of Thirsty Dawg Rentals and may not be copied or reused without permission.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>7. Governing Law</h2>
        <p style={{ marginBottom: '1rem' }}>
          These Terms shall be governed by and interpreted under the laws of the State of Florida.
        </p>

        <p style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '0.95rem', color: '#555' }}>
          Effective date: May 2025
        </p>
      </div>
    </>
  );
}
