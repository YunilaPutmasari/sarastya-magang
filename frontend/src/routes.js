import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Galeri from './pages/Galeri';
import TentangKami from './pages/TentangKami';
import Lowongan from './pages/Lowongan';
import ProfilPage from './pages/profil';
import Dashboard from './pages/admin/dashboard';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/tentangKami" element={<TentangKami />} />
        <Route path="/lowongan" element={<Lowongan />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
