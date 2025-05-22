// pages/admin.jsx
import { useState, useEffect } from 'react';
import styles from '../styles/Admin.module.css';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const correctPassword = 'Bamafan79@';

  const fetchBookings = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://booking-backend-production-5dba.up.railway.app/api/bookings/all');
      const data = await res.json();
      if (data.success) {
        setBookings(data.bookings);
      } else {
        setError('Failed to fetch bookings.');
      }
    } catch (err) {
      setError('Error fetching data.');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (authenticated) {
      fetchBookings();
    }
  }, [authenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleCommentChange = (id, value) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, adminComment: value } : b))
    );
  };

  const saveComment = async (id, comment) => {
    try {
      await fetch(`https://booking-backend-production-5dba.up.railway.app/api/bookings/${id}/comment`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminComment: comment }),
      });
    } catch (err) {
      alert('Failed to save comment.');
    }
  };

  const deleteBooking = async (id) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) return;
    try {
      await fetch(`https://booking-backend-production-5dba.up.railway.app/api/bookings/${id}`, {
        method: 'DELETE',
      });
      setBookings((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      alert('Failed to delete booking.');
    }
  };

  if (!authenticated) {
    return (
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <h2>Admin Login</h2>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Enter</button>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <h1>Booking Dashboard</h1>
      {loading && <p>Loading bookings...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && bookings.length === 0 && <p>No bookings found.</p>}
      {!loading && bookings.length > 0 && (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>City/State/ZIP</th>
                <th>Guests</th>
                <th>Machine</th>
                <th>Flavor</th>
                <th>Additions</th>
                <th>Customer Comments</th>
                <th>Admin Notes</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td>{new Date(b.dateNeeded).toLocaleDateString('en-US', { timeZone: 'UTC' })}</td>
                  <td>{b.name}</td>
                  <td>{b.phone}</td>
                  <td>{b.email}</td>
                  <td>{b.street}</td>
                  <td>{b.city}, {b.state} {b.zip}</td>
                  <td>{b.guestCount}</td>
                  <td>{b.machineType}</td>
                  <td>{b.flavor}</td>
                  <td>{b.flavorAdditions}</td>
                  <td>{b.comments}</td>
                  <td>
                    <textarea
                      rows="2"
                      value={b.adminComment || ''}
                      onChange={(e) => handleCommentChange(b.id, e.target.value)}
                    />
                    <button onClick={() => saveComment(b.id, b.adminComment)}>💾</button>
                  </td>
                  <td>
                    <button onClick={() => deleteBooking(b.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
