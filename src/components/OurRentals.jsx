// 📁 src/components/OurRentals.jsx
import { useState } from 'react';

export default function OurRentals() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [machineType, setMachineType] = useState('single');
  const [secondMachineType, setSecondMachineType] = useState('');
  const [estimatedTotal, setEstimatedTotal] = useState(null);

  const calculateNights = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  };

  const getPricing = (type, isSecond = false) => {
    const pricing = {
      single: { base: 185, extra: 40, secondBase: 100 },
      plastic: { base: 210, extra: 45, secondBase: 115 },
      stainless: { base: 240, extra: 50, secondBase: 130 },
    };
    const rates = pricing[type];
    return isSecond ? { base: rates.secondBase, extra: rates.extra } : rates;
  };

  const handleEstimate = () => {
    const nights = calculateNights();
    if (nights <= 0) return setEstimatedTotal('Please select valid dates');

    const chargeableNights = Math.max(0, nights - 2);

    const prices = [
      { type: machineType, isSecond: false },
      ...(secondMachineType ? [{ type: secondMachineType, isSecond: true }] : []),
    ];

    prices.sort((a, b) => getPricing(b.type).base - getPricing(a.type).base);
    const total = prices.reduce((sum, item, index) => {
      const isMostExpensive = index === 0;
      const price = getPricing(item.type, !isMostExpensive);
      return sum + price.base + price.extra * chargeableNights;
    }, 0);

    const taxedTotal = (total * 1.075).toFixed(2);
    setEstimatedTotal(`$${taxedTotal}`);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '3rem 1rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', fontFamily: '"Chewy", cursive' }}>
        <div style={{ flex: '1 1 100%' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', color: '#009fdb' }}>💵 Rental Prices</h2>
          <p style={{ textAlign: 'center', marginBottom: '1rem', fontStyle: 'italic', color: '#333' }}>Need a machine for the whole week? Add extra weekdays to your rental!</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <div style={cardStyle}><h3>🍹 Stainless Single Flavor – $185</h3><ul><li>Weekend: $185</li><li>Extra Days: $40</li></ul></div>
            <div style={cardStyle}><h3>🥤 Plastic Dual Flavor – $210</h3><ul><li>Weekend: $210</li><li>Extra Days: $45</li></ul></div>
            <div style={cardStyle}><h3>🍧 Stainless Dual Flavor – $240</h3><ul><li>Weekend: $240</li><li>Extra Days: $50</li></ul></div>
          </div>

          <div style={boxStyle}>
            <div style={{ flex: '1 1 300px' }}>
              <h4 style={titleStyle}>💡 Want more than one machine?</h4>
              <ul style={{ fontSize: '1rem', paddingLeft: '1.5rem', marginTop: '0.75rem', color: '#1f2937' }}>
                <li><strong>Second Stainless Single:</strong> $100 + $40/day</li>
                <li><strong>Second Plastic Dual:</strong> $115 + $45/day</li>
                <li><strong>Second Stainless Dual:</strong> $130 + $50/day</li>
              </ul>
            </div>

            <div style={{ flex: '1 1 300px' }}>
              <h4 style={titleStyle}>📊 Estimate Your Rental Cost</h4>
              <p style={{ fontSize: '0.9rem' }}>Select your rental period and machines below:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label>Start Date:</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={inputStyle} />
                <label>End Date:</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={inputStyle} />
                <label>Main Machine:</label>
                <select value={machineType} onChange={(e) => setMachineType(e.target.value)} style={inputStyle}>
                  <option value="single">Stainless Single</option>
                  <option value="plastic">Plastic Dual</option>
                  <option value="stainless">Stainless Dual</option>
                </select>
                <label>Second Machine (Optional):</label>
                <select value={secondMachineType} onChange={(e) => setSecondMachineType(e.target.value)} style={inputStyle}>
                  <option value="">None</option>
                  <option value="single">Stainless Single</option>
                  <option value="plastic">Plastic Dual</option>
                  <option value="stainless">Stainless Dual</option>
                </select>
              </div>
              <button onClick={handleEstimate} style={buttonStyle}>Estimate Price</button>
              {estimatedTotal && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Estimated Total: {estimatedTotal}</p>}
              <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#555' }}>
                Total includes 7.5% tax. Final charge may vary by delivery zone or mix count.
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1rem', color: '#1f2937' }}>
            Questions? Call or text us at <strong>(850) 572-3796</strong>
          </p>

          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.95rem', color: '#1f2937' }}>
            Need a longer term lease? Call or text to inquire about custom pricing options.
          </p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  flex: '1 1 300px', backgroundColor: '#e6f4fd', padding: '1.5rem', borderRadius: '1rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)', color: '#1f2937', fontSize: '1rem'
};

const boxStyle = {
  marginTop: '2rem', backgroundColor: '#e6f4fd', padding: '1.5rem', borderRadius: '1rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem'
};

const titleStyle = {
  textAlign: 'center', fontWeight: 'bold', color: '#009fdb', fontSize: '1.4rem'
};

const inputStyle = {
  width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc'
};

const buttonStyle = {
  width: '100%', padding: '0.75rem', backgroundColor: '#009fdb', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold'
};
