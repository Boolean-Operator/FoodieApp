import MainHeader from './components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'Food by and for Foodies',
  description: 'Delicious meals, shared among a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
