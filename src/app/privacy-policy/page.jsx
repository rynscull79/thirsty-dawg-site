'use client';

import Head from 'next/head';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Thirsty Dawg Rentals</title>
        <meta
          name="description"
          content="Read how Thirsty Dawg Rentals collects, uses, and protects your personal information when you book a frozen drink machine for your event."
        />
      </Head>

      <div style={{ backgroundColor: '#ffffff', padding: '2rem', fontFamily: 'var(--font-chewy)', color: '#1f2937', maxWidth: '960px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', textAlign: 'center', color: '#009fdb', marginBottom: '2rem', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
          🔒 Privacy Policy
        </h1>

        <p style={{ marginBottom: '1rem' }}>
          At Thirsty Dawg Rentals, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or interact with our services.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>1. Information We Collect</h2>
        <p style={{ marginBottom: '1rem' }}>
          When you fill out our booking form or contact us, we may collect personal information such as your name, email, phone number, address, and event details. We use this data solely to coordinate and confirm your rental.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>2. How We Use Your Information</h2>
        <p style={{ marginBottom: '1rem' }}>
          We use your information to provide rental services, respond to inquiries, send booking confirmations, and improve our website and customer experience.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>3. Data Sharing</h2>
        <p style={{ marginBottom: '1rem' }}>
          We do not sell or rent your personal information to third parties. We may share your information with service providers strictly as needed to deliver our services (e.g., booking system, payment processor).
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>4. Cookies</h2>
        <p style={{ marginBottom: '1rem' }}>
          Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>5. Data Security</h2>
        <p style={{ marginBottom: '1rem' }}>
          We take appropriate security measures to protect your personal information from unauthorized access, disclosure, or alteration.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>6. Your Rights</h2>
        <p style={{ marginBottom: '1rem' }}>
          You may request access to your data, ask for corrections, or request that we delete your information by contacting us at info@thirstydawgrentals.com.
        </p>

        <h2 style={{ fontSize: '1.5rem', color: '#ff7c02', marginTop: '2rem' }}>7. Changes to This Policy</h2>
        <p style={{ marginBottom: '1rem' }}>
          We may update this Privacy Policy from time to time. The latest version will always be posted here with a revised effective date.
        </p>

        <p style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '0.95rem', color: '#555' }}>
          Effective date: May 2025
        </p>
      </div>
    </>
  );
}
