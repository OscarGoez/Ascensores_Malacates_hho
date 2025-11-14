import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductModal({ isOpen, product, onClose }) {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  if (!isOpen) return null;

  // Manejo de movimiento del mouse para el zoom
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* BOTÓN CERRAR */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
        >
          &times;
        </button>

        {/* Imagen con Zoom */}
        <div
          className="w-full h-80 bg-gray-100 rounded-xl overflow-hidden relative cursor-zoom-in"
          onMouseEnter={() => setZoom(true)}
          onMouseLeave={() => setZoom(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain transition-transform duration-200"
            style={{
              transform: zoom ? "scale(2)" : "scale(1)",
              transformOrigin: `${position.x} ${position.y}`,
            }}
          />
        </div>

        {/* Información */}
        <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>

        <ul className="mt-4 space-y-1 text-gray-700">
          {product.specs.map((s, i) => (
            <li key={i}>• {s}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
