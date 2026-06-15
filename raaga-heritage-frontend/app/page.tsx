import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#1F1F1F] mb-10">
          Featured Products
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="Handwoven Silk Saree"
            price="4,999"
          />

          <ProductCard
            title="Traditional Clay Pottery"
            price="1,499"
          />

          <ProductCard
            title="Handmade Wooden Decor"
            price="2,299"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}