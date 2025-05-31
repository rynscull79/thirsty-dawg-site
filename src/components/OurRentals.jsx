// 📁 src/components/OurRentals.jsx
import { useState } from 'react';
export default function OurRentals() {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [machineType, setMachineType] = useState('single');
  const [secondMachineType, setSecondMachineType] = useState('');
  const [estimatedTotal, setEstimatedTotal] = useState(null);

  const calculateTotal = () => {
    const prices = {
      single: { base: 185, extra: 40, second: 100 },
      plastic: { base: 210, extra: 45, second: 115 },
      stainless: { base: 240, extra: 50, second: 130 },
    };
    if (!startDate || !endDate) return;
    const start = new Date(startDate);
    const end = new Date(endDate);
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
        <section style={{ width: '100%' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#009fdb' }}>💵 Rental Prices</h2>

          <div style={{ margin: '2rem 0', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            <div>
              <h3>🍹 Stainless Single – $185</h3>
              <p>Rental covers 2 nights. Extra days: $40/night</p>
            </div>
            <div>
              <h3>🥤 Plastic Dual – $210</h3>
              <p>Rental covers 2 nights. Extra days: $45/night</p>
            </div>
            <div>
              <h3>🍧 Stainless Dual – $240</h3>
              <p>Rental covers 2 nights. Extra days: $50/night</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: '1 1 300px' }}>
              <label><strong>Start Date:</strong></label>
              <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />

              <label><strong>End Date:</strong></label>
              <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />

              <label><strong>Primary Machine:</strong></label>
              <select value={machineType} onChange={e => setMachineType(e.target.value)} style={{ width: '100%', padding: '0.5rem' }}>
                <option value="single">Stainless Single</option>
                <option value="plastic">Plastic Dual</option>
                <option value="stainless">Stainless Dual</option>
              </select>

              <label><strong>Second Machine (Optional):</strong></label>
              <select value={secondMachineType} onChange={e => setSecondMachineType(e.target.value)} style={{ width: '100%', padding: '0.5rem' }}>
                <option value="">None</option>
                <option value="single">Stainless Single</option>
                <option value="plastic">Plastic Dual</option>
                <option value="stainless">Stainless Dual</option>
              </select>

              <button onClick={calculateTotal} style={{ marginTop: '1rem', width: '100%', padding: '0.75rem', backgroundColor: '#009fdb', color: 'white', border: 'none', borderRadius: '0.5rem' }}>Estimate Price</button>

              {estimatedTotal && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Estimated Total: {estimatedTotal}</p>}
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#333' }}>Final total may vary depending on delivery distance and number of mixes used.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
