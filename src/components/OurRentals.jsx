'use client';

// 📁 src/components/OurRentals.jsx
import { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function OurRentals() {
  const [machineType, setMachineType] = useState('single');
  const [secondMachineType, setSecondMachineType] = useState('');
  const [estimatedTotal, setEstimatedTotal] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const calculateTotal = () => {
    const prices = {
      single: { base: 215, extra: 45 },
      stainless: { base: 250, extra: 55 },
      softserve: { base: 235, extra: 50 },
    };

    const start = new Date(range[0].startDate);
    const end = new Date(range[0].endDate);

    const diffTime = Math.abs(end - start);
    const nights = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    let primary = machineType;
    let secondary = secondMachineType;

    if (secondary && prices[secondary].base > prices[primary].base) {
      [primary, secondary] = [secondary, primary];
    }

    const extraNights = Math.max(0, nights - 2);
    let total = prices[primary].base + extraNights * prices[primary].extra;

    if (secondary) {
      const discountedSecondMachineBase = prices[secondary].base * 0.75;
      total += discountedSecondMachineBase + extraNights * prices[secondary].extra;
    }

    const tax = total * 0.075;
    setEstimatedTotal(`$${(total + tax).toFixed(2)} (includes 7.5% tax)`);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const infoCardStyle = {
    background: 'linear-gradient(180deg, #eef9ff 0%, #dff4ff 100%)',
    padding: '1.5rem',
    borderRadius: '18px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
    border: '2px solid rgba(25, 181, 241, 0.18)',
    flex: '1 1 300px',
    color: 'var(--td-black)',
    fontFamily: 'var(--body-font)',
  };

  const priceCardStyle = {
    flex: '1 1 300px',
    background: 'linear-gradient(180deg, #eef9ff 0%, #dff4ff 100%)',
    padding: '1.5rem',
    borderRadius: '18px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
    border: '2px solid rgba(25, 181, 241, 0.18)',
    color: 'var(--td-black)',
    fontFamily: 'var(--body-font)',
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '3rem 1rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          fontFamily: 'var(--body-font)',
        }}
      >
        <div style={infoCardStyle}>
          <h3
            style={{
              marginBottom: '0.75rem',
              color: 'var(--td-blue)',
              fontFamily: 'var(--heading-font)',
              fontSize: '1.6rem',
            }}
          >
            🧊 Single-Flavor Machine
          </h3>
          <p style={{ margin: 0, lineHeight: 1.65 }}>
            Great for frozen margaritas, daiquiris, or slushies. Easy to use —
            just plug in and pour. Includes one mix and full setup. No ice
            required.
          </p>
        </div>

        <div style={infoCardStyle}>
          <h3
            style={{
              marginBottom: '0.75rem',
              color: 'var(--td-blue)',
              fontFamily: 'var(--heading-font)',
              fontSize: '1.6rem',
            }}
          >
            🍹 Dual-Flavor Machine
          </h3>
          <p style={{ margin: 0, lineHeight: 1.65 }}>
            Serve two flavors at once — a hit for weddings, festivals, and big
            parties. Comes with two mixes, dual tanks, and delivery/setup.
          </p>
        </div>

        <div style={infoCardStyle}>
          <h3
            style={{
              marginBottom: '0.75rem',
              color: 'var(--td-blue)',
              fontFamily: 'var(--heading-font)',
              fontSize: '1.6rem',
            }}
          >
            🍦 Soft Serve Ice Cream
          </h3>
          <p style={{ margin: 0, lineHeight: 1.65 }}>
            Delicious soft serve without the fuss. Our compact Taylor 152
            machine is ideal for birthday parties, backyard events, and small
            celebrations. Just plug it in and enjoy — requires a 120V outlet on
            a dedicated 20 amp breaker. Customer must verify outlet before
            delivery.
          </p>
        </div>

        <div style={infoCardStyle}>
          <h3
            style={{
              marginBottom: '0.75rem',
              color: 'var(--td-blue)',
              fontFamily: 'var(--heading-font)',
              fontSize: '1.6rem',
            }}
          >
            🔌 No Ice Required
          </h3>
          <p style={{ margin: 0, lineHeight: 1.65 }}>
            All machines are high-efficiency and freeze internally — no bagged
            ice needed. Made in the USA and built for large crowds.
          </p>
        </div>

        <div style={infoCardStyle}>
          <h3
            style={{
              marginBottom: '0.75rem',
              color: 'var(--td-blue)',
              fontFamily: 'var(--heading-font)',
              fontSize: '1.6rem',
            }}
          >
            🏖️ Vacation-Ready
          </h3>
          <p style={{ margin: 0, lineHeight: 1.65 }}>
            Perfect for beach houses and vacation rentals in Pensacola,
            Pensacola Beach, Navarre, or Gulf Breeze. Book for up to 7 days —
            we’ll handle setup and pickup.
          </p>
        </div>
      </div>

      <section
        id="pricing"
        style={{
          padding: '2rem 1rem',
          backgroundColor: '#ffffff',
          borderRadius: '22px',
          marginTop: '3rem',
          boxShadow: 'var(--shadow-soft)',
          maxWidth: '1100px',
          marginInline: 'auto',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '1rem',
            color: 'var(--td-blue)',
            fontFamily: 'var(--heading-font)',
          }}
        >
          💵 Rental Prices
        </h2>

        <p
          style={{
            textAlign: 'center',
            marginBottom: '1rem',
            fontStyle: 'italic',
            color: 'var(--td-black)',
            fontFamily: 'var(--body-font)',
          }}
        >
          Need a machine for the whole week? Add extra weekdays to your rental.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <div style={priceCardStyle}>
            <h3
              style={{
                fontSize: '1.5rem',
                marginBottom: '0.5rem',
                color: 'var(--td-blue)',
                fontFamily: 'var(--heading-font)',
              }}
            >
              🍹 Stainless Single Flavor – $215
            </h3>
            <ul
              style={{
                paddingLeft: '1.2rem',
                color: 'var(--td-black)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              <li>
                Weekend Rental: Friday evening through Sunday evening –{' '}
                <strong>$215</strong>
              </li>
              <li>
                Add Extra Days: <strong>$45</strong> per additional weekday
              </li>
            </ul>
            <p
              style={{
                fontStyle: 'italic',
                marginTop: '0.5rem',
                color: 'var(--td-black)',
              }}
            >
              🧊 Example: Friday to Wednesday = $215 + 3 extra days = $350
            </p>
          </div>

          <div style={priceCardStyle}>
            <h3
              style={{
                fontSize: '1.5rem',
                marginBottom: '0.5rem',
                color: 'var(--td-blue)',
                fontFamily: 'var(--heading-font)',
              }}
            >
              🥤 Soft Serve – $235
            </h3>
            <ul
              style={{
                paddingLeft: '1.2rem',
                color: 'var(--td-black)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              <li>
                Weekend Rental: Friday evening through Sunday evening –{' '}
                <strong>$235</strong>
              </li>
              <li>
                Add Extra Days: <strong>$50</strong> per additional weekday
              </li>
            </ul>
            <p
              style={{
                fontStyle: 'italic',
                marginTop: '0.5rem',
                color: 'var(--td-black)',
              }}
            >
              🧊 Example: Friday to Wednesday = $235 + 3 extra days = $385
            </p>
          </div>

          <div style={priceCardStyle}>
            <h3
              style={{
                fontSize: '1.5rem',
                marginBottom: '0.5rem',
                color: 'var(--td-blue)',
                fontFamily: 'var(--heading-font)',
              }}
            >
              🍧 Stainless Dual Flavor – $250
            </h3>
            <ul
              style={{
                paddingLeft: '1.2rem',
                color: 'var(--td-black)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              <li>
                Weekend Rental: Friday evening through Sunday evening –{' '}
                <strong>$250</strong>
              </li>
              <li>
                Add Extra Days: <strong>$55</strong> per additional weekday
              </li>
            </ul>
            <p
              style={{
                fontStyle: 'italic',
                marginTop: '0.5rem',
                color: 'var(--td-black)',
              }}
            >
              🧊 Example: Friday to Wednesday = $250 + 3 extra days = $415
            </p>
          </div>
        </div>
        <div
  style={{
    marginTop: '2rem',
    padding: '1.5rem',
    background: 'linear-gradient(180deg, #fff7e6 0%, #fff1cc 100%)',
    borderRadius: '18px',
    border: '2px solid rgba(255, 124, 2, 0.25)',
    textAlign: 'center',
  }}
>
  <h3 style={{ color: '#ff7c02', marginBottom: '0.75rem' }}>
    🎯 Why Choose Thirsty Dawg?
  </h3>

  <p style={{ lineHeight: 1.7 }}>
    ✔️ Commercial-grade machines (no cheap party rentals)<br />
    ✔️ Delivered, set up, and picked up for you<br />
    ✔️ No ice, no mess, no stress<br />
    ✔️ Trusted for weddings, beach parties, and large events
  </p>

  <p style={{ marginTop: '0.75rem', fontWeight: 'bold' }}>
    You show up. We handle the rest.
  </p>
</div>

<p
  style={{
    marginTop: '1rem',
    fontStyle: 'italic',
    textAlign: 'center',
  }}
>
  ⭐ “The highlight of our event — everyone kept going back for more!”
</p>

        <div
          style={{
            marginTop: '2rem',
            background: 'linear-gradient(180deg, #eef9ff 0%, #dff4ff 100%)',
            padding: isMobile ? '1rem' : '1.5rem',
            borderRadius: '18px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
            border: '2px solid rgba(25, 181, 241, 0.18)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: isMobile ? '1rem' : '2rem',
            fontFamily: 'var(--body-font)',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              flex: isMobile ? '1 1 100%' : '1 1 300px',
              minWidth: 0,
              width: '100%',
            }}
          >
            <h4
              style={{
                textAlign: 'center',
                fontWeight: '700',
                color: 'var(--td-blue)',
                fontSize: '1.4rem',
                fontFamily: 'var(--heading-font)',
              }}
            >
              💡 Need more than one machine?
            </h4>
            <ul
              style={{
                fontSize: '1rem',
                paddingLeft: '1.5rem',
                marginTop: '0.75rem',
                color: 'var(--td-black)',
                listStyleType: 'disc',
                lineHeight: 1.7,
              }}
            >
              <li>
                <strong>Serving a large crowd?</strong> Adding a second machine
                helps keep lines moving and gives your guests more options.
              </li>
              <li>
                We offer discounted pricing for multiple machine rentals.
              </li>
              <li>
                Contact us and we’ll help build the best setup for your event.
              </li>
              <p style={{ textAlign: 'center', marginTop: '0.5rem' }}>
  Most large events choose two machines — we’ll help you pick the best setup.
</p>
            </ul>
          </div>

          <div
            style={{
              flex: isMobile ? '1 1 100%' : '1 1 300px',
              minWidth: 0,
              width: '100%',
            }}
          >
            <h4
              style={{
                textAlign: 'center',
                fontWeight: '700',
                color: 'var(--td-blue)',
                fontSize: '1.4rem',
                fontFamily: 'var(--heading-font)',
              }}
            >
              📊 Estimate Your Rental Cost
            </h4>

            <p
              style={{
                fontSize: '0.95rem',
                marginBottom: '0.75rem',
                color: 'var(--td-black)',
                lineHeight: 1.6,
              }}
            >
              Select your rental period below to estimate your total cost.
              Rentals include the first two nights; additional nights are
              charged based on machine type.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <label style={{ fontWeight: '700', color: 'var(--td-black)' }}>
                Select Rental Dates:
              </label>

              {isMobile ? (
                <>
                  <label style={{ fontWeight: '700', color: 'var(--td-black)' }}>
                    Rental Start Date:
                  </label>
                  <input
                    type="date"
                    value={range[0].startDate.toISOString().split('T')[0]}
                    onChange={(e) =>
                      setRange([
                        {
                          ...range[0],
                          startDate: new Date(e.target.value),
                        },
                      ])
                    }
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,0,0,0.15)',
                      fontFamily: 'var(--body-font)',
                    }}
                  />

                  <label style={{ fontWeight: '700', color: 'var(--td-black)' }}>
                    Rental End Date:
                  </label>
                  <input
                    type="date"
                    value={range[0].endDate.toISOString().split('T')[0]}
                    onChange={(e) =>
                      setRange([
                        {
                          ...range[0],
                          endDate: new Date(e.target.value),
                        },
                      ])
                    }
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,0,0,0.15)',
                      fontFamily: 'var(--body-font)',
                    }}
                  />
                </>
              ) : (
                <div
                  style={{
                    width: '100%',
                    overflowX: 'auto',
                    borderRadius: '14px',
                    background: '#ffffff',
                  }}
                >
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    minDate={new Date()}
                    months={1}
                    direction="horizontal"
                    rangeColors={['#19b5f1']}
                  />
                </div>
              )}

              <label
                htmlFor="machineType"
                style={{ fontWeight: '700', color: 'var(--td-black)' }}
              >
                Machine Type:
              </label>

              <select
                id="machineType"
                value={machineType}
                onChange={(e) => setMachineType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(0,0,0,0.15)',
                  fontFamily: 'var(--body-font)',
                }}
              >
                <option value="single">Stainless Single</option>
                <option value="softserve">Soft Serve</option>
                <option value="stainless">Stainless Dual</option>
              </select>

              <label
                htmlFor="secondMachineType"
                style={{ fontWeight: '700', color: 'var(--td-black)' }}
              >
                Second Machine (Optional):
              </label>

              <select
                id="secondMachineType"
                value={secondMachineType}
                onChange={(e) => setSecondMachineType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(0,0,0,0.15)',
                  fontFamily: 'var(--body-font)',
                }}
              >
                <option value="">None</option>
                <option value="single">Stainless Single</option>
                <option value="softserve">Soft Serve</option>
                <option value="stainless">Stainless Dual</option>
              </select>

              <button
                onClick={calculateTotal}
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  background: 'var(--td-blue)',
                  color: 'var(--td-white)',
                  border: 'none',
                  borderRadius: '999px',
                  fontWeight: '700',
                  fontFamily: 'var(--body-font)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-soft)',
                }}
              >
                Get Your Estimated Total
              </button>

              {estimatedTotal && (
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontWeight: '700',
                    color: 'var(--td-black)',
                    fontFamily: 'var(--body-font)',
                  }}
                >
                  Estimated Total: {estimatedTotal}
                </p>
              )}

              <p
                style={{
                  fontSize: '0.85rem',
                  marginTop: '0.25rem',
                  color: 'rgba(17,17,17,0.75)',
                  lineHeight: 1.5,
                }}
              >
                Final total may vary based on delivery distance and number of
                drink mixes needed.
              </p>
              <p
  style={{
    textAlign: 'center',
    fontSize: '0.85rem',
    marginTop: '0.5rem',
    color: 'rgba(17,17,17,0.7)',
  }}
>
  No commitment — just get a quick estimate for your event.
</p>
            </div>
          </div>
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            fontSize: '1rem',
            color: 'var(--td-black)',
            fontFamily: 'var(--body-font)',
          }}
        >
          Questions? Call or text us at <strong>(850) 572-3796</strong>
        </p>
      </section>
    </div>
  );
}