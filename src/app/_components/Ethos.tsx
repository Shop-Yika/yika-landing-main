"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Ethos = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [inView, controls]);

  return (
    <div id="our-ethos">
      <div className="p-2.5 w-full min-h-[788px] bg-[#2c371d] flex items-center justify-center">
        <motion.div
          ref={ref}
          className="mt-30 flex flex-col items-center justify-center text-center max-w-[1000px]"
          variants={containerVariants}
          initial="initial"
          animate={controls}
        >
          <motion.div variants={childVariants}>
            <span className="text-[16.65px] text-[#FFFDF7]">OUR ETHOS</span>
          </motion.div>
          <motion.div variants={childVariants}>
            <p className="mt-12 text-[24px] leading-[1] tracking-[-0.02em] font-normal md:text-[32px] font-[family-name:var(--font-averia-libre-regular)] text-[#FCF2F8] text-center md:max-w-[624px] md:px-[36px] lg:max-w-[928px]">
              With diverse expertise in design, sustainability, and technology,
              we&apos;re committed to curating a seamless rental experience for
              you.
            </p>
          </motion.div>
          <motion.div variants={childVariants}>
            <p className="mt-12 text-[24px] leading-[1] tracking-[-0.02em] font-normal md:text-[32px] font-[family-name:var(--font-averia-libre-regular)] text-[#FCF2F8] text-center md:max-w-[624px] md:px-[36px] lg:max-w-[928px]">
              Together, we&apos;re redefining how we engage with fashion,
              promoting a more conscious approach to shopping and contributing
              to a more circular fashion economy.
            </p>
          </motion.div>
          <div className="mt-12 flex justify-center">
            <Image
              src="/Logo-White.png"
              alt="logo"
              className="opacity-60"
              width={75}
              height={95}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Ethos;
