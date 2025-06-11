// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import api from '../../services/api';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', { name, email, password });
      alert('Registrasi berhasil! Silakan login.');
      // Bisa arahkan ke halaman login jika pakai react-router
    } catch {
      alert('Registrasi gagal');
    }
  };

  return (
     <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1650&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-90 shadow-xl rounded-xl p-10 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img
            src="/img/logo_saras.jpeg"
            alt="Logo"
            className="h-24 w-24 object-contain rounded-full shadow-md"
          />
        </div>
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Daftar
        </button>
      </form>
    </div>
    </div>
  );
};

export default RegisterForm;
