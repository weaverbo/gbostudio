'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import StyledLink from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import chat_app from '../../../public/img/chat_app.png';
import team from '../../../public/img/team.png';
import '../../styles/main.css';

export default function Main() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const startTextAnimation = () => {
    setVisibleElements([]);
    const timers = [
      setTimeout(() => setVisibleElements(prev => [...prev, 0]), 500),
      setTimeout(() => setVisibleElements(prev => [...prev, 1]), 1000),
      setTimeout(() => setVisibleElements(prev => [...prev, 2]), 1500),
      setTimeout(() => setVisibleElements(prev => [...prev, 3]), 2000),
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  };

  useEffect(() => {
    const cleanup = startTextAnimation();
    return cleanup;
  }, []);

  useEffect(() => {
    const cleanup = startTextAnimation();
    return cleanup;
  }, [currentScreen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);

      if (scrollPosition > 17.5 && currentScreen === 0) {
        setCurrentScreen(1);
      } else if (scrollPosition <= 17.5 && currentScreen === 1) {
        setCurrentScreen(0);
      } else if (scrollPosition > 150 && currentScreen === 1) {
        setCurrentScreen(2);
      } else if (scrollPosition <= 150 && currentScreen === 2) {
        setCurrentScreen(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentScreen]);

  return (
    <div className="overflow-x-hidden">
      <div className="container">
        <div className="h-[900px] relative">
          {isMobile ? (
            <div ref={scrollContainerRef} style={{ scrollBehavior: 'smooth' }}>
              <AnimatePresence mode="wait">
                {currentScreen === 0 && (
                  <motion.div
                    className="scroll-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ zIndex: 10 }}
                  >
                    <h1
                      className={`scroll-section-title ${visibleElements.includes(0) ? 'opacity-100' : 'opacity-0'}`}
                    >
                      Design
                    </h1>
                    <div className="scroll-section-description-container">
                      <p
                        className={`scroll-section-description ${visibleElements.includes(1) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Interactive Design
                      </p>
                      <p
                        className={`scroll-section-description-other ${visibleElements.includes(2) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Engineering for connection
                      </p>
                      <div
                        className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <div>Designing the overall user experience</div>
                        <div className="pt-[4px]">
                          and behavior with a product or service
                        </div>
                      </div>
                    </div>
                    <div className="scroll-dots">
                      <div className="scroll-dot"></div>
                      <div className="scroll-dot_other"></div>
                      <div className="scroll-dot_other"></div>
                    </div>
                  </motion.div>
                )}
                {currentScreen === 1 && (
                  <motion.div
                    className="scroll-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ zIndex: 5 }}
                  >
                    <h1 className="scroll-section-title">Engineering</h1>
                    <div className="scroll-section-description-container">
                      <p
                        className={`scroll-section-description ${visibleElements.includes(1) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Challenges to Solutions
                      </p>
                      <p
                        className={`scroll-section-description-other ${visibleElements.includes(2) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Balancing User Needs & Business Goals
                      </p>
                      <p
                        className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <div>Choosing the right tools and technologies for</div>
                        <div className="pt-[4px]">every challenge</div>
                      </p>
                    </div>
                    <div className="scroll-dots">
                      <div className="scroll-dot_other"></div>
                      <div className="scroll-dot"></div>
                      <div className="scroll-dot_other"></div>
                    </div>
                  </motion.div>
                )}
                {currentScreen === 2 && (
                  <motion.div
                    className="scroll-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ zIndex: 5 }}
                  >
                    <h1 className="scroll-section-title">Harmony</h1>
                    <div className="scroll-section-description-container">
                      <p
                        className={`scroll-section-description ${visibleElements.includes(1) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Design & Developement in Harmony
                      </p>
                      <p
                        className={`scroll-section-description-other ${visibleElements.includes(2) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Beyond trends, creating impactful and unique solutions
                      </p>
                      <p
                        className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Building solutions through continuous user interaction
                      </p>
                    </div>
                    <div className="scroll-dots">
                      <div className="scroll-dot_other"></div>
                      <div className="scroll-dot_other"></div>
                      <div className="scroll-dot"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div ref={scrollContainerRef} style={{ scrollBehavior: 'smooth' }}>
              <AnimatePresence mode="wait">
                {currentScreen === 0 && (
                  <motion.div
                    className="scroll-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ zIndex: 10 }}
                  >
                    <h1
                      className={`scroll-section-title ${visibleElements.includes(0) ? 'opacity-100' : 'opacity-0'}`}
                    >
                      Design
                    </h1>
                    <div className="scroll-section-description-container">
                      <p
                        className={`scroll-section-description ${visibleElements.includes(1) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Interactive Design
                      </p>
                      <p
                        className={`scroll-section-description-other ${visibleElements.includes(2) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Engineering for connection
                      </p>
                      <p
                        className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Designing the overall user experience and behavior with
                        a product or service
                      </p>
                    </div>
                    <div className="scroll-dots">
                      <div className="scroll-dot"></div>
                      <div className="scroll-dot_other"></div>
                      <div className="scroll-dot_other"></div>
                    </div>
                  </motion.div>
                )}
                {currentScreen === 1 && (
                  <motion.div
                    className="scroll-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ zIndex: 5 }}
                  >
                    <h1 className="scroll-section-title">Engineering</h1>
                    <div className="scroll-section-description-container">
                      <p
                        className={`scroll-section-description ${visibleElements.includes(1) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Challenges to Solutions
                      </p>
                      <p
                        className={`scroll-section-description-other ${visibleElements.includes(2) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Balancing User Needs & Business Goals
                      </p>
                      <p
                        className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Choosing the right tools and technologies for every
                        challenge
                      </p>
                    </div>
                    <div className="scroll-dots">
                      <div className="scroll-dot_other"></div>
                      <div className="scroll-dot"></div>
                      <div className="scroll-dot_other"></div>
                    </div>
                  </motion.div>
                )}
                {currentScreen === 2 && (
                  <motion.div
                    className="scroll-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ zIndex: 5 }}
                  >
                    <h1 className="scroll-section-title">Harmony</h1>
                    <div className="scroll-section-description-container">
                      <p
                        className={`scroll-section-description ${visibleElements.includes(1) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Design & Developement in Harmony
                      </p>
                      <p
                        className={`scroll-section-description-other ${visibleElements.includes(2) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Beyond trends, creating impactful and unique solutions
                      </p>
                      <p
                        className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Building solutions through continuous user interaction
                      </p>
                    </div>
                    <div className="scroll-dots">
                      <div className="scroll-dot_other"></div>
                      <div className="scroll-dot_other"></div>
                      <div className="scroll-dot"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
        {/* SERVICES */}
        <div>
          <div className="marker-container">
            <h1 className="section-title">SERVICES</h1>
            <div className="marker"></div>
          </div>
          <div className="relative mt-[102px] mb-[280px]">
            <div
              className="overflow-x-scroll overflow-y-scroll scrollbar-hide w-screen"
              ref={scrollContainerRef}
            >
              <ul className="flex gap-[24px] w-max pr-[270px]">
                <li className="service-card">
                  <div className="service-card-number">1</div>
                  <div>
                    <p className="service-card-title">
                      맞춤형 웹사이트 디자인 제작
                    </p>
                    <div className="service-card-description">
                      <p>제공하는 콘텐츠에 맞게</p>
                      <p className="leading-[28px]">
                        사용자를 고려한 직관적이고 깔끔한
                      </p>
                      <p>메인, 서브, 상세, 랜딩 페이지 제작 가능</p>
                    </div>
                  </div>
                </li>
                <li className="service-card">
                  <div className="service-card-number">2</div>
                  <div>
                    <p className="service-card-title">
                      콘텐츠 디자인 작업물 제작
                    </p>
                    <div className="service-card-description">
                      <p>브랜드 아이덴티티 반영 로고와 파비콘,</p>
                      <p className="leading-[28px]">
                        와이어프레임, 배너, 카드뉴스 등 콘텐츠
                      </p>
                      <p>디자인 작업물 제작 가능</p>
                    </div>
                  </div>
                </li>
                <li className="service-card">
                  <div className="service-card-number">3</div>
                  <div>
                    <p className="service-card-title">반응형 웹페이지</p>
                    <div className="service-card-description">
                      <p>PC, MOBILE 어디서든 유연하게</p>
                      <p className="leading-[28px]">
                        대응이 가능한 반응형 UI로 제작하여
                      </p>
                      <p>사용자 경험과 만족도 향상</p>
                    </div>
                  </div>
                </li>
                <li className="service-card">
                  <div className="service-card-number">4</div>
                  <div>
                    <p className="service-card-title">인터랙티브한 웹디자인</p>
                    <div className="service-card-description">
                      <p>다양한 애니메이션 효과를 활용하여</p>
                      <p className="leading-[28px]">
                        직관적인 사용자 인터페이스를 구성하고,
                      </p>
                      <p>사용자 참여도를 극대화함</p>
                    </div>
                  </div>
                </li>
                <li className="service-card">
                  <div className="service-card-number">5</div>
                  <div>
                    <p className="service-card-title">
                      React.js 기반 UI 기능 개발
                    </p>
                    <div className="service-card-description">
                      <p>재사용 가능한 컴포넌트 기반 설계로</p>
                      <p className="leading-[28px]">
                        쉽고 간편한 유지보수 가능하며,
                      </p>
                      <p>유연한 구조로 기능 추가와 확장 용이</p>
                    </div>
                  </div>
                </li>
                <li className="service-card">
                  <div className="service-card-number">6</div>
                  <div>
                    <p className="service-card-title">
                      Next.js 기반 풀스택 개발 가능
                    </p>
                    <div className="service-card-description">
                      <p>미리 구현된 웹페이지 제공 기술로</p>
                      <p className="leading-[28px]">
                        빠른 로딩 속도와 SEO 최적화 구현,
                      </p>
                      <p>프론트엔드와 백엔드 통합 풀스택 개밡</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PORTFOLIO */}
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
    </div>
  );
}
