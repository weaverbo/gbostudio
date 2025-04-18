import Image from 'next/image';

import arrow_left from '../../public/img/arrow_left.png';
import '../styles/footer.css';

export default function Footer() {
  return (
    <>
      <div className="bg-main">
        <div className="container contact-container">
          <div className="contact-left-container">
            <div className="flex gap-[8px] items-center text-white">
              <div className="contact-left-title">LET&apos;S TALK</div>
              <div className="contact-left-text">
                <p className="leading-[21px]">맞춤형 솔루션으로</p>
                <p>웹페이지 제작 고민을 덜어드립니다.</p>
              </div>
            </div>
            <form className="block mt-[24px]">
              <div className="email-input-container">
                <input
                  type="email"
                  placeholder="Email"
                  className="email-input"
                />
                <button>
                  <Image
                    src={arrow_left}
                    alt="arrow_left"
                    className="email-submit-button"
                  />
                </button>
              </div>
            </form>
            <p className="contact-left-description">
              * 메일주소 남겨주시면 빠른 시일 내에 회신드리겠습니다!
            </p>
          </div>
          <div className="contact-right-container">
            <div className="text-lg text-center text-white opacity-80">
              GBO Studio
            </div>
            <div className="font-sm font-thin text-white opacity-80">
              <p className="contact-right-subtitle">OFFICE HOURS</p>
              <p className="flex justify-between mt-[10px]">
                <span>MON</span>
                <span>FRI</span>
              </p>
              <p className="text-center">TO</p>
              <p className="flex justify-between">
                <span>NINE</span>
                <span>SIX</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom-container">
        <p className="footer-botton-text">Copyright © 2025 GBO Studio</p>
        <div className="footer-bottom-marker"></div>
        <div className="footer-bottom-menu">
          <span className="text-black">HOME</span>
          <span className="text-black">SERVICE</span>
          <span className="text-black">PORTPOLIO</span>
        </div>
      </div>
    </>
  );
}
