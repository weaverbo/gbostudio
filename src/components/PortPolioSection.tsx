import Image from 'next/image';
import StyledLink from 'next/link';

import pp1_min from '../../public/img/pp1_min.png';
import pp2_min from '../../public/img/pp2_min.png';
import pp3_min from '../../public/img/pp3_min.png';
import pp4_min from '../../public/img/pp4_min.png';
import pp5_min from '../../public/img/pp5_min.png';
import pp6_min from '../../public/img/pp6_min.png';
import pp7_min from '../../public/img/pp7_min.png';
import pp8_min from '../../public/img/pp8_min.png';

export default function PortPolioSection() {
  return (
    <>
      <div>
        <h1 className="text-[96px]">PortFolio</h1>
        <div className="mt-[96px] mb-[280px] overflow-x-scroll w-screen">
          <div className="flex gap-[64px] w-max">
            <div className="w-[740px] h-[1098px]">
              <StyledLink href="/portpolio/portpolio_detail">
                <Image src={pp1_min} alt="team" className="" />
              </StyledLink>
            </div>
            <div className="w-[740px] h-[1098px]">
              <StyledLink href="/portpolio/portpolio_detail">
                <Image src={pp2_min} alt="team" className="" />
              </StyledLink>
            </div>
            <div className="w-[740px] h-[1098px]">
              <StyledLink href="/portpolio/portpolio_detail">
                <Image src={pp3_min} alt="team" className="" />
              </StyledLink>
            </div>
            <div className="w-[740px] h-[1098px]">
              <StyledLink href="/portpolio/portpolio_detail">
                <Image src={pp4_min} alt="team" className="" />
              </StyledLink>
            </div>
            <div className="w-[740px] h-[1098px]">
              <StyledLink href="/portpolio/portpolio_detail">
                <Image src={pp5_min} alt="team" className="" />
              </StyledLink>
            </div>
            <div className="w-[740px] h-[1098px]">
              <StyledLink href="/portpolio/portpolio_detail">
                <Image src={pp6_min} alt="team" className="" />
              </StyledLink>
            </div>
            <div className="w-[740px] h-[1098px]">
              <StyledLink href="/portpolio/portpolio_detail">
                <Image src={pp7_min} alt="team" className="" />
              </StyledLink>
            </div>
            <div className="w-[740px] h-[1098px]">
              <StyledLink href="/portpolio/portpolio_detail">
                <Image src={pp8_min} alt="team" className="" />
              </StyledLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
