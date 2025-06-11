export default function PendaftarPage() {
  const pendaftar = [
    { id: 1, nama: "Siti Aisyah", email: "aisyah@example.com", tanggal: "2025-06-10" },
    { id: 2, nama: "Budi Santoso", email: "budi@example.com", tanggal: "2025-06-09" },
    { id: 3, nama: "Rahma Putri", email: "rahma@example.com", tanggal: "2025-06-08" },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Daftar Pendaftar</h1>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Nama</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Tanggal Daftar</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pendaftar.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.nama}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.tanggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
