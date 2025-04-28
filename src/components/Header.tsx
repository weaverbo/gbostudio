'use client';

import Image from 'next/image';
import StyledLink from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import close_icon from '../../public/img/close_icon.png';
import menu_icon from '../../public/img/menu_icon.png';

export default function Header({
  onContactClick,
}: {
  onContactClick?: () => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width : 580px)' });

  return (
    <>
      {isMobile ? (
        <>
          {isMenuOpen ? (
            <div className="fixed container bg-white w-full h-full top-0 left-0 z-50">
              <button
                className="absolute top-6 right-6 text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image src={close_icon} alt="close" />
              </button>
              <ul className="flex flex-col mt-[68px] ml-[48px] text-main font-bold text-xl">
                <li className="pt-[39px]">
                  <StyledLink
                    href="/"
                    className="text-2xl mb-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </StyledLink>
                </li>
                <li className="py-[39px]">
                  <StyledLink
                    href="/portpolio"
                    className="text-2xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PORTFOLIO
                  </StyledLink>
                </li>
                <li>
                  <button
                    className="text-2xl"
                    onClick={() => {
                      setIsMenuOpen(false);
                      onContactClick?.();
                    }}
                  >
                    CONTACT
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="fixed w-full bg-background h-[82px] z-50">
              <div className="container flex justify-between items-center text-main pt-[23px]">
                <StyledLink href={'/'} className="text-2xl font-bold">
                  GBO STUDIO
                </StyledLink>
                <button
                  className="text-xl"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Image src={menu_icon} alt="menu" />
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="fixed w-full bg-background h-[82px] z-50">
            <div className="container flex justify-between items-center text-main pt-[23px] py-[23px] ">
              <StyledLink href={'/'} className="text-2xl font-bold">
                GBO STUDIO
              </StyledLink>
              <div className="text-xl">
                <StyledLink href={'/portpolio'}>PORTFOLIO</StyledLink>
                <button onClick={onContactClick} className="ml-[24px]">
                  CONTACT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
