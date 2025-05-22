'use client';

import React, { useState } from 'react';


export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [machineType, setMachineType] = useState('');
const [secondFlavor, setSecondFlavor] = useState('');


const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const raw = Object.fromEntries(new FormData(form).entries());

  const data = {
    name: raw.name,
    email: raw.email,
    phone: raw.phone,
    street: raw.street,
    city: raw.city,
    state: raw.state,
    zip: raw.zip,
    dateNeeded: new Date(raw.date_needed).toISOString(),
    guestCount: parseInt(raw.guest_count),
    rentalLength: raw.rental_length,
    machineType: raw.machine_type,
    flavor: raw.flavor,
    flavorAdditions: raw.flavor_additions || '',
    secondFlavor: raw.second_flavor || '',
    comments: raw.comments || '',
  };

  try {
    const response = await fetch('https://booking-backend-production-5dba.up.railway.app/api/bookings', {
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
          Book a Frozen Drink Machine!
        </h2>

        {[ ['Name', 'name', 'text'], ['Email', 'email', 'email'], ['Phone', 'phone', 'text'], ['Street Address', 'street', 'text'], ['City', 'city', 'text'], ['State', 'state', 'text'], ['ZIP', 'zip', 'text'], ['Date First Needed', 'date_needed', 'date'], ['Estimated Number of Guests', 'guest_count', 'number'] ].map(([label, name, type]) => (
          <div key={name} className="mb-6">
            <label className="block mb-1 text-lg" htmlFor={name}>{label}</label>
            <input
              className="w-full p-3 rounded-xl text-base border border-gray-300 shadow-inner"
              name={name}
              type={type}
              required
              onBlur={name === 'date_needed' ? handleDateChange : undefined}
            />
          </div>
        ))}

        <div className="mb-6">
          <label className="block mb-1 text-lg" htmlFor="rental_length">Number of Days</label>
          <select name="rental_length" className="w-full p-3 rounded-xl border border-gray-300 shadow-inner text-base" required>
            {['Single Day Rental', '2 Day Rental', '3 Day Rental', '4 Day Rental', '5 Day Rental'].map(option => (
              <option key={option}>{option}</option>
            ))}
          </select>
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
  {['Stainless Single Flavor - $185', 'Stainless Dual Flavor - $240', 'Plastic Dual Flavor - $210'].map(option => (
    <option key={option}>{option}</option>
  ))}
</select>

        </div>

        <div className="mb-6">
          <label className="block mb-1 text-lg" htmlFor="flavor">Flavor</label>
          <select name="flavor" className="w-full p-3 rounded-xl border border-gray-300 shadow-inner text-base" required>
            {[ 'Blue Hawaiian', 'Bushwacker +$5', 'Frosé', 'Grape', 'Lemonade', 'Lime Margarita', 'Louisianna Hurricane', 'Mango Daiquiri', 'Mango Margarita', 'Orange Dreamsicle', 'Peach Belini', 'Peach Daiquiri', 'Pina Colada', 'Pink Lemonade', 'Strawberry Daiquiri', 'Strawberry Margarita', 'Watermelon' ].map(option => (
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
      </form>
    </div>
  );
}
