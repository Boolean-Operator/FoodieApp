import Link from 'next/link';
import classes from './page.module.css';

export default function SocialPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Social Page:</h1>
        <p>Chat with old friends and meet new ones in our community!</p>
      </header>
      <main className={classes.main}>
        <h2>Chat Boards</h2>

        <ul className={classes.perks}>
          <li>
            <Link href="/meals" className={classes.link}>
              <p>Tips and tricks for better recipes</p>
            </Link>
          </li>
          <li>
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Link href="/events" className={classes.link}>
              <p>Participate in exclusive events</p>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
