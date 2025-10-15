"use client";
import NavBar from "@/components/navbar";
import React, { useState } from "react";

export default function HomePage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const handleCanPlayThrough = () => {
    // استخدم تأخير بسيط لجعل الانتقال سلسًا
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
        // **الأهم:** وضع الصورة الثابتة كـ Poster لتكون الخلفية الافتراضية على الهواتف
        poster="/images/video-placeholder-frame.jpg" 
        
        autoPlay
        loop
        muted
        playsInline
        preload="auto" 
        onCanPlayThrough={handleCanPlayThrough}
      >
        {/*
          **هنا الحل الفعال لتحميل الفيديو المشروط:**
          1. يفضل توفير نسخة WebM (أفضل ضغطاً)
          2. التأكد من أن الفيديو الموجود على السيرفر هو أصغر حجم ممكن
        */}
        {/* <source src="/videos/my-video.webm" type="video/webm" media="(min-width: 768px)" /> */}
        <source 
          src="https://myone.blob.core.windows.net/videocontainer/Futuristic_Smart_Vest_Macro_Shot.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* المحتوى الأمامي */}
      <NavBar />
      <div className="absolute w-full h-full bg-black/50"></div>
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
          Understand Your Health from the Inside Out
        </h1>
        <p className="text-white text-lg md:text-xl max-w-xl">
          Track your sleep, recovery, and daily activity with vitaLink <br />
          Make smarter health choices today for a stronger tomorrow.
        </p>
      </div>
    </div>
  );
}