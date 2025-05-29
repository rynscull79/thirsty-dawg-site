// 📁 src/components/OurRentals.jsx

export default function OurRentals() {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '3rem 1rem' }}>
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          fontFamily: '"Chewy", cursive',
        }}
      >
        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', flex: '1 1 300px', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#1e40af', marginBottom: '0.75rem' }}>🧊 Single-Flavor Machine</h3>
          <p style={{ color: '#333' }}>
            Great for frozen margaritas, daiquiris, or slushies. Easy to use — just plug in and pour. Includes one mix and full setup. No ice required.
          </p>
        </div>

        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', flex: '1 1 300px', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#1e40af', marginBottom: '0.75rem' }}>🍹 Dual-Flavor Machine</h3>
          <p style={{ color: '#333' }}>
            Serve two flavors at once — a hit for weddings, festivals, and big parties. Comes with two mixes, dual tanks, and delivery/setup.
          </p>
        </div>

        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', flex: '1 1 300px', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#1e40af', marginBottom: '0.75rem' }}>🔌 No Ice Required</h3>
          <p style={{ color: '#333' }}>
            All machines are high-efficiency and freeze internally — no bagged ice needed. Made in the USA and built for large crowds.
          </p>
        </div>

        <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', flex: '1 1 300px', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#1e40af', marginBottom: '0.75rem' }}>🏖️ Vacation-Ready</h3>
          <p style={{ color: '#333' }}>
            Perfect for beach houses and vacation rentals in Pensacola, Pensacola Beach, Navarre, or Gulf Breeze. Book for up to 5 days — we’ll handle setup and pickup.
          </p>
        </div>
      </div>
    </section>
  );
}
