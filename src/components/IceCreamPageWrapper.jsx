'use client';

import dynamic from 'next/dynamic';

// Adjust the import to point to the actual location of IceCreamClientPage
const IceCreamClientPage = dynamic(() => import('../app/icecream/IceCreamClientPage'));

export default function IceCreamPageWrapper() {
  return <IceCreamClientPage />;
}
