"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
=======
>>>>>>> 32f454d55a7577d1e7f975c76c42db847b122e02

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
<<<<<<< HEAD
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="VitaLink logo"
            className="w-[180px] md:w-[200px] object-contain h-[60px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-semibold">
=======
        <Link href="/" className="text-2xl font-bold text-green-600">
          Vitalink
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white font-semibold">
>>>>>>> 32f454d55a7577d1e7f975c76c42db847b122e02
          {[
            { href: "/", label: "Home" },
            { href: "/how-it-works", label: "How It Works" },
            { href: "/dashboard", label: "Dashboard" },
          ].map((link) => (
<<<<<<< HEAD
        <Link
         key={link.href}
         href={link.href}
         onMouseEnter={() => setHoveredLink(link.href)}
         onMouseLeave={() => setHoveredLink(null)}
         className={`relative group overflow-hidden transition-colors duration-200 ${
         hoveredLink && hoveredLink !== link.href ? "text-gray-300" : "text-white"
         }`}
        >
  {link.label}
      <span
     className={`absolute bottom-0 h-[2px] w-0 bg-green-500 transition-all duration-1000
     ${hoveredLink === link.href ? "left-full translate-x-[300%] w-[200px]" : "left-0"} `}
       ></span>
  </Link>

          ))}

         
          <div className="flex space-x-4">
            <Link
              href="/signup"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition"
=======
            <Link key={link.href} href={link.href} className="relative group">
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-green-500 scale-x-0 origin-left transition-transform duration-500 group-hover:animate-underline"></span>
            </Link>
          ))}

          <div className="flex space-x-4">
            <Link
              href="/signup"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-900 transition"
>>>>>>> 32f454d55a7577d1e7f975c76c42db847b122e02
            >
              Sign Up
            </Link>
            <Link
<<<<<<< HEAD
              href="/login"
              className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-50 transition"
            >
              Log In
=======
              href="/signin"
              className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-50 transition"
            >
              Sign In
>>>>>>> 32f454d55a7577d1e7f975c76c42db847b122e02
            </Link>
          </div>
        </div>

<<<<<<< HEAD
        
=======
>>>>>>> 32f454d55a7577d1e7f975c76c42db847b122e02
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
<<<<<<< HEAD
      <div
        className={`md:hidden bg-black px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] pb-4" : "max-h-0"
        }`}
      >
        <div className="space-y-3 font-semibold text-white">
          <Link href="/" className="block p-4 border-b border-gray-700">
            Home
          </Link>
          <Link href="/how-it-works" className="block p-4 border-b border-gray-700">
            How It Works
          </Link>
          <Link href="/dashboard" className="block p-4">
=======
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-3 font-semibold text-white">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/how-it-works" className="block">
            How It Works
          </Link>
          <Link href="/dashboard" className="block">
>>>>>>> 32f454d55a7577d1e7f975c76c42db847b122e02
            Dashboard
          </Link>
          <Link
            href="/signup"
            className="block px-4 py-2 bg-green-600 text-white rounded-lg text-center"
          >
            Sign Up
          </Link>
          <Link
<<<<<<< HEAD
            href="/login"
            className="block px-4 py-2 border border-green-500 text-green-500 rounded-lg text-center"
          >
            Log In
          </Link>
        </div>
      </div>
=======
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
>>>>>>> 32f454d55a7577d1e7f975c76c42db847b122e02
    </nav>
  );
}
