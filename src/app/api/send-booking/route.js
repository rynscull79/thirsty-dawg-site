// ✅ /src/app/api/send-booking/route.js (Next.js App Router)

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, error: 'Booking email service is not configured.' },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const data = await req.json();

    const { name, email, phone, street, city, state, zip, date_needed, guest_count,
      rental_length, machine_type, flavor, flavor_additions, comments } = data;

    const htmlContent = `
      <h2>📅 New Booking Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Address:</strong> ${escapeHtml(street)}, ${escapeHtml(city)}, ${escapeHtml(state)} ${escapeHtml(zip)}</p>
      <p><strong>Date Needed:</strong> ${escapeHtml(date_needed)}</p>
      <p><strong>Guest Count:</strong> ${escapeHtml(guest_count)}</p>
      <p><strong>Rental Length:</strong> ${escapeHtml(rental_length)}</p>
      <p><strong>Machine Type:</strong> ${escapeHtml(machine_type)}</p>
      <p><strong>Flavor:</strong> ${escapeHtml(flavor)}</p>
      <p><strong>Flavor Additions:</strong> ${escapeHtml(flavor_additions || 'None')}</p>
      <p><strong>Comments:</strong><br>${escapeHtml(comments || 'N/A')}</p>
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
