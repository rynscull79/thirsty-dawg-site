'use client';

import Image from 'next/image';

export default function HeaderTestLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#fff' }}>
        <header>
          <Image
            src="/Pensacola-Beach.webp"
            alt="Test Header"
            width={1920}
            height={600}
            priority
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
