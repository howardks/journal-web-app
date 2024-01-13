import { Inter } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css';
import Header from '@/app/header';
import Footer from '@/app/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Web Journal',
  description: 'Online Journal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
