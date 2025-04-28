'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showPadding, setIsShowPadding] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width : 1024px)' });

  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/portpolio' || '/portpolio/portpolio_detail') {
      setIsShowPadding(true);
    } else {
      setIsShowPadding(false);
    }
  }, [pathname]);

  return (
    <>
      <Header onContactClick={scrollToFooter} />
      {isMobile && showPadding ? (
        <div className="pt-[82px]">{children}</div>
      ) : (
        <div>{children}</div>
      )}
      <Footer ref={footerRef} />
    </>
  );
}
