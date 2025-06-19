'use client';

import { useEffect, useRef, useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function DeliveryArea() {
  const [deliveryFee, setDeliveryFee] = useState(null);
  const [address, setAddress] = useState('');
  const autocompleteRef = useRef(null);

  const handlePlaceChanged = async () => {
    const place = autocompleteRef.current?.getPlace();
    if (!place?.formatted_address) return;

    setAddress(place.formatted_address);

    const response = await fetch(
      `/api/calculate-delivery-fee?address=${encodeURIComponent(place.formatted_address)}`
    );
    const data = await response.json();

    if (data?.fee) {
      setDeliveryFee(data.fee);
    } else {
      setDeliveryFee(null);
    }
  };

  return (
    <section style={{ padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '1rem', marginTop: '2rem' }}>
      <h2 style={{ fontFamily: '"Chewy", cursive', fontSize: '2rem', color: '#009fdb', marginBottom: '1rem', textAlign: 'center' }}>
        📍 Delivery Coverage & Fee Estimate
      </h2>

      <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '1rem' }}>
        We deliver across Pensacola & surrounding Gulf Coast areas. The first 25 miles are free.
      </p>

      <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={libraries}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Autocomplete onLoad={(ref) => (autocompleteRef.current = ref)} onPlaceChanged={handlePlaceChanged}>
            <input
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
          </Autocomplete>
        </div>
      </LoadScript>

      {deliveryFee !== null && (
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem', textAlign: 'center' }}>
          Your estimated delivery fee: ${deliveryFee.toFixed(2)}
        </p>
      )}
    </section>
  );
}
