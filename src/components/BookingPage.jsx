'use client';

import React, { useEffect, useRef, useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const GOOGLE_LIBRARIES = ['places'];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [machineType, setMachineType] = useState('');
  const [secondFlavor, setSecondFlavor] = useState('');
  const [serviceRequested, setServiceRequested] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(null);
  const [serviceType, setServiceType] = useState('');
  const [calculatingFee, setCalculatingFee] = useState(false);
  const autocompleteRef = useRef(null);
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
    name: '',
    email: '',
    phone: '',
  });
  const [bookingSource, setBookingSource] = useState('website');

  async function calculateDeliveryFee(address) {
    try {
      setCalculatingFee(true);
      const response = await fetch(
        'https://booking-backend-production-b048.up.railway.app/api/calculate-delivery-fee',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            destination: {
              street: formData.street,
              city: formData.city,
              state: formData.state,
              zip: formData.zip,
            },
          }),
        }
      );

      const result = await response.json();
      console.log('🚚 Delivery Fee API response:', result);

      if (result.success) {
        setDeliveryFee(result.deliveryFee);
      } else {
        console.error('❌ Failed to calculate delivery fee:', result.error);
        setDeliveryFee(null);
      }
    } catch (err) {
      console.error('❌ Error calculating delivery fee:', err);
      setDeliveryFee(null);
    } finally {
      setCalculatingFee(false);
    }
  }

  function calculateRentalLength(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nights = Math.floor((end - start) / (1000 * 60 * 60 * 24));

    if (nights <= 1) return 'Single Day Rental';
    const extraDays = nights - 2;
    return `${1 + extraDays} Day Rental`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const raw = Object.fromEntries(new FormData(form).entries());

    if (!raw.state || !raw.city) {
      alert(
        '❌ We couldn’t read your full address. Please select the suggestion from the address dropdown again.'
      );
      return;
    }

    const data = {
      name: raw.name,
      email: raw.email,
      phone: raw.phone,
      street: raw.street,
      city: raw.city || 'Unknown',
      state: raw.state,
      zip: raw.zip,
      dateNeeded: new Date(raw.date_needed).toISOString(),
      guestCount: parseInt(raw.guest_count),
      rentalStart: new Date(raw.date_needed).toISOString(),
      rentalEnd: new Date(raw.rental_end).toISOString(),
      machineType: raw.machine_type,
      flavor: raw.flavor,
      flavorAdditions: raw.flavor_additions || '',
      secondFlavor: raw.second_flavor || '',
      comments: raw.comments || '',
      iceCreamPackage: raw.ice_cream_package || '',
      rentalLength: calculateRentalLength(raw.date_needed, raw.rental_end),
      deliveryFee: deliveryFee !== null ? deliveryFee : 0,
      source: bookingSource || 'website',
    };

    try {
      const response = await fetch(
        'https://thirsty-dawg-accounting-backend-production.up.railway.app/api/public-booking-intake/thirsty-dawg',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok && result.ok) {
        console.log('✅ Booking sent successfully:', result);
        setSubmitted(true);
      } else {
        console.error('❌ Booking failed:', result);
        alert('⚠️ Failed to send booking. Try again.');
      }
    } catch (err) {
      console.error('Error sending booking:', err);
      alert('❌ Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const src = params.get('source');

    if (src) {
      localStorage.setItem('td_booking_source', src);
      setBookingSource(src);
    } else {
      const stored = localStorage.getItem('td_booking_source');
      if (stored) setBookingSource(stored);
    }
  }, []);

  useEffect(() => {
    const fullAddress = `${formData.street || ''}, ${formData.city || ''}, ${formData.state || ''} ${formData.zip || ''}`;
    if (formData.street && formData.city && formData.state && formData.zip) {
      calculateDeliveryFee(fullAddress);
    }
  }, [formData.street, formData.city, formData.state, formData.zip]);

  const handleDateChange = (e) => {
    const value = e.target.value;
    if (!value) return;

    const selectedDate = new Date(value);
    const blockedStart = new Date('2025-05-20');
    const blockedEnd = new Date('2025-06-01');

    if (selectedDate >= blockedStart && selectedDate <= blockedEnd) {
      alert(
        'Hey there! We’re taking a short break from May 20 to June 1 and won’t be taking bookings during that time. Please pick a different date — we can’t wait to help with your event!'
      );
      e.target.value = '';
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.9rem 1rem',
    borderRadius: '14px',
    border: '1px solid rgba(0,0,0,0.15)',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
    fontSize: '1rem',
    fontFamily: 'var(--body-font)',
    color: 'var(--td-black)',
    backgroundColor: '#ffffff',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.45rem',
    fontSize: '1.05rem',
    color: 'var(--td-black)',
    fontFamily: 'var(--body-font)',
    fontWeight: '700',
  };

  if (submitted) {
    return (
      <div
        id="successMessage"
        style={{
          maxWidth: '720px',
          margin: '2rem auto',
          padding: '2rem',
          borderRadius: '22px',
          border: '3px solid rgba(25, 181, 241, 0.2)',
          background: 'linear-gradient(180deg, #eef9ff 0%, #ffffff 100%)',
          textAlign: 'center',
          color: 'var(--td-black)',
          boxShadow: 'var(--shadow-soft)',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: 'var(--td-blue)',
            fontFamily: 'var(--heading-font)',
          }}
        >
          🎉 Thank you for your request!
        </h2>
        <p
          style={{
            fontFamily: 'var(--body-font)',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          We’ve received your booking and will call you soon to confirm the
          details.
        </p>
        <p
          style={{
            marginTop: '1rem',
            fontFamily: 'var(--body-font)',
            fontSize: '1.05rem',
          }}
        >
          Have questions? Call us at <strong>(850) 572-3796</strong>.
        </p>
      </div>
    );
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={GOOGLE_LIBRARIES}
    >
      <div
        style={{
          background: '#f8fbff',
          padding: '2rem 1rem',
          minHeight: '100vh',
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="shadow-md"
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            background: 'rgba(255,255,255,0.96)',
            color: 'var(--td-black)',
            padding: '2.2rem',
            borderRadius: '22px',
            border: 'none',
            boxShadow: 'var(--shadow-soft)',
            fontFamily: 'var(--body-font)',
          }}
        >
          <h2
            style={{
              color: 'var(--td-blue)',
              fontSize: '2.2rem',
              textAlign: 'center',
              marginBottom: '2rem',
              fontFamily: 'var(--heading-font)',
              lineHeight: 1.1,
            }}
          >
            Book a Frozen Drink or Soft Serve Machine!
          </h2>

          {[
            ['Name', 'name', 'text'],
            ['Email', 'email', 'email'],
            ['Phone', 'phone', 'text'],
          ].map(([label, name, type]) => (
            <div key={name} style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle} htmlFor={name}>
                {label}
              </label>
              <input
                style={inputStyle}
                name={name}
                type={type}
                required
                value={formData[name] || ''}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, [name]: e.target.value }))
                }
                onBlur={(e) =>
                  setFormData((prev) => ({ ...prev, [name]: e.target.value }))
                }
                autoComplete="off"
              />
            </div>
          ))}

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle} htmlFor="street">
              Event Location
            </label>
            <Autocomplete
              onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
              onPlaceChanged={() => {
                if (!autocompleteRef.current) return;

                const place = autocompleteRef.current.getPlace();
                console.log('📦 Full Place Object:', place);

                if (!place || !place.address_components) {
                  console.error(
                    '❌ Google Maps: Place or address_components missing'
                  );
                  return;
                }

                const addressComponents = place.address_components;

                const getPart = (type) =>
                  addressComponents.find((c) => c.types.includes(type))
                    ?.long_name || '';

                const street = place.formatted_address || '';
                let city =
                  getPart('locality') ||
                  getPart('sublocality') ||
                  getPart('administrative_area_level_2');

                if (!city) {
                  console.warn('⚠️ City not found, falling back to unknown');
                  city = 'Unknown';
                }

                const state =
                  getPart('administrative_area_level_1') || 'FL';
                const zip = getPart('postal_code') || '';

                if (!city) {
                  console.warn('⚠️ City not found in address_components');
                }

                setFormData((prev) => ({
                  ...prev,
                  street,
                  city,
                  state,
                  zip,
                }));
              }}
            >
              <input
                style={{ ...inputStyle, minWidth: '0' }}
                name="street"
                type="text"
                placeholder="Enter delivery address"
                required
                value={formData.street || ''}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, street: e.target.value }))
                }
                autoComplete="off"
              />
            </Autocomplete>
          </div>

          <input type="hidden" name="city" value={formData.city || ''} />
          <input type="hidden" name="state" value={formData.state || ''} />
          <input type="hidden" name="zip" value={formData.zip || ''} />

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle} htmlFor="date_needed">
              Rental Start Date
            </label>
            <input
              style={inputStyle}
              name="date_needed"
              type="date"
              required
              onBlur={handleDateChange}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle} htmlFor="rental_end">
              Rental End Date
            </label>
            <input
              style={inputStyle}
              name="rental_end"
              type="date"
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle} htmlFor="guest_count">
              Estimated Number of Guests
            </label>
            <input
              style={inputStyle}
              name="guest_count"
              type="number"
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle} htmlFor="service_type">
              Service Requested
            </label>
            <select
              name="service_type"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">-- Select a Service --</option>
              <option value="frozen_drink">Frozen Drink Machine</option>
              <option value="soft_serve">Soft Serve Machine</option>
              <option value="ice_cream_cart">Ice Cream Cart</option>
            </select>

            {serviceType === 'ice_cream_cart' && (
              <div style={{ marginTop: '1rem' }}>
                <label style={labelStyle} htmlFor="ice_cream_package">
                  Select Ice Cream Package
                </label>
                <select
                  name="ice_cream_package"
                  style={inputStyle}
                  required
                >
                  <option value="">-- Choose a Package --</option>
                  <option value="The VIP - $275">The VIP - $275</option>
                  <option value="Frosted Favorites - $245">
                    Frosted Favorites - $245
                  </option>
                  <option value="Coolest Deal in Town - $215">
                    Coolest Deal in Town - $215
                  </option>
                  <option value="Cool Kid Combo - $230">
                    Cool Kid Combo - $230
                  </option>
                  <option value="The Crowd Pleaser - $260">
                    The Crowd Pleaser - $260
                  </option>
                  <option value="A la Carte">Build My Own (A la Carte)</option>
                </select>
              </div>
            )}
          </div>

          {serviceType === 'frozen_drink' && (
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle} htmlFor="machine_type">
                Machine Requested
              </label>
              <select
                name="machine_type"
                value={machineType}
                onChange={(e) => setMachineType(e.target.value)}
                style={inputStyle}
                required
              >
                {[
  'Stainless Single Flavor - $215',
  'Stainless Dual Flavor - $250',
].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          )}

          {serviceType === 'soft_serve' && (
            <input
              type="hidden"
              name="machine_type"
              value="Soft Serve Machine - $235"
            />
          )}

          {(serviceType === 'frozen_drink' ||
            serviceType === 'soft_serve') && (
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle} htmlFor="flavor">
                Flavor
              </label>
              <select
                name="flavor"
                style={inputStyle}
                required
              >
                {(serviceType === 'frozen_drink'
                  ? [
                      'Blue Hawaiian',
                      'Bushwacker +$5',
                      'Frosé',
                      'Grape',
                      'Lemonade',
                      'Lime Margarita',
                      'Louisianna Hurricane',
                      'Mango Daiquiri',
                      'Mango Margarita',
                      'Orange Dreamsicle',
                      'Peach Belini',
                      'Peach Daiquiri',
                      'Pina Colada',
                      'Pink Lemonade',
                      'Strawberry Daiquiri',
                      'Strawberry Margarita',
                      'Watermelon',
                    ]
                  : [
                      'Soft Serve Vanilla',
                      'Soft Serve Chocolate',
                      'Soft Serve Birthday Cake (Additional Charge)',
                      'Soft Serve Cotton Candy (Additional Charge)',
                      'Soft Serve Salted Caramel (Additional Charge)',
                    ]
                ).map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          )}

          {serviceType === 'frozen_drink' &&
            machineType.includes('Dual') && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle} htmlFor="second_flavor">
                  Second Flavor
                </label>
                <select
                  name="second_flavor"
                  value={secondFlavor}
                  onChange={(e) => setSecondFlavor(e.target.value)}
                  style={inputStyle}
                  required
                >
                  {[
                    'Blue Hawaiian',
                    'Bushwacker +$5',
                    'Frosé',
                    'Grape',
                    'Lemonade',
                    'Lime Margarita',
                    'Louisianna Hurricane',
                    'Mango Daiquiri',
                    'Mango Margarita',
                    'Orange Dreamsicle',
                    'Peach Belini',
                    'Peach Daiquiri',
                    'Pina Colada',
                    'Pink Lemonade',
                    'Strawberry Daiquiri',
                    'Strawberry Margarita',
                    'Watermelon',
                  ].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            )}

          {serviceType === 'frozen_drink' &&
            (machineType.includes('Margarita') ||
              machineType.includes('Dual')) && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle} htmlFor="flavor_additions">
                  Flavor Additions (Pair with Margarita)
                </label>
                <select
                  name="flavor_additions"
                  style={inputStyle}
                >
                  {['', 'Strawberry', 'Peach', 'Watermelon', 'Mango'].map(
                    (option) => (
                      <option key={option} value={option}>
                        {option || 'None'}
                      </option>
                    )
                  )}
                </select>
              </div>
            )}

          <div style={{ marginBottom: '2rem' }}>
            <label style={labelStyle} htmlFor="comments">
              Comments
            </label>
            <textarea
              name="comments"
              rows="4"
              style={inputStyle}
            />
          </div>

          <button
            type="submit"
            style={{
              background: 'var(--td-blue)',
              color: 'var(--td-white)',
              fontWeight: '700',
              fontSize: '1.1rem',
              padding: '0.9rem 2rem',
              borderRadius: '999px',
              display: 'block',
              margin: '0 auto',
              border: 'none',
              boxShadow: 'var(--shadow-soft)',
              cursor: 'pointer',
              fontFamily: 'var(--body-font)',
            }}
          >
            ✉️ Submit Booking
          </button>

          {calculatingFee ? (
            <p
              style={{
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '1rem',
                color: 'var(--td-black)',
                fontFamily: 'var(--body-font)',
              }}
            >
              Calculating delivery fee...
            </p>
          ) : typeof deliveryFee === 'number' ? (
            <p
              style={{
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '1rem',
                fontWeight: '700',
                color: deliveryFee === 0 ? 'var(--td-blue)' : 'var(--td-blue)',
                fontFamily: 'var(--body-font)',
              }}
            >
              {deliveryFee === 0
                ? 'Free delivery'
                : `Estimated Delivery Fee: $${deliveryFee.toFixed(2)}`}
            </p>
          ) : null}
        </form>
      </div>
    </LoadScript>
  );
}