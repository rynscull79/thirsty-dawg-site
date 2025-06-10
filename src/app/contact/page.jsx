// ✅ Server component version — Next.js 15 compliant
export const metadata = {
  title: 'Contact Us | Thirsty Dawg Rentals',
  description:
    'Need help or want to book over the phone? Contact Thirsty Dawg Rentals by phone, email, or Facebook. We’re happy to help with your frozen drink machine rental.',
};

import Link from 'next/link';

export default function ContactPage() {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        fontFamily: 'var(--font-chewy)',
        color: '#1f2937',
        maxWidth: '960px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          textAlign: 'center',
          color: '#009fdb',
          marginBottom: '2rem',
          textShadow:
            '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
        }}
      >
        📬 Contact Thirsty Dawg Rentals
      </h1>

      <p
        style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}
      >
        Have questions about a booking or our frozen drink machines? Reach out!
      </p>

      <div
        style={{
          backgroundColor: '#e6f4fd',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
        }}
      >
        <h2
          style={{
            color: '#ff7c02',
            fontSize: '1.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          📞 Call or Text
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          <a
            href="tel:8505723796"
            style={{ color: '#009fdb', textDecoration: 'underline' }}
          >
            (850) 572-3796
          </a>
        </p>

        <h2
          style={{
            color: '#ff7c02',
            fontSize: '1.5rem',
            marginTop: '2rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          📧 Email
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          <a
            href="mailto:info@thirstydawgrentals.com"
            style={{ color: '#009fdb', textDecoration: 'underline' }}
          >
            info@thirstydawgrentals.com
          </a>
        </p>

        <h2
          style={{
            color: '#ff7c02',
            fontSize: '1.5rem',
            marginTop: '2rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          📱 Follow Us
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          <a
            href="https://www.facebook.com/thirstydawgrentals/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#009fdb', textDecoration: 'underline' }}
          >
            Facebook.com/ThirstyDawgRentals
          </a>
        </p>
      </div>
    </div>
  );
}
