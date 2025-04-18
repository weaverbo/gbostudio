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
    <div className="container">
      <h1 className="text-[170px] text-main font-bold pt-[163px] ml-[-15.5px]">
        PORTFOLIO
      </h1>
      <div className="portfolio-container mt-[80px]">
        <div className="mt-[10px]">
          <Image
            className="portpolio_img"
            src={team_portfolio}
            alt="team_portfolio"
          />
        </div>
        <div>
          <h2 className="portpolio_title">Team Website</h2>
          <div className="portfolio-detail-container">
            <span className="portpolio_tag w-[182px]">Website Design</span>
            <span className="portpolio_tag w-[227px]">React Development</span>
            <span className="portpolio_tag w-[109px]">Concept</span>
            <StyledLink
              href="/portpolio/portpolio_detail"
              className="portpolio_link"
            >
              see this project
            </StyledLink>
          </div>
        </div>
      </div>
      <div className="portfolio-container justify-end my-[36px]">
        <div>
          <h2 className="portpolio_title">Chat App Website</h2>
          <div className="portfolio-detail-container items-end">
            <span className="portpolio_tag w-[182px]">Website Design</span>
            <span className="portpolio_tag w-[227px]">React Development</span>
            <span className="portpolio_tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio_link">
              see this project
            </StyledLink>
          </div>
        </div>
        <div className="mt-[10px]">
          <Image
            className="portpolio_img"
            src={chat_app_portfolio}
            alt="chat_app_portfolio"
          />
        </div>
      </div>
      <div className="portfolio-container">
        <div className="mt-[10px]">
          <Image
            className="portpolio_img"
            src={hotelbooking_portfolio}
            alt="hotelbooking_portfolio"
          />
        </div>
        <div>
          <h2 className="portpolio_title">Hotel Booking Website</h2>
          <div className="portfolio-detail-container">
            <span className="portpolio_tag w-[182px]">Website Design</span>
            <span className="portpolio_tag w-[227px]">React Development</span>
            <span className="portpolio_tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio_link">
              see this project
            </StyledLink>
          </div>
        </div>
      </div>
      <div className="portfolio-container justify-end my-[36px]">
        <div>
          <h2 className="portpolio_title ">ProYoga Buddy Website</h2>
          <div className="portfolio-detail-container items-end">
            <span className="portpolio_tag w-[182px]">Website Design</span>
            <span className="portpolio_tag w-[227px]">React Development</span>
            <span className="portpolio_tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio_link">
              see this project
            </StyledLink>
          </div>
        </div>
        <div className="mt-[10px]">
          <Image
            className="portpolio_img"
            src={proyoga_portfolio}
            alt="proyoga_portfolio"
          />
        </div>
      </div>
      <div className="portfolio-container">
        <div className="mt-[10px]">
          <Image
            className="portpolio_img"
            src={cryptomoney_portfolio}
            alt="cryptomoney_portfolio"
          />
        </div>
        <div>
          <h2 className="portpolio_title">CryptoMoney Website</h2>
          <div className="portfolio-detail-container">
            <span className="portpolio_tag w-[182px]">Website Design</span>
            <span className="portpolio_tag w-[227px]">React Development</span>
            <span className="portpolio_tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio_link">
              see this project
            </StyledLink>
          </div>
        </div>
      </div>
      <div className="portfolio-container justify-end my-[36px]">
        <div>
          <h2 className="portpolio_title">Portfolio Website</h2>
          <div className="portfolio-detail-container items-end">
            <span className="portpolio_tag w-[182px]">Website Design</span>
            <span className="portpolio_tag w-[227px]">React Development</span>
            <span className="portpolio_tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio_link">
              see this project
            </StyledLink>
          </div>
        </div>
        <div className="mt-[10px]">
          <Image
            className="portpolio_img"
            src={portfolio_portfolio}
            alt="portfolio_portfolio"
          />
        </div>
      </div>
      <div className="portfolio-container">
        <div className="mt-[10px]">
          <Image
            className="portpolio_img"
            src={travel_portfolio}
            alt="travel_portfolio"
          />
        </div>
        <div>
          <h2 className="portpolio_title">Travel Website</h2>
          <div className="portfolio-detail-container">
            <span className="portpolio_tag w-[182px]">Website Design</span>
            <span className="portpolio_tag w-[227px]">React Development</span>
            <span className="portpolio_tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio_link">
              see this project
            </StyledLink>
          </div>
        </div>
      </div>
      <div className="portfolio-container justify-end my-[36px]">
        <div>
          <h2 className="portpolio_title">Portfolio Website</h2>
          <div className="portfolio-detail-container items-end">
            <span className="portpolio_tag w-[182px]">Website Design</span>
            <span className="portpolio_tag w-[227px]">React Development</span>
            <span className="portpolio_tag w-[109px]">Concept</span>
            <StyledLink href="/" className="portpolio_link">
              see this project
            </StyledLink>
          </div>
        </div>
        <div className="mt-[10px] mb-[104px]">
          <Image
            className="portpolio_img"
            src={portfolio_portfolio1}
            alt="portfolio_portfolio1"
          />
        </div>
      </div>
    </div>
  );
}
