import { Link } from "react-router-dom";
import "./HeaderComponent.css";

function HeaderComponent() {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="app-title">Notes App</h1> {/* Cambiado de h2 a h1 */}
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/notes" className="nav-link">Notes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;