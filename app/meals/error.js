'use client';
import React from 'react';

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An Error occured!</h1>
      <p>
        I'm sorry, Michael, but there was an error loading the meals data.
        Perhaps we should try again later.
      </p>
    </main>
  );
}
