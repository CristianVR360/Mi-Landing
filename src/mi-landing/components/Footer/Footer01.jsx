import React from "react";
import { FaInstagram, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer01.css";

const Footer01 = ({ telefono, instagramLink, facebookLink, gpsLink, colorSecundario, footerAfterStyles }) => {
  return (
    <footer className="footer01" style={footerAfterStyles}>
      <div className="footer01__social-links">
        <a href={instagramLink} className="footer01__social-link" style={{ color: colorSecundario }}>
          <FaInstagram />
        </a>
        <a href={facebookLink} className="footer01__social-link" style={{ color: colorSecundario }}>
          <FaFacebook />
        </a>
        <a href={gpsLink} className="footer01__social-link" style={{ color: colorSecundario }}>
          <FaMapMarkerAlt />
        </a>
      </div>
      <p className="footer01__telefono">
        <a href={`tel:${telefono}`} className="footer01__telefono-link">
          {telefono}
        </a>
      </p>
      <div className="footer01__after" style={footerAfterStyles}></div>
    </footer>
  );
};

export default Footer01;
