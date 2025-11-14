import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        backdrop-blur-md 
        ${scrolled ? "bg-white/80 shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/assets/LogoHHO.jpg"
            alt="HHO"
            className={`transition-all ${scrolled ? "h-10" : "h-12"}`}
          />
        </a>

        {/* LINKS */}
        <div className="hidden md:flex gap-10">
          <a
            href="#inicio"
            className={`
              text-base font-medium transition-colors
              ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"}
            `}
          >
            Inicio
          </a>

          <a
            href="#productos"
            className={`
              text-base font-medium transition-colors
              ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"}
            `}
          >
            Productos
          </a>

          <a
            href="#procesos"
            className={`
              text-base font-medium transition-colors
              ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"}
            `}
          >
            Procesos
          </a>

          <a
            href="#footer"
            className={`
              text-base font-medium transition-colors
              ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"}
            `}
          >
            Contacto
          </a>
        </div>

      </div>
    </motion.nav>
  );
}
