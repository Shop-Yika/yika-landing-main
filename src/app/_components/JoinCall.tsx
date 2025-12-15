"use client";
import React, { useState } from "react";
import { FormEvent } from "react";

const JoinCall = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRegOk, setIsisRegOk] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL + "/user";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);

      const response = await fetch(`${baseUrl}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.get("email") }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      // Handle response if necessary
      const data = await response.json();
      setIsisRegOk(true);
      console.log(data);
      // ...
    } catch (error) {
      // Capture the error message to display to the user
      if (error instanceof Error) {
        setError(error.message);
        setIsisRegOk(false);
      } else {
        setError("An unknown error occurred");
      }
      console.error(error);
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
          <h2 className="text-[28px] md:text-[51.25px] font-bold text-center lg:text-left text-black  leading-[90%] tracking-[-0.02em]">
            Join our community!
          </h2>
          <p className="text-[20px] md:text-[23px] mt-4 text-center lg:text-left text-black font-[family-name:var(--font-satoshi-regular)] font-medium leading-[100%] tracking-[-0.02em]">
            Be the first to know when we launch.
          </p>
          <div className="w-full flex justify-center xl:justify-start">
            <form
              onSubmit={onSubmit}
              className="flex flex-col md:flex-row gap-4 mt-8 w-full max-w-[500px]"
            >
              <input
                type="email"
                name="email"
                placeholder="Your e-mail address"
                className="w-full md:w-[380px] h-12 px-4 border border-black/20 bg-[#FFFDF7] text-black font-[family-name:var(--font-satoshi-regular)]"
              />
              <button
                type="submit"
                className="text-[18px] w-full md:w-[134px] h-12 bg-[#8c2d8b] text-white font-bold uppercase hover:bg-[#b361a6] font-[family-name:var(--font-satoshi-regular)]"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>

          {isRegOk && (
            <div className="text-green-600 mt-2 font-[family-name:var(--font-satoshi-regular)]">
              Successfully Registered!
            </div>
          )}
          {error && (
            <div className="text-red-600 mt-2 font-[family-name:var(--font-satoshi-regular)]">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinCall;
