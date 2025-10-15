"use client";
import NavBar from "@/components/navbar";
import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

const HLS_URL = "https://myone.blob.core.windows.net/videocontainer/Futuristic_Smart_Vest_Macro_Shot.mp4"; // <- paste AMS HLS URL

export default function HomePage() {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari and iOS
      video.src = HLS_URL;
      video.addEventListener("canplay", () => setLoaded(true));
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => setLoaded(true));
      return () => {
        hls.destroy();
      };
    } else {
      // fallback: try direct src
      video.src = HLS_URL;
      video.addEventListener("canplay", () => setLoaded(true));
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white z-20">
          Loading video...
        </div>
      )}

      <video
        ref={videoRef}
        id="bg-video"
        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
      />

      <NavBar />
      <div className="absolute w-full h-full bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
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

