import BookingClientWrapper from '@/components/BookingClientWrapper';

export const metadata = {
  title: 'Book a Frozen Drink Machine | Thirsty Dawg Rentals',
  description:
    'Fill out our booking form to reserve a frozen drink machine for your party, wedding, or event. We deliver across Pensacola and the Gulf Coast.',
  alternates: {
    canonical: 'https://www.thirstydawgrentals.com/booking',
  },
};

export default function BookingRoute() {
  return (
    <>
      <section style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ color: 'var(--td-blue)', fontFamily: 'var(--heading-font)', fontSize: 'clamp(1.85rem, 7vw, 2.2rem)', lineHeight: 1.1 }}>
          Book a Frozen Drink, Soft Serve, or Ice Cream Cart Rental
        </h1>
        <p style={{ maxWidth: '760px', margin: '0.75rem auto 0', fontFamily: 'var(--body-font)', lineHeight: 1.6 }}>
          Reserve your Thirsty Dawg rental for parties, weddings, schools, beach houses, and events across Pensacola and the Gulf Coast. Delivery, setup, and pickup are handled for you.
        </p>
      </section>
      <BookingClientWrapper />
    </>
  );
}
