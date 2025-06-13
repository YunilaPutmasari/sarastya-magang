import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    nama: "",
    ttl: "",
    gender: "",
    nik: "",
    domisili: "",
    telepon: "",
    gaji: "",
    alasan: "",
    keahlian: "",
    preferensi: "",
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
    linkedin: "",
    instagram: "",
    sumberInfo: "",
  });

  const [cv, setCv] = useState(null);
  const [foto, setFoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "cv") setCv(files[0]);
    if (name === "foto") setFoto(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (cv) data.append("cv", cv);
    if (foto) data.append("foto", foto);

    try {
      // Ganti URL di bawah dengan endpoint backend-mu
      const response = await fetch("/api/profiles", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Profil berhasil dibuat!");
      } else {
        alert("Gagal menyimpan profil.");
      }
    } catch (err) {
      console.error("Terjadi kesalahan:", err);
      alert("Terjadi kesalahan saat mengirim data.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="pl-8 pr-2 mt-8 w-full">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Buat Profil</h2>
        <p className="text-sm text-gray-600 mb-6">
          Kamu diwajibkan mengisi kolom yang ditandai dengan tanda bintang (*). CV dan foto wajib diunggah maksimal 200Kb.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 pb-10">
          {/* Input Nama */}
          <div>
            <label htmlFor="nama" className="block font-bold text-gray-700 mb-1">Nama *</label>
            <input type="text" name="nama" onChange={handleChange} required className="w-full border rounded-md p-2" />
          </div>

          {/* Tanggal Lahir, Gender */}
          <div>
            <label htmlFor="ttl" className="block font-bold text-gray-700 mb-1">Tempat & Tanggal Lahir *</label>
            <input type="text" name="ttl" onChange={handleChange} required className="w-full border rounded-md p-2" />
          </div>

          <div>
            <span className="block font-bold text-gray-700 mb-1">Jenis Kelamin *</span>
            <label className="mr-4">
              <input type="radio" name="gender" value="Laki-laki" onChange={handleChange} required /> Laki-laki
            </label>
            <label>
              <input type="radio" name="gender" value="Perempuan" onChange={handleChange} required /> Perempuan
            </label>
          </div>

          {/* Input Lain */}
          {[
            { name: "nik", label: "No KTP/NIK *", maxLength: 16 },
            { name: "domisili", label: "Kota Domisili *" },
            { name: "telepon", label: "Telepon Seluler/HP *" },
            { name: "gaji", label: "Gaji Saat Ini *" },
            { name: "keahlian", label: "Keahlian/Skill Spesifik *" },
            { name: "preferensi", label: "Preferensi Bidang Pekerjaan *" },
          ].map(({ name, label, maxLength }) => (
            <div key={name}>
              <label className="block font-bold text-gray-700 mb-1">{label}</label>
              <input
                type="text"
                name={name}
                onChange={handleChange}
                required
                maxLength={maxLength}
                className="w-full border rounded-md p-2"
              />
            </div>
          ))}

          <div>
            <label className="block font-bold text-gray-700 mb-1">Alasan ingin bekerja di TransVision *</label>
            <textarea name="alasan" onChange={handleChange} maxLength={200} required className="w-full border rounded-md p-2" />
          </div>

          {/* Pendidikan */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Pendidikan Terakhir</h3>
            <div className="grid grid-cols-2 gap-4">
              {["institusi", "tingkat", "tahunMulai", "tahunSelesai", "jurusan"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={field}
                  onChange={handleChange}
                  className="border rounded-md p-2"
                />
              ))}
            </div>
          </div>

          {/* Pengalaman Kerja */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Pengalaman Kerja</h3>
            {["perusahaan", "posisi", "deskripsiPekerjaan"].map((field) => (
              <input
                key={field}
                type={field === "deskripsiPekerjaan" ? "textarea" : "text"}
                name={field}
                placeholder={field}
                onChange={handleChange}
                className="w-full border rounded-md p-2 mb-2"
              />
            ))}
          </div>

          {/* Media Sosial */}
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="linkedin" placeholder="LinkedIn" onChange={handleChange} className="border rounded-md p-2" />
            <input type="text" name="instagram" placeholder="Instagram" onChange={handleChange} className="border rounded-md p-2" />
          </div>

          {/* Upload CV dan Foto */}
          <div>
            <label className="block font-bold text-gray-700 mb-1">Upload CV *</label>
            <input type="file" name="cv" onChange={handleFileChange} required accept=".pdf,.docx" />
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-1">Upload Foto *</label>
            <input type="file" name="foto" onChange={handleFileChange} required accept=".jpg,.jpeg,.png" />
          </div>

          {/* Sumber Info */}
          <div>
            <label className="block font-bold text-gray-700 mb-1">Darimana Anda mendapat info lowongan? *</label>
            <select name="sumberInfo" onChange={handleChange} required className="w-full border rounded-md p-2">
              <option value="">- Pilih -</option>
              <option value="Website">Website</option>
              <option value="Media Sosial">Media Sosial</option>
              <option value="Teman/Kerabat">Teman/Kerabat</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          {/* Tombol Submit */}
          <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg">
            Simpan Profil
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
