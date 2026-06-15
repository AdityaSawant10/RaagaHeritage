import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-md mx-auto px-6 py-20 min-h-screen">
        <div className="bg-white shadow-xl rounded-2xl p-8">
          
          <h1 className="text-4xl font-bold text-center text-[#1F1F1F]">
            Login
          </h1>

          <p className="mt-4 text-gray-600 text-center">
            Access your Raaga Heritage account
          </p>

          <form className="mt-8 space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            />

            <button className="w-full bg-[#8B5E3C] hover:bg-[#6f472b] text-white py-3 rounded-lg transition">
              Login
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}