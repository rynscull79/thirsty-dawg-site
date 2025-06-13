// 📄 src/app/not-found/page.jsx

import Link from 'next/link'; // ✅ Import goes at the top

export default function NotFound() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem' }}>😢 Page Not Found</h1>
      <p>This page doesn't exist. <Link href="/">Return home</Link>.</p>
    </div>
  );
}
