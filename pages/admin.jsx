import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
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
const [showArchived, setShowArchived] = useState(false);
const months = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i); // 2 years back, 2 years forward


  const correctPassword = 'Bamafan79@';

const fetchBookings = async () => {
  setLoading(true);
  setError('');

  const endpoint = showArchived
  ? 'https://booking-backend-production-b048.up.railway.app/api/bookings/archive'
  :'https://booking-backend-production-b048.up.railway.app/api/bookings/all';
;


  // Force small delay to allow backend to finish archiving updates
  await new Promise((res) => setTimeout(res, 300));


  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    if (data.success) {
      setBookings(data.bookings);
      console.log('📦 Raw bookings:', data.bookings);
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
}, [authenticated, showArchived]);


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
  secondFlavor: b.secondFlavor || '',
  comments: b.comments || '',
  dateNeeded: new Date(b.dateNeeded).toISOString().split('T')[0],
});


};


const handleSave = async (id) => {
  try {
    const payload = {
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || '',
      street: formData.street || '',
      city: formData.city || '',
      state: formData.state || '',
      zip: formData.zip || '',
      guestCount: parseInt(formData.guestCount) || 0,
      rentalLength: formData.rentalLength || '',
      machineType: formData.machineType || '',
      flavor: formData.flavor || '',
      secondFlavor: formData.secondFlavor || '',
      flavorAdditions: formData.flavorAdditions || '',
      comments: formData.comments || '',
      adminComment: formData.adminComment || '',
      dateNeeded: new Date(`${formData.dateNeeded}T12:00:00Z`).toISOString(), // fixes time shift
    };

    const response = await fetch(`https://booking-backend-production-b048.up.railway.app/api/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!result.success) {
      console.error(result.error);
      alert('Failed to save changes. See console for details.');
    }

    setEditingId(null);
    fetchBookings(); // refresh view
  } catch (err) {
    console.error(err);
    alert('Error saving booking.');
  }
};
  const deleteBooking = async (id) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) return;
    try {
      await fetch(`https://booking-backend-production-b048.up.railway.app/api/bookings/${id}`, {
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

const filteredBookings = useMemo(() => {
  return bookings.filter((b) => {
    const utcDate = new Date(b.dateNeeded);
    const bookingMonth = utcDate.getUTCMonth() + 1;
    const bookingYear = utcDate.getUTCFullYear();
    const now = new Date();

    const monthMatch = filterMonth ? bookingMonth === Number(filterMonth) : true;
    const yearMatch = filterYear ? bookingYear === Number(filterYear) : true;

    const isFuture = utcDate > now;
    const showFuture = !showArchived;

    return monthMatch && yearMatch && (!showFuture || isFuture);
  });
}, [bookings, filterMonth, filterYear, showArchived]);
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
    <>
  <Head>
    <title>Admin | Thirsty Dawg</title>
    <link rel="icon" type="image/png" href="/favicon.png" />
  </Head>

    <div className={styles.dashboard}>
      <h1>Booking Dashboard</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginRight: '1rem' }}>
  <input
    type="checkbox"
    checked={showArchived}
onChange={(e) => setShowArchived(e.target.checked)}


  />
  {' '}Show Archived Bookings
</label>

        <label>
          Filter by Month:{' '}
          <select onChange={(e) => setFilterMonth(e.target.value)} value={filterMonth}>
            <option value="">All</option>
            {months.map((m) => (
              <option key={m.value} value={String(m.value)}>{m.label}</option>
            ))}
          </select>
        </label>{' '}
        <label>
          Year:{' '}
          <select onChange={(e) => setFilterYear(e.target.value)} value={filterYear}>
            <option value="">All</option>
            {years.map((y) => (
              <option key={y} value={String(y)}>{y}</option>
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
                <th>2nd Flavor</th>
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
                  <tr key={b.id} className={new Date(b.dateNeeded) > new Date() ? styles.newBookingRow : ''}>
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
                    <td>
  {isEditing ? (
    <select value={formData.secondFlavor || ''} onChange={(e) => handleChange('secondFlavor', e.target.value)}>
      {['', 'Blue Hawaiian', 'Bushwacker +$5', 'Frosé', 'Grape', 'Lemonade', 'Lime Margarita', 'Louisianna Hurricane', 'Mango Daiquiri', 'Mango Margarita', 'Orange Dreamsicle', 'Peach Belini', 'Peach Daiquiri', 'Pina Colada', 'Pink Lemonade', 'Strawberry Daiquiri', 'Strawberry Margarita', 'Watermelon'].map(opt => (
        <option key={opt} value={opt}>{opt || 'None'}</option>
      ))}
    </select>
  ) : (
    b.secondFlavor || ''
  )}
</td>

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
     </>
   );
 }
