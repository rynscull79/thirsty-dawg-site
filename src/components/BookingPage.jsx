
'use client';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { useRef } from 'react';
const GOOGLE_LIBRARIES = ['places'];


export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [machineType, setMachineType] = useState('');
const [secondFlavor, setSecondFlavor] = useState('');
const [deliveryFee, setDeliveryFee] = useState(null);
const [calculatingFee, setCalculatingFee] = useState(false);
const autocompleteRef = useRef(null);
const [formData, setFormData] = useState({ street: '', city: '', state: '', zip: '' });
  async function calculateDeliveryFee(address) {
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
    alert('❌ We couldn’t read your full address. Please select the suggestion from the address dropdown again.');
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
    rentalLength: calculateRentalLength(raw.date_needed, raw.rental_end),
  
deliveryFee: deliveryFee !== null ? deliveryFee : 0,
};
  try {
    const response = await fetch('https://booking-backend-production-b048.up.railway.app/api/bookings', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});


    const result = await response.json();
    if (result.success) {
      console.log('✅ Booking sent successfully:', result);
      setSubmitted(true);
    } else {
      alert('⚠️ Failed to send booking. Try again.');
    }
  } catch (err) {
    console.error('Error sending booking:', err);
    alert('❌ Something went wrong. Please try again.');
  }
};

useEffect(() => {
  const fullAddress = `${formData.street || ''}, ${formData.city || ''}, ${formData.state || ''} ${formData.zip || ''}`;
  if (formData.street && formData.city && formData.state && formData.zip) {
    calculateDeliveryFee(fullAddress);
  }
}, [formData.street, formData.city, formData.state, formData.zip]);



  // Date blocking logic
  const blockedStart = new Date('2025-05-20');
  const blockedEnd = new Date('2025-06-01');

