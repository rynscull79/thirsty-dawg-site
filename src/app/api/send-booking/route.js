// ✅ /src/app/api/send-booking/route.js (Next.js App Router)

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

    const { name, email, phone, street, city, state, zip, date_needed, guest_count,
      rental_length, machine_type, flavor, flavor_additions, comments } = data;

    const htmlContent = `
      <h2>📅 New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${street}, ${city}, ${state} ${zip}</p>
      <p><strong>Date Needed:</strong> ${date_needed}</p>
      <p><strong>Guest Count:</strong> ${guest_count}</p>
      <p><strong>Rental Length:</strong> ${rental_length}</p>
      <p><strong>Machine Type:</strong> ${machine_type}</p>
      <p><strong>Flavor:</strong> ${flavor}</p>
      <p><strong>Flavor Additions:</strong> ${flavor_additions || 'None'}</p>
      <p><strong>Comments:</strong><br>${comments || 'N/A'}</p>
    `;

    const result = await resend.emails.send({
      from: 'Thirsty Dawg <bookings@thirstydawgrentals.com>',
      to: ['info@thirstydawgrentals.com'],
      subject: 'New Booking Request',
      html: htmlContent
    });

    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error('❌ Email send error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
