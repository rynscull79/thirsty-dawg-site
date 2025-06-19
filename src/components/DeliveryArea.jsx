'use client';

import { useRef, useState, useEffect } from 'react';

export default function DeliveryArea() {
  const [deliveryFee, setDeliveryFee] = useState(null);
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (!window.google || !window.google.maps || !inputRef.current) return;

    autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ['geocode'],
      componentRestrictions: { country: 'us' },
    });

    autocompleteRef.current.addListener('place_changed', async () => {
      const place = autocompleteRef.current.getPlace();
      if (!place || !place.formatted_address) return;

      const formattedAddress = place.formatted_address;

      try {
        const res = await fetch(`/api/calculate-delivery-fee?address=${encodeURIComponent(formattedAddress)}`);
        const data = await res.json();
        if (data?.fee !== undefined) {
          setDeliveryFee(data.fee);
        } else {
          setDeliveryFee(null);
        }
      } catch (err) {
        console.error('Error calculating delivery fee:', err);
        setDeliveryFee(null);
      }
    });
  }, []);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '1rem', marginTop: '2rem' }}>
      <h2 style={{ fontFamily: '"Chewy", cursive', fontSize: '2rem', color: '#009fdb', marginBottom: '1rem', textAlign: 'center' }}>
        📍 Delivery Coverage & Fee Estimate
      </h2>

      <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '1rem' }}>
        We deliver across Pensacola & surrounding Gulf Coast areas. The first 25 miles are free.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your delivery address"
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '0.75rem',
            fontSize: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #ccc',
          }}
        />
      </div>

      {deliveryFee !== null && (
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem', textAlign: 'center' }}>
          Your estimated delivery fee: {deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}
        </p>
      )}
    </section>
  );
}
