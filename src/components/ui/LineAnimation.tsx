import { motion } from 'framer-motion';

export function LineAnimation({ animationKey }: { animationKey: number }) {
  return (
    <motion.div
      key={animationKey}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="h-[1px] bg-black absolute top-5"
      style={{ right: '-280px' }}
    />
  );
}
