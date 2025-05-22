import React from 'react';
import './Footer.css';
import Particles from './Particles';

const Footer = () => {
  return (
    <footer className="app-footer">
        <Particles />
      <div className="footer-content">
        {/* Sección izquierda (logo/marca) */}
        <div className="footer-brand">
          <span className="logo">📝 NotasApp</span>
          <p>Organiza tus ideas de forma elegante</p>
        </div>

        {/* Sección central (enlaces útiles) */}
        <div className="footer-links">
          <h4>Explorar</h4>
          <ul>
            <li><a href="#features">Funcionalidades</a></li>
            <li><a href="#tips">Consejos</a></li>
            <li><a href="#tutorials">Tutoriales</a></li>
          </ul>
        </div>

        {/* Sección derecha (redes sociales) */}
        <div className="footer-social">
          <h4>Conéctate</h4>
          <div className="social-icons">
            <a href="#" aria-label="Twitter"><span>🐦</span></a>
            <a href="#" aria-label="GitHub"><span>💻</span></a>
            <a href="#" aria-label="LinkedIn"><span>🔗</span></a>
          </div>
          <div className="newsletter">
            <p>Suscríbete a nuestro boletín</p>
            <input type="email" placeholder="tu@email.com" />
            <button>Enviar</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NotasApp. Todos los derechos reservados.</p>
        <div className="legal-links">
          <a href="#privacy">Privacidad</a>
          <a href="#terms">Términos</a>
          <a href="#cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;