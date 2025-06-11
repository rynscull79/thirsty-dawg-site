'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function FloatingBookNow() {
  const pathname = usePathname();

  // ❌ Hide button on /booking page
  if (pathname === '/booking') return null;

  return (
    <Link href="/booking">
      <button
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          backgroundColor: '#ff8000',
          color: 'white',
          fontWeight: 'bold',
          padding: '12px 24px',
          borderRadius: '999px',
          border: 'none',
          fontSize: '1rem',
          fontFamily: '"Chewy", cursive',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
          animation: 'buttonPulse 2.5s infinite ease-in-out'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#cc6600'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#ff8000'}
        aria-label="Book Now"
      >
        📅 Book Now
      </button>
    </Link>
  );
}

export default FloatingBookNow;
<style jsx global>{`
  @keyframes buttonPulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.08);
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`}</style>
