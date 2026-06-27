import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <ThemeToggle />

      <main className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
        <h1 className="text-5xl font-bold">
          Seller Dashboard
        </h1>

        <p className="mt-6 text-lg max-w-3xl opacity-80">
          Manage products, track sales, and monitor artisan performance from
          your dashboard.
        </p>
      </main>

      <Footer />
    </>
  );
}