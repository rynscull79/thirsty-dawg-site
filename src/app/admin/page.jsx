'use client';

import { useEffect, useMemo, useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_BOOKING_API_BASE_URL;

function formatDate(d) {
  if (!d) return '';
  const dt = new Date(d);
  if (Number.isNaN(dt.getTime())) return String(d);
  return dt.toLocaleDateString('en-US', { timeZone: 'UTC' });
}

export default function AdminBookingsPage() {
  const [status, setStatus] = useState('new'); // 'new' | 'invoiced' | 'All'
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [month, setMonth] = useState('All');
  const [year, setYear] = useState('All');

  const years = useMemo(() => {
    const now = new Date();
    const y = now.getFullYear();
    return [y - 1, y, y + 1].map(String);
  }, []);

  const months = useMemo(() => {
    return [
      { v: 'All', label: 'All' },
      { v: '01', label: 'Jan' }, { v: '02', label: 'Feb' }, { v: '03', label: 'Mar' },
      { v: '04', label: 'Apr' }, { v: '05', label: 'May' }, { v: '06', label: 'Jun' },
      { v: '07', label: 'Jul' }, { v: '08', label: 'Aug' }, { v: '09', label: 'Sep' },
      { v: '10', label: 'Oct' }, { v: '11', label: 'Nov' }, { v: '12', label: 'Dec' },
    ];
  }, []);

  async function fetchBookings(nextStatus) {
    if (!API_BASE) {
      setErr('Missing NEXT_PUBLIC_BOOKING_API_BASE_URL in .env.local');
      return;
    }

    setLoading(true);
    setErr('');

    try {
      // Your backend route is GET /api/bookings/by-status/:status
      // If you want "All", we’ll fetch "new" and "invoiced" and combine.
      if (nextStatus === 'All') {
        const [r1, r2] = await Promise.all([
          fetch(`${API_BASE}/api/bookings/by-status/new`, { cache: 'no-store' }),
          fetch(`${API_BASE}/api/bookings/by-status/invoiced`, { cache: 'no-store' }),
        ]);

        if (!r1.ok) throw new Error(`Failed fetching new (${r1.status})`);
        if (!r2.ok) throw new Error(`Failed fetching invoiced (${r2.status})`);

        const j1 = await r1.json();
        const j2 = await r2.json();

        const combined = [...(j1.bookings || []), ...(j2.bookings || [])];
        combined.sort((a, b) => new Date(a.dateNeeded) - new Date(b.dateNeeded));
        setBookings(combined);
      } else {
        const res = await fetch(`${API_BASE}/api/bookings/by-status/${encodeURIComponent(nextStatus)}`, {
          cache: 'no-store',
        });
        if (!res.ok) throw new Error(`Failed fetching bookings (${res.status})`);
        const json = await res.json();
        setBookings((json.bookings || []).slice().sort((a, b) => new Date(a.dateNeeded) - new Date(b.dateNeeded)));
      }
    } catch (e) {
      setErr(e?.message || 'Failed to load bookings');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBookings(status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const filtered = useMemo(() => {
    if (month === 'All' || year === 'All') return bookings;

    const start = new Date(`${year}-${month}-01T00:00:00.000Z`);
    const end = new Date(start);
    end.setUTCMonth(end.getUTCMonth() + 1);

    return bookings.filter((b) => {
      const d = new Date(b.dateNeeded);
      return d >= start && d < end;
    });
  }, [bookings, month, year]);

  async function markInvoiced(id) {
    if (!API_BASE) return;

    try {
      const res = await fetch(`${API_BASE}/api/bookings/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'invoiced' }),
      });

      if (!res.ok) throw new Error(`Status update failed (${res.status})`);
      // Refresh list
      fetchBookings(status);
    } catch (e) {
      alert(e?.message || 'Failed to update status');
    }
  }

  function exportExcel() {
    if (!API_BASE) return;

    // backend: GET /api/bookings/export/:status?month=..&year=..
    const s = status === 'All' ? 'All' : status;
    const url = `${API_BASE}/api/bookings/export/${encodeURIComponent(s)}?month=${encodeURIComponent(month)}&year=${encodeURIComponent(year)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <main style={{ padding: '1.25rem', fontFamily: 'var(--font-chewy)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Admin — Booking Requests</h1>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button onClick={() => setStatus('new')} style={tabStyle(status === 'new')}>New</button>
          <button onClick={() => setStatus('invoiced')} style={tabStyle(status === 'invoiced')}>Invoiced</button>
          <button onClick={() => setStatus('All')} style={tabStyle(status === 'All')}>All</button>
        </div>
      </div>

      <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          Month
          <select value={month} onChange={(e) => setMonth(e.target.value)} style={selectStyle}>
            {months.map(m => <option key={m.v} value={m.v}>{m.label}</option>)}
          </select>
        </label>

        <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          Year
          <select value={year} onChange={(e) => setYear(e.target.value)} style={selectStyle}>
            <option value="All">All</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </label>

        <button onClick={exportExcel} style={primaryBtn}>Export Excel</button>

        <a href="/admin/route-optimizer" style={{ marginLeft: 'auto', color: '#009fdb', textDecoration: 'none' }}>
          Route Optimizer →
        </a>
      </div>

      {err ? (
        <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#ffe7e7', border: '1px solid #ffb3b3', borderRadius: 8 }}>
          <strong>Admin error:</strong> {err}
          <div style={{ marginTop: 8, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial', fontSize: 13, opacity: 0.85 }}>
            Tip: confirm your backend URL env var exists in Vercel too (NEXT_PUBLIC_BOOKING_API_BASE_URL).
          </div>
        </div>
      ) : null}

      <div style={{ marginTop: '1rem' }}>
        {loading ? (
          <p style={{ opacity: 0.75 }}>Loading…</p>
        ) : (
          <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 12, border: '1px solid rgba(0,0,0,0.1)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 900 }}>
              <thead>
                <tr>
                  {['Date Needed', 'Name', 'Phone', 'Email', 'City', 'Machine', 'Flavors', 'Guests', 'Status', 'Actions'].map(h => (
                    <th key={h} style={thStyle}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={10} style={{ padding: '1rem', textAlign: 'center', opacity: 0.7 }}>
                      No bookings found for this view.
                    </td>
                  </tr>
                ) : (
                  filtered.map((b) => (
                    <tr key={b.id} style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                      <td style={tdStyle}>{formatDate(b.dateNeeded)}</td>
                      <td style={tdStyle}>{b.name}</td>
                      <td style={tdStyle}>{b.phone}</td>
                      <td style={tdStyle}>{b.email}</td>
                      <td style={tdStyle}>{b.city}, {b.state}</td>
                      <td style={tdStyle}>{b.machineType}</td>
                      <td style={tdStyle}>
                        {b.flavor}{b.secondFlavor ? `, ${b.secondFlavor}` : ''}
                        {b.flavorAdditions ? ` (+ ${b.flavorAdditions})` : ''}
                        {b.iceCreamPackage ? ` — ${b.iceCreamPackage}` : ''}
                      </td>
                      <td style={tdStyle}>{b.guestCount}</td>
                      <td style={tdStyle}>{b.status}</td>
                      <td style={tdStyle}>
                        {b.status !== 'invoiced' ? (
                          <button onClick={() => markInvoiced(b.id)} style={smallBtn}>
                            Mark Invoiced
                          </button>
                        ) : (
                          <span style={{ opacity: 0.7 }}>—</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}

const selectStyle = {
  padding: '0.4rem 0.5rem',
  borderRadius: 8,
  border: '1px solid rgba(0,0,0,0.18)',
  background: '#fff',
  fontFamily: 'inherit',
};

const primaryBtn = {
  padding: '0.55rem 0.85rem',
  borderRadius: 10,
  border: 'none',
  background: '#009fdb',
  color: '#fff',
  fontFamily: 'inherit',
  cursor: 'pointer',
};

const smallBtn = {
  padding: '0.35rem 0.6rem',
  borderRadius: 10,
  border: '1px solid rgba(0,0,0,0.18)',
  background: '#fff',
  cursor: 'pointer',
  fontFamily: 'inherit',
};

function tabStyle(active) {
  return {
    padding: '0.45rem 0.75rem',
    borderRadius: 999,
    border: '1px solid rgba(0,0,0,0.18)',
    background: active ? '#111827' : '#fff',
    color: active ? '#fff' : '#111827',
    fontFamily: 'inherit',
    cursor: 'pointer',
  };
}

const thStyle = {
  textAlign: 'left',
  padding: '0.75rem',
  fontSize: '0.95rem',
  background: 'rgba(0,0,0,0.03)',
};

const tdStyle = {
  padding: '0.75rem',
  verticalAlign: 'top',
};
