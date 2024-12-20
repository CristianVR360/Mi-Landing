import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "./Hero.css";
import WhatsAppButton from "../../components/common/WhatsappButton/WhatsAppButton";
import Subtitle01 from "../common/Subtitle01/Subtitle01";
import Footer01 from "../Footer/Footer01";

const Hero = ({
  backgroundImage,
  videoBkgHero, 
  logo,
  iframeBackground,
  title,
  description,
  subtitle,
  telefono,
  colorPrimario,
  colorSecundario,
  subtitlePosition,
  logoPosition,
  subtitles,
  instagramLink,
  facebookLink,
  linkedinLink,
  gpsLink,
  footerText,
  footerAfterStyles,
  message,
  isExiting,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const updateHeroHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateHeroHeight();
    window.addEventListener('resize', updateHeroHeight);

    return () => {
      window.removeEventListener('resize', updateHeroHeight);
    };
  }, []);

  return (
    <div className={`hero ${isExiting ? 'hero-element-fade-out' : ''}`}>
      {logoPosition === 'top' && (
        <img src={logo} alt="Logo" className={`hero__logo hero__logo--top ${isExiting ? 'hero-element-fade-out' : ''}`}/>
      )}
      <div className="hero__main-content">
        {videoBkgHero ? (
          <>
            <img src={backgroundImage} alt="Imagen de fondo" className="hero__background" />
            <video
              src={videoBkgHero}
              className="hero__video-background"
              autoPlay
              loop
              muted
              playsInline
              onCanPlayThrough={() => setVideoLoaded(true)}
              style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
            ></video>
          </>
        ) : iframeBackground ? (
          <iframe 
            src={iframeBackground}
            title="Virtual Tour"
            className="hero__iframe"
            frameBorder="0"
            allowFullScreen
            style={{ opacity: 0.9 }}
          ></iframe>
        ) : (
          <img src={backgroundImage} alt="Imagen de fondo" className="hero__background" />
        )}
        <div className={`hero__content ${subtitlePosition === 'bottom' ? 'hero__content--bottom' : ''}`}>
          <div className="hero__section">
            {(!logoPosition || logoPosition !== 'top') && (
              <img src={logo} alt="Logo" className={`hero__logo ${isExiting ? 'hero-element-fade-out' : ''}`}/>
            )}
            <h1 className={`hero__title ${isExiting ? 'hero-element-fade-out' : ''}`} style={{ color: colorSecundario }}>
              {title}
            </h1>
            <p
              className={`hero__description ${isExiting ? 'hero-element-fade-out' : ''}`}
              style={{ color: colorSecundario, display: description ? 'block' : 'none' }}
            >
              {description}
            </p>
            <div className={`hero__subtitles-container ${isExiting ? 'hero-element-fade-out' : ''} ${subtitlePosition === 'bottom' ? 'hero__subtitles-container--bottom' : ''}`}>
              <Subtitle01 
                subtitles={subtitles}  
                colorPrimario={colorPrimario} 
                colorSecundario={colorSecundario}  
                className="hero__subtitles" 
              />
            </div>
          </div>
          <div className={`hero__whatsappButton-container ${isExiting ? 'hero-element-fade-out' : ''}`}>
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
        footerText={footerText}
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
  videoBkgHero: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  subtitle: PropTypes.string,
  telefono: PropTypes.string,
  colorPrimario: PropTypes.string,
  colorSecundario: PropTypes.string,
  subtitlePosition: PropTypes.oneOf(['center', 'bottom']),
  logoPosition: PropTypes.oneOf(['center', 'top']),
  subtitles: PropTypes.arrayOf(PropTypes.string),
  instagramLink: PropTypes.string,
  facebookLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  gpsLink: PropTypes.string,
  footerText: PropTypes.string,
  footerAfterStyles: PropTypes.object,
  message: PropTypes.string,
  isExiting: PropTypes.bool,
};

export default Hero;