import { useEffect, useRef, useState } from 'react';

export function useAnimateOnInView(threshold = 0.5) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animationKey, setAnimationkey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationkey(prev => prev + 1);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, animationKey };
}
