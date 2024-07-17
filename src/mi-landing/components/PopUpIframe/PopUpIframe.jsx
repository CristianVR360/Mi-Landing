import React from 'react';
import './PopUpIframe.css'; // Asegúrate de tener los estilos necesarios

const PopUpIframe = ({ logo, colorPrimario, show, onClose, iframeUrl }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
      <img src={logo} className="logo-button" alt="Logo" onClick={onClose} />
        <button  style={{backgroundColor:colorPrimario}} className="close-button" onClick={onClose}>Cerrar</button>
        <iframe
          src={iframeUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="Tour Virtual"
        ></iframe>
      </div>
    </div>
  );
};

export default PopUpIframe;
