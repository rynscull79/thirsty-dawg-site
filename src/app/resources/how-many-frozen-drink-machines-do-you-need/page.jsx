import Link from 'next/link';
import { absoluteUrl } from '@/lib/seoData';

const title = 'How Many Frozen Drink Machines Do You Need for a Party?';
const description =
  'Learn how many frozen drink machines to rent for a party, wedding, corporate event, festival, or Gulf Coast gathering based on guest count, drink options, and flavors.';

export const metadata = {
  title: `${title} | Thirsty Dawg Rentals`,
  description,
  alternates: { canonical: absoluteUrl('/resources/how-many-frozen-drink-machines-do-you-need') },
  openGraph: {
    title: `${title} | Thirsty Dawg Rentals`,
    description,
    url: absoluteUrl('/resources/how-many-frozen-drink-machines-do-you-need'),
    type: 'article',
    images: ['https://www.thirstydawgrentals.com/gallery/frozen-drinks-and-softserve.webp'],
  },
};

export default function FrozenDrinkMachineCountGuidePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Organization',
      name: 'Thirsty Dawg Rentals',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Thirsty Dawg Rentals',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/thirsty-dawg-logo.webp'),
      },
    },
    mainEntityOfPage: absoluteUrl('/resources/how-many-frozen-drink-machines-do-you-need'),
  };

  return (
    <article className="seo-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="seo-hero">
        <p className="seo-eyebrow">Frozen Drink Machine Planning Guide</p>
        <h1>{title}</h1>
        <p>
          Choosing the right number of frozen drink machines depends on your guest count, drink menu,
          event style, and how quickly guests will be served. For most smaller parties, the setup is
          simple. Larger events, multiple flavors, or frozen drinks as the main beverage option may
          require additional machines.
        </p>
      </section>

      <section className="seo-section">
        <p>
          For a typical party, Thirsty Dawg Rentals usually recommends one single-flavor frozen drink
          machine for every 100 guests when frozen drinks are offered alongside other beverages. If
          guests also have beer, wine, cocktails, soda, or water available, that helps reduce the demand
          on the frozen drink machine.
        </p>

        <p>
          If frozen drinks are the only specialty drink or alcoholic option, demand will usually be
          higher because more guests will rely on them. In that case, planning closer to two machines per
          100 guests may be the better choice.
        </p>
      </section>

      <section className="seo-section">
        <h2>Quick Guest Count Guide</h2>
        <ul className="seo-list">
          <li>Up to 50 guests: One single-flavor or double-flavor machine will usually be fine.</li>
          <li>50 to 100 guests: One single-flavor machine is usually recommended.</li>
          <li>Over 100 guests: Consider two or more machines.</li>
          <li>Festivals and large corporate events: Contact Thirsty Dawg for a custom recommendation.</li>
        </ul>
      </section>

      <section className="seo-section">
        <h2>Single-Flavor vs. Double-Flavor Machines</h2>
        <p>
          Thirsty Dawg Rentals offers both single-flavor and double-flavor frozen drink machines. A
          single-flavor machine serves one flavor, while a double-flavor machine serves two flavors from
          one machine.
        </p>

        <p>
          For smaller parties, a double-flavor machine can be a great option when you want two flavors
          without renting multiple machines. For events larger than about 50 guests, we usually recommend
          single-flavor machines instead of the stainless double-flavor machine because the double-flavor
          machine has smaller freezer barrels and a lower output capacity.
        </p>

        <p>
          If you have a larger crowd and want multiple flavors, multiple single-flavor machines are
          usually the better setup.
        </p>
      </section>

      <section className="seo-section">
        <h2>Free Drinks vs. Drinks for Sale</h2>
        <p>
          Demand also changes depending on whether drinks are free or being sold. When frozen drinks are
          included for guests, people usually come back more often. When drinks are being sold, demand is
          usually lower because guests tend to buy fewer drinks.
        </p>

        <p>
          If your event is offering free frozen drinks, especially at a wedding, private party, or
          company event, it is smart to plan for higher usage.
        </p>
      </section>

      <section className="seo-section">
        <h2>Large Events Need a Custom Recommendation</h2>
        <p>
          Festivals, large corporate events, school events, and public gatherings can vary significantly.
          Attendance, event length, drink pricing, flavor choices, and other beverage options all affect
          how many machines you may need.
        </p>

        <p>
          For larger events, the best option is to contact Thirsty Dawg Rentals so we can help recommend
          the right setup for your crowd.
        </p>
      </section>

      <section className="seo-section">
        <h2>Do You Need Ice?</h2>
        <p>
          No bags of ice are needed for the frozen drink machines. Thirsty Dawg Rentals delivers the
          machine, sets it up, and gets everything ready, making your drink station easier to manage than
          coolers, blenders, or bags of ice.
        </p>
      </section>

      <section className="seo-section">
        <h2>Delivery, Setup, Pickup, and Cleanup</h2>
        <p>
          Thirsty Dawg Rentals handles delivery, setup, pickup, and post-party cleanup. We bring the
          equipment to your event, get it ready to serve, and pick it back up afterward.
        </p>
      </section>

      <section className="seo-section">
        <h2>Need Help Choosing the Right Setup?</h2>
        <p>
          If you are not sure how many frozen drink machines you need, Thirsty Dawg Rentals can help you
          choose the right setup for your party, wedding, corporate event, beach house gathering,
          festival, or Gulf Coast event.
        </p>
        <Link className="seo-text-link" href="/booking">
          Request a Rental Recommendation
        </Link>
      </section>
    </article>
  );
}
