"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="VitaLink logo"
            width={200}
            height={60}
            className="w-[180px] md:w-[200px] object-contain h-[60px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-semibold">
          {[
            { href: "/", label: "Home" },
            { href: "/how-it-works", label: "How It Works" },
            { href: "/dashboard", label: "Dashboard" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`relative group overflow-hidden transition-colors duration-200 ${
                hoveredLink && hoveredLink !== link.href
                  ? "text-gray-300"
                  : "text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 h-[2px] w-0 bg-green-500 transition-all duration-1000 ${
                  hoveredLink === link.href
                    ? "left-full translate-x-[300%] w-[200px]"
                    : "left-0"
                }`}
              ></span>
            </Link>
          ))}

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <Link
              href="/signup"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-50 transition"
            >
              Log In
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] pb-4" : "max-h-0"
        }`}
      >
        <div className="space-y-3 font-semibold text-white">
          <Link href="/" className="block p-4 border-b border-gray-700">
            Home
          </Link>
          <Link
            href="/how-it-works"
            className="block p-4 border-b border-gray-700"
          >
            How It Works
          </Link>
          <Link href="/dashboard" className="block p-4">
            Dashboard
          </Link>
          <Link
            href="/signup"
            className="block px-4 py-2 bg-green-600 text-white rounded-lg text-center"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="block px-4 py-2 border border-green-500 text-green-500 rounded-lg text-center"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
}
