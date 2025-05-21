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
                <th>City</th>
                <th>Machine</th>
                <th>Flavor</th>
                <th>Guests</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td>{new Date(b.dateNeeded).toLocaleDateString()}</td>
                  <td>{b.name}</td>
                  <td>{b.city}</td>
                  <td>{b.machineType}</td>
                  <td>{b.flavor}</td>
                  <td>{b.guestCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
