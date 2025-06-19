'use client';
import { useState } from 'react';

export default function DeliveryArea() {
  const [address, setAddress] = useState('');
  const [fee, setFee] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const calculateFee = async () => {
    if (!address) return;
    setLoading(true);
    setError('');
    setFee(null);

    try {
      const res = await fetch('https://thirsty-dawg-backend-clean.up.railway.app/api/calculate-delivery-fee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });

      const data = await res.json();

      if (res.ok && data.fee !== undefined) {
        setFee(data.fee);
      } else {
        throw new Error(data.error || 'Could not calculate fee');
      }
    } catch (err) {
      setError('Error calculating delivery fee. Please check your address or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      marginTop: '2rem'
    }}>
      <h3 style={{
        textAlign: 'center',
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#009fdb',
        marginBottom: '1.5rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        📍 Delivery Area & Fee Calculator
      </h3>

      <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
        We deliver across Pensacola and surrounding Gulf Coast areas!
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <button
          onClick={calculateFee}
          disabled={loading}
          style={{
            padding: '0.75rem',
            fontSize: '1rem',
            backgroundColor: '#009fdb',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {loading ? 'Calculating...' : 'Calculate Delivery Fee'}
        </button>

        {fee !== null && (
          <p style={{ fontWeight: 'bold', color: '#333' }}>
            Your estimated delivery fee is <span style={{ color: '#009fdb' }}>${fee.toFixed(2)}</span>
          </p>
        )}

        {error && (
          <p style={{ color: 'red', fontSize: '0.95rem' }}>{error}</p>
        )}
      </div>

      <p style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '1rem' }}>
        Don’t see your area listed? Contact us — we may still be able to serve your event!
        <br />
        <span style={{ fontStyle: 'normal', fontSize: '0.95rem', color: '#555' }}>
          Delivery is free within 25 miles of central Pensacola. Outside areas may include a delivery fee.
        </span>
      </p>
    </section>
  );
}
