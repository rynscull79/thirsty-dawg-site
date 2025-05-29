'use client';

import Image from 'next/image';

export default function HeaderTestLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#fff' }}>
        <header>
          <Image
            src="/Pensacola-Beach.webp"
            alt="Thirsty Dawg Beach Header"
            width={1920}
            height={600}
            priority
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderBottom: '4px solid #009fdb',
            }}
          />
        </header>
        <main style={{ padding: '2rem' }}>{children}</main>
      </body>
    </html>
  );
}
