import Link from 'next/link';

export const metadata = {
  title: 'Frozen Drink Machine Leasing | Thirsty Dawg Rentals',
  description:
    'Frozen drink machine leasing options are now available at our Frozen Drink Machine Leasing page.',
  alternates: {
    canonical: 'https://www.thirstydawgrentals.com/frozen-drink-machine-leasing',
  },
  robots: {
    index: false,
    follow: true,
  },
  metadataBase: new URL('https://www.thirstydawgrentals.com'),
};

const target = '/frozen-drink-machine-leasing';

export default function LongTermLeasingRedirectPage() {
  return (
    <main style={{
      maxWidth: '720px',
      margin: '0 auto',
      padding: '4rem 1.5rem',
      textAlign: 'center',
    }}>
      <meta httpEquiv="refresh" content={`0;url=${target}`} />
      <h1>Frozen Drink Machine Leasing</h1>
      <p>
        This page has moved to our frozen drink machine leasing page.
      </p>
      <p>
        <Link href={target}>Continue to Frozen Drink Machine Leasing</Link>
      </p>
    </main>
  );
}
