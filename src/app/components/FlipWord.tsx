"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  duration = 3000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  const currentWord = words[currentIndex];

  return (
    <div className={twMerge("flex justify-center relative w-full", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWord}
          initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, scale: 1.1, filter: "blur(4px)" }}
          transition={{ duration: 0.6 }}
          className="inline-flex justify-center"
        >
          {currentWord.split(" ").map((word, wordIndex) => (
            <motion.span
              key={`${word}-${wordIndex}`}
              className="inline-block whitespace-nowrap"
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: wordIndex * 0.3,
                duration: 0.3,
              }}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${word}-${letter}-${letterIndex}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: wordIndex * 0.3 + letterIndex * 0.05,
                    duration: 0.2,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
