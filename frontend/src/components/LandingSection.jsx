export default function LandingSection() {
  const kegiatanImages = [
    { src: "/img/bahan1.jpg", alt: "Kegiatan 1" },
    { src: "/img/bahan2.webp", alt: "Kegiatan 2" },
    { src: "/img/bahan3.jpg", alt: "Kegiatan 3" },
    { src: "/img/bahan4.jpeg", alt: "Kegiatan 4" },
    { src: "/img/bahan3.jpg", alt: "Kegiatan 3" },
    { src: "/img/bahan4.jpeg", alt: "Kegiatan 4" },

  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 pt-32 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-4 tracking-tight transition-all duration-300 hover:scale-105">
          Galeri Kegiatan
        </h2>
        <p className="text-gray-700 text-lg mb-12">
          Dokumentasi kegiatan magang seru dan penuh pengalaman di{" "}
          <span className="font-semibold text-blue-600">Sarastya</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {kegiatanImages.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-[220px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
