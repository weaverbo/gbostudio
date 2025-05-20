'use client';

import Image from 'next/image';
import StyledLink from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import close_icon from '../../public/img/close_icon.png';
import menu_icon from '../../public/img/menu_icon.png';

export default function Header({
  onContactClick,
  onPortFolioClick,
}: {
  onContactClick?: () => void;
  onPortFolioClick?: () => void;
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
                className="absolute top-6 right-6 text-xl cursor-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image src={close_icon} alt="close" />
              </button>
              <ul className="flex flex-col mt-[68px] ml-[48px] text-xl">
                <li className="pt-[39px]">
                  <StyledLink
                    href="/"
                    className="text-xl mb-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </StyledLink>
                </li>
                <li className="py-[39px]">
                  <button
                    className="text-xl cursor-none"
                    onClick={() => {
                      setIsMenuOpen(false);
                      onPortFolioClick?.();
                    }}
                  >
                    PORTFOLIO
                  </button>
                </li>
                <li>
                  <button
                    className="text-xl cursor-none"
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
              <div className="container flex justify-between items-center pt-[23px]">
                <StyledLink href={'/'} className="text-2xl cursor-none">
                  GBO STUDIO
                </StyledLink>
                <button
                  className="text-xl cursor-none"
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
            <div className="container flex justify-between items-center pt-[23px] py-[23px] ">
              <StyledLink href={'/'} className="text-2xl cursor-none">
                GBO Studio
              </StyledLink>
              <div className="text-xl">
                <button
                  className="cursor-none"
                  onClick={() => {
                    onPortFolioClick?.();
                  }}
                >
                  PORTFOLIO
                </button>
                <button
                  onClick={onContactClick}
                  className="ml-[24px] cursor-none"
                >
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
