'use client';

import { useRef } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header onContactClick={scrollToFooter} />
      {children}
      <Footer ref={footerRef} />
    </>
  );
}
