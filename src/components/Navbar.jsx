export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <a href="#inicio" className="navbar-brand">Operación Bigotes.</a>
        <ul className="navbar-menu">
          <li><a href="#inicio" className="nav-link">Inicio</a></li>
          <li><a href="#servicios" className="nav-link">Servicios</a></li>
          <li><a href="#equipo" className="nav-link">Equipo y enfoque</a></li>
        </ul>
        <div className="navbar-actions">
          <a href="#donar" className="btn-donate">Donar</a>
          <a href="#crear-cuenta" className="btn-create-account">Crear cuenta</a>
        </div>
      </nav>
    </header>
  );
}
