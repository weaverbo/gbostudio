import { useAnimateOnInView } from '@/hook/useAnimateOnInView';
import { forwardRef } from 'react';

import '../styles/footer.css';
import { LineAnimation } from './ui/LineAnimation';
import UnderLineText from './ui/UnderlineText';

const Footer = forwardRef<HTMLDivElement>((_, footerRef) => {
  const { onInviewRef, animationKey } = useAnimateOnInView();

  return (
    <>
      <div ref={footerRef}>
        <div className="container relative" ref={onInviewRef}>
          <LineAnimation animationKey={animationKey} />
          <div className="contact-left-container">
            <p className="contact-left-title">LET&apos;S TALK</p>
          </div>
          <div className="flex justify-between mt-[72px]">
            <p className="text-3xl">
              <UnderLineText>gbostudio@naver.com</UnderLineText>
            </p>
            <div className="flex">
              <div className="flex flex-col justify-between">
                <p>GBO STUDIO</p>
                <p>OFFICE HOURS</p>
              </div>
              <div className="w-[1px] h-[51px] bg-black mx-[16px]"></div>
              <div className="w-[121px]">
                <div className="flex justify-between">
                  <p>MON</p>
                  <p>FRI</p>
                </div>
                <div className="text-center">TO</div>
                <div className="flex justify-between">
                  <p>NINE</p>
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
          <span className="text-black">HOME</span>
          <span className="text-black">SERVICE</span>
          <span className="text-black">PORTPOLIO</span>
        </div>
      </div>
    </>
  );
});

Footer.displayName = 'Footer';
export default Footer;
