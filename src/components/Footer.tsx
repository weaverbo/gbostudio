import Image from 'next/image';

import arrow_left from '../../public/img/arrow_left.png';
import ellipse from '../../public/img/blueellipse.png';

export default function Footer() {
  return (
    <>
      <div className="bg-main h-[312px]">
        <div className="container flex justify-between items-start pt-[72px]">
          <div>
            <div className="flex gap-[8px] items-center text-white">
              <div className="text-3xl">LET&apos;S TALK</div>
              <div className="text-[13px] font-thin ">
                <p className="leading-[21px]">맞춤형 솔루션으로</p>
                <p>웹페이지 제작 고민을 덜어드립니다.</p>
              </div>
            </div>
            <form action="" className="relative mt-[24px]">
              <input
                type="email"
                placeholder="Email"
                className="w-[385px] h-[67px] p-[24px] border-[1.1px] border-white bg-transparent text-sm text-white placeholder:text-white opacity-80"
              />
              <button>
                <Image
                  src={arrow_left}
                  alt="arrow_left"
                  className="absolute top-[26.5px] left-[337px]"
                />
              </button>
            </form>
            <p className="pl-[24px] pt-[11px] text-xs text-white font-thin">
              * 메일주소 남겨주시면 빠른 시일 내에 회신드리겠습니다!
            </p>
          </div>
          <div className="flex flex-col items-stretch text-white">
            <div className="text-lg text-center text-white opacity-80">
              GBO Studio
            </div>
            <div className="font-sm font-thin text-white opacity-80">
              <p className="underline mt-[33px]">OFFICE HOURS</p>
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
      <div className="flex items-center justify-center bg-background h-[150px]">
        <p className="text-black opacity-40">Copyright © 2025 GBO Studio</p>
        <div className="px-[12px]">
          <Image src={ellipse} alt="ellipse" />
        </div>
        <div className="flex gap-[8px] opacity-40">
          <span className="text-black">HOME</span>
          <span className="text-black">SERVICE</span>
          <span className="text-black">PORTPOLIO</span>
        </div>
      </div>
    </>
  );
}
