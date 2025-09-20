import { RocketIcon } from "@radix-ui/react-icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <p className="hero-eyebrow">
          <span className="hero-dot"></span>
          Operación Bigotes
        </p>
        <h1 className="hero-title">
          Tu aliado confiable
          <br />
          para adopción felina
        </h1>
        <p className="hero-copy">
          Promovemos adopciones seguras y conscientes. 
          Te acompañamos para que cada gato encuentre un hogar para siempre.
        </p>
        <div className="hero-actions">
          <a href="#adoptar" className="btn btn-adopt">Adoptar</a>
          <button className="btn btn-icon">
            <RocketIcon width={22} height={22} />
          </button>
        </div>
        <div className="hero-gallery">
          <figure className="hero-card bg-lilac">
            <img src="/images/hero-1.webp" alt="Gato gris con collar rojo" />
          </figure>
          <figure className="hero-card bg-sky">
            <img src="/images/hero-2.png" alt="Persona sosteniendo a un gato" />
          </figure>
          <figure className="hero-card bg-mustard">
            <img src="/images/hero-3.png" alt="Gato blanco y negro con collar rojo" />
          </figure>
        </div>
      </div>
    </section>
  );
}
