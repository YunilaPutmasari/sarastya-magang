export default function Dashboard() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Dashboard Admin</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-purple-600">
          <h2 className="text-lg font-semibold text-gray-700">Jumlah Gambar Beranda</h2>
          <p className="text-3xl font-bold text-purple-700">12</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-blue-600">
          <h2 className="text-lg font-semibold text-gray-700">Jumlah Gambar Galeri</h2>
          <p className="text-3xl font-bold text-blue-700">24</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-600">
          <h2 className="text-lg font-semibold text-gray-700">Lowongan Aktif</h2>
          <p className="text-3xl font-bold text-green-700">4</p>
        </div>
      </div>

      {/* <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Aktivitas Terbaru</h2>
        <ul className="bg-white shadow-md rounded-lg divide-y">
          <li className="p-4 hover:bg-gray-100">Admin menambahkan gambar ke Galeri</li>
          <li className="p-4 hover:bg-gray-100">Lowongan baru dipublikasikan</li>
          <li className="p-4 hover:bg-gray-100">Profil admin diperbarui</li>
        </ul>
      </div> */}
    </div>
  );
}
