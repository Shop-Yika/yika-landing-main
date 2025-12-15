// import { MdOutlineFavorite } from "react-icons/md";
"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
// import { LuShoppingCart } from "react-icons/lu";
// import RequestBrand from "./RequestBrand";

const fadeVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

const Gallery = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div ref={ref}>
      <div className="grid grid-cols-2 gap-0.5 lg:grid-cols-4 font-[family-name:var(--font-averia-libre-regular)] lg:h-[942px] font-normal text-[24px] md:text-[38.43px] leading-[90%] tracking-[-0.02em] text-[#FFFDF7]">
        <motion.div
          className="hidden lg:block bg-gray-100"
          variants={fadeVariant}
          initial="hidden"
          animate={controls}
          custom={0}
        >
          <div className="relative w-full h-[470px]">
            <Image
              src="/images/gallery/Gallery-1.png"
              alt="logo"
              fill
              className="object-cover object-top"
            />
          </div>
        </motion.div>
        <div className="hidden lg:block md:bg-[#8c1725] p-8">
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
            custom={0}
          >
            <h2>
              Sustainable <br /> style
            </h2>
          </motion.div>
        </div>

        <div className="h-[253px] md:h-[470px] bg-gray-100">
          <motion.div
            className="h-[253px] md:h-[470px] relative w-full overflow-hidden"
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
            custom={2}
          >
            <Image
              src="/images/gallery/Gallery-2.png"
              alt="logo"
              fill
              className="object-cover object-top"
            />
          </motion.div>
        </div>
        <div className="h-[253px] md:h-[470px] bg-[#672862] p-8">
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
            custom={2}
          >
            <h2 className="h-full">
              You rent, we <br /> handle the rest
            </h2>
          </motion.div>
        </div>

        <div className="h-[253px] md:h-[470px] bg-[#8d3d03] p-8">
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
            custom={1}
          >
            <h2 className="h-full">
              Monetize your <br /> wardrobe
            </h2>
          </motion.div>
        </div>

        <div className="h-[253px] md:h-[470px] bg-gray-100">
          <motion.div
            className="h-[253px] md:h-[470px] relative w-full overflow-hidden"
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
            custom={1}
          >
            <Image
              src="/images/gallery/Gallery-3.png"
              alt="logo"
              fill
              className="object-cover object-top"
            />
          </motion.div>
        </div>

        <div className="h-[253px] md:h-[470px] bg-[#8C1725] lg:bg-[#b361a6] p-8 order-2 lg:order-1">
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
            custom={3}
          >
            <h2 className="h-full">Rent from your favourite brands</h2>
          </motion.div>
        </div>

        <div className="h-[253px] md:h-[470px] bg-gray-100 order-1 lg:order-2">
          <motion.div
            className="h-[253px] md:h-[470px] relative w-full overflow-hidden"
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
            custom={3}
          >
            <Image
              src="/images/gallery/Gallery-4.png"
              alt="logo"
              fill
              className="object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
