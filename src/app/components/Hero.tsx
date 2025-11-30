"use client";
import Container from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import fotbarImage from "@/../public/images/fotbar.png"

export default function Hero(){
  return (
    <div className="py-8 px-5 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              ANDINI — Stop Pernikahan Dini
            </h1>
            <p className="mt-4 text-slate-700">Edukasi & aksi untuk melindungi anak dan remaja dari dampak pernikahan di usia anak.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#edukasi" className="px-4 py-3 rounded-2xl font-bold card shadow-soft">Pelajari Sekarang</a>
              <a href="/documentation" className="px-4 py-3 rounded-2xl font-semibold card">Dokumentasi</a>
            </div>
          </motion.div>

          {/* <motion.div initial={{ opacity:0, scale:0.98 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.7 }} className="flex justify-center">
            <div className="illus card flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <rect width="120" height="120" rx="16" fill="#fef9c3"/>
                <circle cx="38" cy="45" r="18" fill="#fbcfe8" />
                <circle cx="82" cy="45" r="18" fill="#bfdbfe" />
                <rect x="22" y="72" width="76" height="18" rx="6" fill="#e9d5ff" />
              </svg>
            </div>
          </motion.div> */}
          <div className="flex justify-center flex-col items-center">
            <Image src={fotbarImage} alt="splash" width={100} height={100} className="w-full"/>
            <p className="font-semibold">"Stop Nikah Dini, Selamatkan Generasi"</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
