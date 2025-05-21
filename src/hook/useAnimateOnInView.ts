import { useEffect, useRef, useState } from 'react';

export function useAnimateOnInView(threshold = 0.5) {
  const onInviewRef = useRef<HTMLDivElement | null>(null);
  const [animationKey, setAnimationkey] = useState(0);

  console.log(animationKey);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimationkey(prev => prev + 1);
      } else {
        setAnimationkey(0);
      }
    });

    if (onInviewRef.current) {
      observer.observe(onInviewRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { onInviewRef, animationKey };
}
