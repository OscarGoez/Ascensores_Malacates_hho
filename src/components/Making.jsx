import { motion } from "framer-motion";
import { Wrench, Settings, CheckCircle, Boxes, Users, Hammer } from "lucide-react";

export default function Making() {
  const steps = [
    {
      icon: <Wrench className="w-10 h-10 text-blue-600" />,
      title: "Fabricación Estructural",
      text: "Creamos estructuras reforzadas en acero para garantizar durabilidad, estabilidad y seguridad en cada equipo.",
    },
    {
      icon: <Settings className="w-10 h-10 text-blue-600" />,
      title: "Instalación Profesional",
      text: "Instalamos montacargas y ascensores siguiendo normas técnicas y protocolos estrictos.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
      title: "Pruebas y Certificación",
      text: "Todos los equipos se prueban rigurosamente antes de entregarse al cliente.",
    },
    {
      icon: <Hammer className="w-10 h-10 text-blue-600" />,
      title: "Mantenimiento Preventivo",
      text: "Ofrecemos mantenimiento continuo para extender la vida útil y evitar fallas.",
    },
    {
      icon: <Boxes className="w-10 h-10 text-blue-600" />,
      title: "Modernización",
      text: "Actualizamos sistemas antiguos con tecnología moderna y silenciosa.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Atención Personalizada",
      text: "Brindamos asesoría profesional adaptada a cada proyecto y necesidad.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="procesos">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Nuestro Proceso de Trabajo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-14"
        >
          Fabricamos, instalamos y damos mantenimiento a montacargas y ascensores
          personalizados, cumpliendo estándares industriales y residenciales.
        </motion.p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 shadow-sm p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-5">{step.icon}</div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">{step.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
