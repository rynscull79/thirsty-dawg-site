import Head from 'next/head';
import BookingPage from '@/components/BookingPage';

export default function BookingRoute() {
  return (
    <>
      <Head>
        <title>Book a Frozen Drink Machine | Thirsty Dawg Rentals</title>
        <meta
          name="description"
          content="Fill out our booking form to reserve a frozen drink machine for your party, wedding, or event. We deliver across Pensacola and the Gulf Coast."
        />
      </Head>

      <BookingPage />
    </>
  );
}
