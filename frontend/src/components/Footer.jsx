import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-sarastya-500 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info Perusahaan */}
        <div>
          <h2 className="text-xl font-bold mb-4">Sarastya Technology</h2>
          <p className="text-sm">
            Kami berkomitmen dalam mencetak generasi profesional melalui
            program magang berbasis industri.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h2 className="text-xl font-bold mb-4">Kontak Kami</h2>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2" />
              Jl. Inovasi No. 123, Malang, Indonesia
            </li>
            <li className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2" />
              +62 812-3456-7890
            </li>
            <li className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              info@sarastya.com
            </li>
          </ul>
        </div>

        {/* Tautan Cepat */}
        <div>
          <h2 className="text-xl font-bold mb-4">Tautan Cepat</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">Beranda</a>
            </li>
            <li>
              <a href="/tentangKami" className="hover:underline">Tentang Kami</a>
            </li>
            <li>
              <a href="/lowongan" className="hover:underline">Lowongan</a>
            </li>
            <li>
              <a href="/galeri" className="hover:underline">Galeri</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-300 mt-8">
        © 2025 Sarastya Technology. All rights reserved.
      </div>
    </footer>
  );
}
