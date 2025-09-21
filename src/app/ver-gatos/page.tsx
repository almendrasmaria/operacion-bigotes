import Link from "next/link";

export default function VerGatos() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Ver Gatos Disponibles
        </h1>
        <p className="text-lg text-gray-700 text-center">
          Aquí encontrarás todos los gatos disponibles para adopción.
        </p>
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-orange-500 hover:text-orange-600 font-semibold">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
