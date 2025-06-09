"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });

  const mountain3Y = useTransform(x, [0, 0.5], ["70%", "10%"]);
  const planetsX = useTransform(x, [0, 0.5], ["-5vw", "5vw"]);

  return (
    <section className="absolute inset-0 bg-black/40 overflow-clip">
      <div className="relative h-screen overflow-clip">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(Moutain.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />

        {/* Mountain 3 */}
        <motion.div
          className="absolute inset-0 w-full h-screen -z-40 filter will-change-transform"
          initial={{ y: "90%" }}
          animate={{ y: "70%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            backgroundImage: "url(Cropped.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
            filter: "brightness(0.2) sepia(1) hue-rotate(190deg) saturate(6)",
          }}
        />

        {/* Planets */}
        <motion.div
          className="absolute inset-0 w-full h-screen -z-41 will-change-transform"
          initial={{ x: "5vw" }}
          animate={{ x: "-5vw" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          style={{
            backgroundImage: "url(planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />

        {/* Custom Fade-Out to #000005 */}
        <div
          className="absolute bottom-0 w-full h-32 pointer-events-none z-10"
          style={{
            backgroundImage: "linear-gradient(to bottom, transparent, #000005)",
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
