import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      image: "/assets/products/plataforma-1000kg.png",
      title: "Montacargas Industrial de Plataforma – 1000 kg",
      description: "Equipo robusto para bodegas y centros logísticos. Diseñado para mover mercancía entre niveles con máxima seguridad.",
      specs: [
        "Capacidad: 1000 kg",
        "Cabina: 1.5 m × 1.5 m × 2.0 m",
        "Altura máxima: 12 m",
        "Velocidad: 0.20 m/s",
        "Sistema: malacate eléctrico + guías reforzadas",
        "Voltaje: 220V",
      ],
    },
    {
      image: "/assets/products/carga-comercial-500kg.png",
      title: "Ascensor de Carga para Comercio – 500 kg",
      description: "Montacargas compacto ideal para restaurantes, cocinas industriales y locales comerciales.",
      specs: [
        "Capacidad: 500 kg",
        "Acero inoxidable grado alimenticio",
        "Altura máxima: 9 m",
        "Velocidad: 0.25 m/s",
        "Sistema de cables de acero",
      ],
    },
    {
      image: "/assets/products/industrial-2000kg.png",
      title: "Ascensor Montacargas Pesado – 2000 kg",
      description: "Solución para industrias con alto movimiento y necesidad de capacidad elevada.",
      specs: [
        "Capacidad: 2000 kg",
        "Cabina grande 1.8 × 2.0 m",
        "Estructura 4 pulgadas reforzada",
        "Altura máxima: 15 m",
        "Velocidad: 0.18 m/s",
      ],
    },
    {
      image: "/assets/products/residencial-6personas.png",
      title: "Ascensor Residencial para Conjunto – 6 Personas",
      description: "Elevador silencioso para edificios residenciales de 4 a 6 pisos, eficiente y moderno.",
      specs: [
        "Capacidad: 450 kg",
        "Sistema MRL sin cuarto de máquinas",
        "Velocidad: 0.45 m/s",
        "Pantalla LCD + iluminación LED",
      ],
    },
    {
      image: "/assets/products/movilidad-reducida.png",
      title: "Ascensor para Movilidad Reducida – 2 a 3 pisos",
      description: "Equipo accesible para hogares, clínicas y negocios con personas mayores o con discapacidad.",
      specs: [
        "Capacidad: 250 kg",
        "Sistema hidráulico silencioso",
        "Altura máxima: 6 m",
        "Voltaje: 110/220V",
      ],
    },
    {
      image: "/assets/products/lujo-personalizado.png",
      title: "Ascensor Residencial de Lujo – Personalizado",
      description: "Ascensor premium para casas de alto nivel, con acabados de lujo y diseño único.",
      specs: [
        "Cabina personalizable",
        "Vidrio templado / acero dorado / madera",
        "Velocidad: 0.35 m/s",
        "Extras: panel táctil, luces LED, asistente de voz",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="productos">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Nuestros Productos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <ProductCard
              key={i}
              image={p.image}
              title={p.title}
              description={p.description}
              specs={p.specs}
              onClick={() => setSelectedProduct(p)}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={true}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
