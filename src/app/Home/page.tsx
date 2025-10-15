"use client";
import NavBar from "@/components/navbar";
import React, { useState } from "react";

export default function HomePage() {
  // 1. تعريف حالة لتتبع ما إذا كان الفيديو جاهزًا للتشغيل أم لا
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // 2. دالة تُشغل عند نجاح تحميل وتشغيل البيانات الكافية (canplaythrough)
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* الطبقة السوداء المؤقتة: 
        تُخفي الفيديو حتى يتم تحميله. بمجرد أن يصبح isVideoLoaded صحيحًا، 
        تختفي الطبقة (opacity: 0) ببطء (transition: 1s).
      */}
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } bg-black`}
      ></div>

      <video
        className="absolute w-full h-full object-cover"
        src="https://myone.blob.core.windows.net/videocontainer/Futuristic_Smart_Vest_Macro_Shot.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // تغيير إلى "auto" لضمان التحميل السريع
        // يمكنك استخدام 'metadata' هنا إذا كان الفيديو مضغوطًا جيدًا
        
        // 3. ربط الدالة بحدث 'onCanPlayThrough'
        onCanPlayThrough={handleVideoLoad} 
        
        // إزالة خاصية poster لكي نعتمد فقط على الخلفية السوداء
      >
        Your browser does not support the video tag.
      </video>

      {/* المحتوى الأمامي (NavBar والنصوص) 
        اجعل الطبقة z-index أعلى من طبقة الفيديو والطبقة السوداء المؤقتة (z-20)
      */}
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