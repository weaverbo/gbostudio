import Image from 'next/image';
import StyledLink from 'next/link';

import chat_app_portfolio from '../../../public/img/chat_app_portfolio.png';
import cryptomoney_portfolio from '../../../public/img/cryptomoney_portfolio.png';
import hotelbooking_portfolio from '../../../public/img/hotelbooking_portfolio.png';
import portfolio_portfolio1 from '../../../public/img/portfolio_portfolio1.png';
import portfolio_portfolio from '../../../public/img/portfolio_portfolio.png';
import proyoga_portfolio from '../../../public/img/proyoga_portfolio.png';
import team_portfolio from '../../../public/img/team_portfolio.png';
import travel_portfolio from '../../../public/img/travel_portfolio.png';
import '../../styles/portfolio.css';

export default function Portpolio() {
  return (
    <div className="container w-full ">
      <h1 className="portfolio-container-title">PORTFOLIO</h1>
      <div className="portfolio-container">
        <div className="portpolio-img-container">
          <Image
            className="portpolio-img"
            src={team_portfolio}
            alt="team_portfolio"
          />
        </div>
        <div>
          <h2 className="portpolio-title">Team Website</h2>
          <div className="portfolio-detail-container">
            <span className="portpolio-tag w-[182px]">Website Design</span>
            <span className="portpolio-tag w-[227px]">React Development</span>
            <span className="portpolio-tag w-[109px]">Concept</span>
            <StyledLink
              href="/portpolio/portpolio_detail"
              className="portpolio-link"
            >
              see this project
            </StyledLink>
          </div>
        </div>
      </div>
      <div className="portfolio-container-other">
        <div className="portfolio-contents-container">
          <h2 className="portpolio-title">Chat App Website</h2>
          <div className="portfolio-detail-container items-end flex-row-reverse">
            <span className="portpolio-tag w-[182px]">Website Design</span>
            <span className="portpolio-tag w-[227px]">React Development</span>
            <span className="portpolio-tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio-link">
              see this project
            </StyledLink>
          </div>
        </div>
        <div className="mt-[10px]">
          <Image
            className="portpolio-img"
            src={chat_app_portfolio}
            alt="chat_app_portfolio"
          />
        </div>
      </div>
      <div className="portfolio-container">
        <div className="mt-[10px]">
          <Image
            className="portpolio-img"
            src={hotelbooking_portfolio}
            alt="hotelbooking_portfolio"
          />
        </div>
        <div>
          <h2 className="portpolio-title">Hotel Booking Website</h2>
          <div className="portfolio-detail-container">
            <span className="portpolio-tag w-[182px]">Website Design</span>
            <span className="portpolio-tag w-[227px]">React Development</span>
            <span className="portpolio-tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio-link">
              see this project
            </StyledLink>
          </div>
        </div>
      </div>
      <div className="portfolio-container-other">
        <div className="portfolio-contents-container">
          <h2 className="portpolio-title ">ProYoga Buddy Website</h2>
          <div className="portfolio-detail-container items-end">
            <span className="portpolio-tag w-[182px]">Website Design</span>
            <span className="portpolio-tag w-[227px]">React Development</span>
            <span className="portpolio-tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio-link">
              see this project
            </StyledLink>
          </div>
        </div>
        <div className="mt-[10px]">
          <Image
            className="portpolio-img"
            src={proyoga_portfolio}
            alt="proyoga_portfolio"
          />
        </div>
      </div>
      <div className="portfolio-container">
        <div className="mt-[10px]">
          <Image
            className="portpolio-img"
            src={cryptomoney_portfolio}
            alt="cryptomoney_portfolio"
          />
        </div>
        <div>
          <h2 className="portpolio-title">CryptoMoney Website</h2>
          <div className="portfolio-detail-container">
            <span className="portpolio-tag w-[182px]">Website Design</span>
            <span className="portpolio-tag w-[227px]">React Development</span>
            <span className="portpolio-tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio-link">
              see this project
            </StyledLink>
          </div>
        </div>
      </div>
      <div className="portfolio-container-other">
        <div className="portfolio-contents-container">
          <h2 className="portpolio-title">Portfolio Website</h2>
          <div className="portfolio-detail-container items-end">
            <span className="portpolio-tag w-[182px]">Website Design</span>
            <span className="portpolio-tag w-[227px]">React Development</span>
            <span className="portpolio-tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio-link">
              see this project
            </StyledLink>
          </div>
        </div>
        <div className="mt-[10px]">
          <Image
            className="portpolio-img"
            src={portfolio_portfolio}
            alt="portfolio_portfolio"
          />
        </div>
      </div>
      <div className="portfolio-container">
        <div className="mt-[10px]">
          <Image
            className="portpolio-img"
            src={travel_portfolio}
            alt="travel_portfolio"
          />
        </div>
        <div>
          <h2 className="portpolio-title">Travel Website</h2>
          <div className="portfolio-detail-container">
            <span className="portpolio-tag w-[182px]">Website Design</span>
            <span className="portpolio-tag w-[227px]">React Development</span>
            <span className="portpolio-tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio-link">
              see this project
            </StyledLink>
          </div>
        </div>
      </div>
      <div className="portfolio-container-other portfolio-container-last">
        <div className="portfolio-contents-container">
          <h2 className="portpolio-title">Portfolio Website</h2>
          <div className="portfolio-detail-container items-end">
            <span className="portpolio-tag w-[182px]">Website Design</span>
            <span className="portpolio-tag w-[227px]">React Development</span>
            <span className="portpolio-tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio-link">
              see this project
            </StyledLink>
          </div>
        </div>
        <div className="portpolio-last-image">
          <Image
            className="portpolio-img"
            src={portfolio_portfolio1}
            alt="portfolio_portfolio1"
          />
        </div>
      </div>
    </div>
  );
}
