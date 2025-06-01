// 📁 src/components/OurRentals.jsx
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function OurRentals() {

  const [machineType, setMachineType] = useState('single');
  const [secondMachineType, setSecondMachineType] = useState('');
  const [estimatedTotal, setEstimatedTotal] = useState(null);
  const [range, setRange] = useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  },
]);


  const calculateTotal = () => {
    const prices = {
      single: { base: 185, extra: 40, second: 100 },
      plastic: { base: 210, extra: 45, second: 115 },
      stainless: { base: 240, extra: 50, second: 130 },
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
      total += prices[secondary].second + extraNights * prices[secondary].extra;
    }

    const tax = total * 0.075;
    setEstimatedTotal(`$${(total + tax).toFixed(2)} (includes 7.5% tax)`);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '3rem 1rem' }}>
              {/* Rental Descriptions */}
        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', flex: '1 1 300px' }}>
          <h3>🧊 Single-Flavor Machine</h3>
          <p>Great for frozen margaritas, daiquiris, or slushies. Easy to use — just plug in and pour. Includes one mix and full setup. No ice required.</p>
        </div>

        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', flex: '1 1 300px' }}>
          <h3>🍹 Dual-Flavor Machine</h3>
          <p>Serve two flavors at once — a hit for weddings, festivals, and big parties. Comes with two mixes, dual tanks, and delivery/setup.</p>
        </div>

        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', flex: '1 1 300px' }}>
          <h3>🔌 No Ice Required</h3>
          <p>All machines are high-efficiency and freeze internally — no bagged ice needed. Made in the USA and built for large crowds.</p>
        </div>

        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', flex: '1 1 300px' }}>
          <h3>🏖️ Vacation-Ready</h3>
          <p>Perfect for beach houses and vacation rentals in Pensacola, Pensacola Beach, Navarre, or Gulf Breeze. Book for up to 7 days — we’ll handle setup and pickup.</p>
        </div>
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          fontFamily: '"Chewy", cursive',
        }}>

        {/* Pricing and Calculator */}
       <section id="pricing" style={{ padding: '2rem 1rem', backgroundColor: '#ffffff', borderRadius: '1rem', marginTop: '3rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem', color: '#009fdb' }}>💵 Rental Prices</h2>
          <p style={{ textAlign: 'center', marginBottom: '1rem', fontStyle: 'italic', color: '#333' }}>
            Need a machine for the whole week? Add extra weekdays to your rental!
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <div style={{ flex: '1 1 300px', backgroundColor: '#e6f4fd', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1f2937' }}>🍹 Stainless Single Flavor – $185</h3>
              <ul style={{ paddingLeft: '1.2rem', color: '#333', fontSize: '0.95rem' }}>
                <li>Weekend Rental: Friday evening through Sunday evening – <strong>$185</strong></li>
                <li>Add Extra Days: <strong>$40</strong> per additional weekday</li>
              </ul>
              <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>🧊 Example: Friday to Wednesday = $185 + 3 extra days = $305</p>
            </div>

            <div style={{ flex: '1 1 300px', backgroundColor: '#e6f4fd', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1f2937' }}>🥤 Plastic Dual Flavor – $210</h3>
              <ul style={{ paddingLeft: '1.2rem', color: '#333', fontSize: '0.95rem' }}>
                <li>Weekend Rental: Friday evening through Sunday evening – <strong>$210</strong></li>
                <li>Add Extra Days: <strong>$45</strong> per additional weekday</li>
              </ul>
              <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>🧊 Example: Friday to Wednesday = $210 + 3 extra days = $345</p>
            </div>

            <div style={{ flex: '1 1 300px', backgroundColor: '#e6f4fd', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1f2937' }}>🍧 Stainless Dual Flavor – $240</h3>
              <ul style={{ paddingLeft: '1.2rem', color: '#333', fontSize: '0.95rem' }}>
                <li>Weekend Rental: Friday evening through Sunday evening – <strong>$240</strong></li>
                <li>Add Extra Days: <strong>$50</strong> per additional weekday</li>
              </ul>
              <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>🧊 Example: Friday to Wednesday = $240 + 3 extra days = $390</p>
            </div>
          </div>

          <div style={{ marginTop: '2rem', backgroundColor: '#e6f4fd', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
            <div style={{ flex: '1 1 300px' }}>
              <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#009fdb', fontSize: '1.4rem' }}>💡 Want more than one machine?</h4>
              <ul style={{ fontSize: '1rem', paddingLeft: '1.5rem', marginTop: '0.75rem', color: '#1f2937', listStyleType: 'disc' }}>
                <li><strong>Second Stainless Single Machine:</strong> $100 + $40/extra weekday</li>
                <li><strong>Second Plastic Dual Machine:</strong> $115 + $45/extra weekday</li>
                <li><strong>Second Stainless Dual Machine:</strong> $130 + $50/extra weekday</li>
              </ul>
            </div>

            <div style={{ flex: '1 1 300px' }}>
              <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#009fdb', fontSize: '1.4rem' }}>📊 Estimate Your Rental Cost</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Select your rental period below to estimate your total cost. Rentals include the first two nights; additional nights are charged based on machine type.
              </p>
<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
<label style={{ fontWeight: 'bold' }}>Select Rental Dates:</label>
<DateRange
  editableDateInputs={true}
  onChange={item => setRange([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={range}
  minDate={new Date()}
/>


  <label htmlFor="machineType" style={{ fontWeight: 'bold' }}>Machine Type:</label>
  <select
    id="machineType"
    value={machineType}
    onChange={(e) => setMachineType(e.target.value)}
    style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
  >
    <option value="single">Stainless Single</option>
    <option value="plastic">Plastic Dual</option>
    <option value="stainless">Stainless Dual</option>
  </select>
  <label htmlFor="secondMachineType" style={{ fontWeight: 'bold' }}>Second Machine (Optional):</label>
<select
  id="secondMachineType"
  value={secondMachineType}
  onChange={(e) => setSecondMachineType(e.target.value)}
  style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
>
  <option value="">None</option>
  <option value="single">Stainless Single</option>
  <option value="plastic">Plastic Dual</option>
  <option value="stainless">Stainless Dual</option>
</select>

</div>

              <button onClick={calculateTotal} style={{ width: '100%', padding: '0.75rem', backgroundColor: '#009fdb', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold' }}>
                Estimate Price
              </button>
              {estimatedTotal && (
                <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#1f2937' }}>Estimated Total: {estimatedTotal}</p>
              )}
              <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#555' }}>
                Final total may vary based on delivery distance and number of drink mixes needed.
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1rem', color: '#1f2937' }}>
            Questions? Call or text us at <strong>(850) 572-3796</strong>
          </p>
        </section>
      </div>
      </div>
  );
}
