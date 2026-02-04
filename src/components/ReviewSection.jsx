import React from 'react';

export default function ReviewSection() {
  const reviews = [
    {
      name: 'Tangee Mariana',
      review:
        'Thirsty Dawg was an absolute surprise and HIT for our birthday Aloha celebration at Navarre Beach. We rented two machines and our guests loved the refreshing frozen drinks. We’ll definitely request two machines again next year!'
    },
    {
      name: 'Jeff Hendrix',
      review:
        'I rented the Bushwacker and margarita machine from Thirsty Dawg for my 50th birthday party, and it was a huge hit! The drinks were a big part of the fun, and the machines were easy to use.'
    },
    {
      name: 'Katie Kidwell',
      review:
        'We used Thirsty Dawg for teacher appreciation week at our middle school. Ryan was easy to work with and everyone loved the drinks! We’ll definitely use them again.'
    },
    {
      name: 'Beth Biggs',
      review:
        'Ryan and Thirsty Dawg had an awesome machine for our fundraiser! His customer service is 5 stars as well!'
    },
    {
      name: 'Dan Testa',
      review:
        'Ryan with Thirsty Dawg was awesome for my daughter’s wedding. He called ahead to confirm, arrived early, and helped with setup. It was a huge hit with the guests!'
    }
  ];

  
  return (
    <section style={{
      backgroundColor: '#fffbe6',
      padding: '2rem',
      borderRadius: '1rem',
      marginTop: '3rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    }}>
      <h3 style={{
        textAlign: 'center',
        fontSize: '1.8rem',
        marginBottom: '1.5rem',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
      }}>
        ⭐ Rated 5 Stars by 55+ Happy Customers
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
      }}>
        {reviews.map(({ name, review }, idx) => (
          <div key={idx} style={{
            backgroundColor: '#ffffff',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #f4d28c',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
            width: '100%'
          }}>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>
              “{review}”
            </p>
            <p style={{ fontWeight: 'bold', color: '#009fdb' }}>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 
