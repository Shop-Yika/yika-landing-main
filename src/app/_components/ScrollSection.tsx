"use client";
import Image from "next/image";
import React from "react";

const ScrollSection = () => {
  const brandImages = [
    "brand-2.png",
    "brand-3.png",
    "brand-4.png",
    "brand-6.png",
    "brand-7.png",
    "brand-8.png",
    "brand-9.png",
    "brand-10.png",
    "brand-11.png",
    "brand-12.png",
    "brand-13.png",
    "brand-14.png",
    "brand-15.png",
    "brand-16.png",
    "brand-17.png",
    "brand-18.png",
    "brand-19.png",
    "brand-20.png",
  ];

  // Calculate total width of one set
  const brandWidth = 190; // 200px per brand
  const totalWidth = brandImages.length * brandWidth;

  return (
    <div className="scrollSection flex justify-center items-center flex-col h-[300px] mb-[100px] overflow-hidden relative">
      <div className="flex h-[200px] items-center">
        {/* Create multiple copies to ensure seamless loop */}
        <div 
          className="flex items-center"
          style={{
            animation: `scroll ${60}s linear infinite`,
            width: `${totalWidth * 3}px` // Triple width for smooth looping
          }}
        >
          {/* First set */}
          {brandImages.map((filename, index) => (
            <div
              key={`set1-${filename}-${index}`}
              className="flex items-center justify-center h-[200px] shrink-0"
              style={{ width: `${brandWidth}px`, padding: '0 40px' }}
            >
              <Image
                className="object-contain"
                src={`/images/brands/${filename}`}
                alt={`Brand logo ${index + 1}`}
                width={120}
                height={80}
                loading="eager"
                style={{
                  maxWidth: '120px',
                  maxHeight: '80px',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>
          ))}
          
          {/* Second set */}
          {brandImages.map((filename, index) => (
            <div
              key={`set2-${filename}-${index}`}
              className="flex items-center justify-center h-[200px] shrink-0"
              style={{ width: `${brandWidth}px`, padding: '0 40px' }}
            >
              <Image
                className="object-contain"
                src={`/images/brands/${filename}`}
                alt={`Brand logo ${index + 1}`}
                width={120}
                height={80}
                loading="eager"
                style={{
                  maxWidth: '120px',
                  maxHeight: '80px',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>
          ))}
          
          {/* Third set */}
          {brandImages.map((filename, index) => (
            <div
              key={`set3-${filename}-${index}`}
              className="flex items-center justify-center h-[200px] shrink-0"
              style={{ width: `${brandWidth}px`, padding: '0 40px' }}
            >
              <Image
                className="object-contain"
                src={`/images/brands/${filename}`}
                alt={`Brand logo ${index + 1}`}
                width={120}
                height={80}
                loading="eager"
                style={{
                  maxWidth: '120px',
                  maxHeight: '80px',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Fade mask */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #FFFDF7 0%, transparent 10%, transparent 90%, #FFFDF7 100%)'
        }}
      />
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }
        
        /* Pause animation on hover if desired */
        .scrollSection:hover div[style*="animation"] {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollSection;