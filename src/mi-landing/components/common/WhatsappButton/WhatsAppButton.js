import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import './WhatsAppButton.css';

function WhatsAppButton({ phoneNumber, message, callToAction }) {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-button-container">
      <a href={whatsappLink} className="floating-button" target="_blank" rel="noopener noreferrer">
        <BsWhatsapp className="whatsapp-icon" />
      </a>
      <span className="whatsapp-button-text">{callToAction}</span>
    </div>
  );
}

export default WhatsAppButton;