import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
    const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setFormData({
        name: user?.user_metadata?.name || "",
        email: user?.email || ""
      });
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      email: formData.email,
      data: { name: formData.name }
    });

    setLoading(false);

    if (error) {
      alert("Gagal memperbarui profil: " + error.message);
    } else {
      alert("Profil berhasil diperbarui!");
      navigate("/");// Redirect ke landing/dashboard setelah sukses
    }
  };

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-gray-500 text-lg">Memuat data pengguna...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <form
          onSubmit={handleSave}
          className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mt-10"
        >
          <h2 className="text-2xl font-semibold text-purple-800 mb-6 text-center">Edit Profil</h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <label className="block font-medium mb-1">Nama:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
            >
              {loading ? "Menyimpan..." : "Simpan Perubahan"}
              
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
