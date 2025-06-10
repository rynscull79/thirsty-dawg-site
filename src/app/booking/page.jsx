import BookingClientWrapper from '@/components/BookingClientWrapper';

export const metadata = {
  title: 'Book a Frozen Drink Machine | Thirsty Dawg Rentals',
  description:
    'Fill out our booking form to reserve a frozen drink machine for your party, wedding, or event. We deliver across Pensacola and the Gulf Coast.',
};

export default function BookingRoute() {
  return <BookingClientWrapper />;
}
