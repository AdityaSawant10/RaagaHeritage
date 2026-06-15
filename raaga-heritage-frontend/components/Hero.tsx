
const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-[var(--cream)]">

      <div className="container-custom grid md:grid-cols-2 gap-16 items-center py-20">

        {/* Left Content */}
        <div>

          <p className="text-[var(--brown)] uppercase tracking-[0.25em] font-semibold text-sm">
            AI Assisted Heritage Marketplace
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight text-[var(--foreground)]">
            Bringing Handmade Indian Heritage To The Digital World
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
            Explore authentic handloom collections, artisan-made crafts,
            and culturally rich products powered by modern AI experiences.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <button className="primary-btn">
              Explore Products
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10 flex-wrap">

            <div>
              <h2 className="text-3xl font-bold text-[var(--dark-brown)]">
                500+
              </h2>

              <p className="text-gray-600 mt-1">
                Artisan Products
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[var(--dark-brown)]">
                120+
              </h2>

              <p className="text-gray-600 mt-1">
                Local Artisans
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[var(--dark-brown)]">
                25+
              </h2>

              <p className="text-gray-600 mt-1">
                Heritage Categories
              </p>
            </div>

          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">

          {/* Main Card */}
          <div className="hero-gradient h-[500px] rounded-[40px] shadow-2xl flex items-center justify-center">

            <div className="text-center text-white px-6">

              <h2 className="text-5xl font-bold">
                Raaga Heritage
              </h2>

              <p className="mt-5 text-lg text-white/90">
                Tradition Meets Technology
              </p>

            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden md:block">

            <h3 className="text-xl font-semibold text-[var(--dark-brown)]">
              AI Powered
            </h3>

            <p className="mt-2 text-gray-600 max-w-[220px]">
              Smart recommendations and artisan storytelling experience.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

