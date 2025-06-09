"use client";

import { motion } from "framer-motion";
import { FlipWords } from "./FlipWord";

const HeroText = () => {
  const words = ["Fast", "Secure", "Scalable", "Modern"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3 }}
        >
          Hi, I'm Steven
        </motion.h1>

        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
          >
            A Full-Stack <br /> Developer Building
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>

          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
          >
            Web Apps
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3 }}
        >
          Hi, I'm Steven
        </motion.p>

        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300 pb-4"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
          >
            Building
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl pr-67"
            />
          </motion.div>

          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