const handleDateChange = (e) => {
  const value = e.target.value;
  if (!value) return;

  const selectedDate = new Date(value);
  const blockedStart = new Date('2025-05-20');
  const blockedEnd = new Date('2025-06-01');

  if (selectedDate >= blockedStart && selectedDate <= blockedEnd) {
    alert("Hey there! We’re taking a short break from May 20 to June 1 and won’t be taking bookings during that time. Please pick a different date — we can’t wait to help with your event!");
    e.target.value = '';
  }
};


  if (submitted) {
    return (
      <div id="successMessage" className="max-w-xl mx-auto p-6 border-4 border-green-600 bg-green-100 rounded-2xl text-center text-green-900 font-chewy text-xl mt-10">
        <h2 className="text-3xl mb-4">🎉 Thank you for your request!</h2>
        <p>We’ve received your booking and will call you soon to confirm the details.</p>
        <p className="mt-4">Have questions? Call us at <strong>(850) 572-3796</strong>.</p>
      </div>
    );
  }

  return (
  <LoadScript
    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    libraries={GOOGLE_LIBRARIES}
  >
    <div style={{ backgroundColor: '#009fdb', padding: '3rem 1rem', minHeight: '100vh' }}>
      <form
        onSubmit={handleSubmit}
        className="font-chewy shadow-md"
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          backgroundColor: 'white',
          color: '#1f2937',
          padding: '3rem',
          borderRadius: '2rem',
          border: '6px solid #ff7c02',
          boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
        }}
      >
        <h2
          className="text-4xl text-center mb-10"
          style={{
            color: '#ff7c02',
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '2rem',
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}
        >
          Book a Frozen Drink or Soft Serve Machine!
        </h2>
{/* Basic Contact Info */}
{/* Name, Email, Phone */}
{[
  ['Name', 'name', 'text'],
  ['Email', 'email', 'email'],
  ['Phone', 'phone', 'text'],
].map(([label, name, type]) => (
  <div key={name} className="mb-6">
    <label className="block mb-1 text-lg" htmlFor={name}>{label}</label>
    <input
      className="w-full p-3 rounded-xl text-base border border-gray-300 shadow-inner"
      name={name}
      type={type}
      required
      value={formData[name] || ''}
      onChange={(e) => setFormData((prev) => ({ ...prev, [name]: e.target.value }))}
      onBlur={(e) => setFormData((prev) => ({ ...prev, [name]: e.target.value }))}
      autoComplete="off"
    />
  </div>
))}

{/* Street Address with Autocomplete */}
<div className="mb-6">
  <label className="block mb-1 text-lg" htmlFor="street">Event Location</label>
  <Autocomplete
    onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
onPlaceChanged={() => {
  if (!autocompleteRef.current) return;

  const place = autocompleteRef.current.getPlace();
  console.log('📦 Full Place Object:', place);
  if (!place || !place.address_components) {
    console.error('❌ Google Maps: Place or address_components missing');
    return;
  }

  const addressComponents = place.address_components;

  const getPart = (type) =>
  addressComponents.find((c) => c.types.includes(type))?.long_name || '';

const street = place.formatted_address || '';
let city = getPart('locality') || getPart('sublocality') || getPart('administrative_area_level_2');
if (!city) {
  console.warn('⚠️ City not found, falling back to unknown');
  city = 'Unknown';
}

const state = getPart('administrative_area_level_1') || 'FL';
const zip = getPart('postal_code') || '';


  if (!city) console.warn('⚠️ City not found in address_components');

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
      className="p-4 rounded-xl text-lg border border-gray-300 shadow-inner"
style={{ width: '100%', maxWidth: '100%', minWidth: '500px' }}
      name="street"
      type="text"
      placeholder="Enter delivery address"
      required
      value={formData.street || ''}
      onChange={(e) => setFormData((prev) => ({ ...prev, street: e.target.value }))}
      autoComplete="off"
    />
  </Autocomplete>
</div>


<input type="hidden" name="city" value={formData.city || ''} />
<input type="hidden" name="state" value={formData.state || ''} />

<div className="mb-6">
  <label className="block mb-1 text-lg" htmlFor="date_needed">Rental Start Date</label>
  <input
    className="w-full p-3 rounded-xl text-base border border-gray-300 shadow-inner"
    name="date_needed"
    type="date"
    required
    onBlur={handleDateChange}
  />
</div>

<div className="mb-6">
  <label className="block mb-1 text-lg" htmlFor="rental_end">Rental End Date</label>
  <input
    className="w-full p-3 rounded-xl text-base border border-gray-300 shadow-inner"
    name="rental_end"
    type="date"
    required
  />
</div>

<div className="mb-6">
  <label className="block mb-1 text-lg" htmlFor="guest_count">Estimated Number of Guests</label>
  <input
    className="w-full p-3 rounded-xl text-base border border-gray-300 shadow-inner"
    name="guest_count"
    type="number"
    required
  />
</div>

        <div className="mb-6">
          <label className="block mb-1 text-lg" htmlFor="machine_type">Machine Requested</label>
          <select
  name="machine_type"
  value={machineType}
  onChange={(e) => setMachineType(e.target.value)}
  className="w-full p-3 rounded-xl border border-gray-300 shadow-inner text-base"
  required
>
  {[
  'Stainless Single Flavor - $185',
  'Stainless Dual Flavor - $240',
  'Plastic Dual Flavor - $210',
  'Soft Serve Machine - $185'
].map(option => (
  <option key={option}>{option}</option>
))}

</select>

        </div>

        <div className="mb-6">
          <label className="block mb-1 text-lg" htmlFor="flavor">Flavor</label>
        <select name="flavor" className="w-full p-3 rounded-xl border border-gray-300 shadow-inner text-base" required>
  {[
    // Frozen drink flavors
    'Blue Hawaiian', 'Bushwacker +$5', 'Frosé', 'Grape', 'Lemonade',
    'Lime Margarita', 'Louisianna Hurricane', 'Mango Daiquiri', 'Mango Margarita',
    'Orange Dreamsicle', 'Peach Belini', 'Peach Daiquiri', 'Pina Colada',
    'Pink Lemonade', 'Strawberry Daiquiri', 'Strawberry Margarita', 'Watermelon',
    // Soft serve flavors
    'Soft Serve Vanilla', 'Soft Serve Chocolate',
    'Soft Serve Birthday Cake (Additional Charge)',
    'Soft Serve Cotton Candy (Additional Charge)',
    'Soft Serve Salted Caramel (Additional Charge)'
  ].map(option => (
    <option key={option}>{option}</option>
  ))}
</select>

        </div>
{machineType.includes('Dual') && (
  <div className="mb-6">
    <label className="block mb-1 text-lg" htmlFor="second_flavor">Second Flavor</label>
    <select
      name="second_flavor"
      value={secondFlavor}
      onChange={(e) => setSecondFlavor(e.target.value)}
      className="w-full p-3 rounded-xl border border-gray-300 shadow-inner text-base"
      required
    >
      {[ 'Blue Hawaiian', 'Bushwacker +$5', 'Frosé', 'Grape', 'Lemonade', 'Lime Margarita', 'Louisianna Hurricane', 'Mango Daiquiri', 'Mango Margarita', 'Orange Dreamsicle', 'Peach Belini', 'Peach Daiquiri', 'Pina Colada', 'Pink Lemonade', 'Strawberry Daiquiri', 'Strawberry Margarita', 'Watermelon' ].map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
)}

        <div className="mb-6">
          <label className="block mb-1 text-lg" htmlFor="flavor_additions">Flavor Additions (Pair with Margarita)</label>
          <select name="flavor_additions" className="w-full p-3 rounded-xl border border-gray-300 shadow-inner text-base">
            {['', 'Strawberry', 'Peach', 'Watermelon', 'Mango'].map(option => (
              <option key={option} value={option}>{option || 'None'}</option>
            ))}
          </select>
        </div>

        <div className="mb-8">
          <label className="block mb-1 text-lg" htmlFor="comments">Comments</label>
          <textarea name="comments" rows="4" className="w-full p-3 rounded-xl border border-gray-300 shadow-inner text-base"></textarea>
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl py-3 px-8 rounded-full block mx-auto shadow-lg transition-transform duration-200 hover:scale-105 border-4 border-white"
        >
          ✉️ Submit Booking
        </button>
     {calculatingFee ? (
  <p className="text-center mt-4 text-lg text-gray-700">Calculating delivery fee...</p>
) : typeof deliveryFee === 'number' ? (
  <p className="text-center mt-4 text-lg font-bold text-green-700">
    {deliveryFee === 0 ? 'Free delivery' : `Estimated Delivery Fee: $${deliveryFee.toFixed(2)}`}
  </p>
) : null}

      </form>
    </div>
    </LoadScript>
  );
}
