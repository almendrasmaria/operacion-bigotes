export default function Navbar() {
    return (
        <header id="encabezado" className="site-header">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="#inicio">
                        <img src="/images/logo.png" alt="Operación Bigotes" />
                    </a>
                </div>
                <ul className="navbar-menu">
                    <li><a href="#inicio" className="nav-link">Inicio</a></li>
                    <li><a href="#sobre-nosotros" className="nav-link">Sobre nosotros</a></li>
                    <li><a href="#requisitos" className="nav-link">Requisitos</a></li>
                    <li><a href="#faq" className="nav-link">FAQ</a></li>
                </ul>
                <div className="navbar-actions">
                    <a href="#crear-cuenta" className="btn-crear-cuenta">Crear cuenta</a>
                </div>
            </nav>
        </header>
  );
}
