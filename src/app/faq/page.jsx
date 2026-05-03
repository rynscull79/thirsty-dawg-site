// 📄 src/app/faq/page.jsx

import FloatingBookWrapper from '@/components/FloatingBookWrapper';
import { absoluteUrl } from '@/lib/seoData';

const faqs = [
  {
    question: 'How many drinks does one mix make?',
    answer:
      'Each mix makes about 3.5 gallons of product, or about 50 nine-ounce drinks. A good rule of thumb is one mix per 20–25 people.',
  },
  {
    question: 'Does Thirsty Dawg provide the alcohol?',
    answer:
      'No. Thirsty Dawg Rentals does not supply alcohol. Our mixes are concentrates with no liquor or alcohol; customers provide any alcohol they want to add.',
  },
  {
    question: 'How much are additional mixes?',
    answer:
      'Additional mixes are typically $22, with Bushwacker mix typically $27.',
  },
  {
    question: 'Do I need ice?',
    answer:
      'No. The machine freezes the mix automatically, so you do not need bags of ice or a blender.',
  },
  {
    question: 'Can I use my own mix?',
    answer:
      'No. Please use Thirsty Dawg-approved mix only. Other mixes may damage the commercial machines.',
  },
  {
    question: 'Do your machines make non-alcoholic drinks or slushies?',
    answer:
      'Yes. Any mix can be served with or without alcohol, which makes the machines popular for kids parties, schools, and family-friendly events.',
  },
  {
    question: 'How long does it take the mix to freeze?',
    answer:
      'Freeze time varies by machine and environment, but plan for about 45 minutes to an hour and a half in a cool setting. We recommend a dedicated outlet and starting several hours ahead of serving time.',
  },
  {
    question: 'Do I need to clean the machine after use?',
    answer:
      'No. We handle cleaning and sanitation after pickup. We only ask that you drain the mix from the bowls; unused mix can be refrigerated or frozen.',
  },
  {
    question: 'Can I move the frozen drink machine to another location?',
    answer:
      'No. The machine must stay at the contracted drop-off address. Moving it to another location may result in a transportation fee.',
  },
  {
    question: 'How far in advance do I need to reserve my machine?',
    answer:
      'We recommend booking at least 4 weeks ahead when possible, and 6 weeks ahead for peak dates or busy event seasons.',
  },
  {
    question: 'Can I pick up the machine myself?',
    answer:
      'No. For safety and liability reasons, all machines are delivered, set up, and picked up by Thirsty Dawg Rentals.',
  },
];

export const metadata = {
  title: 'Frequently Asked Questions | Thirsty Dawg Rentals',
  description:
    'Get answers to common questions about frozen drink machines, margarita rentals, soft serve machines, ice cream carts, delivery, setup, alcohol, power needs, and cleanup.',
  alternates: { canonical: absoluteUrl('/faq') },
};

export default function FAQPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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

      {faqs.map((faq, index) => (
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

      <FloatingBookWrapper />
    </div>
  );
}
