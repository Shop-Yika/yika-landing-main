import { MdOutlineFavorite } from "react-icons/md";
import Image from "next/image";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const Featured = () => {
  return (
    <div id="how-it-works">
      <div className="md:p-30 mt-7 w-full gap-20  text-center flex lg:flex-row flex-col items-center lg:items-middle md:px-20 md:py-8 ">
        <div className="flex flex-col items-middle lg:w-1/2 px-[24px] font-[family-name:var(--font-averia-libre-regular)]">
          <h2 className="text-center font-display mt-4 text-[36px] md:text-6xl tracking-tight text-slate-900 ">
            Access High-end <br />
            Fashion
          </h2>
          <p className="w-full text-center text-[24px] md:text-2xl leading-[1] tracking-[-0.02em] align-middle font-[300] mt-5">
            Rent high-end fashion on demand <br className="hidden md:block" />
            and refresh your wardrobe without <br className="hidden md:block" />
            the hefty price tag.
          </p>
        </div>
        <div className="flex p-20 flex-col bg-white justify-center align-middle">
          <div className=" ml-5 relative -bottom-5 w-14 p-2 bg-black rounded-4xl flex justify-center align-middle z-10">
            <p className="text-white">+ 1</p>
          </div>
          <div className="flex justify-center align-middle">
            <LuShoppingCart className={`text-5xl  cursor-pointer `} />
              <div className="bg-gray-100 p-7 rounded-2xl flex flex-col items-end shadow-[4px_4px_14px_rgba(0,0,0,0.25)] "
              style={{ transform: 'rotate(3deg)'}}
              > 
                <Image
                src="/images/Featured-1.png"
                alt="logo"
                width={400}
                height={1000}
                className="w-[350px] h-auto"
              />
              <p className=" self-baseline mt-2">Bottega Veneta Sunglasses</p>
              <p className="self-baseline mt-4">From CAD$ 40</p>
              <p className="text-right ">
                <MdOutlineFavorite className="text-5xl text-right relative -right-18" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:p-30 mt-7 w-full gap-20  text-center flex flex-col-reverse lg:flex-row items-center lg:items-middle md:px-20 md:py-8 ">
        <div className="flex p-[32px] md:p-20 flex-col bg-white justify-center align-middle">
          {/* <div className=" ml-5 relative -bottom-5 w-14 p-2 bg-black rounded-4xl flex justify-center align-middle">
            <p className="text-white">+ 1</p> 
          </div> */}
          <div className="flex justify-center align-middle">
            {/* <LuShoppingCart className={`text-5xl  cursor-pointer `} /> */}
            <div className="bg-gray-100 p-7 rounded-2xl flex flex-col items-end shadow-[4px_4px_14px_rgba(0,0,0,0.25)]"
            style={{ transform: 'rotate(-4deg)'}}
            >
              <Image
                src="/images/Featured-3.png"
                alt="logo"
                width={400}
                height={1000}
                className="w-[350px] h-auto"
              />
              {/* <p className=" self-baseline mt-2">Sunset Ombre Maxi Dress</p>
              <p className="self-baseline mt-4">From CAD$ 40</p> */}
              {/* <p className="text-right ">
                {<MdOutlineFavorite className="text-5xl text-right relative -right-18" /> }
              </p> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-middle w-full lg:w-1/2 px-[24px] font-[family-name:var(--font-averia-libre-regular)]">
          <h2 className="font-display text-[36px] text-center font-display mt-4 text-2xl md:text-6xl tracking-tight text-slate-900 ">
            Earn from Your
            <br />
            Wardrobe
          </h2>
          <p className="w-full text-center text-[24px] md:text-2xl leading-[1] tracking-[-0.02em] align-middle font-[300] mt-5">
            Turn your personal style into <br className="hidden md:block" />
            income by lending out pieces you <br className="hidden md:block" />
            hardly wear.
          </p>
        </div>
      </div>

      <div className="p-30 mt-7 w-full gap-20 text-center flex lg:flex-row px-[24px] flex-col items-center md:items-middle md:px-20 md:py-8 ">
        <div className="flex flex-col items-center w-full lg:w-1/2 font-[family-name:var(--font-averia-libre-regular)]">
          <h2 className="text-[36px] text-center font-display mt-4 md:text-6xl tracking-tight text-slate-900 ">
            Generate Rental <br className="hidden md:block" />
            Revenue
          </h2>
          <p className="w-full text-center text-[24px] md:text-2xl leading-[1] tracking-[-0.02em] align-middle font-[300] mt-5">
            List your products for lending and
            <br className="hidden md:block" />
            unlock a new revenue stream
            <br className="hidden md:block" />
          </p>
        </div>
        <div className="flex p-20 flex-col bg-white justify-center align-middle">
          {/* <div className=" ml-5 relative -bottom-5 w-14 p-2 bg-black rounded-4xl flex justify-center align-middle">
            <p className="text-white">+ 1</p>
          </div> */}
          <div className="flex justify-center align-middle">
            {/* <LuShoppingCart className={`text-5xl  cursor-pointer `} /> */}
            <div className="bg-gray-100 p-7 rounded-2xl flex flex-col items-end shadow-[4px_4px_14px_rgba(0,0,0,0.25)]"
            style={{ transform: 'rotate(4deg)'}}
            >
              <Image
                src="/images/Featured-2.png"
                alt="logo"
                width={400}
                height={1000}
                className="w-[350px] h-auto"
              />
              {/* <p className=" self-baseline mt-2">Sunset Ombre Maxi Dress</p>
              <p className="self-baseline mt-4">From CAD$ 40</p> */}
              {/* <p className="text-right ">
                <MdOutlineFavorite className="text-5xl text-right relative -right-18" />
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;