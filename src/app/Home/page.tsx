"use client";
import NavBar from "@/components/navbar";
import React, { useState, useRef, useEffect } from "react";

export default function HomePage() {
  // Configuration: delay in milliseconds to keep the black screen before showing the video
  const DELAY_MS = 2000; // تغيير القيمة هنا للمدة المطلوبة (مثال: 2000 = 2 ثانية)

  // حالات: هل الفيديو جاهز؟ هل انتهى المؤقت؟ وهل بدأ التشغيل فعلاً؟
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [delayElapsed, setDelayElapsed] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // مرجع لعنصر الفيديو لبدء التشغيل برمجياً
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // يُشغّل عندما تكون البيانات كافية للتشغيل بدون توقف
  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  // مؤقت يحسب مدة الشاشة السوداء
  useEffect(() => {
    const t = setTimeout(() => setDelayElapsed(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // محاولة بدء الفيديو عندما ينتهي المؤقت ويكون الفيديو جاهزًا
  useEffect(() => {
    if (!hasStarted && delayElapsed && isVideoReady && videoRef.current) {
      const p = videoRef.current.play();
      if (p && typeof p.then === "function") {
        p.then(() => setHasStarted(true)).catch(() => {
          /* في حالات نادرة قد يرفض المتصفح التشغيل؛ مع ذلك نحافظ على إظهار المحتوى بعد المحاولة */
          setHasStarted(true);
        });
      } else {
        setHasStarted(true);
      }
    }
  }, [delayElapsed, isVideoReady, hasStarted]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* الطبقة السوداء المؤقتة:
        تبقى مرئية حتى ينقضي المؤقت ويبدأ الفيديو (hasStarted === true)
        نستخدم transition لانتقال سلس عند الاختفاء.
      */}
      <div
        className={`absolute inset-0 z-40 transition-opacity duration-700 ${
          hasStarted ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } bg-black`}
        aria-hidden={!hasStarted}
      ></div>

      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover"
        src="https://myone.blob.core.windows.net/videocontainer/Futuristic_Smart_Vest_Macro_Shot.mp4"
        // لا نجعل الفيديو يبدأ تلقائياً هنا؛ نبدأه برمجياً بعد انتهاء المؤقت وعندما يكون جاهزًا
        loop
        muted
        playsInline
        preload="auto"
        onCanPlayThrough={handleVideoReady}
        onLoadedData={handleVideoReady} // احتياطياً في حال لم يُطلَق canplaythrough
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