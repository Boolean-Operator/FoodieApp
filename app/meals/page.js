import React from 'react';
import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '../components/meals/meals-grid';

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created {''}
          <span className={classes.highlight}> by our communiy</span>
        </h1>
        <p className="">Choose a recipe to try.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
