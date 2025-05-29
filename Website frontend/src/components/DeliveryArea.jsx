export default function DeliveryArea() {
  return (
    <section style={{
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      marginTop: '2rem'
    }}>
      <h3 style={{
        textAlign: 'center',
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#009fdb',
        marginBottom: '1.5rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        📍 Delivery Area
      </h3>
      <p style={{ textAlign: 'center' }}>
        We proudly deliver to the greater Pensacola area and surrounding Gulf Coast communities, including:
      </p>
      <ul style={{ maxWidth: '400px', margin: '1rem auto', padding: 0, listStyle: 'none', textAlign: 'center' }}>
        {[
          'Pensacola',
          'Gulf Breeze',
          'Navarre',
          'Milton',
          'Perdido Key',
          'Pace',
          'Beulah',
          'Cantonment',
          'Ensley'
        ].map((city, index) => (
          <li key={index} style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#1f2937' }}>{city}</li>
        ))}
      </ul>
      <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
  Don't see your area listed? Contact us — we may still be able to serve your event!
  <br />
  <span style={{ fontStyle: 'normal', fontSize: '0.95rem', color: '#555' }}>
    Delivery fees may apply outside our standard service area.
  </span>
</p>

    </section>
  );
}
