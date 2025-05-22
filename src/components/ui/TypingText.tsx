import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type TypingTextProps = {
  text: string;
  onTypingEnd?: () => void;
};

const TypingText = ({ text, onTypingEnd }: TypingTextProps) => {
  console.log(text);
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
    <h1 className="h-[204px] text-[180px] ml-[-13px]">
      {typingedText}
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[180px] bg-black align-middle translate-y-[-15px] ml-[11px]"
      ></motion.span>
    </h1>
  );
};

export default TypingText;
