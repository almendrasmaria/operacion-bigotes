import { FaGlobe, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="ob-footer">
      <div className="ob-footer-rule"/>
      <p className="ob-footer-lang">
        <FaGlobe size={18} />
        <span>Español (AR)</span>
      </p>
      <div className="ob-footer-social">
        <a href="https://instagram.com" target="_blank">
          <FaInstagram size={22} />
        </a>
        <a href="https://www.linkedin.com/in/marialmendras/" target="_blank">
          <FaLinkedin size={22} />
        </a>
        <a href="https://github.com/almendrasmaria" target="_blank">
          <FaGithub size={22} />
        </a>
      </div>
      <div className="ob-footer-bottom">
        <p className="ob-footer-copy">© María Almendras</p>
        <ul className="ob-footer-legal">
          <li><a href="#privacidad">Privacidad</a></li>
          <li><a href="#terminos">Términos</a></li>
          <li><a href="#mapa">Mapa del sitio</a></li>
        </ul>
      </div>
    </footer>
  );
}