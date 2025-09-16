import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <a href="#inicio" className="navbar-brand">Operación Bigotes.</a>

        <ul className={`navbar-menu ${open ? "is-open" : ""}`}>
          <li><a href="#inicio" className="nav-link" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#servicios" className="nav-link" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#equipo" className="nav-link" onClick={closeMenu}>Equipo y enfoque</a></li>

          <li className="nav-actions-mobile">
            <a href="#donar" className="btn-donate" onClick={closeMenu}>Donar</a>
            <a href="#crear-cuenta" className="btn-create-account" onClick={closeMenu}>Crear cuenta</a>
          </li>
        </ul>

        <div className="navbar-actions">
          <a href="#donar" className="btn-donate">Donar</a>
          <a href="#crear-cuenta" className="btn-create-account">Crear cuenta</a>
        </div>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Abrir o cerrar menú"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
}
