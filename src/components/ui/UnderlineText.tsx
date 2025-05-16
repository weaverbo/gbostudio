import { motion } from 'framer-motion';
import { useState } from 'react';

export default function UnderLineText({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative w-fit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        initial={false}
        className="absolute inset-0 bg-black h-[2px] mt-[55px]"
        animate={{ scaleX: hovered ? 1 : 0 }}
        style={{ transformOrigin: 'left center' }}
      />
      {children}
    </span>
  );
}
