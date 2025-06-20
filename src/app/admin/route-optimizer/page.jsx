'use client';

import { useState, useRef } from 'react';
import { LoadScript, GoogleMap, DirectionsRenderer } from '@react-google-maps/api';

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const libraries = ['places'];

const containerStyle = {
  width: '100%',
  height: '300px',
  marginBottom: '1rem',
};

export default function RouteOptimizerPage() {
  const [addresses, setAddresses] = useState(['', '', '']);
  const [directions, setDirections] = useState(null);
  const inputRefs = useRef([]);

  const handleAddressChange = (index, value) => {
    const updated = [...addresses];
    updated[index] = value;
    setAddresses(updated);
  };

  const addStop = () => setAddresses([...addresses, '']);
  const removeStop = (index) => setAddresses(addresses.filter((_, i) => i !== index));

  const calculateRoute = async () => {
    if (addresses.length < 2) return;
    const origin = addresses[0];
    const destination = addresses[addresses.length - 1];
    const waypoints = addresses.slice(1, -1).map((addr) => ({ location: addr, stopover: true }));

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        waypoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === 'OK') setDirections(result);
        else alert('Could not fetch directions: ' + status);
      }
    );
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'var(--font-chewy)' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Route Optimizer</h1>
      <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={libraries}>
        {addresses.map((address, idx) => (
          <div key={idx} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
            <input
              ref={(el) => (inputRefs.current[idx] = el)}
              type="text"
              value={address}
              placeholder={`Stop ${idx + 1}`}
              onChange={(e) => handleAddressChange(idx, e.target.value)}
              style={{ flex: 1, padding: '0.5rem', fontSize: '1rem' }}
            />
            {addresses.length > 2 && (
              <button onClick={() => removeStop(idx)} style={{ fontSize: '1rem' }}>🗑️</button>
            )}
          </div>
        ))}
        <button onClick={addStop} style={{ marginBottom: '1rem', fontSize: '1rem' }}>➕ Add Stop</button>
        <button
          onClick={calculateRoute}
          style={{ display: 'block', width: '100%', padding: '0.75rem', background: '#333', color: 'white', fontSize: '1rem', border: 'none', borderRadius: '4px' }}
        >
          Get Optimized Route
        </button>
        <div style={{ marginTop: '1rem' }}>
          <GoogleMap mapContainerStyle={containerStyle} center={{ lat: 27.9944, lng: -81.7603 }} zoom={8}>
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </div>
      </LoadScript>
    </div>
  );
}
