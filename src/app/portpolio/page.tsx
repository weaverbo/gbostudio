import Image from 'next/image';
import StyledLink from 'next/link';

import team_portfolio from '../../../public/img/team_portfolio.png';
import '../../styles/portpolio.css';

export default function Portpolio() {
  return (
    <div className="container">
      <h1 className="text-[170px] text-main font-bold mt-[40px] ml-[-15.5px]">
        PORTFOLIO
      </h1>
      <div className="flex w-100% gap-[72px]">
        <div className="mt-[10px]">
          <Image
            className="portpolio_img"
            src={team_portfolio}
            alt="team_website"
          />
        </div>
        <div>
          <h2 className="portpolio_title">Team Website</h2>
          <div className="flex flex-col gap-[16px] mt-[36px]">
            <span className="portpolio_tag w-[182px]">Website Design</span>
            <span className="portpolio_tag w-[227px]">React Development</span>
            <span className="portpolio_tag w-[109px]">Concept</span>
            <StyledLink
              href="/portpolio/portpolio_detail"
              className="w-[183px] border-[2px] border-main text-main text-xl py-[6px] px-[10px]"
            >
              see this project
            </StyledLink>
          </div>
        </div>
      </div>
    </div>
  );
}
