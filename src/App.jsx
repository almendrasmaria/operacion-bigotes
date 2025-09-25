import Navbar from "./components/Navbar.jsx";
import TagWrap from "./components/TagWrap.jsx";  
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import { FaPaw, FaSearch, FaEnvelope, FaHome } from "react-icons/fa";

export default function App() {
  return (
    <>
      <Navbar />

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
              <FaPaw width={22} height={22} />
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
      
      <TagWrap/>

      <section className="services">
        <div className="services-container">
          <div className="services-inner">
            <div className="services-header">
              <p className="services-eyebrow">
                <span className="services-dot"></span>
                Proceso de adopción
              </p>
              <h2 className="services-title">
                Nuestro proceso simple para una adopción{" "}
                <span className="highlight">responsable</span>
              </h2>
            </div>
            <div className="services-grid">
              <div className="srv-item">
                <div className="srv-icon-wrap">
                  <div className="srv-icon yellow">
                    <FaSearch width={22} height={22} />
                  </div>
                </div>
                <div className="srv-card">
                  <div className="srv-card-body">
                    <h3 className="srv-card-title">Busqueda</h3>
                    <p className="srv-card-copy">
                      Explorá perfiles verificados y usá filtros por sexo (hembra/macho) y ubicación para encontrar mascotas cerca tuyo.
                    </p>
                  </div>
                  <button className="srv-card-btn">Conocer más</button>
                </div>
              </div>
              <div className="srv-item">
                <div className="srv-icon-wrap">
                  <div className="srv-icon blue">
                    <FaEnvelope width={22} height={22} />
                  </div>
                </div>
                <div className="srv-card">
                  <div className="srv-card-body">
                    <h3 className="srv-card-title">Contacto</h3>
                    <p className="srv-card-copy">
                      Completá el formulario y, si cumplís los requisitos, se comunicaran contigo para continuar con el proceso de adopción.
                    </p>
                  </div>
                  <button className="srv-card-btn">Conocer más</button>
                </div>
              </div>
              <div className="srv-item">
                <div className="srv-icon-wrap">
                  <div className="srv-icon orange">
                    <FaHome width={22} height={22} />
                  </div>
                </div>
                <div className="srv-card">
                  <div className="srv-card-body">
                    <h3 className="srv-card-title">Adopción</h3>
                    <p className="srv-card-copy">
                      Firmá el acuerdo de adopción, organizá la prueba de convivencia y recibí seguimiento para su adaptación.
                    </p>
                  </div>
                  <button className="srv-card-btn">Conocer más</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <Footer />
 
    </>
  );
}
