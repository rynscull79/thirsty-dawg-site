// 📄 src/app/our-story/page.jsx

import FloatingBookWrapper from '@/components/FloatingBookWrapper';

export const metadata = {
  title: 'Our Story | How Thirsty Dawg Rentals Got Started',
  description:
    'Meet the team behind Thirsty Dawg Rentals. Learn how our family launched Pensacola’s favorite frozen drink rental service — plus meet our Boston Terrier mascots!',
};

export default function OurStoryPage() {
  return (
    <>
      <div style={{ backgroundColor: '#d6e4ec', padding: '2rem', maxWidth: '100%', fontFamily: 'var(--font-chewy)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            color: '#009fdb',
            marginBottom: '1rem',
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>
            🐾 Our Story – Meet the Thirsty Dawgs
          </h1>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img
              src="/gallery/thirsty-dawg-family.webp"
              alt="Thirsty Dawg family photo"
              style={{ width: '100%', maxWidth: '400px', borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
            />
          </div>

          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Thirsty Dawg was born in 2023 out of one simple question: "Where can we rent a frozen drink machine?" While planning a birthday bash, we discovered that the Pensacola area didn’t have a single local option. What started as an inconvenience quickly turned into inspiration. We saw a fun, frozen gap in the market—and we jumped on it.
          </p>

          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            As lifelong Boston Terrier lovers, we wanted our brand to feel playful and personal. The image of a Boston Terrier chilling with a cocktail stuck in our heads, and from that came the name: <strong>Thirsty Dawg</strong>. Within a month, we launched with just two machines, a vision, and a whole lot of hustle.
          </p>

          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            By the end of year one, we had expanded to seven machines, added an enclosed trailer for deliveries, and created our own signature line of Thirsty Dawg drink mixes made with real fruit flavors and no artificial dyes.
          </p>

          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Today, we proudly serve the Gulf Coast with a fleet of 12 commercial-grade frozen drink machines—available for parties, weddings, corporate events, and even long-term rentals for bars, beach houses, and busy hosts. With dual-flavor and single-flavor options, delicious drink mixes, and top-tier service, Thirsty Dawg makes it easy to keep your party cool and your guests refreshed.
          </p>

          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Whether you’re a first-time renter or a loyal repeat customer, we’re so glad you’re here. We’re grateful for the support, referrals, and friendships that have grown alongside this business.
          </p>

          <p style={{ fontSize: '1.2rem', textAlign: 'right' }}>
            Cheers,<br />
            Ryan & Monica <br />
            — The Thirsty Dawgs 🐶🍹
          </p>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{
              textAlign: 'center',
              color: '#ff7c02',
              fontSize: '2rem',
              marginBottom: '1.5rem',
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}>
              🐶 Meet the Thirsty Dawgs
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem'
            }}>
              {['chip', 'miloe', 'oreo', 'thirsty-dawgs', 'tootsie', 'Reese'].map((name) => (
                <img
                  key={name}
                  src={`/gallery/${name}.webp`}
                  alt={`Boston Terrier ${name}`}
                  style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* This is what makes the button appear */}
      <FloatingBookWrapper />
    </>
  );
}
