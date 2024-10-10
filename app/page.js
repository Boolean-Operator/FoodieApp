import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>

      <p style={{ textAlign: 'center' }}>
        <Link
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          href="/meals"
        >
          Meals
        </Link>
      </p>
      <p style={{ textAlign: 'center' }}>
        <Link
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          href="/meals/share"
        >
          Share Meals Page
        </Link>
      </p>
      <p style={{ textAlign: 'center' }}>
        <Link
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          href="/community"
        >
          Community Page
        </Link>
      </p>
    </main>
  );
}
