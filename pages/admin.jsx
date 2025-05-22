import { useState, useEffect } from 'react';
import styles from '../styles/Admin.module.css';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filterMonth, setFilterMonth] = useState('');
  const [filterYear, setFilterYear] = useState('');

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

const handleEdit = (b) => {
  setEditingId(b.id);
  setFormData({
    ...b,
    dateNeeded: new Date(b.dateNeeded).toISOString().split('T')[0], // ensure correct format for input type="date"
  });
};


const handleSave = async (id) => {
  try {
    const payload = {
      ...formData,
      guestCount: parseInt(formData.guestCount),
      dateNeeded: new Date(`${formData.dateNeeded}T12:00:00Z`).toISOString(), // fix timezone offset
    };

    await fetch(`https://booking-backend-production-5dba.up.railway.app/api/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    setEditingId(null);
    fetchBookings(); // refresh updated list
  } catch (err) {
    alert('Failed to save booking.');
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

 const handleChange = (field, value) => {
  setFormData((prev) => ({
    ...prev,
    [field]: typeof value === 'string' ? value : value || '',
  }));
};

  const filteredBookings = bookings.filter((b) => {
    const date = new Date(b.dateNeeded);
    const monthMatch = filterMonth ? date.getMonth() + 1 === parseInt(filterMonth) : true;
    const yearMatch = filterYear ? date.getFullYear() === parseInt(filterYear) : true;
    return monthMatch && yearMatch;
  });

  const months = [...Array(12).keys()].map(i => ({
    label: new Date(0, i).toLocaleString('default', { month: 'long' }),
    value: i + 1,
  }));
  const years = [...new Set(bookings.map(b => new Date(b.dateNeeded).getFullYear()))];

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

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Filter by Month:{' '}
          <select onChange={(e) => setFilterMonth(e.target.value)} value={filterMonth}>
            <option value="">All</option>
            {months.map((m) => (
              <option key={m.value} value={m.value}>{m.label}</option>
            ))}
          </select>
        </label>{' '}
        <label>
          Year:{' '}
          <select onChange={(e) => setFilterYear(e.target.value)} value={filterYear}>
            <option value="">All</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </label>
      </div>

      {loading && <p>Loading bookings...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && filteredBookings.length === 0 && <p>No bookings found.</p>}
      {!loading && filteredBookings.length > 0 && (
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
                <th>Rental</th>
                <th>Machine</th>
                <th>Flavor</th>
                <th>Additions</th>
                <th>Comments</th>
                <th>Admin Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((b) => {
                const isEditing = editingId === b.id;
                return (
                  <tr key={b.id}>
                    <td>
                      {isEditing ? (
                        <input
                          type="date"
                          value={new Date(formData.dateNeeded).toISOString().split('T')[0]}
                          onChange={(e) => handleChange('dateNeeded', new Date(e.target.value).toISOString())}
                        />
                      ) : (
                        new Date(b.dateNeeded).toLocaleDateString('en-US', { timeZone: 'UTC' })

                      )}
                    </td>
                    <td>{isEditing ? <input value={formData.name} onChange={(e) => handleChange('name', e.target.value)} /> : b.name}</td>
                    <td>{isEditing ? <input value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} /> : b.phone}</td>
                    <td>{isEditing ? <input value={formData.email} onChange={(e) => handleChange('email', e.target.value)} /> : b.email}</td>
                    <td>{isEditing ? <input value={formData.street} onChange={(e) => handleChange('street', e.target.value)} /> : b.street}</td>
                    <td>{isEditing ? (
                      <>
                        <input value={formData.city} onChange={(e) => handleChange('city', e.target.value)} style={{ width: '60px' }} />
                        <input value={formData.state} onChange={(e) => handleChange('state', e.target.value)} style={{ width: '40px' }} />
                        <input value={formData.zip} onChange={(e) => handleChange('zip', e.target.value)} style={{ width: '60px' }} />
                      </>
                    ) : `${b.city}, ${b.state} ${b.zip}`}</td>
                    <td>{isEditing ? <input type="number" value={formData.guestCount} onChange={(e) => handleChange('guestCount', parseInt(e.target.value))} /> : b.guestCount}</td>
                    <td>{isEditing ? (
                      <select value={formData.rentalLength} onChange={(e) => handleChange('rentalLength', e.target.value)}>
                        {['Single Day Rental', '2 Day Rental', '3 Day Rental', '4 Day Rental', '5 Day Rental'].map(opt => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : b.rentalLength}</td>
                    <td>{isEditing ? (
                      <select value={formData.machineType} onChange={(e) => handleChange('machineType', e.target.value)}>
                        {['Stainless Single Flavor - $185', 'Stainless Dual Flavor - $240', 'Plastic Dual Flavor - $210'].map(opt => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : b.machineType}</td>
                    <td>{isEditing ? (
                      <select value={formData.flavor} onChange={(e) => handleChange('flavor', e.target.value)}>
                        {['Blue Hawaiian', 'Bushwacker +$5', 'Frosé', 'Grape', 'Lemonade', 'Lime Margarita', 'Louisianna Hurricane', 'Mango Daiquiri', 'Mango Margarita', 'Orange Dreamsicle', 'Peach Belini', 'Peach Daiquiri', 'Pina Colada', 'Pink Lemonade', 'Strawberry Daiquiri', 'Strawberry Margarita', 'Watermelon'].map(opt => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : b.flavor}</td>
                    <td>{isEditing ? (
                      <select value={formData.flavorAdditions || ''} onChange={(e) => handleChange('flavorAdditions', e.target.value)}>
                        {['', 'Strawberry', 'Peach', 'Watermelon', 'Mango'].map(opt => (
                          <option key={opt} value={opt}>{opt || 'None'}</option>
                        ))}
                      </select>
                    ) : b.flavorAdditions}</td>
                    <td>{isEditing ? <textarea value={formData.comments || ''} onChange={(e) => handleChange('comments', e.target.value)} /> : b.comments}</td>
                    <td>{isEditing ? <textarea value={formData.adminComment || ''} onChange={(e) => handleChange('adminComment', e.target.value)} /> : b.adminComment}</td>
                    <td>
                      {isEditing ? (
                        <button onClick={() => handleSave(b.id)}>💾 Save</button>
                      ) : (
                        <button onClick={() => handleEdit(b)}>✏️ Edit</button>
                      )}
                      <button onClick={() => deleteBooking(b.id)}>🗑️</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
