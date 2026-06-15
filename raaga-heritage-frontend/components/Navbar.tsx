"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[#E5D3BE] shadow-sm">
      
      <div className="container-custom flex items-center justify-between py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-wide text-[var(--dark-brown)]"
        >
          Raaga Heritage
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">

          <Link
            href="/"
            className="hover:text-[var(--brown)] transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-[var(--brown)] transition duration-300"
          >
            About
          </Link>

          <Link
            href="/dashboard"
            className="hover:text-[var(--brown)] transition duration-300"
          >
            Dashboard
          </Link>

          <Link
            href="/login"
            className="primary-btn"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[var(--dark-brown)]">
          <Menu size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

