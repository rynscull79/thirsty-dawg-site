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

  const updateBooking = async (id, field, value) => {
    try {
      await fetch(`https://booking-backend-production-5dba.up.railway.app/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [field]: value }),
      });
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, [field]: value } : b))
      );
    } catch (err) {
      alert('Failed to save update.');
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

  const renderInput = (b, field, type = 'text') => (
    <input
      type={type}
      value={b[field] || ''}
      onChange={(e) => updateBooking(b.id, field, type === 'number' ? parseInt(e.target.value) : e.target.value)}
      onBlur={(e) => updateBooking(b.id, field, e.target.value)}
      className={styles.editInput}
    />
  );

  const renderSelect = (b, field, options) => (
    <select
      value={b[field] || ''}
      onChange={(e) => updateBooking(b.id, field, e.target.value)}
      className={styles.editInput}
    >
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );

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
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>ZIP</th>
                <th>Guests</th>
                <th>Rental</th>
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
                  <td>
                    <input
                      type="date"
                      value={new Date(b.dateNeeded).toISOString().split('T')[0]}
                      onChange={(e) => updateBooking(b.id, 'dateNeeded', new Date(e.target.value).toISOString())}
                      className={styles.editInput}
                    />
                  </td>
                  <td>{renderInput(b, 'name')}</td>
                  <td>{renderInput(b, 'phone')}</td>
                  <td>{renderInput(b, 'email')}</td>
                  <td>{renderInput(b, 'street')}</td>
                  <td>{renderInput(b, 'city')}</td>
                  <td>{renderInput(b, 'state')}</td>
                  <td>{renderInput(b, 'zip')}</td>
                  <td>{renderInput(b, 'guestCount', 'number')}</td>
                  <td>{renderSelect(b, 'rentalLength', ['Single Day Rental', '2 Day Rental', '3 Day Rental', '4 Day Rental', '5 Day Rental'])}</td>
                  <td>{renderSelect(b, 'machineType', ['Stainless Single Flavor - $185', 'Stainless Dual Flavor - $240', 'Plastic Dual Flavor - $210'])}</td>
                  <td>{renderSelect(b, 'flavor', ['Blue Hawaiian', 'Bushwacker +$5', 'Frosé', 'Grape', 'Lemonade', 'Lime Margarita', 'Louisianna Hurricane', 'Mango Daiquiri', 'Mango Margarita', 'Orange Dreamsicle', 'Peach Belini', 'Peach Daiquiri', 'Pina Colada', 'Pink Lemonade', 'Strawberry Daiquiri', 'Strawberry Margarita', 'Watermelon'])}</td>
                  <td>{renderSelect(b, 'flavorAdditions', ['', 'Strawberry', 'Peach', 'Watermelon', 'Mango'])}</td>
                  <td>{renderInput(b, 'comments')}</td>
                  <td>{renderInput(b, 'adminComment')}</td>
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
