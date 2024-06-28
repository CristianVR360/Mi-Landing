import React from "react";
import "./Header.css";

const Header = ({ colorPrimario, colorSecundario, handleNavigation, activeComponent, opciones }) => {
  return (
    <nav className="header__nav">
      {opciones.map((opcion, index) => (
        <button
          key={index}
          className={`header__nav-button ${activeComponent === opcion.id ? "active" : ""}`}
          onClick={() => handleNavigation(opcion.id)}
          style={{ backgroundColor: colorPrimario, color: colorSecundario }}
        >
          <span>{opcion.texto}</span>
        </button>
      ))}
    </nav>
  );
};

export default Header;
