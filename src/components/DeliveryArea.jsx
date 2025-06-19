'use client';

import { useRef, useState, useEffect } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const GOOGLE_LIBRARIES = ['places'];
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function DeliveryArea() {
  const [formData, setFormData] = useState({ street: '', city: '', state: '', zip: '' });
  const [deliveryFee, setDeliveryFee] = useState(null);
  const [calculatingFee, setCalculatingFee] = useState(false);
  const autocompleteRef = useRef(null);

  const calculateDeliveryFee = async () => {
    try {
      setCalculatingFee(true);
      const response = await fetch('https://booking-backend-production-b048.up.railway.app/api/calculate-delivery-fee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination: {
            street: formData.street,
            city: formData.city,
            state: formData.state,
            zip: formData.zip
          }
        }),
      });

      const result = await response.json();
      if (result.success) {
        setDeliveryFee(result.deliveryFee);
      } else {
        setDeliveryFee(null);
      }
    } catch (err) {
      console.error('❌ Error calculating delivery fee:', err);
      setDeliveryFee(null);
    } finally {
      setCalculatingFee(false);
    }
  };

  useEffect(() => {
    const { street, city, state, zip } = formData;
    if (street && city && state && zip) {
      calculateDeliveryFee();
    }
  }, [formData.street, formData.city, formData.state, formData.zip]);

  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={GOOGLE_LIBRARIES}>
      <section style={{ padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '1rem', marginTop: '2rem' }}>
        <h2 style={{ fontFamily: '"Chewy", cursive', fontSize: '2rem', color: '#009fdb', marginBottom: '1rem', textAlign: 'center' }}>
          📍 Delivery Coverage & Fee Estimate
        </h2>
        <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '1rem' }}>
  We deliver across Pensacola and surrounding areas including Gulf Breeze, Perdido, Pace, Beulah, Milton, Cantonment, Ensley, Pensacola Beach, Fairhope, Daphne, Spanish Fort, Orange Beach, and Foley.  
  <br /><br />
  Delivery within 25 miles of our central Gulf Coast hub is free of charge. Enter your event address below to find out if your delivery is free or if a delivery fee applies.
</p>


        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={() => {
              if (!autocompleteRef.current) return;
              const place = autocompleteRef.current.getPlace();
              if (!place || !place.address_components) return;

              const getPart = (type) =>
                place.address_components.find((c) => c.types.includes(type))?.long_name || '';

              const street = place.formatted_address || '';
              let city = getPart('locality') || getPart('sublocality') || getPart('administrative_area_level_2');
              if (!city) city = 'Unknown';
              const state = getPart('administrative_area_level_1') || 'FL';
              const zip = getPart('postal_code') || '';

              setFormData({ street, city, state, zip });
            }}
          >
            <input
              type="text"
              placeholder="Enter your delivery address"
              style={{
                width: '100%',
                maxWidth: '500px',
                padding: '0.75rem',
                fontSize: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid #ccc',
              }}
              value={formData.street}
              onChange={(e) => setFormData((prev) => ({ ...prev, street: e.target.value }))}
              autoComplete="off"
            />
          </Autocomplete>
        </div>

        {calculatingFee ? (
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>Calculating delivery fee...</p>
        ) : typeof deliveryFee === 'number' ? (
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem', textAlign: 'center' }}>
            {deliveryFee === 0 ? '✅ Free Delivery' : `Your estimated delivery fee: $${deliveryFee.toFixed(2)}`}
          </p>
        ) : null}
      </section>
    </LoadScript>
  );
}
