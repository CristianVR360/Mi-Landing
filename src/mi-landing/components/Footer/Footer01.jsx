import React from "react";
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaLinkedin, FaPhone } from "react-icons/fa";
import "./Footer01.css";

const Footer01 = ({ telefono, linkedinLink, instagramLink, facebookLink, gpsLink, colorSecundario, footerAfterStyles, footerText }) => {
  return (
    <footer className="footer01" style={footerAfterStyles}>
      <div className="footer01__social-links">
        {instagramLink && (
          <a href={instagramLink} className="footer01__social-link" style={{ color: colorSecundario }} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}
        {facebookLink && (
          <a href={facebookLink} className="footer01__social-link" style={{ color: colorSecundario }} target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        )}
        {linkedinLink && (
          <a href={linkedinLink} className="footer01__social-link" style={{ color: colorSecundario }} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {gpsLink && (
          <a href={gpsLink} className="footer01__social-link" style={{ color: colorSecundario }} target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt />
          </a>
        )}
        {telefono && (
          <a href={`tel:${telefono}`} className="footer01__social-link footer01__phone-link" style={{ color: colorSecundario }} target="_blank" rel="noopener noreferrer">
            <FaPhone />
          </a>
        )}
      </div>
      <p className="footer01__footerText">
        {footerText}
      </p>
      <div className="footer01__after" style={footerAfterStyles}></div>
    </footer>
  );
};

export default Footer01;
