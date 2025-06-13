import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase"; // pastikan path ini sesuai
import "../index.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null); // ⬅️ state untuk user
const [displayName, setDisplayName] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  // Cek session Supabase
 useEffect(() => {
  const fetchUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    if (user) {
      setDisplayName(user.user_metadata?.name || '');
    }
  };

  fetchUser();

  const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
    const currentUser = session?.user || null;
    setUser(currentUser);
    if (currentUser) {
      setDisplayName(currentUser.user_metadata?.name || '');
    }
  });

  return () => {
    listener.subscription.unsubscribe();
  };
}, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfileOpen(false);
    alert("Logout berhasil");
  };

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu utama */}
        <ul
          className={`${
            menuOpen ? "block bg-purple-800 rounded-lg mt-4 shadow-lg" : "hidden"
          } md:flex md:items-center gap-6 md:mt-0`}
        >
          <li><Link to="/" className="nav-item">Beranda</Link></li>
          <li><Link to="/lowongan" className="nav-item">Lowongan</Link></li>
          <li><Link to="/tentangKami" className="nav-item">Tentang Kami</Link></li>

          {!user ? (
            <>
              <li><Link to="/login" className="nav-item">Login</Link></li>
              <li><Link to="/register" className="nav-item">Register</Link></li>
            </>
          ) : (
            <li className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-600 transition duration-200"
              >
                <img
                  src="/img/user.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full border border-white"
                />
             <span className="text-sm font-medium text-white">{displayName || "Akun"}</span>

              </button>

              {profileOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-lg overflow-hidden z-10">
                  <li>
                    <Link
                      to="/profil"
                      className="block px-4 py-2 hover:bg-purple-100"
                      onClick={() => setProfileOpen(false)}
                    >
                      Lihat Profil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/editprofil"
                      className="block px-4 py-2 hover:bg-purple-100"
                      onClick={() => setProfileOpen(false)}
                    >
                      Edit Profil
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-purple-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
