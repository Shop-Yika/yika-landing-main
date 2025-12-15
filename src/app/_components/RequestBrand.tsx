"use client";
import { FormEvent } from "react";
import React, { useState } from "react";

const RequestBrand = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRegOk, setIsisRegOk] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL + "/brands";

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
        body: JSON.stringify({ name: formData.get("name") }),
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
    <div className="w-full flex flex-col items-center py-4 md:p-30 ">
      <p className="w-full font-normal text-[32px] md:text-[48px] leading-[0.9] tracking-[-0.02em] text-center text-black mt-5 md:max-w-lg mx-auto font-[family-name:var(--font-averia-libre-regular)]">
        Request a brand!
      </p>
      <p className="w-full font-medium md:font-semibold text-[20.5px] leading-[1.2] tracking-[-0.02em] text-center mt-3">
        Share the brands you want to see with us
      </p>

      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center mt-7 w-full px-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Suggest a brand"
          className="w-full md:w-[538px] h-[51px] font-normal text-[23.06px] text-[#999797] leading-[1] tracking-[-0.02em] px-5 py-2 border-[1.28px] border-solid border-[#00000033] focus:outline-none focus:ring-1"
        />
        <button
          type="submit"
          className="w-full md:w-[538px] h-[51px] leading-[1] tracking-[-0.02em] text-[23.06px] text-[#FFFDF7] font-[family-name:var(--font-satoshi-regular] font-bold uppercase p-3 mt-3 bg-[#8c2d8b] hover:cursor-pointer hover:bg-[#b361a6]"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {isRegOk && (
        <div style={{ color: "green" }}>{"Brand Successfully Submitted!"}</div>
      )}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default RequestBrand;
