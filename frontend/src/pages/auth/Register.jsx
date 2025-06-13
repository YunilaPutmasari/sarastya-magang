// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Konfirmasi password tidak cocok.");
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name, // ini akan masuk ke user_metadata
      },
    },
  });

  if (error) {
    alert("Registrasi gagal: " + error.message);
  } else {
    alert("Registrasi berhasil!\n\nSilakan cek email Anda untuk verifikasi sebelum login.");
    navigate("/login");
  }
};


  return (
    <div className="min-h-screen bg-cover bg-sarastya-100 bg-center flex items-center justify-center relative">
      <div className="bg-sarastya-400 bg-opacity-90 shadow-xl rounded-xl p-10 max-w-md w-full">
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
          <input
            type="password"
            placeholder="Konfirmasi Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          />
          <button
            type="submit"
            className="w-full bg-sarastya-600 text-white py-2 rounded-lg hover:bg-purple-700"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
