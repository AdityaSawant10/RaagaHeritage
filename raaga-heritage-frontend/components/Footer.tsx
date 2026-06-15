const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#D4A373]">
            Raaga Heritage
          </h2>

          <p className="mt-4 text-gray-400">
            Supporting local artisans and preserving Indian heritage.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>

          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Dashboard</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>

          <p className="mt-4 text-gray-400">
            support@raagaheritage.com
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        © 2026 Raaga Heritage. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;