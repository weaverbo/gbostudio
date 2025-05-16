import { motion } from 'framer-motion';
import { forwardRef, useEffect, useState } from 'react';
import { useRef } from 'react';

import '../styles/footer.css';

const Footer = forwardRef<HTMLDivElement>((_, footerRef) => {
  const [animationKey, setAnimationKey] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey(prev => prev + 1);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);
  return (
    <>
      <div ref={footerRef}>
        <div className="container relative" ref={ref}>
          <motion.div
            key={animationKey}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-[1px] bg-black absolute top-5 mr-[-383px]"
            style={{ right: 'calc(100px)' }}
          />
          <div className="contact-left-container">
            <p className="contact-left-title">LET&apos;S TALK</p>
          </div>
          <div className="flex justify-between mt-[72px]">
            <p className="text-3xl">gbostudio@naver.com</p>
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
