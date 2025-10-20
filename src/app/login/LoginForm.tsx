"use client";
import { useState } from "react";
import { useAuth } from "@/app/features/auth/hooks/useAuth";
import Link from "next/link";
import Image from 'next/image';

// VitaLink Innovative Theme
const COLORS = {
  lime: '#CCFF00',
  darkBg: '#0A0A0A',
  darkCard: '#0F0F0F',
  darkInput: '#141414',
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
  textTertiary: '#808080',
  borderLight: 'rgba(204, 255, 0, 0.06)',
  borderMedium: 'rgba(204, 255, 0, 0.12)',
  borderStrong: 'rgba(204, 255, 0, 0.2)',
  accentGlow: 'rgba(204, 255, 0, 0.08)',
};

export default function LoginForm() {
  const { login, loading, error } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(name, password);
  };

  return (
    <div 
      className="min-h-screen w-full flex relative overflow-hidden"
      style={{ backgroundColor: COLORS.darkBg }}
    >
      {/* Animated Background with Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, ${COLORS.lime}30, transparent 70%)`,
            filter: 'blur(100px)',
            animation: 'float 8s ease-in-out infinite',
          }}
        ></div>
        
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${COLORS.lime}20, transparent 70%)`,
            filter: 'blur(100px)',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        ></div>

        <div 
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, ${COLORS.lime}15, transparent 70%)`,
            filter: 'blur(80px)',
            animation: 'float 12s ease-in-out infinite',
          }}
        ></div>

        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, ${COLORS.lime} 25%, ${COLORS.lime} 26%, transparent 27%, transparent 74%, ${COLORS.lime} 75%, ${COLORS.lime} 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, ${COLORS.lime} 25%, ${COLORS.lime} 26%, transparent 27%, transparent 74%, ${COLORS.lime} 75%, ${COLORS.lime} 76%, transparent 77%, transparent)
            `,
            backgroundSize: '80px 80px',
            animation: 'drift 20s linear infinite',
          }}
        ></div>

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={COLORS.lime} stopOpacity="0" />
              <stop offset="50%" stopColor={COLORS.lime} stopOpacity="0.3" />
              <stop offset="100%" stopColor={COLORS.lime} stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#lineGradient)" strokeWidth="2" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#lineGradient)" strokeWidth="2" />
          <circle cx="50%" cy="50%" r="30%" fill="none" stroke="url(#lineGradient)" strokeWidth="1" />
        </svg>
      </div>

      {/* Left Side - Animated Content */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-16 relative z-10">
        {/* Logo */}
        <div>
          <Image 
            src="/images/logo.png" 
            alt="VitaLink" 
            width={160} 
            height={45} 
            className="object-contain"
            style={{ filter: `drop-shadow(0 0 15px ${COLORS.lime}40)` }}
          />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div>
            <h1 
              className="text-6xl font-light leading-tight mb-6"
              style={{ 
                color: COLORS.textPrimary,
                letterSpacing: '-1px',
                fontWeight: 300
              }}
            >
              Unlock Your Peak Performance
            </h1>
            
            <p 
              className="text-xl font-light max-w-lg"
              style={{ 
                color: COLORS.textSecondary,
                lineHeight: '1.8',
                letterSpacing: '0.3px'
              }}
            >
              Experience the future of athletic optimization with real-time biometric insights and AI-powered recovery guidance.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4 pt-4">
            {[
              { icon: "⚡", title: "Real-Time Biometrics", desc: "10+ vital metrics tracked continuously" },
              { icon: "🧠", title: "AI Intelligence", desc: "Personalized insights powered by machine learning" },
              { icon: "🔒", title: "Enterprise Security", desc: "Bank-grade encryption and privacy protection" }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-start space-x-4 p-4 rounded-lg backdrop-blur-sm transition-all duration-300"
                style={{
                  backgroundColor: `${COLORS.lime}05`,
                  borderColor: COLORS.borderLight,
                  border: `1px solid ${COLORS.borderLight}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${COLORS.lime}10`;
                  e.currentTarget.style.borderColor = COLORS.borderMedium;
                  e.currentTarget.style.boxShadow = `0 0 20px ${COLORS.lime}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${COLORS.lime}05`;
                  e.currentTarget.style.borderColor = COLORS.borderLight;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h3 
                    className="font-semibold text-sm mb-1"
                    style={{ color: COLORS.textPrimary, letterSpacing: '0.5px' }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-sm font-light"
                    style={{ color: COLORS.textTertiary }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: COLORS.borderLight }}>
          {[
            { number: "50K+", label: "Active Athletes" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div 
                className="text-2xl font-light mb-2"
                style={{ color: COLORS.lime, letterSpacing: '-0.5px' }}
              >
                {stat.number}
              </div>
              <p 
                className="text-xs font-light"
                style={{ color: COLORS.textTertiary, letterSpacing: '0.3px' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative z-10">
        <div className="w-full max-w-md">
          {/* Form Container with Glassmorphism */}
          <div 
            className="rounded-3xl border backdrop-blur-2xl p-12 relative overflow-hidden group"
            style={{
              backgroundColor: `${COLORS.darkCard}E0`,
              borderColor: COLORS.borderMedium,
              boxShadow: `
                0 25px 50px rgba(0, 0, 0, 0.6),
                0 0 1px ${COLORS.borderStrong},
                inset 0 1px 0 ${COLORS.borderLight}
              `,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated Border Glow */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${COLORS.lime}20, transparent 70%)`,
                pointerEvents: 'none',
              }}
            ></div>

            {/* Top Accent Line */}
            <div 
              className="absolute top-0 left-0 right-0 h-[1px] rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${COLORS.lime}60, transparent)`,
                boxShadow: `0 0 20px ${COLORS.lime}30`
              }}
            ></div>

            {/* Form Header */}
            <div className="text-center mb-12 relative z-10">
              <div 
                className="inline-block mb-6 p-4 rounded-2xl"
                style={{
                  backgroundColor: `${COLORS.lime}10`,
                  border: `1px solid ${COLORS.borderMedium}`,
                }}
              >
                <span className="text-3xl">🔐</span>
              </div>
              
              <h1 
                className="text-4xl font-light mb-3"
                style={{ 
                  color: COLORS.textPrimary,
                  letterSpacing: '-0.8px',
                  fontWeight: 300
                }}
              >
                Welcome Back
              </h1>
              <p 
                className="text-sm font-light"
                style={{ 
                  color: COLORS.textTertiary,
                  letterSpacing: '0.4px'
                }}
              >
                Access your personalized performance dashboard
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Email Field */}
              <div className="space-y-3">
                <label 
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider"
                  style={{ 
                    color: focusedField === 'name' ? COLORS.lime : COLORS.textSecondary,
                    letterSpacing: '0.8px',
                    transition: 'color 0.3s ease'
                  }}
                >
                  User ID
                </label>
                <div className="relative group/input">
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your user ID"
                    required
                    className="w-full px-5 py-4 rounded-xl font-light text-sm transition-all duration-300 outline-none relative z-10"
                    style={{
                      backgroundColor: COLORS.darkInput,
                      borderColor: focusedField === 'name' ? COLORS.lime : COLORS.borderLight,
                      border: `1px solid ${focusedField === 'name' ? COLORS.lime : COLORS.borderLight}`,
                      color: COLORS.textPrimary,
                      boxShadow: focusedField === 'name' ? `0 0 0 4px ${COLORS.accentGlow}, inset 0 1px 2px rgba(0,0,0,0.3)` : 'inset 0 1px 2px rgba(0,0,0,0.3)',
                    }}
                  />
                  {name && (
                    <div 
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: COLORS.lime }}
                    ></div>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label 
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-wider"
                    style={{ 
                      color: focusedField === 'password' ? COLORS.lime : COLORS.textSecondary,
                      letterSpacing: '0.8px',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    Authentication Key
                  </label>
                  <Link 
                    href="/forgot-password"
                    className="text-xs font-light transition-colors duration-200"
                    style={{ color: COLORS.textTertiary }}
                    onMouseEnter={(e) => e.currentTarget.style.color = COLORS.lime}
                    onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textTertiary}
                  >
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="••••••••••"
                    required
                    className="w-full px-5 py-4 rounded-xl font-light text-sm transition-all duration-300 outline-none pr-14"
                    style={{
                      backgroundColor: COLORS.darkInput,
                      borderColor: focusedField === 'password' ? COLORS.lime : COLORS.borderLight,
                      border: `1px solid ${focusedField === 'password' ? COLORS.lime : COLORS.borderLight}`,
                      color: COLORS.textPrimary,
                      boxShadow: focusedField === 'password' ? `0 0 0 4px ${COLORS.accentGlow}, inset 0 1px 2px rgba(0,0,0,0.3)` : 'inset 0 1px 2px rgba(0,0,0,0.3)',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase transition-colors duration-200"
                    style={{ 
                      color: COLORS.textTertiary,
                      letterSpacing: '0.5px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = COLORS.lime}
                    onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textTertiary}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 mt-8 rounded-xl font-semibold uppercase tracking-wider transition-all duration-300 text-black text-sm relative overflow-hidden group/btn"
                style={{
                  backgroundColor: loading ? `${COLORS.lime}70` : COLORS.lime,
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  letterSpacing: '0.8px',
                  boxShadow: `0 12px 32px ${COLORS.lime}35, inset 0 -2px 4px rgba(0,0,0,0.2)`,
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.boxShadow = `0 16px 48px ${COLORS.lime}50, inset 0 -2px 4px rgba(0,0,0,0.2)`;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.boxShadow = `0 12px 32px ${COLORS.lime}35, inset 0 -2px 4px rgba(0,0,0,0.2)`;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {loading ? "Authenticating..." : "Initiate Login"}
              </button>

              {/* Divider */}
              <div className="relative my-8">
                <div 
                  className="absolute inset-0 flex items-center"
                  style={{ borderTopColor: COLORS.borderLight, borderTopWidth: '1px' }}
                ></div>
                <div className="relative flex justify-center">
                  <span 
                    className="px-3 text-xs font-light"
                    style={{ 
                      backgroundColor: COLORS.darkCard,
                      color: COLORS.textTertiary,
                      letterSpacing: '0.3px'
                    }}
                  >
                    New user?
                  </span>
                </div>
              </div>

              {/* Sign Up Button */}
              <Link 
                href="/signup"
                className="block w-full py-4 rounded-xl font-semibold uppercase tracking-wider text-center transition-all duration-300 border text-sm relative overflow-hidden group/signup"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: COLORS.borderMedium,
                  color: COLORS.lime,
                  letterSpacing: '0.8px',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${COLORS.lime}10`;
                  e.currentTarget.style.borderColor = COLORS.lime;
                  e.currentTarget.style.boxShadow = `0 0 20px ${COLORS.lime}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = COLORS.borderMedium;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Create Account
              </Link>

              {/* Error Message */}
              {error && (
                <div 
                  className="mt-6 p-4 rounded-lg text-sm font-light text-center border animate-pulse"
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                    borderColor: 'rgba(239, 68, 68, 0.35)',
                    color: '#FCA5A5',
                    letterSpacing: '0.3px'
                  }}
                >
                  {error}
                </div>
              )}
            </form>

            {/* Bottom Accent Line */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[1px] rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${COLORS.lime}60, transparent)`,
                boxShadow: `0 0 20px ${COLORS.lime}30`
              }}
            ></div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-center space-y-3">
            <p 
              className="text-xs font-light"
              style={{ color: COLORS.textTertiary, letterSpacing: '0.3px' }}
            >
              By signing in, you agree to our{" "}
              <Link 
                href="/terms"
                className="transition-colors duration-200 font-semibold"
                style={{ color: COLORS.lime }}
              >
                Terms
              </Link>
              {" "}and{" "}
              <Link 
                href="/privacy"
                className="transition-colors duration-200 font-semibold"
                style={{ color: COLORS.lime }}
              >
                Privacy
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-30px) translateX(10px);
          }
          66% {
            transform: translateY(20px) translateX(-10px);
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

        input::placeholder {
          color: ${COLORS.textTertiary};
          opacity: 0.4;
        }

        @media (max-width: 1024px) {
          input, button {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}