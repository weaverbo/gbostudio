import Image from 'next/image';
import StyledLink from 'next/link';

import team_portpolio_detail from '../../../../public/img/team_portfolio_detail.png';
import '../../../styles/portfoliodetail.css';

export default function PortpolioDetail() {
  return (
    <div className="container">
      <p className="mt-[163px] font-main opacity-40">PROJECT SHOWCASE</p>
      <h1 className="text-5xl text-main font-bold leading-none">
        TEAM WEBSITE
      </h1>
      <p className="w-[720px] h-[129px] text-xl text-main mt-[32px] leading-[1.8]">
        A full website design and build for a concept team collaboration
        platform. This website also includes a beautiful blog. I have built the
        website and the blog in Webflow which has one of the best CMS for blog
        hosting.
      </p>
      <div className="marker-container">
        <StyledLink
          href={'https://team-tau-seven.vercel.app/'}
          style={{ textShadow: '0 4px 4px rgba(0, 0, 0, 0.2)' }}
        >
          visit the site
        </StyledLink>
        <div className="marker"></div>
      </div>
      <Image
        className="mt-[72px] mb-[140px]"
        src={team_portpolio_detail}
        alt="team_portpolio_detail"
      />
    </div>
  );
}
