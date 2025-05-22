'use client';

import FAQSection from '@/components/FAQSection';
import PortFolioSection from '@/components/PortFolioSection';
import ServiceSection from '@/components/ServiceSection';
import TypingText from '@/components/ui/TypingText';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import '../../../styles/main.css';

export default function Main() {
  const [isMediaQuery, setIsMediaQuery] = useState<boolean | null>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [typingFinished, setTypingFinished] = useState<boolean[]>(
    new Array(3).fill(false)
  );

  const scrollSectionRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    setIsMediaQuery(isMobile);
  }, [isMobile]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    scrollSectionRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      scrollSectionRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const mainContents = [
    {
      title: 'Design',
      paragraph_first: 'intentional interaction',
      paragraph_second: 'every element serves a purpose — no more, no less',
      paragraph_third: 'minimal yet meaningful',
    },
    {
      title: 'Devolop',
      paragraph_first: 'code that lasts, not just functions',
      paragraph_second: 'readable, reusable, reliable',
      paragraph_third: 'we build clean, scalable code for the long run',
    },
    {
      title: 'Dovetail',
      paragraph_first: 'planning, design, and development in perfect synergy',
      paragraph_second: 'bridging creativity and technology',
      paragraph_third: 'design and development, flowing as one',
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="container">
        <div className="mt-[82px] relative">
          {mainContents.map((contents, i) => (
            <div
              key={i}
              data-index={i}
              ref={el => void (scrollSectionRef.current[i] = el)}
              className="min-h-[100vh] flex"
            >
              {activeIndex === i && (
                <motion.div
                  className="scroll-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <TypingText
                    text={contents.title}
                    onTypingEnd={() => {
                      setTypingFinished(prev => {
                        const updated = [...prev];
                        updated[i] = true;
                        return updated;
                      });
                    }}
                  />
                  {typingFinished[i] && (
                    <div className="scroll-section-description-container">
                      <motion.p
                        className="scroll-section-description"
                        initial={{
                          clipPath: 'inset(150% 0% 0% 0%)',
                          opacity: 0,
                          y: 2,
                        }}
                        animate={{
                          clipPath: 'inset(0% 0% 0% 0%)',
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{ duration: 1.6, ease: 'easeOut' }}
                      >
                        {contents.paragraph_first}
                      </motion.p>
                      <motion.p
                        className="scroll-section-description-other"
                        initial={{
                          clipPath: 'inset(150% 0% 0% 0%)',
                          opacity: 0,
                          y: 2,
                        }}
                        animate={{
                          clipPath: 'inset(0% 0% 0% 0%)',
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{ duration: 1.6, ease: 'easeOut' }}
                      >
                        {contents.paragraph_second}
                      </motion.p>
                      <motion.p
                        className="scroll-section-description"
                        initial={{
                          clipPath: 'inset(150% 0% 0% 0%)',
                          opacity: 0,
                          y: 2,
                        }}
                        animate={{
                          clipPath: 'inset(0% 0% 0% 0%)',
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{ duration: 1.6, ease: 'easeOut' }}
                      >
                        {contents.paragraph_third}
                      </motion.p>
                    </div>
                  )}
                  <div className="scroll-dots">
                    <div
                      className={`scroll-dot ${activeIndex === 0 ? 'bg-black' : 'bg-white'}`}
                    ></div>
                    <div
                      className={`scroll-dot ${activeIndex === 1 ? 'bg-black' : 'bg-white'}`}
                    ></div>
                    <div
                      className={`scroll-dot ${activeIndex === 2 ? 'bg-black' : 'bg-white'}`}
                    ></div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        <ServiceSection />
        <PortFolioSection />
        <FAQSection />
      </div>
    </div>
  );
}
