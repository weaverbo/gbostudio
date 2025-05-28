'use client';

import CustomCursor from '@/components/ui/CustomCusor';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Footer from '../../components/Footer';

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

  const scrollPorfFolioSection = () => {
    const el = document.getElementById('portfolio-section');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset + -100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollServiceSection = () => {
    const el = document.getElementById('service-section');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 200;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/portpolio' || '/portpolio/portpolio_detail') {
      setIsShowPadding(true);
    } else {
      setIsShowPadding(false);
    }
  }, [pathname]);

  const Header = dynamic(() => import('../../components/Header'), {
    ssr: false,
  });

  return (
    <>
      <Header
        onContactClick={scrollToFooter}
        onPortFolioClick={scrollPorfFolioSection}
      />
      {isMobile && showPadding ? <div>{children}</div> : <div>{children}</div>}
      <Footer
        ref={footerRef}
        onServiceClick={scrollServiceSection}
        footerPortFolioClick={scrollPorfFolioSection}
      />
      <CustomCursor />
    </>
  );
}
