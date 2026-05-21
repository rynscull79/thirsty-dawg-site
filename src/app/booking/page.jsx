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
        <h1 style={{ color: 'var(--td-blue)', fontFamily: 'var(--heading-font)', fontSize: '2.2rem', lineHeight: 1.1 }}>
          Book a Frozen Drink, Soft Serve, or Ice Cream Cart Rental
        </h1>
        <p style={{ maxWidth: '760px', margin: '0.75rem auto 0', fontFamily: 'var(--body-font)', lineHeight: 1.6 }}>
          Reserve your Thirsty Dawg rental for parties, weddings, schools, beach houses, and events across Pensacola and the Gulf Coast. Delivery, setup, and pickup are handled for you.
        </p>
        <p style={{ maxWidth: '760px', margin: '0.7rem auto 0', fontFamily: 'var(--body-font)', fontSize: '0.76rem', lineHeight: 1.35, color: '#4b5563' }}>
          SMS updates are optional. If you check the SMS consent box on this form, Thirsty Dawg Rentals may text you about your rental inquiry, booking, delivery/setup/pickup coordination, and customer-requested follow-up. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out. You can submit this booking request without consenting to SMS. See our <a href="/terms">Terms</a> and <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </section>
      <section
        id="serverSmsDisclosure"
        aria-label="SMS opt-in disclosure"
        style={{
          maxWidth: '860px',
          margin: '0 auto 1.5rem',
          padding: '1rem',
          borderRadius: '16px',
          border: '1px solid rgba(0,0,0,0.12)',
          background: '#f8fbff',
          fontFamily: 'var(--body-font)',
          color: 'var(--td-black)',
        }}
      >
        <label
          htmlFor="sms_consent_static"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            fontSize: '0.92rem',
            lineHeight: 1.5,
          }}
        >
          <input
            id="sms_consent_static"
            name="sms_consent_static"
            type="checkbox"
            value="yes"
            aria-describedby="sms_consent_static_details"
            style={{ marginTop: '0.25rem', flex: '0 0 auto' }}
          />
          <span id="sms_consent_static_details">
            <strong>Optional SMS updates:</strong> I agree to receive text messages from Thirsty Dawg Rentals about my rental inquiry, booking, delivery/setup/pickup coordination, and customer-requested follow-up. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out. Checking this box is not required to submit this form or rent from Thirsty Dawg Rentals. See our <a href="/terms">Terms</a> and <a href="/privacy-policy">Privacy Policy</a>.
          </span>
        </label>
      </section>
      <BookingClientWrapper />
    </>
  );
}
