import { useState} from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container">
        <a href="#inicio" className="navbar-brand">Operación Bigotes.</a>
        <div className="navbar-actions">
          <a href="#donar" className="btn btn-donate">Donar</a>
          <a href="#crear" className="btn  btn-create-account">Crear cuenta</a>
        </div>
        <button
          className="nav-toggle"
          aria-controls="primary-nav"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <Cross2Icon width={18} height={18}/> : <HamburgerMenuIcon width={18} height={18}/>}
        </button>
        <ul id="primary-nav" className={`navbar-menu ${open ? "is-open" : ""}`}>
          <li><a className="nav-link" href="#inicio" onClick={closeMenu}>Inicio</a></li>
          <li><a className="nav-link" href="#adopcion" onClick={closeMenu}>Ver Gatos</a></li>
          <li><a className="nav-link" href="#contacto" onClick={closeMenu}>Contacto</a></li>
          <li className="nav-actions-mobile">
            <a href="#donar" className="btn btn-donate" onClick={closeMenu}>Donar</a>
            <a href="#crear" className="btn btn-create-account" onClick={closeMenu}>Crear cuenta</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
