'use client';
import React from 'react';

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An Error occured!</h1>
      <p>
        I'm sorry, Michael, I was unble to create the shared meal with the
        information provided.
      </p>
    </main>
  );
}
