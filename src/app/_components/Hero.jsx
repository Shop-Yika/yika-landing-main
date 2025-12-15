"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-[788px] w-full bg-[#2c371d] text-[#FCF2F8] font-[family-name:var(--font-averia-libre-regular)] flex justify-center items-center">
      <div className="max-w-[654px] w-full px-4 gap-[32px] text-center flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 1, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-[36px] md:text-[56.37px] leading-[1.2] tracking-[-0.02em]">
            A more conscious
            <br /> approach to shopping
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
        >
          <p className="text-[24px] md:text-[33.31px] mt-1 leading-[1.2] tracking-[-0.02em] font-normal">
            Rent, lend, and redefine your fashion—
            <br className="hidden lg:block" /> on your terms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <div className="mt-1 flex justify-center">
            <Image
              src="/Logo-White.png"
              alt="logo"
              className="opacity-20"
              width={75}
              height={95}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
