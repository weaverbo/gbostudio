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
        <body className="font-InriaSans relative">
          <Header />
          {children}
          <div className="w-[120px] h-[120px] rounded-full bg-submain text-main font-bold text-xl flex items-center justify-center flex-col fixed bottom-[50px] right-[100px] z-50">
            <span>1:1</span>
            <span>talk</span>
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
}
