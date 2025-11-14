export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-[600px] bg-cover bg-center flex items-center justify-center text-white relative"
      style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          HHO Ascensores y Malacates
        </h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-200">
          Más de 20 años brindando soluciones confiables en fabricación, mantenimiento e instalación de equipos de elevación industrial y personalizados.
        </p>
        <div className="mt-8">
          <a
            href="#footer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
