import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TentangKami() {
  return (
    <>
      <Navbar />
      <div className="overflow-y-auto">
        {/* Section Tentang Kami */}
        <div className="p-8 max-w-5xl mx-auto bg-white shadow-lg rounded-2xl my-12">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-6 text-center">Tentang Kami</h2>
          <img src="/img/bahan2.webp" alt="Internship Illustration" className="w-full h-auto object-contain mb-8 " style={{ borderRadius: "20px" }} />

          <p className="mb-6 text-gray-800 leading-relaxed text-justify ">
            <strong>Sarastya</strong> berkomitmen mencetak generasi profesional melalui <strong>Closed Recruitment</strong> berbasis program magang. Kami membuka peluang besar bagi peserta yang <strong>qualified</strong> untuk menjadi bagian dari <strong>Sarastya</strong>.
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed text-justify">
            Program magang mencakup: <strong>PKL/Prakerin</strong>, <strong>Magang Pra Profesional</strong>, dan <strong>Magang Profesional</strong>. Kami menyambut hangat setiap peserta: <span className="italic text-purple-600">Welcome to the TEAM!</span>
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed text-justify">
            <strong>Sarastya Internship Academy</strong> dirancang untuk mengembangkan <strong>kompetensi</strong>, <strong>kemampuan</strong>, dan <strong>kapasitas</strong> peserta, baik dari siswa SMK maupun mahasiswa, agar siap menghadapi dunia kerja yang sebenarnya.
          </p>

          <p className="text-gray-800 leading-relaxed text-justify">
            Melalui program ini, peserta akan dibimbing agar mampu bersikap profesional dan berkembang sesuai bidang keahliannya di lingkungan industri.
          </p>
        </div>

        {/* Section Tahapan Magang */}
        <div className="bg-purple-50 py-12">
          <h3 className="text-3xl font-bold text-purple-800 text-center mb-8">Peluang Karir di Sarastya</h3>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <img src="/img/bahan1.jpg" alt="PKL" className="w-20 h-20 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-center text-purple-700 mb-2">PKL / Prakerin</h4>
              <p className="text-gray-700 text-sm text-center">Program untuk siswa SMK guna mengenal dunia kerja nyata dan membangun dasar keterampilan teknis.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <img src="/img/bahan3.jpg" alt="Pra Profesional" className="w-20 h-20 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-center text-purple-700 mb-2">Magang Pra Profesional</h4>
              <p className="text-gray-700 text-sm text-center">Diperuntukkan bagi mahasiswa tingkat akhir yang ingin mengembangkan kompetensinya secara intensif.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <img src="/img/bahan4.jpeg" alt="Magang Profesional" className="w-20 h-20 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-center text-purple-700 mb-2">Magang Profesional</h4>
              <p className="text-gray-700 text-sm text-center">Bagi peserta dengan keahlian khusus, untuk terjun langsung dalam proyek nyata perusahaan.</p>
            </div>
          </div>
        </div>

        {/* Section Penutup */}
        <div className="text-center py-12 bg-white">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">Welcome to the TEAM!</h3>
          <p className="text-gray-700 max-w-2xl mx-auto px-4">
            Bersiaplah untuk menjadi bagian dari perjalanan luar biasa bersama <strong>Sarastya</strong>. Jadilah profesional masa depan yang tangguh dan inspiratif.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
