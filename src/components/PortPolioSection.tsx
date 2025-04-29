import Image from 'next/image';
import StyledLink from 'next/link';

import chat_app from '../../public/img/chat_app.png';
import team from '../../public/img/team.png';

export default function PortPolioSection() {
  return (
    <>
      <div>
        <div className="marker-container">
          <h1 className="section-title">PORTFOLIO</h1>
          <div className="marker"></div>
        </div>
        <h2 className="portfolio-section-subtitle">LATEST WORK</h2>
        <h3 className="portfolio-section-text">Team website</h3>
        <div className="mt-[16px]">
          <StyledLink href="/portpolio/portpolio_detail">
            <Image
              className="shadow-[0_0_30px_rgba(0,0,0,0.2)]"
              src={team}
              alt="team"
            />
          </StyledLink>
        </div>
        <div className="mt-[72px]">
          <h2 className="portfolio-section-subtitle">LATEST WORK</h2>
          <h3 className="portfolio-section-text">Chat App website</h3>
          <div className="portfolio-section-image-container">
            <Image
              className="shadow-[0_0_30px_rgba(0,0,0,0.2)]"
              src={chat_app}
              alt="chat_app"
            />
          </div>
        </div>
      </div>
    </>
  );
}
