import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Lowongan() {
  const lowonganList = [
    {
      id: 1,
      posisi: "Frontend Developer",
      deskripsi:
        "Bertanggung jawab untuk membuat antarmuka pengguna yang responsif dan menarik.",
      kualifikasi: [
        "Menguasai HTML, CSS, JavaScript",
        "Pengalaman dengan React atau Vue",
        "Mampu bekerja secara tim",
      ],
    },
    {
      id: 2,
      posisi: "Backend Developer",
      deskripsi:
        "Mengembangkan API dan logika backend untuk aplikasi internal dan klien.",
      kualifikasi: [
        "Menguasai Node.js atau Laravel",
        "Mengerti konsep RESTful API",
        "Berpengalaman dengan database (MySQL/PostgreSQL)",
      ],
    },
    {
      id: 3,
      posisi: "UI/UX Designer",
      deskripsi:
        "Merancang tampilan dan pengalaman pengguna untuk berbagai produk digital Sarastya.",
      kualifikasi: [
        "Menguasai Figma atau Adobe XD",
        "Punya sense of design yang kuat",
        "Dapat membuat prototype dan wireframe",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-800">Lowongan Magang Tersedia</h2>
        <p className="mb-8 text-gray-700">
          Berikut adalah daftar lowongan magang di <span className="font-semibold text-purple-700">Sarastya Technology</span>. Pilih posisi yang sesuai dan segera lamar!
        </p>

        <div className="space-y-8">
          {lowonganList.map((item) => (
            <div
              key={item.id}
              className="border border-purple-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-purple-900 mb-2">{item.posisi}</h3>
              <p className="text-gray-800 mb-4">{item.deskripsi}</p>

              <div>
                <h4 className="font-semibold text-purple-700 mb-1">Kualifikasi:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {item.kualifikasi.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <button className="mt-4 inline-block bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
                Lamar Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
