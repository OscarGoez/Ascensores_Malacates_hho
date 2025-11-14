export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Información */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
          <p className="mb-6 text-blue-100 leading-relaxed">
            En <strong>HHO Montacargas y Malacates</strong> ofrecemos atención directa con el
            especialista. Escríbenos por WhatsApp para recibir cotizaciones, asesorías o soporte
            técnico inmediato.
          </p>

          <ul className="space-y-3 text-blue-100">
            <li>👤 <strong>Héctor Hernán Orozco García</strong></li>
            <li>📍 Calle 101 # 45 A 44 Apto 301, Medellín, Antioquia</li>            
          </ul>
        </div>

        {/* Módulo visual o CTA */}
        <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg text-center flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-3">¿Necesitas asesoría o una cotización?</h3>
          <p className="text-gray-600 mb-6">
            Contáctanos directamente desde tu teléfono y recibe atención inmediata.
          </p>
          <a
            href="https://wa.me/573217639431"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition"
          >
            📲 Chatear por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
