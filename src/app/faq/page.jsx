const FloatingBookNow = dynamic(() => import('@/components/FloatingBookNow'));

export const metadata = {
  title: 'Frequently Asked Questions | Thirsty Dawg Rentals',
  description:
    'Get answers to common questions about our frozen drink machines, mix options, delivery, setup, alcohol, and more.',
};

export default function FAQPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1
        style={{
          textAlign: 'center',
          color: '#009fdb',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          fontFamily: 'var(--font-chewy)',
          textShadow:
            '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
        }}
      >
        ❓ Frequently Asked Questions
      </h1>

      {[
        {
          question: 'How many drinks does one mix make?',
          answer:
            'Each mix makes about 3.5 gallons of product (50 – 9oz. drinks). A good rule of thumb is to purchase one mix per 20–25 people.',
        },
        {
          question: 'Does Thirsty Dawg provide the alcohol?',
          answer:
            'No, we do not supply any alcohol. Our mixes are concentrates that contain no liquor or alcohol. It is your responsibility to provide all alcohol as needed.',
        },
        {
          question: 'How much are additional mixes?',
          answer:
            'Additional mixes are $22.00 with the exception of Bushwacker which is $27.00.',
        },
        {
          question: 'Do I need ice?',
          answer:
            'No, ice is not needed as the machine freezes the mix. All you need is water, Thirsty Dawg mix, and alcohol (if you choose).',
        },
        {
          question: 'Can I use my own mix?',
          answer:
            'No, our mix is made exclusively for our commercial machines. Other mixes may cause damage to the machine.',
        },
        {
          question: 'Do your machines make non-alcoholic drinks or slushies?',
          answer:
            'Yes! You can serve any of our mixes with or without alcohol. The frozen slushies are always a big hit at children’s parties. If you have a special mix request, just let us know. We have been known to customize flavors!',
        },
        {
          question: 'How long does it take the mix to freeze?',
          answer:
            'We have multiple different type machines which freeze at different rates. Plan on it taking 45 minutes to an hour and a half to freeze in a cool environment. You will never have a lag in freeze time, as you can continually add mix as you go with these machines. We do recommend a dedicated outlet, and to start your machine several hours ahead of time to make sure your machine works at optimum performance.',
        },
        {
          question: 'Do I need to clean the machine after use?',
          answer:
            'We take care of all cleaning and sanitation after your event. All we ask is that you drain the mix out of the bowls... you can freeze or refrigerate anything you don’t use during your event.',
        },
        {
          question: 'Can I move the frozen drink machine to another location?',
          answer:
            'The machine must remain at the address the machine is dropped off at. If the machine is moved to another location other than on the contract, there is a $500 transportation fee.',
        },
        {
          question: 'How far in advance do I need to reserve my machine?',
          answer:
            'We recommend at least 4 weeks to ensure availability. During graduation, Halloween, New Years, etc... we recommend 6 weeks.',
        },
        {
          question: 'Can I pick up the machine myself?',
          answer:
            'For safety and liability reasons, all machines must be delivered and picked up by Thirsty Dawg staff. Due to their size and weight, we do not allow customer pickups. Delivery and setup are always handled by our team.',
        },
      ].map((faq, index) => (
        <div
          key={index}
          style={{
            marginBottom: '1.5rem',
            backgroundColor: '#009fdb',
            color: 'white',
            padding: '1.25rem',
            borderRadius: '2rem',
            fontFamily: 'var(--font-chewy)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          }}
        >
          <p
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}
          >
            – {faq.question}
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}
          >
            {faq.answer}
          </p>
        </div>
        
      ))}
      <FloatingBookNow />

    </div>
  );
}
