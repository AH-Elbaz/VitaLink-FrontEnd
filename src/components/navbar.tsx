"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

// VitaLink Innovative Theme Colors
const COLORS = {
  lime: '#CCFF00',
  darkBg: '#0A0A0A',
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
  textTertiary: '#808080',
  borderLight: 'rgba(204, 255, 0, 0.06)',
  borderMedium: 'rgba(204, 255, 0, 0.12)',
};

// Compensator for nav height
export const NAV_HEIGHT_COMPENSATOR = "60px";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="fixed w-full z-[400] top-0 left-0">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#CCFF00] to-[#A0FF00] text-black text-center py-2 w-full">
        <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-semibold">
          VitaLink — Get real-time AI insights for optimal athletic performance. Start your trial today!
        </p>
      </div>

      {/* Main Nav Bar */}
      <nav
        className="bg-black/80 backdrop-blur-md w-full h-[60px] px-6 flex justify-between items-center border-b"
        style={{ borderColor: COLORS.borderMedium }}
      >
        {/* Logo Section */}
        <div className="flex-1 flex justify-start items-center">
          <Link href="/" className="flex items-center" aria-label="VitaLink home">
            <Image
              src="https://images.ctfassets.net/h7cd7om3mauo/4xELSi3k9jKu9ujYInPolV/52abb35909c01660c5bf5d617262e41d/logo.png"
              alt="VitaLink logo"
              width={150}
              height={150}
              className="w-[80px] md:w-[90px] h-auto object-contain drop-shadow-[0_0_8px_rgba(204,255,0,0.3)]"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: isActive ? COLORS.lime : COLORS.textSecondary }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Auth Buttons & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-sm font-semibold transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            style={{ color: COLORS.lime }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/signup"
              className="px-4 py-2 bg-gradient-to-r from-[#CCFF00] to-[#A0FF00] text-black rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_15px_rgba(204,255,0,0.5)]"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 text-[#CCFF00] bg-transparent border rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-[#CCFF00]/10"
              style={{ borderColor: COLORS.borderMedium }}
            >
              Log In
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md w-full overflow-hidden transition-all duration-500 z-[500] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-semibold transition-colors duration-200"
                style={{ color: isActive ? COLORS.lime : COLORS.textPrimary }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-6 space-y-3 w-full px-6">
            <Link
              href="/signup"
              className="block px-4 py-2 bg-gradient-to-r from-[#CCFF00] to-[#A0FF00] text-black rounded-lg text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 text-[#CCFF00] border rounded-lg text-center font-semibold"
              style={{ borderColor: COLORS.borderMedium }}
              onClick={() => setIsOpen(false)}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}