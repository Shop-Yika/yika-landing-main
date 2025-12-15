"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { IoLogoInstagram } from "react-icons/io";

import privacyPolicy from "./constants/privacyPolicy";
import termsOfService from "./constants/termsOfService";

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <>
      <div id="footer">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full md:flex-3/4  bg-[#672862] py-10 px-6 md:py-15 md:px-15 h-[385px]">
            <div className=" flex flex-col md:flex-row justify-between gap-6">
              <div>
                <Image
                  src="/Primary-Logo-white.svg"
                  alt="logo"
                  width={50}
                  height={30}
                />

                <p className="text-[20px] text-[#F8FAE8] pt-5 md:text-4xl font-medium leading-[120%]">
                  Start renting <span className="italic">today</span>
                </p>
                <a href="mailto:partnerships@shopyika.com">
                  <Button className="w-[200px] h-[46px] font-bold text-[18px] leading-[100%] rounded-1xl px-15 py-5 mt-5 text-lg bg-[#b361a6]" >
                  Work with us
                  </Button>
                </a>
                
              </div>
              <div className="flex flex-col items-start md:items-end">
                <div>
                  <a
                    href="mailto:contact.us@shopyika.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <p className="text-[#F8FAE8] font-medium leading-[120%] text-[18px] mb-2">
                    Contact Us
                    </p>
                  </a>
                  <a href="https://www.instagram.com/yika.inc/">
                    <p className="flex flex-row text-[#F8FAE8] font-medium text-[18px] hover:text-fuchsia-300">
                      <IoLogoInstagram className=" text-[25px] mr-2" />
                      yika.inc
                    </p>
                  </a>
                </div>
                <div className="hidden md:block">
                  <Image
                    src="/Footer-Logo.svg"
                    alt="logo"
                    width={60}
                    height={76}
                    className="opacity-20 pt-15 pb-5"
                  />
                </div>
              </div>
            </div>
            <hr className="hidden md:block border-t-[0.7px] border-white mb-5" />
            <hr className="block md:hidden border-t-[0.25px] border-white w-full my-6" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-4">
              <ul className="md:flex gap-2 pb-6">
                <li
                  className="hover:text-fuchsia-300 font-medium text-[16px] md:text-sm cursor-pointer text-white"
                  onClick={() => setShowPrivacyModal(true)}
                >
                  Privacy Policy
                </li>
                <li
                  className="hover:text-fuchsia-300 font-medium text-[16px] md:text-sm cursor-pointer text-white"
                  onClick={() => setShowTermsModal(true)}
                >
                  Terms of Service
                </li>
              </ul>
              <p className="hidden md:block text-white font-medium leading-[120%] text-[18px]">
                &copy; 2025 Yíká
              </p>
            </div>
          </div>

          {/* Mobile Footer Image */}
          <div className="block lg:hidden w-full h-[103px] pt-6 bg-[#672862]">
            <Image
              src="/images/footer-img.png"
              alt="Footer Image"
              width={320}
              height={103}
              className="w-full h-full lg:h-auto object-cover"
            />
          </div>

          <div className="hidden lg:flex flex-1/4 w-full max-w-md mx-auto bg-[#672862]">
            <Image
              src="/images/footer-img.png"
              width={320}
              height={385}
              alt="Footer Image"
              className="w-full lg:h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {showPrivacyModal && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg border-4 border-black-300 max-w-4xl max-h-[80vh] w-full overflow-hidden shadow-xl">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl font-light"
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <pre className="whitespace-pre-wrap">{privacyPolicy}</pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg border-4 border-black-300 max-w-4xl max-h-[80vh] w-full overflow-hidden shadow-xl">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Terms of Service</h2>
              <button
                onClick={() => setShowTermsModal(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl font-light"
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <pre className="whitespace-pre-wrap">{termsOfService}</pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;