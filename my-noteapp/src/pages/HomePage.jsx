import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Asegúrate de tener este archivo CSS para estilos
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <HeaderComponent />
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Organiza tus ideas, <span className="highlight">simplifica tu vida</span></h1>
            <p className="subtitle">Captura tus pensamientos, tareas y proyectos en un solo lugar. Accesible en cualquier momento, desde cualquier dispositivo.</p>
            <div className="cta-buttons">
              <Link to="/notes" className="primary-button">Comenzar ahora</Link>
              <Link to="#features" className="secondary-button">Conocer más</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/notes-app-preview.png" alt="Vista previa de la aplicación de notas" />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <h2>Por qué elegir nuestra aplicación</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Edición enriquecida</h3>
              <p>Crea notas con formato, listas, imágenes y más. Todo con una interfaz intuitiva.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Búsqueda inteligente</h3>
              <p>Encuentra cualquier nota en segundos con nuestro potente motor de búsqueda.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Multiplataforma</h3>
              <p>Accede a tus notas desde tu computadora, tablet o teléfono.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Seguridad</h3>
              <p>Tus datos están protegidos con encriptación de última generación.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <h2>¿Listo para organizar tus ideas?</h2>
          <p>Comienza ahora y lleva tu productividad al siguiente nivel.</p>
          <Link to="/notes" className="primary-button large">Crear mi primera nota</Link>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;