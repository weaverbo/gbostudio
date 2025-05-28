import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import '../../styles/typingtext.css';

type TypingTextProps = {
  text: string;
  onTypingEnd?: () => void;
};

const TypingText = ({ text, onTypingEnd }: TypingTextProps) => {
  const [typingedText, setTypingedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypingedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else if (index === text.length && onTypingEnd) {
      onTypingEnd();
    }
  }, [index, text]);
  return (
    <h1 className="scroll-section-title">
      {typingedText}
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="typing-cursor"
      ></motion.span>
    </h1>
  );
};

export default TypingText;
