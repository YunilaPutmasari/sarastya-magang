import React, { useState } from "react";
import api from "../../services/api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login sukses");
    } catch {
      alert("Login gagal");
    }
  };

  return (
   <div
  className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
>
      <div className="bg-sarastya-400 bg-opacity-90 shadow-xl rounded-xl p-10 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img
            src="/img/logo_saras.jpeg"
            alt="Logo"
            className="h-24 w-24 object-contain rounded-full shadow-md"
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-sarastya-800 mb-6">Login ke SarastyaTech</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-sarastya-600 hover:bg-sarastya-800 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Masuk
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Belum punya akun? <a href="/register" className="text-blue-700 hover:underline">Daftar</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
