"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Quotes = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const fadeVariant = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col align-middle justify-center items-center mb-20 min-h-[768px] pt-20">
      <div className="mb-16 max-w-[90%] mx-auto">
        <h2 className="text-[24px] lg:text-[40px] text-[#8C1725] font-normal md:text-[36px] 2xl:mt-[90px] leading-[1] tracking-[-0.02em] text-center font-[family-name:var(--font-averia-libre-regular)] ">
          We’re Drowning in Clothes. And Waste.
        </h2>
      </div>
      <motion.div
        className="hidden lg:flex align-middle justify-center items-center w-full px-30"
        initial="hidden"
        animate={controls}
        variants={fadeVariant}
        ref={ref}
      >
        <Image
          src="/images/quotes-all.svg"
          alt="logo"
          width={800}
          height={700}
          className="w-full max-w-[1190px] h-auto box-shadow: 0.55px 0.55px 6.59px 0.55px #00000040;"
        />
      </motion.div>

      {/* Mobile Version */}
      <motion.div
        className="max-w-[340px] md:max-w-[744px] flex flex-col gap-2 md:gap-0 md:hidden justify-center items-center lg:hidden"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{
          staggerChildren: 0.3,
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/quotes-mobile/Quote-1-mobile.svg"
            alt="logo"
            width={260}
            height={45}
            className="object-contain box-shadow: 0.55px 0.55px 6.59px 0.55px #00000040; md:mb-[-8px] md:w-[383px] md:h-[76px]"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/quotes-mobile/Quote-2-mobile.svg"
            alt="logo"
            width={237}
            height={42}
            className="object-contain box-shadow: 0.55px 0.55px 6.59px 0.55px #00000040; md:mb-[-14px] md:w-[423px]"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/quotes-mobile/Quote-3-mobile.svg"
            alt="logo"
            width={301}
            height={56}
            className="object-contain box-shadow: 0.55px 0.55px 6.59px 0.55px #00000040; md:mb-[-8px] md:w-[538px] md:h-[100px]"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/quotes-mobile/Quote-4-mobile.svg"
            alt="logo"
            width={338}
            height={48}
            className="box-shadow: 0.55px 0.55px 6.59px 0.55px #00000040; md:mb-[-8px] md:w-[604px] md:h-[85px]"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/quotes-mobile/Quote-5-mobile.svg"
            alt="logo"
            width={267}
            height={44}
            className="object-contain box-shadow: 0.55px 0.55px 6.59px 0.55px #00000040; md:mb-[-8px] md:w-[478px] md:h-[78px]"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/quotes-mobile/Quote-6-mobile.svg"
            alt="logo"
            width={187}
            height={69}
            className="md:w-[311px] md:h-[144px]"
            style={{ boxShadow: "0.31px 0.31px 3.76px 0.31px #00000040" }}
          />
        </motion.div>
      </motion.div>

      {/* Tablet Version */}
      <div className="max-w-[340px] md:max-w-[744px] hidden md:flex flex-col gap-2 md:gap-0 justify-center items-center lg:hidden">
        <Image
          src="/images/quotes/Quote-1.svg"
          alt="logo"
          width={260}
          height={45}
          className="object-contain box-shadow: 0.55px 0.55px 6.59px 0.55px #00000040; md:mb-[-8px] md:w-[383px] md:h-[76px]"
        />
        <Image
          src="/images/quotes/Quote-2.svg"
          alt="logo"
          width={237}
          height={42}
          className="object-contain box-shadow: 0.55px 0.55px 6.59px 0.55px #00000040; md:mb-[-14px] md:w-[423px]"
        />
        <Image
          src="/images/quotes/Quote-3.svg"
          alt="logo"
          width={301}
          height={56}
          className="object-contain box-shadow: 0.55px 0.55px 6.59px 0.55px #00000040; md:mb-[-8px] md:w-[538px] md:h-[100px]"
        />
        <Image
          src="/images/quotes/Quote-4.svg"
          alt="logo"
          width={338}
          height={48}
          className="box-shadow: 0.55px 0.55px 6.59px 0.55px #00000040; md:mb-[-8px] md:w-[604px] md:h-[85px]"
        />
        <Image
          src="/images/quotes/Quote-5.svg"
          alt="logo"
          width={267}
          height={44}
          className="object-contain box-shadow: 0.55px 0.55px 6.59px 0.55px #00000040; md:mb-[-8px] md:w-[478px] md:h-[78px]"
        />
        <Image
          src="/images/quotes/Quote-6.svg"
          alt="logo"
          width={187}
          height={69}
          className="md:w-[311px] md:h-[144px]"
          style={{ boxShadow: "0.31px 0.31px 3.76px 0.31px #00000040" }}
        />
      </div>

      {/* <div  className='flex align-middle justify-center items-center '>
          <div>
              <div className="p-4  bg-white border shadow-lg ">
                  <span className='text-sm font-bold '>SUSTAINABILITY</span>
                  <p className='text-4xl font-bold'>How Fashion&apos;s Business Model Is <br />
                    Wasteful by Design
                  </p>
                </div> 
                <div>
                  <p className='ml-5 inline-block -rotate-2 text-3xl font-bold text-[#672862]  bg-white  shadow-lg p-4 '>
                      &apos;It&apos;s the industrys dirty secret&apos;:why <br />
                        fashion&apos;s oversupply problem is an <br />
                        environmental disaster
                  </p>
                </div> 
                
          </div>   
          <div>
          <div className="flex flex-col m-2 -rotate-5 relative -left-5 bg-white  shadow-lg p-4">
             <p  className='text-4xl font-bold text-center ' >The Aftermath of <br />
              Fast Fashion
             </p>
             <p  className='text-sm text-center mt-4 '>
              How Disordered Clothes Impact Public Health and the <br />
             Environment
             </p>
          </div>
          </div>       
          
      </div>

      <div className='flex align-middle justify-center items-center ' >
        <div>
          <p className='text-4xl rotate-2 flex flex-col justify-center bg-white shadow-lg p-4'>
            Concerning Fast Fashion Waste Statistics
          </p>
        </div>
        <div>
          <p className='text-2xl rotate-6 font-extrabold relative -top-10 bg-white m-2 shadow-lg p-4 '>
            WHAT YOU NEED TO KNOW ABOUT <br />
            THE <span className='text-amber-800' >ENVIRONMENTAL IMPACT </span> OF THE <br />
            <span className='text-amber-800'> TEXTILES </span> IN FASHION.
          </p>
        </div>  
      </div>
          
      <div className="p-4 m-2 relative -top-10 bg-white  shadow-lg ">
          <span className='text-sm font-bold '>SUSTAINABILITY</span>
          <p className='text-4xl font-bold'>The BoF Podcast <span className='font-normal'>|</span> The World Is On <br />
          Fire But We are Still Buying Shoes
          </p>
       </div>  */}
    </div>
  );
};

export default Quotes;
