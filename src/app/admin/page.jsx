'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './AdminDashboard.module.css';

const MONTHS = [
  { value: 'All', label: 'All' },
  { value: '01', label: 'Jan' }, { value: '02', label: 'Feb' }, { value: '03', label: 'Mar' },
  { value: '04', label: 'Apr' }, { value: '05', label: 'May' }, { value: '06', label: 'Jun' },
  { value: '07', label: 'Jul' }, { value: '08', label: 'Aug' }, { value: '09', label: 'Sep' },
  { value: '10', label: 'Oct' }, { value: '11', label: 'Nov' }, { value: '12', label: 'Dec' },
];

function formatDate(d) {
  if (!d) return '';
  const dt = new Date(d);
  if (Number.isNaN(dt.getTime())) return '';
  return dt.toLocaleDateString('en-US');
}

function isInMonthYear(dateStr, month, year) {
  if (month === 'All' || year === 'All') return true;
  const dt = new Date(dateStr);
  if (Number.isNaN(dt.getTime())) return false;
  const mm = String(dt.getMonth() + 1).padStart(2, '0');
  const yy = String(dt.getFullYear());
  return mm === month && yy === year;
}

export default function AdminBookingsPage() {
  const API_BASE = process.env.NEXT_PUBLIC_BOOKING_API_BASE_URL;

  const [statusView, setStatusView] = useState('New'); // New | Invoiced | All
  const [month, setMonth] = useState('All');
  const [year, setYear] = useState('All');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rows, setRows] = useState([]);

  const [expandedId, setExpandedId] = useState(null);

  const years = useMemo(() => {
    const now = new Date().getFullYear();
    return ['All', String(now - 1), String(now), String(now + 1)];
  }, []);

  async function fetchBookings() {
    setError('');
    if (!API_BASE) {
      setError(
        'Missing NEXT_PUBLIC_BOOKING_API_BASE_URL. Add it in Vercel Environment Variables (Production + Preview), then redeploy.'
      );
      return;
    }

    setLoading(true);
    try {
      // We can avoid adding new backend routes by using your existing endpoint:
      // GET /api/bookings/by-status/:status
      const backendStatus =
        statusView === 'All' ? 'All' : statusView; // if you don’t have All, we’ll fallback below

      let data = [];
      if (statusView === 'All') {
        // If your backend doesn't have "All" status route, fetch both and merge
        const [newRes, invRes] = await Promise.all([
          fetch(`${API_BASE}/api/bookings/by-status/New`, { cache: 'no-store' }),
          fetch(`${API_BASE}/api/bookings/by-status/Invoiced`, { cache: 'no-store' }),
        ]);
        const newJson = await newRes.json();
        const invJson = await invRes.json();
        data = [
          ...(newJson?.bookings || []),
          ...(invJson?.bookings || []),
        ];
      } else {
        const res = await fetch(`${API_BASE}/api/bookings/by-status/${encodeURIComponent(backendStatus)}`, {
          cache: 'no-store',
        });
        const json = await res.json();
        data = json?.bookings || [];
      }

      // Apply Month/Year filter client-side
      const filtered = data.filter((b) => isInMonthYear(b.dateNeeded, month, year));

      // Sort by dateNeeded ascending (closest first)
      filtered.sort((a, b) => new Date(a.dateNeeded) - new Date(b.dateNeeded));

      setRows(filtered);
    } catch (e) {
      setError(`Failed to load bookings. ${e?.message || e}`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusView, month, year, API_BASE]);

  async function exportExcel() {
    if (!API_BASE) return;

    const statusParam = statusView; // your backend export expects /export/:status
    const qs = new URLSearchParams();
    qs.set('month', month);
    qs.set('year', year);

    const url = `${API_BASE}/api/bookings/export/${encodeURIComponent(statusParam)}?${qs.toString()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Admin — Booking Requests</h1>
          <p className={styles.sub}>Private dashboard for viewing and managing booking requests.</p>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${statusView === 'New' ? styles.active : ''}`}
            onClick={() => setStatusView('New')}
            type="button"
          >
            New
          </button>
          <button
            className={`${styles.tab} ${statusView === 'Invoiced' ? styles.active : ''}`}
            onClick={() => setStatusView('Invoiced')}
            type="button"
          >
            Invoiced
          </button>
          <button
            className={`${styles.tab} ${statusView === 'All' ? styles.active : ''}`}
            onClick={() => setStatusView('All')}
            type="button"
          >
            All
          </button>
        </div>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.controls}>
        <div className={styles.filters}>
          <label className={styles.label}>
            Month
            <select className={styles.select} value={month} onChange={(e) => setMonth(e.target.value)}>
              {MONTHS.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </label>

          <label className={styles.label}>
            Year
            <select className={styles.select} value={year} onChange={(e) => setYear(e.target.value)}>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </label>

          <button className={styles.btn} onClick={exportExcel} type="button">
            Export Excel
          </button>
        </div>

        <div className={styles.rightControls}>
          <button className={styles.btnGhost} onClick={fetchBookings} type="button" disabled={loading}>
            {loading ? 'Refreshing…' : 'Refresh'}
          </button>

          <a className={styles.link} href="/admin/route-optimizer">
            Route Optimizer →
          </a>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date Needed</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>City</th>
                <th>Machine</th>
                <th>Guests</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td colSpan={9} className={styles.empty}>
                    {loading ? 'Loading…' : 'No bookings found for this view.'}
                  </td>
                </tr>
              )}

              {rows.map((b) => {
                const isOpen = expandedId === b.id;

                return (
                  <>
                    <tr key={b.id} className={b.status === 'New' ? styles.newRow : ''}>
                      <td>{formatDate(b.dateNeeded)}</td>
                      <td>{b.name}</td>
                      <td>{b.phone}</td>
                      <td className={styles.mono}>{b.email}</td>
                      <td>{b.city}</td>
                      <td>{b.machineType}</td>
                      <td>{b.guestCount}</td>
                      <td>
                        <span className={`${styles.badge} ${b.status === 'New' ? styles.badgeNew : styles.badgeInv}`}>
                          {b.status}
                        </span>
                      </td>
                      <td>
                        <button
                          className={styles.smallBtn}
                          type="button"
                          onClick={() => setExpandedId(isOpen ? null : b.id)}
                        >
                          {isOpen ? 'Hide' : 'View'}
                        </button>
                      </td>
                    </tr>

                    {isOpen && (
                      <tr className={styles.expandRow}>
                        <td colSpan={9}>
                          <div className={styles.detailsGrid}>
                            <div><strong>Address:</strong> {b.street}, {b.city}, {b.state} {b.zip}</div>
                            <div><strong>Rental End:</strong> {formatDate(b.rentalEnd)}</div>
                            <div><strong>Rental Length:</strong> {b.rentalLength}</div>

                            <div><strong>Flavor:</strong> {b.flavor || '—'}</div>
                            <div><strong>Second Flavor:</strong> {b.secondFlavor || '—'}</div>
                            <div><strong>Flavor Additions:</strong> {b.flavorAdditions || '—'}</div>

                            <div><strong>Ice Cream Package:</strong> {b.iceCreamPackage || '—'}</div>
                            <div className={styles.fullWidth}>
                              <strong>Comments:</strong>
                              <div className={styles.notesBox}>{b.comments || '—'}</div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.footerNote}>
        Tip: add this page to Deployment Protection / Password Protection in Vercel for security.
      </div>
    </div>
  );
}
