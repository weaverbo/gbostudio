import Image from 'next/image';
import StyledLink from 'next/link';

import chat_app from '../../../public/img/chat_app.png';
import team from '../../../public/img/team.png';
import '../../styles/main.css';

export default function main() {
  return (
    <div className="container">
      <div className="flex">
        <h1 className="text-main font-bold text-6xl relative circle-marker">
          PORTFOLIO
        </h1>
      </div>
      <div>
        <div>
          <p className="text-xl text-main opacity-60">LATEST WORK</p>
          <h2 className="text-main text-4xl">Team website</h2>
          <div className="mt-[16px]">
            <StyledLink href="/portpolio/portpolio_detail">
              <Image
                className="shadow-[0_0_30px_rgba(0,0,0,0.2)]"
                src={team}
                alt="team"
              />
            </StyledLink>
          </div>
        </div>
        <div className="mt-[72px]">
          <p className="text-xl text-main opacity-60">LATEST WORK</p>
          <h2 className="text-main text-4xl">Chat App website</h2>
          <div className="mt-[16px] mb-[140px]">
            <Image
              className="shadow-[0_0_30px_rgba(0,0,0,0.2)]"
              src={chat_app}
              alt="chat_app"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
