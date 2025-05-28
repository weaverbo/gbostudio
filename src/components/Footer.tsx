import { useAnimateOnInView } from '@/hook/useAnimateOnInView';
import StyledLink from 'next/link';
import { forwardRef } from 'react';

import '../styles/footer.css';
import { LineAnimation } from './ui/LineAnimation';
import UnderLineText from './ui/UnderlineText';

type FooterProps = {
  onServiceClick?: () => void;
  footerPortFolioClick?: () => void;
};

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ onServiceClick, footerPortFolioClick }, footerRef) => {
    const { onInviewRef, animationKey } = useAnimateOnInView();

    return (
      <>
        <div ref={footerRef}>
          <div className="container relative" ref={onInviewRef}>
            <LineAnimation animationKey={animationKey} width="105%" />
            <h1 className="contact-title">LET&apos;S TALK</h1>
            <div className="contact-container ">
              <div className="email">
                <UnderLineText>gbostudio@naver.com</UnderLineText>
              </div>
              <div className="contact-right-container">
                <div className="contact-label">
                  <p>GBO STUDIO</p>
                  <p>OFFICE HOURS</p>
                </div>
                <div className="w-[1px] h-[51px] bg-black mx-[16px]"></div>
                <div className="w-[121px] flex gap-[12px]">
                  <div className="contact-label">
                    <p>MON</p>
                    <p>NINE</p>
                  </div>
                  <div className="contact-label flex items-center">TO</div>
                  <div className=" contact-label">
                    <p>FRI</p>
                    <p>SIX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom-container">
          <div className="footer-botton-text">Copyright © 2025 GBO Studio</div>
          <div className="footer-bottom-menu">
            <StyledLink href="/" className="footer-bottom-menu-button">
              HOME
            </StyledLink>
            <button
              onClick={onServiceClick}
              className="footer-bottom-menu-button "
            >
              SERVICE
            </button>
            <button
              onClick={footerPortFolioClick}
              className="footer-bottom-menu-button"
            >
              PORTPOLIO
            </button>
          </div>
        </div>
      </>
    );
  }
);

Footer.displayName = 'Footer';
export default Footer;
