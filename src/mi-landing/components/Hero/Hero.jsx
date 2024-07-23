import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import "./Hero.css";
import WhatsAppButton from "../../components/common/WhatsappButton/WhatsAppButton";
import Subtitle01 from "../common/Subtitle01/Subtitle01";
import Footer01 from "../Footer/Footer01";

const Hero = ({
  backgroundImage,
  logo,
  iframeBackground,
  title,
  description,
  subtitle,
  telefono,
  colorPrimario,
  colorSecundario,
  subtitles,
  instagramLink,
  facebookLink,
  linkedinLink,
  gpsLink,
  footerText,
  footerAfterStyles,
  message,
}) => {
  useEffect(() => {
    const updateHeroHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Inicializa el valor de --vh en el load y resize
    updateHeroHeight();
    window.addEventListener('resize', updateHeroHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateHeroHeight);
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero__main-content">
        {iframeBackground ? (
          <iframe 
            src={iframeBackground}
            title="Virtual Tour"
            className="hero__iframe"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <img src={backgroundImage} alt="Imagen de fondo" className="hero__background" />
        )}
        <div className="hero__content">
          <div className="hero__section">
          <img src={logo} alt="Logo" className="hero__logo"/>
            <h1 className="hero__title" style={{ color: colorSecundario }}>
              {title}
            </h1>
            <p
              className="hero__description"
              style={{ color: colorSecundario, display: description ? 'block' : 'none' }}
            >
              {description}
            </p>
            <div className="hero__subtitles-container">
              <Subtitle01 
                subtitles={subtitles}  
                colorPrimario={colorPrimario} 
                colorSecundario={colorSecundario}  
                className="hero__subtitles" 
              />
            </div>
          </div>
          <div className="hero__whatsappButton-container">
            <WhatsAppButton
              phoneNumber={telefono}
              message={message}
              callToAction={subtitle}
              className="hero__whatsappButton"
            />
          </div>
        </div>
      </div>
      <Footer01
       footerText={ footerText}
        instagramLink={instagramLink}
        facebookLink={facebookLink}
        gpsLink={gpsLink}
        colorSecundario={colorSecundario}
        telefono={telefono}
        footerAfterStyles={footerAfterStyles}
        linkedinLink={linkedinLink}
      />
    </div>
  );
};

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  iframeBackground: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  subtitle: PropTypes.string,
  telefono: PropTypes.string,
  colorPrimario: PropTypes.string,
  colorSecundario: PropTypes.string,
  subtitles: PropTypes.arrayOf(PropTypes.string),
  instagramLink: PropTypes.string,
  facebookLink: PropTypes.string,
  gpsLink: PropTypes.string,
  footerAfterStyles: PropTypes.object,
};

export default Hero;
