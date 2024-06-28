import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./MiLanding.css"; // Asegúrate de tener estilos para las transiciones

const MiLanding = ({ landingPageData, opciones }) => {
  const [activeComponent, setActiveComponent] = useState("inicio");

  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  const getTransitionClassName = () => {
    return activeComponent === "inicio" ? "mi-landing-transition-inicio" : "mi-landing-transition-carousel";
  };

  return (
    <div className="mi-landing">
      <Header
        colorPrimario={landingPageData.colorPrimario}
        colorSecundario={landingPageData.colorSecundario}
        handleNavigation={handleNavigation}
        activeComponent={activeComponent}
        opciones={opciones} // Pass the opciones prop to Header
      />
      <TransitionGroup>
        <CSSTransition
          key={activeComponent}
          timeout={500}
          classNames={getTransitionClassName()}
        >
          <div className="mi-landing__content">
            {activeComponent === "inicio" ? (
              <Hero
                backgroundImage={landingPageData.backgroundImage}
                iframeBackground={landingPageData.iframeBackground}
                title={landingPageData.title}
                description={landingPageData.description}
                bookButtonText={landingPageData.bookButtonText}
                bookDescription={landingPageData.bookDescription}
                consultationButtonText={landingPageData.consultationButtonText}
                subtitle={landingPageData.ctaWhatsappButton}
                colorPrimario={landingPageData.colorPrimario}
                colorPrimarioTransparente={landingPageData.colorPrimarioTransparente}
                colorSecundario={landingPageData.colorSecundario}
                colorTerciario={landingPageData.colorTerciario}
                colorCuaternario={landingPageData.colorCuaternario}
                subtitles={landingPageData.subtitles}
                telefono={landingPageData.telefono}
                instagramLink={landingPageData.instagramLink}
                facebookLink={landingPageData.facebookLink}
                gpsLink={landingPageData.gpsLink}
                footerAfterStyles={landingPageData.footerAfterStyles}
                logo={landingPageData.logo}
              />
            ) : activeComponent === "carousel" ? (
              <Carousel
                carouselLinks={landingPageData.carouselLinks} // Ensure the prop name matches
                colorPrimario={landingPageData.colorPrimario}
                colorPrimarioTransparente={landingPageData.colorPrimarioTransparente}
                colorSecundario={landingPageData.colorSecundario}
                colorTerciario={landingPageData.colorTerciario}
                colorCuaternario={landingPageData.colorCuaternario}
                telefono={landingPageData.telefono}
                instagramLink={landingPageData.instagramLink}
                facebookLink={landingPageData.facebookLink}
                gpsLink={landingPageData.gpsLink}
                footerAfterStyles={landingPageData.footerAfterStyles}
              />
            ) : activeComponent === "newCarousel" ? (
              <Carousel
                carouselLinks={landingPageData.newCarouselLinks} // Nueva prop para el nuevo carrusel
                colorPrimario={landingPageData.colorPrimario}
                colorPrimarioTransparente={landingPageData.colorPrimarioTransparente}
                colorSecundario={landingPageData.colorSecundario}
                colorTerciario={landingPageData.colorTerciario}
                colorCuaternario={landingPageData.colorCuaternario}
                telefono={landingPageData.telefono}
                instagramLink={landingPageData.instagramLink}
                facebookLink={landingPageData.facebookLink}
                gpsLink={landingPageData.gpsLink}
                footerAfterStyles={landingPageData.footerAfterStyles}
              />
            ) : null}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default MiLanding;
