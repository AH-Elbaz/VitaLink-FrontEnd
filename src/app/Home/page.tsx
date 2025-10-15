"use client";
import NavBar from "@/components/navbar";
import React, { useState, useEffect } from "react";

export default function HomePage() {
  // 1. حالة لتتبع جاهزية الفيديو
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  // 2. دالة تُشغل عندما يصبح الفيديو جاهزًا للتشغيل بدون توقف
  const handleCanPlayThrough = () => {
    // نستخدم setTimeout لضمان أن المتصفح قد بدأ فعلاً تشغيل الفيديو
    setTimeout(() => {
        setIsVideoLoaded(true);
    }, 100); 
  };

  // 3. (اختياري لكن مفيد) إذا لم يعمل التشغيل التلقائي، يمكن للمستخدم النقر
  const handleVideoClick = (e) => {
    const video = e.target;
    if (video.paused) {
      video.play().catch(error => {
        console.error("Autoplay was blocked even on click:", error);
      });
    }
    // بمجرد النقر والتشغيل، نعتبره جاهزاً
    if (!isVideoLoaded) {
        setIsVideoLoaded(true);
    }
  };


  return (
    // الخلفية الأساسية سوداء
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* طبقة التعتيم السوداء المؤقتة (Black Overlay)
        تغطية كاملة مع z-index عالي (z-20) 
        تختفي (opacity-0) ببطء (duration-700) فقط عندما يكون الفيديو جاهزًا (isVideoLoaded: true)
      */}
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-700 ease-in ${
          isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } bg-black`}
      ></div>

      <video
        className="absolute w-full h-full object-cover"
        // قم بتحسين وضغط الفيديو لضمان عمل هذا الحل بكفاءة
        // يفضل توفير WebM أيضاً
        // src="https://myone.blob.core.windows.net/videocontainer/Futuristic_Smart_Vest_Macro_Shot.mp4" 
        
        // **الأهم:** استخدام صورة بوستر احتياطية (تظهر مكان اللون الأسود إذا لم يتمكن المتصفح من تحميل الفيديو بسرعة)
        poster="/images/video-placeholder-frame.jpg" 
        
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // يطلب التحميل المسبق لضمان التشغيل السريع

        // ربط دالة الجاهزية
        onCanPlayThrough={handleCanPlayThrough}
        // ربط دالة النقر (كإجراء احتياطي على الهواتف)
        onClick={handleVideoClick} 
      >
        {/*
          **هنا يجب عليك إضافة مصادر متعددة للفيديو**
          لضمان أقصى توافق على جميع المتصفحات، خاصة الهواتف
        */}
        {/* <source src="/videos/my-video.webm" type="video/webm" /> */}
        <source 
          src="https://myone.blob.core.windows.net/videocontainer/Futuristic_Smart_Vest_Macro_Shot.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* باقي المحتوى الأمامي (يجب أن يكون z-index أعلى من طبقة التعتيم z-20) */}
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