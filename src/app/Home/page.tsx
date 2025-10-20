"use client";
import NavBar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// VitaLink Innovative Theme Colors
const COLORS = {
  lime: '#CCFF00',
  darkBg: '#0A0A0A',
  darkCard: '#0F0F0F',
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
  textTertiary: '#808080',
  borderLight: 'rgba(204, 255, 0, 0.06)',
  borderMedium: 'rgba(204, 255, 0, 0.12)',
  borderStrong: 'rgba(204, 255, 0, 0.2)',
  accentGlow: 'rgba(204, 255, 0, 0.08)',
};

export default function HomePage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const handleCanPlayThrough = () => {
    setTimeout(() => {
        setIsVideoLoaded(true);
    }, 100); 
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden bg-black">
        
        {/* Loading Overlay: sits above the video but below content so hero is visible while video downloads */}
        <div
          className={`absolute inset-0 z-30 transition-opacity duration-700 ease-in ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          } bg-black pointer-events-none`}
        ></div>

        {/* Background Video */}
        <video
          className="absolute w-full h-full object-cover will-change-opacity"
          style={{ opacity: isVideoLoaded ? 1 : 0, transition: 'opacity 700ms ease' }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto" 
          onCanPlayThrough={handleCanPlayThrough}
        >
          <source 
            src="https://videos.ctfassets.net/h7cd7om3mauo/1r73ZD3152IYlxVaThkzTL/3025deb93461e8fd7753a79e27763826/bg.mp4"
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay with Gradient */}
        <div className="absolute w-full h-full bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-25"
            style={{
              background: `radial-gradient(circle, ${COLORS.lime}40, transparent 70%)`,
              filter: 'blur(120px)',
              animation: 'float 8s ease-in-out infinite',
            }}
          ></div>
          
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, ${COLORS.lime}30, transparent 70%)`,
              filter: 'blur(120px)',
              animation: 'float 10s ease-in-out infinite reverse',
            }}
          ></div>

          <div 
            className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full opacity-15"
            style={{
              background: `radial-gradient(circle, ${COLORS.lime}20, transparent 70%)`,
              filter: 'blur(100px)',
              animation: 'float 12s ease-in-out infinite',
            }}
          ></div>
        </div>

        {/* Navigation Bar */}
        <NavBar />

  {/* Main Hero Content */}
  <div className="relative z-40 flex flex-col items-start justify-center h-full min-h-screen pt-[120px] px-6 md:px-12 lg:px-20 text-left">
          <div className="max-w-4xl">
            <h1
              className="text-white mb-8 w-full"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 6rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                maxWidth: 'min(1400px, 92vw)',
                overflowWrap: 'break-word',
                wordBreak: 'normal',
                fontWeight: 300
              }}
            >
              Understand your health from the <br /> 
              <span style={{ color: COLORS.lime, fontWeight: 400 }}>inside out</span>
            </h1>
            <p 
              className="text-base md:text-lg lg:text-xl max-w-3xl mb-10 md:mb-14 leading-relaxed" 
              style={{fontWeight: 400, color: COLORS.textSecondary, lineHeight: '1.8'}}
            >
              From recovery to what&apos;s happening inside your body, VitaLink brings it all together — make smarter choices today that add more years to your life.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-gradient-to-r from-[#CCFF00] to-[#A0FF00] text-black font-bold rounded-xl px-8 py-4 text-lg shadow-lg hover:shadow-[0_0_30px_rgba(204,255,0,0.8)] hover:scale-105 transition-all duration-300 transform-gpu tracking-widest"
              >
                EXPLORE ADVANCED LABS
              </button>
              <Link
                href="/signup"
                className="border-2 border-[#CCFF00] text-[#CCFF00] font-bold rounded-xl px-8 py-4 text-lg hover:bg-[#CCFF00]/10 hover:shadow-[0_0_20px_rgba(204,255,0,0.5)] transition-all duration-300 transform-gpu tracking-widest text-center"
              >
                START FREE TRIAL
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-xs font-semibold tracking-widest" style={{ color: COLORS.lime }}>SCROLL</p>
            <svg className="w-5 h-5" style={{ color: COLORS.lime }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* PH1 Section: Real-Time Biometric Analysis */}
      <section className="bg-black text-white py-20 md:py-32 border-t relative overflow-hidden" style={{ borderColor: COLORS.borderMedium }}>
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{
            background: `radial-gradient(circle, ${COLORS.lime}, transparent 70%)`,
            filter: 'blur(80px)',
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/3 w-full text-right md:pr-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textPrimary }}>Real-Time Biometric Analysis</h3>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: COLORS.textSecondary }}>The smart performance vest captures over 10 vital metrics every second, including core physiological data and subtle changes in motion. Our AI module immediately analyzes this stream to establish the athlete&apos;s True Strain Index and prevent overexertion, ensuring every training session is safe and perfectly optimized.</p>
          </div>

          <div className="md:w-1/3 w-full flex justify-center">
            <div className="w-full max-w-5xl group">
              <div 
                className="rounded-3xl shadow-2xl border overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(204,255,0,0.4)]"
                style={{ borderColor: COLORS.borderMedium }}
              >
                <Image
                  src="https://images.ctfassets.net/h7cd7om3mauo/7HzyBRLZPC6qZ0WT3sK3SC/2cd0d04affe4ac295a74ab16c10b9a3f/ph1.png"
                  alt="Real-Time Biometric Analysis"
                  width={1400}
                  height={900}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={false}
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/3 w-full text-left md:pl-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textPrimary }}>AI-Driven Recovery & Personalized Guidance</h3>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: COLORS.textSecondary }}>Beyond simple tracking, Vitalink leverages historical performance data and AI models to predict fatigue levels and recovery windows with high accuracy. This provides coaches with actionable, personalized recommendations to schedule the next optimal session and maximize performance gains.</p>
          </div>
        </div>
      </section>

      {/* PH2 Section: Advanced Data Visualization */}
      <section className="bg-black text-white py-20 md:py-32 border-t relative overflow-hidden" style={{ borderColor: COLORS.borderMedium }}>
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full" style={{
            background: `radial-gradient(circle, ${COLORS.lime}, transparent 70%)`,
            filter: 'blur(80px)',
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2 w-full text-left md:pr-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textPrimary }}>Advanced Data Visualization</h3>
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: COLORS.textSecondary }}>Dive deep into your performance metrics with intuitive and interactive data visualizations. Understand trends, identify areas for improvement, and track your progress over time with unparalleled clarity and precision.</p>
            <Link
              href="/dashboard"
              className="inline-block bg-transparent text-[#CCFF00] font-bold rounded-xl px-8 py-4 text-lg border-2 hover:bg-[#CCFF00]/10 hover:border-[#CCFF00] hover:shadow-[0_0_20px_rgba(204,255,0,0.5)] transition-all duration-300 transform-gpu tracking-widest"
              style={{borderColor: COLORS.borderMedium, color: COLORS.lime}}
            >
              VIEW DASHBOARD
            </Link>
          </div>

          <div className="md:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-5xl group">
              <div 
                className="rounded-3xl shadow-2xl border overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(204,255,0,0.4)]"
                style={{ borderColor: COLORS.borderMedium }}
              >
                <Image
                  src="https://images.ctfassets.net/h7cd7om3mauo/7AeXvwbcZCx30q2wi5FcBS/e2ecd1df81cf5c99b005a4eeb6c56cfc/ph2.jpg"
                  alt="Advanced Data Visualization"
                  width={1400}
                  height={900}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PH3 Section: Seamless Integration */}
      <section className="bg-black text-white py-20 md:py-32 border-t relative overflow-hidden" style={{ borderColor: COLORS.borderMedium }}>
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full" style={{
            background: `radial-gradient(circle, ${COLORS.lime}, transparent 70%)`,
            filter: 'blur(80px)',
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-5xl group">
              <div 
                className="rounded-3xl shadow-2xl border overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(204,255,0,0.4)]"
                style={{ borderColor: COLORS.borderMedium }}
              >
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full text-left md:pl-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textPrimary }}>Seamless Integration</h3>
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: COLORS.textSecondary }}>VitaLink integrates effortlessly with your existing training ecosystem. Connect your devices, import data, and get a holistic view of your performance without any hassle. Our platform works with all major wearables and fitness trackers.</p>
            <Image
                  src="https://images.ctfassets.net/h7cd7om3mauo/6Zn1FjA2P1XVWoWMqufzHW/71a367af236de5aeddb53665440d37c3/ph4.jpg"
                  alt="Seamless Integration"
                  width={1400}
                  height={900}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={false}
                />
            <Link
              href="/how-it-works"
              className="mt-10 inline-block bg-gradient-to-r from-[#CCFF00] to-[#A0FF00] text-black font-bold rounded-xl px-8 py-4 text-lg shadow-lg hover:shadow-[0_0_30px_rgba(204,255,0,0.8)] hover:scale-105 transition-all duration-300 transform-gpu tracking-widest"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 md:py-32 border-t relative overflow-hidden" style={{ borderColor: COLORS.borderMedium }}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, ${COLORS.lime} 25%, ${COLORS.lime} 26%, transparent 27%, transparent 74%, ${COLORS.lime} 75%, ${COLORS.lime} 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, ${COLORS.lime} 25%, ${COLORS.lime} 26%, transparent 27%, transparent 74%, ${COLORS.lime} 75%, ${COLORS.lime} 76%, transparent 77%, transparent)
              `,
              backgroundSize: '60px 60px',
              animation: 'drift 30s linear infinite',
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 md:px-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight" style={{ color: COLORS.textPrimary }}>Ready to Elevate Your Performance?</h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-12" style={{ color: COLORS.textSecondary }}>Join thousands of athletes and coaches who are transforming their training with VitaLink. Start your journey to peak performance today with our comprehensive analytics platform.</p>
          <Link
            href="/signup"
            className="inline-block bg-gradient-to-r from-[#CCFF00] to-[#A0FF00] text-black font-bold rounded-xl px-12 py-6 text-2xl shadow-lg hover:shadow-[0_0_40px_rgba(204,255,0,0.9)] hover:scale-110 transition-all duration-300 transform-gpu tracking-widest"
          >
            START YOUR FREE TRIAL
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t relative" style={{ borderColor: COLORS.borderMedium }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.lime }}>VitaLink</h4>
              <p style={{ color: COLORS.textTertiary }}>Transforming athletic performance through real-time biometric insights.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.lime }}>Product</h4>
              <ul className="space-y-2" style={{ color: COLORS.textSecondary }}>
                <li><Link href="/features" className="hover:text-[#CCFF00] transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-[#CCFF00] transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="hover:text-[#CCFF00] transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.lime }}>Company</h4>
              <ul className="space-y-2" style={{ color: COLORS.textSecondary }}>
                <li><Link href="/about" className="hover:text-[#CCFF00] transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-[#CCFF00] transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-[#CCFF00] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.lime }}>Legal</h4>
              <ul className="space-y-2" style={{ color: COLORS.textSecondary }}>
                <li><Link href="/privacy" className="hover:text-[#CCFF00] transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-[#CCFF00] transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center" style={{ borderColor: COLORS.borderMedium, color: COLORS.textTertiary }}>
            <p>&copy; {new Date().getFullYear()} VitaLink. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-40px) translateX(15px);
          }
          66% {
            transform: translateY(30px) translateX(-15px);
          }
        }

        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
      `}</style>
    </>
  );
}