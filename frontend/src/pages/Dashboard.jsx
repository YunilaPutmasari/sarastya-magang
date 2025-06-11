import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "../sidebar";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 space-y-10 px-4 md:px-8 lg:px-12 mt-10">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-3xl font-bold text-purple-800">Dashboard Admin</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-purple-600">
            <h2 className="text-lg font-semibold text-gray-700">Jumlah Gambar Beranda</h2>
            <p className="text-3xl font-bold text-purple-700 mt-2">12</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-blue-600">
            <h2 className="text-lg font-semibold text-gray-700">Jumlah Gambar Galeri</h2>
            <p className="text-3xl font-bold text-blue-700 mt-2">24</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-600">
            <h2 className="text-lg font-semibold text-gray-700">Lowongan Aktif</h2>
            <p className="text-3xl font-bold text-green-700 mt-2">4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
