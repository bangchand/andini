"use client";

import Container from "./components/Container";
import Hero from "./components/Hero";
import Section from "./components/Section";
import { motion } from "framer-motion";
import StatCard from "./components/StatCard";
import STATS from "@/data/stats";
import GalleryGrid from "./components/GalleryGrid";
import GALLERY from "@/data/gallery";
import LoveMatchSection from "./components/LoveMatchSection";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= APA ITU ================= */}
      <Section
        title="Apa Itu Pernikahan Dini?"
        subtitle="Ringkasan singkat mengenai isu penting ini"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-5 bg-pink-100/60 rounded-2xl shadow-sm"
          >
            <p className="text-sm leading-relaxed">
              Pernikahan dini adalah pernikahan yang melibatkan anak di bawah
              usia 18 tahun. Hal ini berdampak besar pada pendidikan, kesehatan,
              dan perkembangan psikologis anak. Banyak remaja kehilangan
              kesempatan untuk tumbuh dan membangun masa depan yang matang.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* ================= AKIBAT ================= */}
      <Section
        title="Akibat Pernikahan Dini"
        subtitle="Dampak umum yang sering terjadi"
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                t: "Putus sekolah",
                d: "Remaja kehilangan kesempatan pendidikan sehingga masa depannya terhambat.",
              },
              {
                t: "Risiko kesehatan ibu & bayi",
                d: "Kehamilan usia muda meningkatkan risiko komplikasi, kematian, dan gangguan kesehatan.",
              },
              {
                t: "Kekerasan dalam rumah tangga",
                d: "Ketidakdewasaan mental bisa memicu ketegangan dan kekerasan.",
              },
              {
                t: "Kesiapan mental belum matang",
                d: "Kesulitan mengambil keputusan penting dan mengelola rumah tangga.",
              },
              {
                t: "Kemiskinan jangka panjang",
                d: "Putus sekolah + sulit bekerja memicu siklus kemiskinan terus berulang.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="card p-4 bg-blue-100/60 rounded-2xl shadow-sm"
              >
                <Container>
                  <h3 className="font-bold">{item.t}</h3>
                  <p className="text-sm mt-1">{item.d}</p>
                </Container>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ================= DATA & FAKTA ================= */}
      <Section
        title="Data & Fakta"
        subtitle="Statistik singkat mengenai pernikahan dini"
      >
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <StatCard key={s.id} label={s.label} value={s.value} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ================= EDUKASI ================= */}
      <Section
        title="Edukasi & Aksi"
        subtitle="Langkah nyata untuk mencegah pernikahan dini"
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card p-5 bg-purple-100/60 rounded-2xl shadow-sm"
            >
              <h3 className="font-bold">Untuk remaja</h3>
              <ul className="mt-2 list-disc ml-5 text-sm">
                <li>Tingkatkan akses pendidikan & keterampilan</li>
                <li>Cari dukungan konseling bila dibutuhkan</li>
                <li>Pelajari hak dan keselamatan diri</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card p-5 bg-yellow-100/60 rounded-2xl shadow-sm"
            >
              <h3 className="font-bold">Untuk orangtua & komunitas</h3>
              <ul className="mt-2 list-disc ml-5 text-sm">
                <li>Dukung anak menyelesaikan pendidikan</li>
                <li>Ajak dialog soal perencanaan masa depan</li>
                <li>Buat kebijakan lokal yang melindungi anak</li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>
      <LoveMatchSection></LoveMatchSection>
      {/* ============ GALLERY SECTION ============ */}
      <Section title="Galeri Kegiatan">
        <Container>
          <GalleryGrid items={GALLERY.slice(0, 4)} />
        </Container>
      </Section>
    </>
  );
}
