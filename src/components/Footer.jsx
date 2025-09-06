export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="navbar">
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
                    <a href="#" className="social-link"><i data-lucide="facebook"></i></a>
                    <a href="#" className="social-link"><i data-lucide="instagram"></i></a>
                    <a href="#" className="social-link"><i data-lucide="mail"></i></a>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copy">© Creado por María Almendras</p>
            </div>
        </footer>
  );
}
