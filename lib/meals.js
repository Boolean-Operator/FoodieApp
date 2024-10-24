import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error(
  //   "I'm sorry, Michael, but there was an error loading the meals data."
  // );
  return db.prepare('SELECT * FROM meals').all();
}
