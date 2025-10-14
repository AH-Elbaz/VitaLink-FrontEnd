"use client";
import NavBar from "@/components/navbar";   

import React from "react";

export default function HomePage() {
  return (

    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute w-full h-full object-cover"
        src="/videos/bg.mp4"
        autoPlay
        loop
        muted
      ></video>
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
