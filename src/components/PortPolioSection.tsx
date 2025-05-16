import Image from 'next/image';
import StyledLink from 'next/link';

import chat_app from '../../public/img/chat_app.png';
import team from '../../public/img/team.png';

export default function PortPolioSection() {
  return (
    <>
      <div>
        <h1 className="text-[96px]">PORTFOLIO</h1>
        <div className="flex mt-[96px]">
          <div>
            <StyledLink href="/portpolio/portpolio_detail">
              <Image
                className="shadow-[0_0_30px_rgba(0,0,0,0.2)]"
                src={team}
                alt="team"
              />
            </StyledLink>
          </div>
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
