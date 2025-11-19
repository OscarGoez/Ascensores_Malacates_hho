import React from "react";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-20 py-12" id="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LOGO + RESUMEN */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/LogoHHO.jpg`}
              alt="Logo HHO"
              className="h-12 w-auto"
            />
            <h2 className="text-xl font-bold">HHO Ascensores & Malacates</h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Fabricación, mantenimiento e instalación de ascensores. En HHO Ascensores y Malacates ofrecemos atención directa con el especialista.
          </p>
        </div>

        {/* MENÚ RÁPIDO */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#inicio" className="hover:text-white transition">Inicio</a></li>
            <li><a href="#productos" className="hover:text-white transition">Productos</a></li>
            <li><a href="#procesos" className="hover:text-white transition">Procesos</a></li>
            
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto directo</h3>

          <div className="flex items-center gap-3 mb-3">
            <MessageCircle  size={20} />            
            <a
              href="https://wa.me/573217639431?text=Hola%20como%20estas,%20quiero%20más%20información"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: +57 321 763 9431
            </a>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <Phone size={20} />
            <span className="text-gray-300">Teléfono: 321 763 9431</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={20} />
            <span className="text-gray-300">
              Calle 101 #45A–44, Apto 301  
              <br />
              Medellín, Antioquia
            </span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-white/20 pt-6">
        © {new Date().getFullYear()} HHO Ascensores y Malacates — Todos los derechos reservados.
      </div>
    </footer>
  );
}
