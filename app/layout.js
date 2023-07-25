import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hygraph FM',
  description: 'A music community for artists, producers, and listeners.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
