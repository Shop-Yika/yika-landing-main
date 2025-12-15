import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MobileDropdownMenu = ({ onClose, isOpen }) => {
  return (
    <motion.div
      className="w-full bg-[#FFFDF7] shadow-lg z-40 py-6 flex flex-col items-center justify-center gap-4 font-[family-name:var(--font-satoshi-regular)]"
      initial={{ maxHeight: 0, paddingTop: 0, paddingBottom: 0 }}
      animate={{
        maxHeight: isOpen ? 320 : 0,
        scaleY: isOpen ? 1 : 0.8,
        paddingTop: isOpen ? 24 : 0,
        paddingBottom: isOpen ? 24 : 0,
        y: isOpen ? 0 : -10,
      }}
      transition={{
        maxHeight: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
        scaleY: { duration: 0.4, ease: "easeOut" },
        paddingTop: { duration: 0.3 },
        paddingBottom: { duration: 0.3 },
        y: { duration: 0.3 },
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      layout
      style={{ overflow: "hidden" }}
    >
      <div className="w-full border-b border-[#00000080]">
        <Link
          href="/"
          className="text-black hover:text-rose-600 transition font-medium text-[16.65px] leading-tight tracking-[-0.02em] uppercase text-center block p-2"
          onClick={onClose}
        >
          Home
        </Link>
      </div>

      <div className="w-full border-b border-[#00000080]">
        <Link
          href="/about"
          className="text-black hover:text-rose-600 transition font-medium text-[16.65px] leading-tight tracking-[-0.02em] uppercase text-center block p-2"
          onClick={onClose}
        >
          About
        </Link>
      </div>

      <div className="w-full border-b border-[#00000080]">
        <Link
          href="/how-it-works"
          className="text-black hover:text-rose-600 transition font-medium text-[16.65px] leading-tight tracking-[-0.02em] uppercase text-center block p-2"
          onClick={onClose}
        >
          How It Works
        </Link>
      </div>

      <div className="w-full">
        <Link
          href="/contact"
          className="text-black hover:text-rose-600 transition font-medium text-[16.65px] leading-tight tracking-[-0.02em] uppercase text-center block p-2"
          onClick={onClose}
        >
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
};

export default MobileDropdownMenu;
