'use client';

import dynamic from 'next/dynamic';

// Dynamically import the actual client-only component
const IceCreamClientPage = dynamic(() => import('./IceCreamClientPage'), {
  ssr: false,
});

export default function IceCreamPageWrapper() {
  return <IceCreamClientPage />;
}
