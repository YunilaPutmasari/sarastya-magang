import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { supabase } from "../../supabase";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

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
        <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mt-10">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6 text-center">Profil Pengguna</h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <label className="font-medium">Nama:</label>
              <p className="pl-2">{user.user_metadata?.name || "-"}</p>
            </div>

            <div>
              <label className="font-medium">Email:</label>
              <p className="pl-2">{user.email}</p>
            </div>

            <div>
              <label className="font-medium">UID:</label>
              <p className="pl-2 break-all">{user.id}</p>
            </div>

            <div>
              <label className="font-medium">Tanggal Gabung:</label>
              <p className="pl-2">
                {new Date(user.created_at).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
