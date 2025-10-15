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
        poster="/images/video-placeholder-frame.jpg" 
        autoPlay
        loop
        muted
        playsInline
        preload="auto" 
        onCanPlayThrough={handleCanPlayThrough}
      >
        <source 
          // **رابط الفيديو المضغوط المحلي (Netlify CDN)**
          // تأكد من أن الملف موجود في public/videos/
          src="/videos/bg.mp4"
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* المحتوى الأمامي */}
      <NavBar />
      <div className="absolute w-full h-full bg-black/50"></div>
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          // **الخط Inter، و السمك Bold (700) للحصول على سمك متوسط**
          className="text-white font-bold mb-6 font-inter-heading" 
          style={{fontSize: '4rem', lineHeight: '1.1'}}
        >
          Understand your health from the<br />
          inside out
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mb-8" style={{fontWeight: 400}}>
          From sleep and recovery to what’s happening inside your body, WHOOP brings it all together — make smarter choices today that add more years to your life.
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