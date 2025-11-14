import { motion } from "framer-motion";

export default function ProductCard({ image, title, description, specs, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer hover:shadow-2xl transition-all"
    >
      {/* Imagen */}
      <div className="w-full h-60 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
        <img src={image} className="object-contain w-full h-full" alt={title} />
      </div>

      {/* Título */}
      <h3 className="text-xl font-semibold mt-4 text-gray-900">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 mt-2">{description}</p>

      {/* Especificaciones */}
      <ul className="text-gray-700 mt-4 text-sm space-y-1">
        {specs.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
