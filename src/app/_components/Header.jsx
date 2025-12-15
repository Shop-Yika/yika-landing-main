"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { MdFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  const path = usePathname();

  useEffect(() => {
    console.log("path", path);
  }, []);

  return (
    <div className="h-[76px] p-2.5 px-8 flex justify-between items-center shadow-md fixed top-0 w-full z-10 bg-[#FFFDF7] text-[16.65px]">
      <div className="flex gap-12 justify-start items-center">
        <Link href={"/"}>
          <Image
            src="/images/logo/Primary-Logo-Black.svg"
            alt="logo"
            width={50}
            height={30}
          />
        </Link>
        <ul className="hidden lg:flex lg:gap-12 lg:p-[10px]">
          <Link href={"/"}>
            <li
              className={`hover:text-[#b361a6] font-medium text-base leading-[1] tracking-[-0.02em] cursor-pointer ${
                path == "/" && "font-[family-name:var(--font-satoshi-regular]"
              }`}
            >
              HOME
            </li>
          </Link>
          <Link href={"#our-ethos"}>
            <li
              className={`hover:text-[#b361a6] font-medium text-base leading-[1] tracking-[-0.02em] cursor-pointer ${
                path == "/about" &&
                "font-[family-name:var(--font-satoshi-regular)]"
              }`}
            >
              ABOUT
            </li>
          </Link>
          <Link href={"#how-it-works"}>
            <li
              className={`hover:text-[#b361a6] font-medium text-base leading-[1] tracking-[-0.02em] cursor-pointer ${
                path == "/products" &&
                "font-[family-name:var(--font-averia-libre-bold)]"
              }`}
            >
              HOW IT WORKS
            </li>
          </Link>
          <Link href={"#footer"} scroll={true}>
            <li
              className={`hover:text-[#b361a6] font-medium text-base leading-[1] tracking-[-0.02em] cursor-pointer ${
                path == "/products" &&
                "font-[family-name:var(--font-averia-libre-bold)]"
              }`}
            >
              CONTACT US
            </li>
          </Link>
        </ul>
      </div>
      <div className="block lg:hidden">
        <MobileMenu />
      </div>
      <div className="hidden lg:flex gap-6 items-center">
        <Link href={"/"}>
          <MdFavoriteBorder
            className={`hover:text-[#b361a6] font-medium text-[25px] cursor-pointer ${
              path == "/favorites" && "text-primary"
            }`}
          />
        </Link>
        <Link href={"/profile"}>
          <FiUser
            className={`hover:text-[#b361a6] font-medium text-[25px] cursor-pointer`}
          />
        </Link>
        <Link href={"/"}>
          <LuShoppingCart
            className={`hover:text-[#b361a6] font-medium text-[25px] cursor-pointer ${
              path == "/cart" && "text-primary"
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;