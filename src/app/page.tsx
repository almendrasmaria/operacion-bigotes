import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-gray-100">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-800 ring-1 ring-white/10 hover:ring-white/20">
              Operación bigotes
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl">
              Tu aliado confiable para adopción felina
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-800 sm:text-xl/8">
              Promovemos adopciones seguras y conscientes. Te acompañamos para
              que cada gato encuentre un hogar para siempre.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-orange-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Adoptar
              </Link>
            </div>
          </div>
        </div>
        <div className="columns-3">
          <Image
            src="/images/hero-1.webp"
            alt="Hero 1"
            width={500}
            height={500}
          />
          <Image
            src="/images/hero-2.webp"
            alt="Hero 2"
            width={500}
            height={500}
          />
          <Image
            src="/images/hero-3.webp"
            alt="Hero 3"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
