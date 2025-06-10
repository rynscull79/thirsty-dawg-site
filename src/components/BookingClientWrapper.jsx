'use client';

import dynamic from 'next/dynamic';

const BookingPage = dynamic(() => import('./BookingPage'), {
  ssr: false,
});

export default function BookingClientWrapper() {
  return <BookingPage />;
}
