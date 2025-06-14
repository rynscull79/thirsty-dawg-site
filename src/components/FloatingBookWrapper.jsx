// 📄 src/components/FloatingBookWrapper.jsx
'use client';

import dynamic from 'next/dynamic';

const FloatingBookNow = dynamic(() => import('./FloatingBookNow'), { ssr: false });

export default function FloatingBookWrapper() {
  return <FloatingBookNow />;
}
