import React from 'react';

export default function MealDetailPage({ params }) {
  return (
    <div>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        MealDetailPage - {params.slug}
      </h1>
      <p style={{ color: 'white', textAlign: 'center' }}>
        Details about {params.slug}
      </p>
    </div>
  );
}
