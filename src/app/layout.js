import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/header';
import Footer from '@/app/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Web Journal',
  description: 'Journal Web Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='content'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
