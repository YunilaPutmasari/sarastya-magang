import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile() {
//   const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    nama: "",
    ttl: "",
    gender: "",
    nik: "",
    domisili: "",
    hp: "",
    gaji: "",
    alasan: "",
    skill: "",
    bidang: "",
    institusi: "",
    tahunMulai: "",
    tahunSelesai: "",
    tingkat: "",
    jurusan: "",
    perusahaan: "",
    mulaiKerja: "",
    selesaiKerja: "",
    posisi: "",
    deskripsiPekerjaan: "",
    whatsapp: "",
    linkedin: "",
    twitter: "",
    youtube: "",
    facebook: "",
    instagram: "",
    infoLowongan: "",
  });

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-lg font-medium text-gray-700">
//           Silakan login terlebih dahulu untuk mengakses halaman profil.
//         </p>
//       </div>
//     );
//   }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profil disimpan!");
    // Kirim ke backend
  };

 return (
  <>
    <Navbar />
   
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Profil</h2>
        <p className="text-sm text-gray-600 mb-6">
          Kamu diwajibkan mengisi kolom yang ditandai dengan tanda bintang (*). CV dan foto wajib diunggah maksimal 200Kb.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nama */}
          <div>
            <label htmlFor="nama" className="block font-bold text-gray-700 mb-1">Nama *</label>
            <input type="text" name="nama" id="nama" onChange={handleChange} required placeholder="Nama Lengkap"
              className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          {/* Tempat & Tanggal Lahir */}
          <div>
            <label htmlFor="ttl" className="block font-bold text-gray-700 mb-1">Tempat & Tanggal Lahir *</label>
            <input type="text" name="ttl" id="ttl" onChange={handleChange} required placeholder="dd-mm-yyyy"
              className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          {/* Jenis Kelamin */}
          <div>
            <span className="block font-bold text-gray-700 mb-1">Jenis Kelamin *</span>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" value="Laki-laki" onChange={handleChange} required />
                Laki-laki
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" value="Perempuan" onChange={handleChange} required />
                Perempuan
              </label>
            </div>
          </div>

          {/* Data Kontak */}
          {[
            { name: "nik", label: "No KTP/NIK *", placeholder: "16 digit No KTP/NIK", maxLength: 16 },
            { name: "domisili", label: "Kota Domisili *" },
            { name: "telepon", label: "Telepon Seluler/HP *" },
            { name: "gaji", label: "Gaji Saat Ini *" },
            { name: "keahlian", label: "Keahlian/Skill Spesifik *" },
            { name: "preferensi", label: "Preferensi Bidang Pekerjaan *" },
          ].map(({ name, label, placeholder, maxLength }) => (
            <div key={name}>
              <label className="block font-bold text-gray-700 mb-1">{label}</label>
              <input
                type="text"
                name={name}
                placeholder={placeholder || label}
                maxLength={maxLength}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          ))}

          {/* Alasan */}
          <div>
            <label className="block font-bold text-gray-700 mb-1">Alasan ingin bekerja di TransVision *</label>
            <textarea
              name="alasan"
              onChange={handleChange}
              maxLength={200}
              required
              placeholder="Maksimal 200 karakter"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Pendidikan Terakhir */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Pendidikan Terakhir</h3>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="institusi" placeholder="Nama Institusi" onChange={handleChange} className="border border-gray-300 rounded-md p-2" />
              <input type="text" name="tingkat" placeholder="- Tingkat -" onChange={handleChange} className="border border-gray-300 rounded-md p-2" />
              <input type="text" name="tahunMulai" placeholder="Tahun Mulai" onChange={handleChange} className="border border-gray-300 rounded-md p-2" />
              <input type="text" name="tahunSelesai" placeholder="Tahun Selesai" onChange={handleChange} className="border border-gray-300 rounded-md p-2" />
              <input type="text" name="jurusan" placeholder="Jurusan" onChange={handleChange} className="border border-gray-300 rounded-md p-2 col-span-2" />
            </div>
          </div>

          {/* Pengalaman Kerja */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Pengalaman Kerja Terakhir (jika ada)</h3>
            <input type="text" name="perusahaan" placeholder="Nama Perusahaan" onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mb-2" />
            <input type="text" name="posisi" placeholder="Posisi Terakhir" onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mb-2" />
            <textarea name="deskripsiPekerjaan" placeholder="Deskripsi Pekerjaan (maks. 200 karakter)" maxLength={200} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          {/* Media Sosial */}
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="linkedin" placeholder="LinkedIn" onChange={handleChange} className="border border-gray-300 rounded-md p-2" />
            <input type="text" name="instagram" placeholder="Instagram" onChange={handleChange} className="border border-gray-300 rounded-md p-2" />
          </div>

          {/* Upload CV & Foto */}
          <div>
            <label className="block font-bold text-gray-700 mb-1">Upload CV *</label>
            <input type="file" name="cv" accept=".pdf,.docx,.doc" onChange={handleChange} required className="w-full" />
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-1">Upload Foto *</label>
            <input type="file" name="foto" accept=".jpg,.jpeg,.png" onChange={handleChange} required className="w-full" />
          </div>

          {/* Sumber Info */}
          <div>
            <label className="block font-bold text-gray-700 mb-1">Darimana Anda mendapatkan info lowongan? *</label>
            <select name="sumberInfo" onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2">
              <option value="">- Pilih -</option>
              <option value="Website">Website</option>
              <option value="Media Sosial">Media Sosial</option>
              <option value="Teman/Kerabat">Teman/Kerabat</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
            Simpan
          </button>
        </form>
      </div>
    
    <Footer />
  </>
);
}
