import Image from 'next/image';
import StyledLink from 'next/link';
import { useState } from 'react';

import pp1_min from '../../public/img/pp1_min.png';
import pp2_min from '../../public/img/pp2_min.png';
import pp3_min from '../../public/img/pp3_min.png';
import pp4_min from '../../public/img/pp4_min.png';
import pp5_min from '../../public/img/pp5_min.png';
import pp6_min from '../../public/img/pp6_min.png';
import pp7_min from '../../public/img/pp7_min.png';
import pp8_min from '../../public/img/pp8_min.png';
import '../styles/portfoliosection.css';

export default function PortFolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const portfolio_contents = [
    {
      src: pp1_min,
      title: 'Team App WebSite',
      link: 'https://team-tau-seven.vercel.app/',
    },
    {
      src: pp2_min,

      title: 'Chat App WebSite',
    },
    {
      src: pp3_min,

      title: 'Prime Hotel WebSite',
    },
    {
      src: pp4_min,

      title: 'ProYogaBuddy WebSite',
    },
    {
      src: pp5_min,

      title: 'CrytoMoney WebSite',
    },
    {
      src: pp6_min,

      title: 'JW PortFolio WebSite',
    },
    {
      src: pp7_min,

      title: 'Discover Mountain WebSite',
    },
    {
      src: pp8_min,

      title: 'HobbyClass WebSite',
    },
  ];

  return (
    <>
      <div id="portfolio-section">
        <h1 className="portfolio-section-title">Portfolio</h1>
        <div className="portfolio-section-container">
          <div className="portfolio-container">
            {portfolio_contents.map((content, i) => (
              <div key={i}>
                <div
                  className={`portfolio-tag ${
                    hoveredIndex === i
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 '
                  }`}
                >
                  <p className="underline">Design</p>
                  <p className="underline">FullStack</p>
                </div>
                <StyledLink className="cursor-none" href={`${content.link}`}>
                  <Image
                    src={content.src}
                    alt="team"
                    className="portfolio-image"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                </StyledLink>
                <div
                  className={`portfolio-bottom-tag
                ${
                  hoveredIndex === i
                    ? 'opacity-100 translate-y-1'
                    : 'opacity-0 translate-y-0'
                }
                `}
                >
                  <p>{content.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
