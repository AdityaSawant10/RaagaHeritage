
type ProductCardProps = {
  title: string;
  price: string;
};

const ProductCard = ({ title, price }: ProductCardProps) => {
  return (
    <div className="card-style group">

      {/* Product Image */}
      <div className="relative overflow-hidden">

        <div className="h-72 hero-gradient flex items-center justify-center">

          <h2 className="text-white text-2xl font-bold opacity-90">
            Raaga Heritage
          </h2>

        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[var(--dark-brown)] text-sm font-semibold px-4 py-2 rounded-full shadow-md">
          Handmade
        </div>

      </div>

      {/* Content */}
      <div className="p-6">

        <h2 className="text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--brown)] transition">
          {title}
        </h2>

        <p className="mt-3 text-gray-600 leading-relaxed">
          Authentic artisan-crafted heritage product inspired by Indian culture and craftsmanship.
        </p>

        {/* Price + Button */}
        <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">

          <p className="text-2xl font-bold text-[var(--brown)]">
            ₹ {price}
          </p>

          <button className="primary-btn">
            View Product
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;