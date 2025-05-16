import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HighlightText({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative px-1 w-fit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        initial={false}
        className="absolute inset-0 bg-white z-0 rounded-sm"
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ transformOrigin: 'left center' }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}
