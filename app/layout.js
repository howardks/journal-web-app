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

async function login() {
  "use server";
}

async function signup() {
  "use server";
}

async function logout() {
  "use server";
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header login={login} signup={signup} logout={logout} />
        {children}
        <Footer />
      </body>
    </html>
  );
};
