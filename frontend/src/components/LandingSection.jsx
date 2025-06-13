import { useRef } from "react";
import { motion } from "framer-motion";
export default function LandingSection() {
  const galeriRef = useRef(null);

  const scrollToGaleri = () => {
    galeriRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const kegiatanImages = [
    { src: "/img/bahan1.jpg", alt: "Kegiatan 1" },
    { src: "/img/bahan2.webp", alt: "Kegiatan 2" },
    { src: "/img/bahan3.jpg", alt: "Kegiatan 3" },
    { src: "/img/bahan4.jpeg", alt: "Kegiatan 4" },
    { src: "/img/bahan3.jpg", alt: "Kegiatan 5" },
    { src: "/img/bahan4.jpeg", alt: "Kegiatan 6" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-100 py-28 px-6 text-center min-h-screen flex items-center justify-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-6">
            Magang Berkualitas di <span className="text-purple-600">Sarastya</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Dapatkan pengalaman kerja nyata, bimbingan profesional, dan kesempatan membangun portofolio yang solid.
          </p>
          <button
            onClick={scrollToGaleri}
            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-700 transition"
          >
            Lihat Galeri Kegiatan
          </button>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Mengapa Pilih Magang di Sarastya?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Bimbingan Profesional</h3>
              <p className="text-gray-700">Dibimbing langsung oleh mentor berpengalaman dari berbagai bidang.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Proyek Nyata</h3>
              <p className="text-gray-700">Ikut serta dalam proyek perusahaan yang berdampak langsung.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Sertifikat & Rekomendasi</h3>
              <p className="text-gray-700">Dapatkan sertifikat dan surat rekomendasi untuk karier masa depanmu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Kegiatan */}
      <section
        ref={galeriRef}
        className="bg-gradient-to-b from-blue-50 to-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4">Galeri Kegiatan</h2>
          <p className="text-gray-700 text-lg mb-12">
            Dokumentasi kegiatan magang seru dan penuh pengalaman di{" "}
            <span className="font-semibold text-blue-600">Sarastya</span>.
          </p>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {kegiatanImages.map((item, index) => {
    const isEven = index % 2 === 0;
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: isEven ? -100 : 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-[220px] object-cover"
        />
      </motion.div>
    );
  })}
</div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Apa Kata Mereka?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4">
                “Magang di Sarastya benar-benar membuka wawasan saya. Saya belajar langsung dari tim profesional dan mendapat pengalaman tak ternilai.”
              </p>
              <h4 className="font-bold text-blue-800">Rina Andini, Mahasiswa TI</h4>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4">
                “Proyek nyata yang saya kerjakan membantu saya membangun portofolio. Sangat direkomendasikan untuk mahasiswa yang ingin siap kerja.”
              </p>
              <h4 className="font-bold text-blue-800">Budi Prasetyo, Mahasiswa SI</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-10">Pertanyaan Umum</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-blue-700">1. Siapa yang bisa mendaftar?</h3>
              <p className="text-gray-700">Mahasiswa dari semua jurusan yang ingin belajar dan berkembang di dunia profesional.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-700">2. Apakah magang ini dibayar?</h3>
              <p className="text-gray-700">Untuk saat ini magang bersifat non-paid, tetapi penuh pengalaman dan rekomendasi kerja.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-700">3. Berapa lama durasi magang?</h3>
              <p className="text-gray-700">Durasi magang antara 1-3 bulan, tergantung program yang diikuti.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Daftar */}
      <section className="bg-purple-700 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6">Siap Bergabung?</h2>
          <p className="text-lg mb-8">
            Daftarkan dirimu sekarang dan mulailah perjalanan magangmu bersama Sarastya.
          </p>
          <a
            href="/lowongan"
            className="bg-white text-purple-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition"
          >
            Daftar Sekarang
          </a>
        </div>
      </section>
    </>
  );
}
