# 이전 코드 백업

# 작성일

2025-05-15

# 백업 이유

스크롤 애니메이션, 텍스트 인터렉션 구현시 참고해야할 부분

# 주요 코드

/app/(base-layout)/(main)/page.tsx

```tsx
'use client';

import PortPolioSection from '@/components/PortPolioSection';
import ServiceSection from '@/components/ServiceSection';
import DesignSection from '@/components/TextAnimationSection/DesignSection';
import EngineeringSection from '@/components/TextAnimationSection/EngineeringSection';
import HarmonySection from '@/components/TextAnimationSection/HarmonySection';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import '../../../styles/main.css';

export default function Main() {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [isMediaQuery, setIsMediaQuery] = useState<boolean | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollsectionRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const isMobile = useMediaQuery({ query: '(max-width : 768px)' });

  useEffect(() => {
    setIsMediaQuery(isMobile);
  }, [isMobile]);

  // 텍스트 인터랙션
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

    setTimeout(() => {
      setIsAnimating(false);
    }, 2500);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  };

  // 스크롤 애니메이션
  useEffect(() => {
    const handleScroll = () => {
      if (isAnimating) return;

      const scrollPosition = window.scrollY;
      const designToEngineering = window.innerHeight * 0.01;
      const engineeringToHarmony = window.innerHeight * 0.02;

      if (scrollPosition > designToEngineering && currentScreen === 0) {
        setCurrentScreen(1);
      } else if (scrollPosition <= designToEngineering && currentScreen === 1) {
        setCurrentScreen(0);
      } else if (scrollPosition > engineeringToHarmony && currentScreen === 1) {
        setCurrentScreen(2);
      } else if (
        scrollPosition <= engineeringToHarmony &&
        currentScreen === 2
      ) {
        setCurrentScreen(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentScreen, isAnimating]);

  // 스크롤 제어
  useEffect(() => {
    const cleanup = startTextAnimation();

    const scrollsection = scrollsectionRef.current;

    if (scrollsection) {
      const rect = scrollsection.getBoundingClientRect();
      const isInView =
        rect.top <= 50 && rect.bottom >= window.innerHeight * 0.5;

      if (!isAnimating && isInView) {
        window.scrollTo({ top: scrollsection.offsetTop, behavior: 'auto' });
      }
    }

    return cleanup;
  }, [currentScreen]);

  // 스크롤 제어
  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isAnimating]);

  useEffect(() => {
    if (pathname === '/') {
      startTextAnimation();
    }
  }, [pathname]);

  return (
    <div className="overflow-x-hidden">
      <div className="container">
        <div ref={scrollsectionRef} className="h-[900px] mt-[82px] relative">
          <div ref={scrollContainerRef}>
            {currentScreen === 0 && (
              <DesignSection
                visibleElements={visibleElements}
                isMobile={isMobile}
              />
            )}
            {currentScreen === 1 && (
              <EngineeringSection
                visibleElements={visibleElements}
                isMobile={isMobile}
              />
            )}
            {currentScreen === 2 && (
              <HarmonySection
                visibleElements={visibleElements}
                isMobile={isMobile}
              />
            )}
          </div>
        </div>
        <ServiceSection />
        <PortPolioSection />
      </div>
    </div>
  );
}
```
