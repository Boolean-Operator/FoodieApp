import Link from 'next/link';
import { Suspense } from 'react';

import { getMeals } from '@/lib/meals';
import MealsGrid from '../components/meals/meals-grid';
import classes from './page.module.css';

export const metadata = {
  title: 'All Meals',
  description: 'Browse recipes for delicious meals',
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created and shared{''}
          <span className={classes.highlight}> by our community</span>
        </h1>
        <p className="">Choose a recipe to try.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={
            <h2 className={classes.loading}>Fetching data now, Michael ...</h2>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
