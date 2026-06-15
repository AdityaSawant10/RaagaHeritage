import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
        <h1 className="text-5xl font-bold text-[#1F1F1F]">
          Seller Dashboard
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl">
          Manage products, track sales, and monitor artisan performance from
          your dashboard.
        </p>
      </main>

      <Footer />
    </>
  );
}