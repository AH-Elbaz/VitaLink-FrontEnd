"use client";
import NavBar from "@/components/navbar";
import React, { useState } from "react";

export default function HomePage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const handleCanPlayThrough = () => {
    setTimeout(() => {
        setIsVideoLoaded(true);
    }, 100); 
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* طبقة التعتيم السوداء المؤقتة */}
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-700 ease-in ${
          isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } bg-black`}
      ></div>

      <video
        className="absolute w-full h-full object-cover"
        // poster="/images/video-placeholder-frame.jpg" 
        autoPlay
        loop
        muted
        playsInline
        preload="auto" 
        onCanPlayThrough={handleCanPlayThrough}
      >
        <source 
          src="/videos/bg.mp4"
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* المحتوى الأمامي */}
      <NavBar />
      <div className="absolute w-full h-full bg-black/50"></div>
      <div className="relative z-30 flex flex-col items-start justify-center h-full text-left px-6 md:px-12 lg:px-20">
        <h1
          className="text-white mb-6 w-full"
          style={{
            fontSize: 'clamp(1.8rem, 5.5vw, 5.5rem)',
            lineHeight: '1.3',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            maxWidth: 'min(1400px, 92vw)',
            overflowWrap: 'break-word',
            wordBreak: 'normal'
          }}
        >
          Understand your health from the inside out
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl max-w-3xl mb-6 md:mb-10" style={{fontWeight: 400}}>
          From recovery to what’s happening inside your body, VitaLink brings it all together — make smarter choices today that add more years to your life.
        </p>
        <button
          className="bg-white text-black font-semibold rounded-xl px-8 py-4 text-lg shadow hover:bg-gray-100 transition mb-2"
          style={{letterSpacing: '1px'}}
        >
          EXPLORE ADVANCED LABS
        </button>
      </div>
    </div>
  );
}