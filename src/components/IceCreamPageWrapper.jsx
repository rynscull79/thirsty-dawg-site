'use client';

import dynamic from 'next/dynamic';

const IceCreamClientPage = dynamic(() => import('./IceCreamClientPage'));

export default function IceCreamPageWrapper() {
  return <IceCreamClientPage />;
}
