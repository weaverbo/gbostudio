'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import StyledLink from 'next/link';
import { useEffect, useRef, useState } from 'react';

import chat_app from '../../../public/img/chat_app.png';
import team from '../../../public/img/team.png';
import '../../styles/main.css';

export default function Main() {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollsectionRef = useRef<HTMLDivElement>(null);
  const harmonySectionRef = useRef<HTMLDivElement>(null);

  const startTextAnimation = () => {
    setVisibleElements([]);
    const timers = [
      setTimeout(() => setVisibleElements(prev => [...prev, 0]), 500),
      setTimeout(() => setVisibleElements(prev => [...prev, 1]), 1000),
      setTimeout(() => setVisibleElements(prev => [...prev, 2]), 1500),
      setTimeout(() => setVisibleElements(prev => [...prev, 3]), 2000),
      setTimeout(() => setVisibleElements(prev => [...prev, 4]), 2500),
    ];

    setIsAnimating(true);
    setIsFixed(true);

    setTimeout(() => {
      setIsAnimating(false);
      setIsFixed(false);
    }, 2500);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  };

  useEffect(() => {
    const cleanup = startTextAnimation();

    const scrollsection = scrollsectionRef.current;
    if (scrollsection) {
      const rect = scrollsection.getBoundingClientRect();
      const isInView =
        rect.top <= 50 && rect.bottom >= window.innerHeight * 0.5;

      if (!isAnimating && isInView && scrollsection) {
        window.scrollTo({ top: scrollsection.offsetTop, behavior: 'auto' });
      }
    }

    return cleanup;
  }, [currentScreen]);

  useEffect(() => {
    if (currentScreen === 2 && harmonySectionRef.current) {
      window.scrollTo({
        top: harmonySectionRef.current.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  }, [currentScreen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useEffect(() => {
  //   const handleScroll = (e: WheelEvent) => {
  //     const scrollsection = scrollsectionRef.current;
  //     if (!scrollsection || !scrollsection.contains(e.target as Node)) return;

  //     if (isAnimating) {
  //       e.preventDefault();
  //       return;
  //     }

  //     if (e.deltaY > 0 && currentScreen < 2) {
  //       setCurrentScreen(prev => prev + 1);
  //     } else if (e.deltaY < 0 && currentScreen > 0) {
  //       setCurrentScreen(prev => prev - 1);
  //     }
  //   };

  //   window.addEventListener('wheel', handleScroll, { passive: false });
  //   return () => window.removeEventListener('wheel', handleScroll);
  // }, [isAnimating, currentScreen]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const scrollSection = scrollsectionRef.current;
      if (!scrollSection) return;

      const bounds = scrollSection.getBoundingClientRect();
      const isInsideSection =
        bounds.top <= e.clientY && e.clientY <= bounds.bottom;

      if (!isInsideSection) return;

      if (isAnimating) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && currentScreen < 2) {
        setCurrentScreen(prev => prev + 1);
      } else if (e.deltaY < 0 && currentScreen > 0) {
        setCurrentScreen(prev => prev - 1);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [isAnimating, currentScreen]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     console.log(scrollPosition);

  //     if (scrollPosition > 17.5 && currentScreen === 0) {
  //       setCurrentScreen(1);
  //     } else if (scrollPosition <= 17.5 && currentScreen === 1) {
  //       setCurrentScreen(0);
  //     } else if (scrollPosition > 150 && currentScreen === 1) {
  //       setCurrentScreen(2);
  //     } else if (scrollPosition <= 150 && currentScreen === 2) {
  //       setCurrentScreen(1);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [currentScreen]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isAnimating]);

  useEffect(() => {
    if (!isMobile) return;

    const handleMobileScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollY < screenHeight * 0.5) {
        setCurrentScreen(0);
      } else if (scrollY < screenHeight * 1.5) {
        setCurrentScreen(1);
      } else {
        setCurrentScreen(2);
      }
    };

    window.addEventListener('scroll', handleMobileScroll);
    return () => window.removeEventListener('scroll', handleMobileScroll);
  }, [isMobile]);

  return (
    <div className="overflow-x-hidden">
      <div className="container">
        <div
          ref={scrollsectionRef}
          className={`h-[900px] mt-[82px] relative ${isFixed ? 'fixed top-0 left-0 w-full z-50' : ''}`}
        >
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
                      <p
                        className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Designing the overall user experience
                      </p>
                      <p
                        className={`pt-[4px] scroll-section-description ${visibleElements.includes(4) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        behavior with a product or service
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
                        Choosing the right tools and technologies for
                      </p>
                      <p
                        className={`pt-[4px] scroll-section-description ${visibleElements.includes(4) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        every challenge
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
                    ref={harmonySectionRef}
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
                        Beyond trends, creating impactful and unique
                      </p>
                      <p
                        className={`py-[4px] scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
                      >
                        solutions
                      </p>
                      <p
                        className={`scroll-section-description ${visibleElements.includes(4) ? 'opacity-100' : 'opacity-0'}`}
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
                        className={`scroll-section-description ${visibleElements.includes(4) ? 'opacity-100' : 'opacity-0'}`}
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
          <div className="service-container">
            <div className="overflow-x-scroll scrollbar-hide w-screen">
              <ul className="service-card-container">
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
            <div className="portfolio-section-image-container">
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
