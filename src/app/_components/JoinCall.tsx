"use client";
import React, { useState } from "react";
import { FormEvent } from "react";

const JoinCall = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRegOk, setIsRegOk] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const googleSheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

  const inputClass =
      "w-full h-12 px-4 border border-black/20 bg-[#FFFDF7] text-black font-[family-name:var(--font-satoshi-regular)] focus:outline-none focus:border-[#8c2d8b]";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const payload = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
      };

      const response = await fetch(googleSheetUrl!, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit. Please try again.");

      setIsRegOk(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
      setIsRegOk(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
      <div className="w-full min-h-[488px] flex justify-center items-center font-[family-name:var(--font-averia-libre-regular)]">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between py-16 gap-12">
          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-center text-center lg:text-left lg:w-1/2">
            <p className="text-[22px] md:text-[30px] text-[#2C371D] font-normal leading-[100%] tracking-[-0.02em] sm:px-0 px-4 max-w-[500px]">
              Yíká lets you rent items and earn from your own wardrobe. Access
              premium pieces at more affordable rates.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center xl:items-start lg:w-1/2 max-w-[90%] mx-auto">
            <h2 className="text-[28px] md:text-[51.25px] font-bold text-center lg:text-left text-black leading-[90%] tracking-[-0.02em]">
              Join our community!
            </h2>
            <p className="text-[20px] md:text-[23px] mt-4 text-center lg:text-left text-black font-[family-name:var(--font-satoshi-regular)] font-medium leading-[100%] tracking-[-0.02em]">
              Be the first to know when we launch.
            </p>

            <div className="w-full flex justify-center xl:justify-start">
              <form
                  onSubmit={onSubmit}
                  className="flex flex-col gap-4 mt-8 w-full max-w-[530px]"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      required
                      className={inputClass}
                  />
                  <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      required
                      className={inputClass}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                      type="email"
                      name="email"
                      placeholder="Your e-mail address"
                      required
                      className={`${inputClass} sm:flex-1`}
                  />
                  <button
                      type="submit"
                      className="text-[18px] h-12 px-6 bg-[#8c2d8b] text-white font-bold uppercase hover:bg-[#b361a6] font-[family-name:var(--font-satoshi-regular)] transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                      disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Submit"}
                  </button>
                </div>

                {isRegOk && (
                    <p className="text-green-600 font-[family-name:var(--font-satoshi-regular)]">
                      Successfully registered! We'll be in touch.
                    </p>
                )}
                {error && (
                    <p className="text-red-600 font-[family-name:var(--font-satoshi-regular)]">
                      {error}
                    </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default JoinCall;