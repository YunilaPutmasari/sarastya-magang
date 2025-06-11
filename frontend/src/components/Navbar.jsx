import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"; // ← INI WAJIB ADA

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
 <header className="bg-gradient-to-r from-sarastya-400 via-sarastya-500 to-sarastya-600 shadow-md text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 text-2xl font-bold tracking-tight">
          <img
            src="/img/logo_saras.jpeg"
            alt="Logo Sarastya"
            className="w-10 h-10 object-cover rounded-full ring-2 ring-purple-300 shadow-sm"
          />
          <span>
            Sarastya<span className="text-purple-900">Tech</span>
          </span>
        </div>

        {/* Tombol hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7 text-purple-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu navigasi */}
        <ul
          className={`${
            menuOpen
              ? "block bg-purple-800 rounded-lg mt-4 shadow-lg"
              : "hidden"
          } md:flex md:items-center gap-6 md:mt-0`}
        >
          {[
            { to: "/", label: "Beranda" },
            { to: "/lowongan", label: "Lowongan" },
            { to: "/galeri", label: "Galeri" },
            { to: "/tentangKami", label: "Tentang Kami" },
            { to: "/login", label: "Login" },
            { to: "/register", label: "Register" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="block px-4 py-2 rounded-md text-purple-100 hover:bg-purple-600 hover:text-white transition duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
