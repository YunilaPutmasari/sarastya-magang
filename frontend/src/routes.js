import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Galeri from './pages/Galeri/Galeri';
import TentangKami from './pages/TentangKami/TentangKami';
import Lowongan from './pages/Lowongan/Lowongan';
import ProfilPage from './pages/Profil/profil';
import Dashboard from './pages/admin/dashboard';
import EditProfile from './pages/Profil/editprofil';
import CreateProfile from './pages/Profil/createprofil';

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
        <Route path="/editprofil" element={<EditProfile />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
