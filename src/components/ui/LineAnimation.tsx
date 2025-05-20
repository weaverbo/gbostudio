import { motion } from 'framer-motion';

export function LineAnimation({ animationKey }: { animationKey: number }) {
  return (
    <motion.div
      key={animationKey}
      initial={{ width: 0 }}
      animate={{ width: '101%' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="h-[1px] bg-black absolute top-5 mr-[-383px]"
      style={{ right: 'calc(100px)' }}
    />
  );
}
