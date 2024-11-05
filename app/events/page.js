import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          <span className={classes.highlight}>
            Meet friends with a shared passion for Food
          </span>
        </h1>
        <p>Join our like minded folks and share your passion for great food!</p>
        <p>
          Add events page from Join our like minded folks and share your passion
          for great food!
        </p>
      </header>
      <main className={classes.main}>
        <h2>Upcoming Events</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Culinary and Bartending Classes</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Social Events and Grand Openings</p>
          </li>
          <li>
            <Link href="/events" className={classes.link}>
              <Image
                src={eventsIcon}
                alt="A crowd of people at a cooking event"
              />
              <p>Participate in exclusive events and competitions</p>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
