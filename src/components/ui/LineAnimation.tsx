import { motion } from 'framer-motion';

export function LineAnimation({
  animationKey,
  width,
  top = 'top-5',
}: {
  animationKey: number;
  width?: string;
  top?: string;
}) {
  return (
    <motion.div
      key={animationKey}
      initial={{ width: 0 }}
      animate={{ width }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`h-[1px] bg-black absolute ${top}`}
      style={{ right: '-280px' }}
    />
  );
}
