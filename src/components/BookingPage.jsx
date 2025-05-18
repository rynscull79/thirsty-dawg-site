'use client';

import React, { useState } from 'react';

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    const response = await fetch('/api/send-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => {
        document.getElementById('successMessage')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      alert('❌ Something went wrong. Please try again.');
    }
  };

  // Date blocking logic
  const blockedStart = new Date('2025-05-20');
  const blockedEnd = new Date('2025-06-01');

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (selectedDate >= blockedStart && selectedDate <= blockedEnd) {
      alert('We\u2019re unavailable for bookings from May 20\u2013June 1. Please choose another date.');
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
      {/* Away Message */}
      <div style={{ maxWidth: '720px', margin: '0 auto', marginBottom: '1rem', padding: '1rem', backgroundColor: '#fff3cd', color: '#856404', border: '2px solid #ffeeba', borderRadius: '1rem', fontSize: '1.1rem' }}>
        ⚠️ We’re unavailable for bookings from <strong>May 20–June 1, 2025</strong>. Please choose a different date.
      </div>

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
              onChange={name === 'date_needed' ? handleDateChange : undefined}
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
          <select name="machine_type" className="w-full p-3 rounded-xl border border-gray-300 shadow-inner text-base" required>
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
