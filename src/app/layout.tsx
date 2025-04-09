import { Inria_Sans } from 'next/font/google';

import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

const InriaSans = Inria_Sans({
  subsets: ['latin'],
  variable: '--font-Inria_Sans',
  weight: ['300', '400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={InriaSans.variable}>
        <body className="font-InriaSans">
          <Header />
          {children} <Footer />
        </body>
      </html>
    </>
  );
}
