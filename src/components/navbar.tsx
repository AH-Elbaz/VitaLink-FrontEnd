"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">
          Vitalink
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white font-semibold">
          {[
            { href: "/", label: "Home" },
            { href: "/how-it-works", label: "How It Works" },
            { href: "/dashboard", label: "Dashboard" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="relative group">
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-green-500 scale-x-0 origin-left transition-transform duration-500 group-hover:animate-underline"></span>
            </Link>
          ))}

          <div className="flex space-x-4">
            <Link
              href="/signup"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-900 transition"
            >
              Sign Up
            </Link>
            <Link
              href="/signin"
              className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-50 transition"
            >
              Sign In
            </Link>
          </div>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-3 font-semibold text-white">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/how-it-works" className="block">
            How It Works
          </Link>
          <Link href="/dashboard" className="block">
            Dashboard
          </Link>
          <Link
            href="/signup"
            className="block px-4 py-2 bg-green-600 text-white rounded-lg text-center"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="block px-4 py-2 border border-green-500 text-green-500 rounded-lg text-center"
          >
            Sign In
          </Link>
        </div>
      )}

      <style jsx>{`
        @keyframes underline {
          0% {
            transform: scaleX(0);
            opacity: 1;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
            opacity: 0;
          }
        }

          .group:hover span {
          animation: underline 0.6s ease-in-out forwards;
        }
      `}</style>
    </nav>
  );
}
