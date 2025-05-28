import { motion } from 'framer-motion';
import { useState } from 'react';

import '../../styles/underlinetext.css';

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
        className="underlineText"
        animate={{ scaleX: hovered ? 1 : 0 }}
        style={{ transformOrigin: 'left center' }}
      />
      {children}
    </span>
  );
}
