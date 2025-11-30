"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import andini from "@/../public/images/andini.jpg";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 nav-blur border-b border-transparent">
      <svg
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        width="100%"
        height="120"
        aria-hidden="true"
        className="cloud-divider rotate-180 absolute z-[-1]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f3f4f6" />
          </linearGradient>
        </defs>

        <path
          d="M0 80
             C60 40, 140 40, 200 68
             C260 30, 360 28, 420 62
             C480 24, 600 24, 680 60
             L1200 60
             L1200 160
             L0 160
             Z"
          fill="url(#g)"
        />

        <g transform="translate(40,30)">
          <ellipse cx="60" cy="50" rx="72" ry="48" fill="#fff" opacity="1" />
          <ellipse cx="140" cy="30" rx="92" ry="58" fill="#fff" opacity="1" />
          <ellipse cx="220" cy="56" rx="70" ry="44" fill="#fff" opacity="1" />
        </g>

        <path
          d="M0 110 C120 80, 260 82, 420 104 C600 124, 840 110, 1200 110 L1200 160 L0 160 Z"
          fill="#000"
          opacity="0.03"
        />
      </svg>
      <div className="max-w-screen-xl px-4 mx-auto flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl card flex items-center justify-center">
            <Image src={andini} alt="Andini Logo" width={32} height={32} />
          </div>
          <div>
            <div className="text-lg font-extrabold">ANDINI</div>
            <div className="text-xs -mt-1 text-slate-500">
              Anti Pernikahan Dini
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="font-semibold">
            Home
          </Link>
          <Link href="/about" className="font-semibold">
            About
          </Link>
          <Link href="/documentation" className="font-semibold">
            Documentation
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-lg card"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="md:hidden px-4 pb-6"
          >
            <div className="bg-white rounded-2xl p-4 card space-y-2">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block font-semibold"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="block font-semibold"
              >
                About
              </Link>
              <Link
                href="/documentation"
                onClick={() => setOpen(false)}
                className="block font-semibold"
              >
                Documentation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
