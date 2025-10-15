"use client";
import NavBar from "@/components/navbar";
import React, { useState, useEffect } from "react";

export default function HomePage() {
  // 1. حالة لتحديد نوع الجهاز (مبدئياً نفترض أنه كبير/سطح مكتب)
  const [isMobile, setIsMobile] = useState(false);
  // 2. حالة لتتبع جاهزية الفيديو (للانتقال السلس على الـ Desktop)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // الكود القديم: دالة تُشغل عند جاهزية الفيديو
  const handleCanPlayThrough = () => {
    setTimeout(() => {
      setIsVideoLoaded(true);
    }, 100); 
  };
  
  // 3. useEffect لتحديد نوع الجهاز عند تحميل المكون
  useEffect(() => {
    // تحديد Mobile بناءً على عرض الشاشة أو User Agent (يُفضل عرض الشاشة)
    const checkMobile = () => {
      // نعتبر أي شاشة عرضها أقل من 768 بكسل (عرض الأجهزة اللوحية الصغرى) كجهاز محمول
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile); // للتأكد عند تغيير حجم النافذة

    return () => {
      window.removeEventListener('resize', checkMobile); // تنظيف الـ Event Listener
    };
  }, []); // يعمل مرة واحدة عند تحميل المكون

  // مسار الـ CDN الذي تم تكوينه
  const cdnVideoUrl = "https://[اسم-نقطة-نهاية-الـ-CDN].azureedge.net/videocontainer/Futuristic_Smart_Vest_Macro_Shot.mp4";
  // مسار الصورة الثابتة
  const placeholderImageUrl = "/images/video-placeholder-frame.jpg";

  // محتوى الخلفية (الفيديو أو الصورة)
  const BackgroundComponent = () => {
    if (isMobile) {
      // 4. على الهاتف: نعرض صورة ثابتة فقط كخلفية
      return (
        <div 
          className="absolute w-full h-full object-cover bg-cover bg-center"
          style={{ backgroundImage: `url(${placeholderImageUrl})` }}
        ></div>
      );
    } else {
      // 5. على سطح المكتب: نعرض الفيديو مع الانتقال السلس
      return (
        <>
          {/* طبقة التعتيم السوداء المؤقتة */}
          <div
            className={`absolute inset-0 z-20 transition-opacity duration-700 ease-in ${
              isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } bg-black`}
          ></div>
          
          <video
            className="absolute w-full h-full object-cover"
            poster={placeholderImageUrl} // كخلفية سريعة قبل التحميل
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onCanPlayThrough={handleCanPlayThrough}
          >
            <source 
              src={cdnVideoUrl} 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </>
      );
    }
  };


  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* عرض مكون الخلفية المشروط */}
      <BackgroundComponent />
      
      {/* المحتوى الأمامي (يجب أن يكون z-index أعلى من z-20) */}
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