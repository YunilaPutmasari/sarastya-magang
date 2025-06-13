// components/layout.jsx



export default function Layout({ children }) {
  return (
    <div className="flex">
   
      <main className="ml-64 p-8 bg-gray-100 min-h-screen w-full">
        {children}
      </main>
    </div>
  );
}
