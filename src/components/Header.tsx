'use client';

import Image from 'next/image';
import StyledLink from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import close_mobile from '../../public/img/close_mobile.png';
import menu from '../../public/img/menu.png';
import '../styles/header.css';

export default function Header({
  onContactClick,
  onPortFolioClick,
}: {
  onContactClick?: () => void;
  onPortFolioClick?: () => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 580 });

  return (
    <>
      {isMobile ? (
        <>
          {isMenuOpen ? (
            <div className="header-wrapper container h-full left-0 ">
              <button
                className="absolute top-6 right-6 text-xl cursor-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image className="close_icon" src={close_mobile} alt="close" />
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
                    className="common-button-style"
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
                    className="common-button-style"
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
            <div className="header-wrapper">
              <div className="container header-contents">
                <StyledLink
                  href={'/'}
                  className="text-2xl cursor-none ml-[-8px]"
                >
                  GBO Studio
                </StyledLink>
                <button
                  className="common-button-style"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Image className="menu_icon" src={menu} alt="menu" />
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="header-wrapper">
            <div className="container header-contents">
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
